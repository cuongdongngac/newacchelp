import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'vi-VN',
  title: 'NEWACC Help Center',
  description: 'Trung tâm trợ giúp & Hướng dẫn sử dụng phần mềm Kế toán NewaccNet ERP',
  lastUpdated: true,
  cleanUrls: true,

  markdown: {
    math: true
  },

  themeConfig: {
    siteTitle: 'NEWACC Help Center',

    nav: [
      { text: 'Trang chủ', link: '/' },
      { text: 'Triết lý phần mềm', link: '/general-guide/philosophy' },
      { text: 'Hướng dẫn chung', link: '/general-guide/installation' },
      { text: 'Danh mục', link: '/master-data/chart-of-accounts' },
      { text: 'Nghiệp vụ chứng từ', link: '/accounting-operations/voucher-entry' },
      { text: 'Chi phí & Cuối kỳ', link: '/cost-and-closing/cost-allocation' },
      { text: 'Báo cáo', link: '/reports/financial-statements' },
      { text: 'Tiện ích mở rộng', link: '/plugins/plugin-management' }
    ],

    sidebar: [
      {
        text: '1. Hướng Dẫn Chung',
        collapsed: false,
        items: [
          { text: 'Triết lý phần mềm: Từ Kế toán đến ERP', link: '/general-guide/philosophy' },
          { text: 'Cài đặt & Yêu cầu hệ thống', link: '/general-guide/installation' },
          { text: 'Cấu hình Cơ sở dữ liệu', link: '/general-guide/database-config' },
          { text: 'Đăng ký & Bản quyền theo bản ghi', link: '/general-guide/licensing' },
          { text: 'Quản lý phân quyền người dùng', link: '/general-guide/authorization' }
        ]
      },
      {
        text: '2. Hệ Thống Danh Mục',
        collapsed: false,
        items: [
          { text: 'Hệ thống Tài khoản kế toán', link: '/master-data/chart-of-accounts' },
          { text: 'Danh mục Khách hàng & Nhà cung cấp', link: '/master-data/partners' },
          { text: 'Danh mục Vật tư & Hàng hóa', link: '/master-data/inventory-items' }
        ]
      },
      {
        text: '3. Nghiệp Vụ Chứng Từ',
        collapsed: false,
        items: [
          { text: 'Nhập chứng từ đa năng (JournalVoucher)', link: '/accounting-operations/voucher-entry' },
          { text: 'Nghiệp vụ Mua hàng, Bán hàng & Kho', link: '/accounting-operations/purchase-sales' },
          { text: 'Trợ lý AI Hóa đơn điện tử', link: '/accounting-operations/tax-invoice-ai' }
        ]
      },
      {
        text: '4. Chi Phí & Tính Toán Cuối Kỳ',
        collapsed: false,
        items: [
          { text: 'Khấu hao Tài sản cố định tự động', link: '/cost-and-closing/asset-depreciation' },
          { text: 'Phân bổ chi phí tự động theo tiêu thức', link: '/cost-and-closing/cost-allocation' },
          { text: 'Kết chuyển chi phí & Xác định KQKD', link: '/cost-and-closing/cost-transfer' },
          { text: 'Tính giá vốn xuất kho BQGQ', link: '/cost-and-closing/inventory-valuation' }
        ]
      },
      {
        text: '5. Báo Cáo & Phân Tích',
        collapsed: false,
        items: [
          { text: 'Báo cáo tài chính (Bảng CĐKT, KQKD, LCTT)', link: '/reports/financial-statements' },
          { text: 'Sổ Cái, Sổ Nhật ký chung & Drill-down', link: '/reports/ledger-books' }
        ]
      },
      {
        text: '6. Tiện Ích Mở Rộng (Plugin)',
        collapsed: false,
        items: [
          { text: 'Khái niệm & Quản lý Plugin', link: '/plugins/plugin-management' },
          { text: 'Từ Kế toán vươn lên ERP', link: '/plugins/developer-guide' }
        ]
      }
    ],

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Tìm kiếm hướng dẫn...',
            buttonAriaLabel: 'Tìm kiếm hướng dẫn'
          },
          modal: {
            noResultsText: 'Không tìm thấy kết quả phù hợp',
            resetButtonTitle: 'Xóa tìm kiếm',
            footer: {
              selectText: 'chọn',
              navigateText: 'di chuyển',
              closeText: 'đóng'
            }
          }
        }
      }
    },

    outline: {
      level: [2, 3],
      label: 'Mục lục bài viết'
    },

    docFooter: {
      prev: 'Trang trước',
      next: 'Trang tiếp theo'
    },

    footer: {
      message: 'Phần mềm Kế toán NewaccNet ERP • Phát triển bởi Tác giả Phạm Việt Cường',
      copyright: 'Copyright © 2026 NewaccNet. Sẵn sàng tích hợp F1 Help Context trực tuyến.'
    }
  }
})
