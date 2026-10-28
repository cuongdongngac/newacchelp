---
title: "Cẩm nang Lập trình viên phát triển Plugin"
description: "Đặc tả kỹ thuật dành cho lập trình viên: Cách tạo project Class Library độc lập, chỉ tham chiếu SDK và xuất ra đúng 1 file DLL duy nhất"
outline: deep
---

# Cẩm Nang Lập Trình Viên Phát Triển Plugin

Tài liệu này dành cho lập trình viên bên ngoài được giao nhiệm vụ viết thêm tính năng, vỏ nhập liệu hoặc báo cáo chuyên ngành cho **NewaccNet ERP**.

---

## 1. Nguyên Tắc Cốt Lõi: Đóng Gói 1-DLL Duy Nhất

* **Zero-bloat:** Plugin chỉ tham chiếu SDK biên dịch (`NewaccNet.Contracts.dll`, `NewaccNet.Core.dll`, `DataAccess.dll`).
* **Không phân phối kèm thư viện thứ 3:** Không copy lại DevExpress hay ORM DLLs. Runtime sẽ do Host (`NewaccNet.Wpf`) nạp sẵn.

---

## 2. File Cấu Hình Dự Án Chuẩn (`.csproj`)

```xml
<Project Sdk="Microsoft.NET.Sdk">
  <PropertyGroup>
    <TargetFramework>net10.0-windows</TargetFramework>
    <UseWPF>true</UseWPF>
    <CopyLocalLockFileAssemblies>false</CopyLocalLockFileAssemblies>
  </PropertyGroup>

  <ItemGroup>
    <!-- Chỉ tham chiếu SDK (Private = false để không copy đè DLL) -->
    <Reference Include="NewaccNet.Contracts">
      <HintPath>..\SDK\NewaccNet.Contracts.dll</HintPath>
      <Private>false</Private>
    </Reference>
    <Reference Include="NewaccNet.Core">
      <HintPath>..\SDK\NewaccNet.Core.dll</HintPath>
      <Private>false</Private>
    </Reference>
    <Reference Include="DataAccess">
      <HintPath>..\SDK\DataAccess.dll</HintPath>
      <Private>false</Private>
    </Reference>
  </ItemGroup>

  <ItemGroup>
    <!-- DevExpress chỉ dùng lúc biên dịch -->
    <PackageReference Include="DevExpress.Wpf.Core" Version="25.2.3" ExcludeAssets="runtime" />
    <PackageReference Include="DevExpress.Wpf.Grid" Version="25.2.3" ExcludeAssets="runtime" />
    <PackageReference Include="DevExpress.Reporting.Core" Version="25.2.3" ExcludeAssets="runtime" />
    <PackageReference Include="DevExpress.Wpf.Printing" Version="25.2.3" ExcludeAssets="runtime" />
  </ItemGroup>
</Project>
```

---

## 3. Cài Đặt Interface `IPlugin`

```csharp
using NewaccNet.Contracts;
using NewaccNet.Core.Data;
using System.Windows;

namespace MyCustomPlugin
{
    public class SamplePlugin : IPlugin
    {
        public string Id => "plugin.my_custom";
        public string Name => "Phân Hệ Nghiệp Vụ Riêng";
        public string Version => "1.0.0";
        public string Description => "Mô tả tính năng nghiệp vụ mở rộng.";
        public string Author => "Dev Team";

        public void Initialize(IPluginContext context)
        {
            // Đăng ký nút bấm lên Ribbon của Host
            context.RegisterRibbonAction(new PluginRibbonAction
            {
                Category = "Tiện Ích Mở Rộng",
                GroupName = "Nghiệp Vụ",
                Title = "Mở Cửa Sổ Mới",
                ExecuteAction = owner =>
                {
                    var win = new MyCustomWindow { Owner = owner as Window };
                    win.ShowDialog();
                }
            });
        }

        public void Shutdown() { }
    }
}
```

---

## 4. Truy Cập Cơ Sở Dữ Liệu Đa Nền Tảng

Plugin sử dụng trực tiếp adapter dùng chung từ `NewaccNet.Core`:

```csharp
using SD.LLBLGen.Pro.ORMSupportClasses;
using NewaccNet.Core.Data;
using DataAccess.Linq;

using (var adapter = (IDataAccessAdapter)AppDataAccessAdapter.Create())
{
    var meta = new LinqMetaData(adapter);
    var accounts = meta.ChartOfAccount.ToList();
}
```
Khách hàng đang dùng CSDL nào (SQL Server, Postgres hay Access), `AppDataAccessAdapter.Create()` sẽ tự động kết nối tương ứng mà lập trình viên không cần bận tâm chuỗi kết nối.
