import { BarChart3, Battery, Building2, Calendar, Cpu, DollarSign, Facebook, Factory, FileText, Home, Leaf, Linkedin, Mail, MapPin, Newspaper, Package, PenTool, Phone, Settings, Shield, Sprout, Sun, TrendingUp, Wallet, Wrench, Youtube, Zap } from 'lucide-react';
import { useLanguage, type Language } from '../contexts/LanguageContext';
import { allNewsPostsByLanguage } from '../data/posts/news';
import { projectsDataByLanguage } from '../data/projectsData';
import type { Translations } from '../types';

export const translations: Translations = {
  VN: {
    nav: ["Trang chủ", "Về Chúng Tôi", "Dự án", "Tuyển dụng", "Tin tức"],
    heroH1: "KỸ THUẬT\nNHẬT BẢN.\nNĂNG LƯỢNG\nVIỆT NAM.",
    heroSub: "Kế thừa di sản kỹ thuật từ Watanabe Create Group (Sendai, Nhật Bản) để thúc đẩy quá trình chuyển đổi năng lượng công nghiệp tại Việt Nam.",
    ctaMain: "NHẬN TƯ VẤN KỸ THUẬT",
    ctaSub: "XEM THÔNG SỐ HỆ THỐNG",
    heroSliderCta: "Nhận tư vấn",
    heroSlides: [
      {
        title: "DOANH NGHIỆP HÀNG ĐẦU\nTRONG LĨNH VỰC TÁI TẠO",
        description: "Wataco đồng hành cùng doanh nghiệp ở Việt Nam và Nhật Bản trên hành trình chuyển đổi kép hướng tới Net-Zero."
      },
      {
        title: "MÔ HÌNH HỢP TÁC LINH HOẠT:\nZERO CAPEX SOLAR",
        description: "Điện mặt trời mái nhà 0 đồng vốn đầu tư dành cho các doanh nghiệp."
      },
      {
        title: "ĐẦU TƯ & PHÁT TRIỂN\nDỰ ÁN NĂNG LƯỢNG TÁI TẠO",
        description: "Nhà đầu tư tin cậy cho các dự án điện mặt trời mái nhà của doanh nghiệp."
      },
      {
        title: "GIẢI PHÁP CHUYỂN ĐỔI KÉP:\nCHUYỂN ĐỔI SỐ - CHUYỂN ĐỔI XANH",
        description: "Đồng hành cùng doanh nghiệp trên hành trình hướng tới 100% sử dụng năng lượng tái tạo và Net-Zero với lộ trình phù hợp dựa trên nền tảng số hóa chuẩn quốc tế."
      }
    ],
    viewProject: "XEM DỰ ÁN",
    stats: [
      { label: "CÔNG SUẤT", val: 500, suffix: "MWp", prefix: "+" },
      { label: "NĂM KINH NGHIỆM", val: 10, suffix: "", prefix: "+" },
      { label: "DỰ ÁN HOÀN THÀNH", val: 200, suffix: "", prefix: "+" },
      { label: "ĐỘ TIN CẬY HỆ THỐNG", val: 99.9, suffix: "%", prefix: "" }
    ],
    mapStats: [
      {
        label: "Dự án đã ký kết",
        val: 250,
        suffix: "+",
        icon: FileText,
        color: "#3B82F6",
      },
      {
        label: "Tổng công suất lắp đặt",
        val: 500,
        suffix: " MWp",
        icon: Zap,
        color: "#EAB308",
      },
      {
        label: "Hệ thống đang vận hành",
        val: 180,
        suffix: "+",
        icon: BarChart3,
        color: "#228B22",
      },
    ],
    section2SubTitle: "QUY MÔ HOẠT ĐỘNG",
    section2Title: "Mạng Lưới\nDự Án",
    section2Description: "Cam kết chất lượng và hiệu suất vượt trội trên toàn lãnh thổ Việt Nam với hơn 500MWp tổng công suất lắp đặt.",
    section2ClientTitle: "Đối tác tin cậy",
    introTitle: "Hành Trình Từ Sendai Đến Việt Nam",
    introSub: "DI SẢN WATANABE CREATE",
    introContent1: "WATACO được thành lập trên nền tảng của Tập đoàn WATANABE CREATE, Sendai, Nhật Bản. Ra đời vào ngày 17/12/2015, WATANABE CREATE đã đạt nhiều thành tựu trong tư vấn, thiết kế, thi công công trình điện năng lượng mặt trời tại Nhật Bản, nước tiên phong về công nghệ năng lượng tái tạo.",
    introContent2: "WATACO thành lập năm 2021 tại Việt Nam, hoạt động trong lĩnh vực tư vấn, thiết kế, thi công các công trình điện năng lượng mặt trời tại Việt Nam với phương châm \"chất lượng tạo nên uy tín bền vững\". Chúng tôi cam kết mang đến những giải pháp tối ưu, phù hợp với yêu cầu của khách hàng đến từng chi tiết.",
    introContent3: "Ngoài ra, WATACO còn hướng đến phát triển lĩnh vực xây dựng, cải tạo nhà ở, nội thất, mang lại không gian sống tiện nghi, hiện đại tại Việt Nam. Chúng tôi luôn lắng nghe ý muốn của khách hàng, kiến tạo những tác phẩm xứng tầm và không ngừng học hỏi, xứng đáng là sự lựa chọn hàng đầu.",
    benefitsTitle: "Giải Pháp Ứng Dụng",
    benefitsSub: "HIỆU QUẢ ĐẦU TƯ",
    benefitTabs: [
      {
        id: 'business',
        label: "Doanh Nghiệp",
        icon: Factory,
        title: "Tối ưu chi phí vận hành & Chứng chỉ Xanh",
        desc: "Giải pháp điện mặt trời áp mái cho nhà xưởng giúp doanh nghiệp giảm đến 30% chi phí điện năng giờ cao điểm. Đồng thời, hệ thống giúp đạt các chứng chỉ xanh (LEED, LOTUS) và tín chỉ carbon.",
        specs: [
          { label: "Tuổi thọ hệ thống", val: "30 Năm" },
          { label: "Hoàn vốn", val: "4-5 Năm" },
          { label: "Bảo hành", val: "25 Năm" }
        ],
        btnText: "Chi tiết Doanh nghiệp",
        img: "https://images.unsplash.com/photo-1664360096660-c322b7244967?auto=format&fit=crop&q=80&w=1600"
      },
      {
        id: 'residential',
        label: "Nhà Ở",
        icon: Home,
        title: "Tự chủ năng lượng & Không gian sống xanh",
        desc: "Biến mái nhà thành trạm phát điện thông minh. Hệ thống không chỉ giúp cắt giảm hóa đơn tiền điện hàng tháng mà còn làm mát ngôi nhà và bảo vệ kết cấu mái.",
        specs: [
          { label: "Tuổi thọ hệ thống", val: "25+ Năm" },
          { label: "Hoàn vốn", val: "4-5 Năm" },
          { label: "Tiết kiệm", val: "90%" }
        ],
        btnText: "Chi tiết Nhà ở",
        img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1600"
      },
      {
        id: 'agriculture',
        label: "Nông Nghiệp",
        icon: Sprout,
        title: "Mô hình Solar Farm kết hợp trồng trọt",
        desc: "Tối ưu hóa hiệu quả sử dụng đất bằng cách kết hợp sản xuất điện năng và canh tác nông nghiệp dưới mái pin. Giúp điều tiết ánh sáng và giảm bốc hơi nước.",
        specs: [
          { label: "Tuổi thọ hệ thống", val: "30 Năm" },
          { label: "Hoàn vốn", val: "5-6 Năm" },
          { label: "Hiệu quả đất", val: "150%" }
        ],
        btnText: "Chi tiết Nông nghiệp",
        img: "https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?auto=format&fit=crop&q=80&w=1600"
      }
    ],
    projectsTitle: "Dự Án Tiêu Biểu",
    projectsSub: "CÔNG TRÌNH THỰC TẾ",
    projectsData: projectsDataByLanguage.VN,
    productsTitle: "Công Nghệ & Thiết Bị",
    productsSub: "ĐỐI TÁC CHIẾN LƯỢC",
    productTabs: [
      { id: 'panels', label: "Tấm Pin Solar", icon: Sun },
      { id: 'inverter_grid', label: "Inverter Hòa Lưới", icon: Cpu },
      { id: 'inverter_hybrid', label: "Hybrid & Lưu Trữ", icon: Battery }
    ],
    baseProductsData: {
      'panels': [
        { name: "Canadian Solar HiKu7", spec: "600W | Mono PERC", eff: "21.6%", img: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&q=80&w=600", tag: "Tier 1" },
        { name: "Longi Hi-MO 5m", spec: "550W | Bifacial", eff: "22.3%", img: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80&w=600", tag: "Best Seller" },
        { name: "Jinko Tiger Neo", spec: "575W | N-Type", eff: "22.8%", img: "https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?auto=format&fit=crop&q=80&w=600", tag: "Premium" }
      ],
      'inverter_grid': [
        { name: "Huawei SUN2000-100KTL", spec: "100kW | 3-Phase", eff: "98.8%", img: "https://plus.unsplash.com/premium_photo-1682146435061-6d9258276f52?auto=format&fit=crop&q=80&w=600", tag: "Smart PV" },
        { name: "Sungrow SG110CX", spec: "110kW | Multi-MPPT", eff: "98.7%", img: "https://images.unsplash.com/photo-1588127333419-b9d7de223dcf?auto=format&fit=crop&q=80&w=600", tag: "Industrial" },
        { name: "SMA Sunny Tripower", spec: "75kW | Core 1", eff: "99.0%", img: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=600", tag: "German Tech" }
      ],
      'inverter_hybrid': [
        { name: "DEYE SUN-12K-SG04", spec: "12kW | Hybrid 3-P", eff: "97.6%", img: "https://images.unsplash.com/photo-1581093583449-82558e396420?auto=format&fit=crop&q=80&w=600", tag: "Top Rated" },
        { name: "GoodWe ET Series", spec: "10kW | Plus+", eff: "98.2%", img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=600", tag: "Reliable" },
        { name: "Sofar HYD 20KTL", spec: "20kW | Storage Ready", eff: "98.0%", img: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=600", tag: "High Power" }
      ]
    },
    financeTitle: "Giải Pháp Tài Chính",
    financeSub: "LINH HOẠT & HIỆU QUẢ",
    financeSolutions: [
      {
        icon: Zap,
        title: "Mô hình ESCO",
        desc: "Doanh nghiệp thụ hưởng hệ thống điện mặt trời với chi phí đầu tư 0 đồng. WATACO chịu trách nhiệm đầu tư, lắp đặt và vận hành toàn bộ.",
        link: "#esco"
      },
      {
        icon: Building2,
        title: "Hợp Tác Thuê Mái",
        desc: "Tận dụng diện tích mái nhà xưởng nhàn rỗi để tạo nguồn thu nhập thụ động ổn định thông qua việc cho WATACO thuê lại mặt bằng mái.",
        link: "#roof-rental"
      },
      {
        icon: TrendingUp,
        title: "Hợp Tác Đầu Tư",
        desc: "WATACO cung cấp giải pháp tổng thầu EPC trọn gói, cam kết hiệu suất và chất lượng công trình cho chủ đầu tư muốn tự sở hữu hệ thống.",
        link: "#investment"
      },
      {
        icon: Wallet,
        title: "Thuê Tài Chính",
        desc: "Kết nối với các đối tác tài chính, ngân hàng xanh để hỗ trợ gói vay ưu đãi, giúp doanh nghiệp dễ dàng tiếp cận năng lượng sạch.",
        link: "#leasing"
      }
    ],
    solutionsSub: "MÔ HÌNH HỢP TÁC LINH HOẠT",
    solutionsTitle: "GIẢI PHÁP ĐẦU TƯ ĐA DẠNG",
    solutionsLabels: {
      chooseSolution: "Lựa chọn giải pháp",
      benefitsTitle: "Lợi ích mang lại",
      modelTitle: "Mô hình hoạt động",
      detailCta: "Xem chi tiết giải pháp",
      detailBasePath: "/bai-viet"
    },
    solutionsData: [
      {
        id: "esco",
        shortTitle: "1. Mô hình ESCO",
        title: "Giải pháp ESCO (Energy Service Company)",
        desc: "Mô hình ESCO là giải pháp tận dụng phần mái nhàn rỗi của doanh nghiệp để lắp đặt hệ thống điện năng lượng mặt trời. WATACO sẽ chịu trách nhiệm làm nhà thầu EPC (Tư Vấn Thiết Kế - Cung Cấp Vật Tư, Thi Công - Bảo Trì Bảo Hành) nhằm đảm bảo hiệu quả vận hành tối ưu cho hệ thống.",
        benefits: [
          "Không cần vốn đầu tư.",
          "Không lo thiết bị công nghệ.",
          "Không chi phí vận hành.",
          "Sử dụng năng lượng sạch.",
          "Giảm phụ thuộc vào EVN và không bị ảnh hưởng bởi việc tăng giá điện hàng năm.",
          "Sử dụng giá điện thấp hơn của EVN, giảm chi phí năng lượng.",
          "Hưởng toàn bộ thiết bị năng lượng.",
          "Hệ thống điện mặt trời làm giảm nhiệt độ mái nhà xưởng hơn khoảng 5*C.",
          "Tăng giá trị thương hiệu, tăng tính cạnh tranh trong sản xuất.",
          "Doanh nghiệp được nằm trong khối doanh nghiệp sử dụng năng lượng xanh."
        ],
        diagramType: "three-party",
        roles: {
          client: "Khách Hàng",
          partner: "Đối Tác Tài Chính"
        },
        flows: {
          watacoToClient: "Tư vấn, thiết kế, EPC, O&M",
          clientToPartner: "Trả tiền điện hàng tháng",
          partnerToWataco: "Giải ngân tài chính"
        },
        linkSlug: "giai-phap-esco"
      },
      {
        id: "lease",
        shortTitle: "2. Thuê mái xưởng",
        title: "Giải pháp cho thuê mái xưởng",
        desc: "Doanh nghiệp có mái xưởng nhàn rỗi và đáp ứng được các tiêu chí của việc lắp đặt hệ thống điện NLMT có thể cho thuê mái xưởng của mình để tăng thêm nguồn thu nhập. Đối tác đầu tư tài chính sẽ chịu toàn bộ chi phí lắp đặt. WATACO đảm nhận vai trò EPC.",
        benefits: [
          "Không tốn chi phí lắp đặt hệ thống điện năng lượng mặt trời.",
          "Tăng thu nhập hàng tháng từ việc cho thuê mái.",
          "Hưởng toàn bộ hệ thống điện năng lượng mặt trời sau 20 năm.",
          "Hệ thống pin làm mát mái xưởng xuống khoảng 5*C, giảm điện sử dụng hệ thống điều hòa.",
          "Doanh nghiệp được nằm trong khối doanh nghiệp sử dụng năng lượng xanh, nâng tầm thương hiệu."
        ],
        diagramType: "three-party",
        roles: {
          client: "Khách Hàng",
          partner: "Đối Tác Tài Chính"
        },
        flows: {
          watacoToClient: "Cài đặt, vận hành, bảo trì",
          clientToPartner: "Nhận tiền thuê hàng tháng",
          partnerToWataco: "Giải ngân tài chính"
        },
        note: "Khách hàng cho thuê mái nhàn rỗi, không rủi ro, có quyền ký cho thuê tiếp hoặc thừa hưởng lại hệ thống sau 20 năm.",
        linkSlug: "cho-thue-mai-xuong-lap-dien-mat-troi"
      },
      {
        id: "invest",
        shortTitle: "3. Giải pháp đầu tư",
        title: "Giải pháp Đầu tư trực tiếp",
        desc: "Đầu tư một lần, hưởng lợi trên 30 năm. Bằng việc đầu tư hệ thống điện năng lượng mặt trời, chủ đầu tư có thể tiết kiệm được tới 90% điện năng và có thể bán lại cho EVN lượng điện không sử dụng. WATACO sẽ cung cấp trọn gói EPC để hệ thống hoạt động với hiệu suất tối ưu.",
        benefits: [
          "Sau khi thu hồi vốn đầu tư ban đầu thì điện sử dụng từ hệ thống là điện miễn phí.",
          "Lượng điện mua từ EVN ít đi, giảm chi phí năng lượng.",
          "Bán được điện dư, tăng thu nhập hàng tháng.",
          "Dùng vốn sẵn có để đầu tư, không cần lo về việc trả tiền lãi.",
          "Giảm phụ thuộc vào EVN và không bị ảnh hưởng bởi việc tăng giá điện.",
          "Có thể sử dụng và tự do quản lý hệ thống điện năng lượng mặt trời.",
          "Làm mát mái nhà xưởng giảm xuống khoảng 5*C."
        ],
        diagramType: "two-party",
        roles: {
          client: "Chủ Đầu Tư"
        },
        flows: {
          clientToWataco: "Cung cấp trọn gói EPC (Tư vấn, Thiết kế, Thi công, Bảo hành)"
        },
        linkSlug: "giai-phap-dau-tu-he-thong-dien-mat-troi-tu-do-tai-chinh"
      },
      {
        id: "finance",
        shortTitle: "4. Cho thuê tài chính",
        title: "Giải pháp cho thuê tài chính",
        desc: "WATACO hỗ trợ doanh nghiệp kết nối với các ngân hàng có các gói dịch vụ ưu đãi tốt nhất. Doanh nghiệp chỉ cần đầu tư 20% chi phí hệ thống, 80% còn lại sẽ do ngân hàng đầu tư. WATACO sẽ chịu trách nhiệm làm nhà thầu EPC.",
        benefits: [
          "Không cần thế chấp bất động sản.",
          "Chi phí ban đầu thấp (chỉ 20% chi phí hệ thống).",
          "Được bàn giao hệ thống trong thời gian ngắn.",
          "Hệ thống vận hành hiệu quả trên 30 năm.",
          "Hệ thống pin làm mát mái xưởng xuống khoảng 5*C.",
          "Doanh nghiệp sử dụng năng lượng xanh, nâng tầm thương hiệu và tăng giá trị cạnh tranh."
        ],
        diagramType: "three-party",
        roles: {
          client: "Khách Hàng",
          partner: "Ngân Hàng"
        },
        flows: {
          watacoToClient: "Tư vấn, thiết kế, EPC, O&M",
          clientToPartner: "Trả tiền thuê (Gốc + Lãi) hàng tháng",
          partnerToWataco: "Giải ngân 80% tài chính"
        },
        note: "WATACO đang liên kết với các đối tác ngân hàng uy tín để đưa ra dịch vụ với lãi suất ưu đãi.",
        linkSlug: "cho-thue-tai-chinh-dien-mat-troi-dau-tu-20-phan-tram"
      }
    ],
    newsTitle: "Báo chí nói về chúng tôi",
    newsSub: "TIN TỨC & TRUYỀN THÔNG",
    newsArticles: [
      { source: "VnExpress", date: "20/12/2023", title: "WATACO và hành trình mang công nghệ Solar Nhật Bản về Việt Nam.", link: "#", tag: "Thị trường", img: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=600" },
      { source: "Forbes Vietnam", date: "15/10/2023", title: "Top các doanh nghiệp năng lượng tái tạo tiêu chuẩn quốc tế tại VN.", link: "#", tag: "Xếp hạng", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600" },
      { source: "Tuổi Trẻ", date: "05/08/2023", title: "Giải pháp điện mặt trời mái nhà xưởng: Hiệu quả từ mô hình Nhật Bản.", link: "#", tag: "Công nghệ", img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=600" },
      { source: "CafeF", date: "10/01/2024", title: "Xu hướng chuyển đổi xanh: Doanh nghiệp FDI lựa chọn WATACO.", link: "#", tag: "Đầu tư", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600" },
      { source: "Báo Đầu Tư", date: "22/11/2023", title: "Phỏng vấn CEO WATACO: 'Chất lượng Nhật là tôn chỉ hoạt động'.", link: "#", tag: "Nhân vật", img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=600" },
      { source: "VTV News", date: "02/09/2023", title: "Lễ ký kết hợp tác chiến lược giữa WATACO và các đối tác Nhật Bản.", link: "#", tag: "Sự kiện", img: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&q=80&w=600" }
    ],
    mapTitle: "Mạng lưới dự án toàn quốc",
    getQuote: "NHẬN BÁO GIÁ",
    viewAllArticles: "Tất cả bài viết",
    footer: {
      description: "Mang lại giá trị bền vững cho tương lai.",
      solutionsTitle: "Giải pháp",
      solutions: [
        "Tổng thầu EPC",
        "Vận hành & Bảo dưỡng (O&M)",
        "Đầu tư ESCO",
        "Cung cấp thiết bị"
      ],
      companyTitle: "Về WATACO",
      company: [
        "Giới thiệu chung",
        "Dự án tiêu biểu",
        "Tin tức & Sự kiện",
        "Tuyển dụng"
      ],
      contactTitle: "Liên hệ",
      copyright: "© 2024 WATACO ENGINEERING | MEMBER OF WATANABE CREATE GROUP JAPAN.",
      privacy: "Chính sách bảo mật",
      terms: "Điều khoản sử dụng",
      contact: {
        address1: "Trụ sở chính tại Việt Nam: 29 Nguyễn Khắc Nhu, Phường Cầu Ông Lãnh, Thành phố Hồ Chí Minh, Việt Nam",
        address2: "Văn phòng đại diện Miền Bắc: Tầng 4, Số 44 Tràng Tiền, Phường Tràng Tiền, Quận Hoàn Kiếm, Thành phố Hà Nội, Việt Nam",
        email: "info@wataco.com.vn",
        phone: "0359959831"
      }
    },
    projectTabs: [
      { id: 'vietnam', label: 'Việt Nam' },
      { id: 'international', label: 'Quốc Tế' },
    ],
    projectsPage: {
      heroSubtitle: "Hồ Sơ Năng Lực",
      heroTitle: "DẤU ẤN\nCÔNG TRÌNH",
      heroDesc: "Hơn 200 dự án đã triển khai, WATACO tự hào mang nguồn năng lượng xanh đến mọi miền tổ quốc.",
      statsCapacity: "Tổng công suất (MWp)",
      statsProjects: "Dự án hoàn thành",
      statsProvinces: "Tỉnh thành phủ sóng",
      mapNetwork: "Mạng lưới dự án toàn quốc",
      libraryTitle: "Thư Viện Dự Án",
      categoryVietnam: "Việt Nam",
      categoryInternational: "Quốc tế",
      categoryAll: "Tất cả dự án",
      noProjects: "Không tìm thấy dự án phù hợp.",
      showingProjects: "Hiển thị {current} trên tổng số {total} dự án"
    },
    whySolar: {
      title: "TẠI SAO NÊN SỬ DỤNG ĐIỆN MẶT TRỜI?",
      tagline: "Điện mặt trời – Giải pháp năng lượng bền vững cho tương lai!",
      items: [
        { icon: DollarSign, title: "Tiết kiệm chi phí điện", desc: "Giảm mạnh hóa đơn điện hàng tháng – đặc biệt với hộ tiêu thụ cao hoặc doanh nghiệp." },
        { icon: Leaf, title: "Thân thiện môi trường", desc: "Nguồn năng lượng xanh – không phát thải, không gây ô nhiễm môi trường." },
        { icon: Zap, title: "Chủ động nguồn điện", desc: "Không còn lo mất điện – hệ thống có thể hoạt động độc lập (kèm pin lưu trữ)." },
        { icon: Shield, title: "Độ bền cao – dễ bảo trì", desc: "Tuổi thọ hệ thống từ 25–30 năm, ít hỏng hóc, bảo hành dài hạn." }
      ]
    },
    missionSection: {
      subtitle: "ĐỊNH HƯỚNG PHÁT TRIỂN",
      title: "Tầm Nhìn & Sứ Mệnh",
      vision: {
        title: "Tầm nhìn",
        desc: "Kiến tạo tương lai bền vững qua việc xây dựng và đầu tư năng lượng mặt trời tiên tiến tại Việt Nam, hỗ trợ các doanh nghiệp phát triển và đồng hành cùng cộng đồng."
      },
      mission: {
        title: "Sứ mệnh",
        desc: "Cung cấp các giải pháp xây dựng và giải pháp đầu tư hệ thống năng lượng mặt trời chất lượng cao, tiên tiến và thân thiện với môi trường, góp phần nâng cao chất lượng cuộc sống và hỗ trợ sự phát triển bền vững của các doanh nghiệp tại Việt Nam."
      },
      coreValues: {
        title: "Giá trị cốt lõi",
        items: [
          "Bền vững và thân thiện với môi trường",
          "Chất lượng và tiên tiến",
          "Trách nhiệm và minh bạch",
          "Hợp tác và phát triển",
          "Đổi mới và sáng tạo"
        ]
      }
    },
    ppaSection: {
      subtitle: "ĐẦU TƯ 0 ĐỒNG - MUA BÁN ĐIỆN",
      title: "GIẢI PHÁP ĐIỆN MẶT TRỜI CHẤT LƯỢNG CAO DÀNH CHO DOANH NGHIỆP",
      desc: "Giải pháp hợp tác mua bán điện mặt trời trực tiếp, tận dụng phần mái nhà xưởng nhàn rỗi. Quỹ đầu tư đối tác sẽ chịu trách nhiệm 100% nguồn vốn, WATACO làm tổng thầu EPC toàn diện nhằm đảm bảo hiệu quả vận hành tối ưu nhất.",
      benefits: [
        "Không cần bỏ vốn đầu tư ban đầu (Zero Capex).",
        "Sử dụng điện với giá thấp hơn lưới EVN.",
        "Miễn phí 100% chi phí vận hành bảo trì (O&M).",
        "Được cấp chứng chỉ năng lượng tái tạo (I-RECs)."
      ],
      button: "Mô hình PPA"
    },
    ourServices: {
      subtitle: "DỊCH VỤ WATACO",
      title: "Dịch vụ của chúng tôi",
      items: [
        { icon: FileText, title: "Tư vấn và thiết kế hệ thống", link: "/posts/tu-van-va-thiet-ke-he-thong-dien-mat-troi" },
        { icon: Package, title: "Cung cấp vật tư, thiết bị", link: "/posts/dich-vu-cua-chung-toi" },
        { icon: Wrench, title: "Thi công lắp đặt", link: "/posts/tong-thau-va-quan-ly-epc" },
        { icon: Settings, title: "Vận hành và bảo trì", link: "/posts/tong-thau-va-quan-ly-epc" },
        { icon: TrendingUp, title: "Giải pháp tài chính và đầu tư", link: "/posts/giai-phap-esco" }
      ]
    },
    epcSection: {
      subtitle: "GIẢI PHÁP CHÌA KHÓA TRAO TAY",
      title: "Tổng thầu và quản lý EPC",
      desc: "WATACO cung cấp dịch vụ triển khai hệ thống điện mặt trời mái nhà toàn diện từ giai đoạn tư vấn thiết kế đến vận hành, nhằm tối đa hóa lợi nhuận và hạn chế rủi ro cho doanh nghiệp.",
      image: "sgs.png",
      steps: [
        { icon: PenTool, title: "Tư Vấn & Thiết Kế (Engineering)", desc: "Khảo sát thực địa, đánh giá kết cấu chịu tải và ứng dụng phần mềm PVSyst/HelioScope mô phỏng 3D để tối ưu hóa vị trí lắp đặt và sản lượng điện." },
        { icon: Package, title: "Cung Ứng Vật Tư (Procurement)", desc: "Phân phối trực tiếp thiết bị năng lượng mặt trời chuẩn Tier 1 toàn cầu (Longi, Canadian Solar, Huawei, Sungrow) với đầy đủ chứng nhận CO/CQ." },
        { icon: Wrench, title: "Thi Công Lắp Đặt (Construction)", desc: "Triển khai thi công chuyên nghiệp, tuân thủ tuyệt đối các tiêu chuẩn an toàn HSE và PCCC mà không làm gián đoạn hoạt động sản xuất của nhà máy." },
        { icon: BarChart3, title: "Vận Hành & Bảo Trì (O&M)", desc: "Hệ thống được giám sát hiệu suất 24/7 qua trung tâm NOC. Bảo dưỡng, vệ sinh định kỳ đảm bảo hệ thống hoạt động ổn định trọn vòng đời." }
      ],
      qualityCommitment: "Cam kết chất lượng",
      japanStandard: "Tiêu chuẩn Nhật Bản",
      epcProfile: "Hồ sơ năng lực EPC"
    },
    projectProcessFlow: {
      title1: "Sơ đồ quy trình",
      title2: "thực hiện dự án",
      steps: [
        "KHẢO SÁT DỰ ÁN",
        "THIẾT KẾ SƠ BỘ, MÔ PHỎNG & PHÂN TÍCH DỰ ÁN",
        "ĐÁNH GIÁ KHẢ THI DỰ ÁN",
        "THIẾT KẾ HỆ THỐNG",
        "THI CÔNG LẮP ĐẶT",
        "KIỂM TRA, CHẠY THỬ",
        "VẬN HÀNH THƯƠNG MẠI & BÀN GIAO DỰ ÁN CHO CĐT",
        "VẬN HÀNH VÀ BẢO TRÌ (O&M)"
      ]
    },
    careersPage: {
      hero: {
        alt: "Đội ngũ làm việc chuyên nghiệp",
        subtitle: "Gia Nhập WATACO",
        title1: "KIẾN TẠO TƯƠNG LAI",
        title2: "NĂNG LƯỢNG XANH",
        description: "Chúng tôi tìm kiếm những cộng sự đam mê, nhiệt huyết để cùng nhau xây dựng nền tảng năng lượng bền vững cho Việt Nam.",
        button: "Xem các vị trí đang mở"
      },
      culture: {
        subtitle: "Giá Trị Cốt Lõi",
        title: "Văn Hóa WATACO",
        description: "Sức mạnh tập thể và định hướng phát triển bền vững của WATACO được xây dựng dựa trên 5 trụ cột văn hóa không thể tách rời.",
        values: [
          {
            title: "Trung thực và minh bạch",
            desc: "Chúng tôi luôn giữ vững giá trị đạo đức trong công việc, thể hiện sự rõ ràng, chính trực và cam kết thực hiện đúng các nguyên tắc, từ đó xây dựng niềm tin vững chắc với khách hàng và đối tác."
          },
          {
            title: "Hợp tác",
            desc: "Tinh thần hợp tác và làm việc nhóm là nền tảng của Wataco, chúng tôi luôn hướng đến việc tạo ra một môi trường gắn kết, giúp mọi người phát huy thế mạnh và đạt được thành công chung."
          },
          {
            title: "Đổi mới sáng tạo",
            desc: "Mỗi thành viên trong công ty đều khuyến khích sự sáng tạo và cải tiến liên tục, đóng góp ý tưởng mới mẻ để nâng cao chất lượng công việc và các giải pháp cho khách hàng."
          },
          {
            title: "Quan tâm và Tôn trọng",
            desc: "Tại Wataco, mỗi cá nhân đều được quý trọng và lắng nghe, chúng tôi luôn chú trọng đến sự phát triển cá nhân và bảo vệ lợi ích của cộng đồng, khách hàng và đối tác."
          },
          {
            title: "Chủ động vượt qua thử thách",
            desc: "Nhân viên Wataco luôn chủ động tìm kiếm giải pháp sáng tạo để vượt qua mọi khó khăn, không ngừng học hỏi và phát triển để đối mặt với thử thách một cách tự tin và hiệu quả."
          }
        ]
      },
      jobBoard: {
        title: "Vị Trí Đang Tuyển",
        description: "Hãy tìm kiếm cơ hội phù hợp với bạn.",
        searchPlaceholder: "Tìm kiếm công việc...",
        categories: ["Tất cả", "Kỹ thuật", "Kinh doanh", "Vận hành", "Văn phòng"],
        noResults: "Không tìm thấy vị trí phù hợp.",
        viewAllJobs: "Xem tất cả công việc",
        ctaTitle: "Không tìm thấy vị trí phù hợp?",
        ctaDescription: "Gửi CV của bạn vào kho dữ liệu nhân tài của chúng tôi. Chúng tôi sẽ liên hệ khi có cơ hội.",
        ctaButton: "Gửi CV ngay"
      },
      jobCard: {
        urgent: "Gấp",
        deadlinePrefix: "Hạn nộp: ",
        apply: "Xem Chi Tiết"
      },
      jobs: [
        {
          id: 1,
          title: "Nhân viên kinh doanh",
          department: "Kinh doanh",
          location: "TP. Hồ Chí Minh",
          type: "Toàn thời gian",
          salary: "Thỏa thuận",
          deadline: "02/09/2026",
          urgent: true,
          slug: "tuyen-dung-nhan-vien-kinh-doanh-solar"
        }
      ]
    },
    aboutUsPage: {
      hero: {
        badge: "Câu chuyện của chúng tôi",
        titlePrefix: "CON NGƯỜI",
        titleHighlight: "WATACO",
        description: "Hơn cả một nơi làm việc, WATACO là một gia đình nơi mỗi cá nhân được tôn trọng, phát triển và ghi nhận. Chúng tôi chung tay kiến tạo một tương lai năng lượng xanh bền vững.",
        imageAlt: "Đội ngũ Wataco"
      },
      recognition: {
        subtitle: "Tôn vinh & Ghi nhận",
        title: "Bảng Vàng Thành Tích",
        description: "Tại WATACO, mọi sự nỗ lực và cống hiến đều được nhìn nhận xứng đáng. Xin chúc mừng những cá nhân và tập thể đã tỏa sáng trong thời gian qua."
      },
      recognitions: [
        {
          type: "Nhân Viên Xuất Sắc Nhất Quý",
          name: "Trần Hưng Thịnh",
          role: "Kỹ sư Giám sát Thi công",
          desc: "Đã hoàn thành xuất sắc dự án vượt tiến độ 15 ngày, đảm bảo an toàn lao động 100% tại công trường."
        },
        {
          type: "Tập Thể Tiêu Biểu",
          name: "Phòng Thiết Kế Kỹ Thuật",
          role: "Khối Kỹ Thuật - R&D",
          desc: "Sáng tạo trong việc tối ưu hóa Layout tấm pin, giúp tiết kiệm 5% chi phí vật tư cho các dự án lớn."
        },
        {
          type: "Ngôi Sao Triển Vọng",
          name: "Trần Thị Lan",
          role: "Chuyên viên Kinh doanh B2B",
          desc: "Đạt doanh số kỷ lục trong tháng đầu tiên làm việc, mang về 2 hợp đồng ESCO giá trị cao."
        }
      ],
      awards: {
        subtitle: "Khẳng Định Vị Thế",
        title: "Giải Thưởng Uy Tín",
        description: "Những nỗ lực không ngừng nghỉ của WATACO trong việc mang lại giải pháp năng lượng sạch đã được ghi nhận bằng những giải thưởng danh giá.",
        sectionImageAlt: "WATACO Awards Background",
        items: [
          {
            title: "Top 10 Doanh nghiệp Năng lượng Xanh 2023",
            desc: "Giải thưởng uy tín do Hiệp hội Năng lượng Việt Nam trao tặng cho các tổng thầu EPC có đóng góp vượt trội trong quá trình chuyển đổi năng lượng sạch."
          },
          {
            title: "Thương hiệu Quốc gia (Viet Value) giải pháp Net-Zero",
            desc: "Khẳng định chất lượng và uy tín của WATACO trong việc cung cấp các hệ thống điện mặt trời đạt tiêu chuẩn cao nhất về an toàn và hiệu suất."
          },
          {
            title: "Giải thưởng Đổi mới Sáng tạo Năng lượng Châu Á",
            desc: "Ghi nhận cho các giải pháp thiết kế tối ưu và ứng dụng công nghệ giám sát thông minh AI vào vận hành hệ thống O&M."
          },
          {
            title: "Chứng nhận Doanh nghiệp Thực hành ESG Xuất Sắc",
            desc: "Được vinh danh nhờ cam kết bảo vệ môi trường, trách nhiệm xã hội và quản trị doanh nghiệp minh bạch theo tiêu chuẩn quốc tế."
          }
        ]
      },
      culture: {
        subtitle: "Môi Trường Làm Việc",
        title: "Nhịp Sống \nTại WATACO",
        description: "Những khoảnh khắc đời thường, những chuyến đi và nụ cười trên công trường chính là nguồn năng lượng tích cực nhất của chúng tôi."
      },
      dailyActivities: [
        { title: "Team Building 2025", category: "Văn hóa" },
        { title: "Giám sát công trình", category: "Công việc" },
        { title: "Đào tạo nội bộ", category: "Phát triển" },
        { title: "Họp chiến lược Quý", category: "Văn phòng" },
        // { title: "Nghiệm thu dự án", category: "Công việc" },
        { title: "Hoạt động thể thao", category: "Gắn kết" }
      ],
    },
    newsPage: {
      heroBadge: "Tin Nổi Bật",
      readMore: "Đọc tiếp",
      noResults: "Không tìm thấy bài viết nào.",
      clearFilter: "Xóa bộ lọc",
      loadMore: "Xem thêm tin cũ",
      searchPlaceholder: "Tìm kiếm...",
      trendingTitle: "Đọc Nhiều Nhất",
      tagsTitle: "Từ Khóa Hot",
      tags: ["Solar Farm", "Điện áp mái", "Biến tần", "Pin lưu trữ", "EPC", "ESCO", "Net Zero"],
      expertSubtitle: "Kiến Thức Chuyên Sâu",
      expertTitle: "GÓC CHUYÊN GIA",
      readResearch: "Đọc nghiên cứu",
      categoryAll: "Tất cả tin tức",
      categoryProject: "Hợp tác & Dự án",
      home: "Trang chủ",
      share: "Chia sẻ bài viết:",
      copied: "Đã copy link",
      tocTitle: "Nội dung chính",
      relatedArticles: "Bài viết liên quan",
      updating: "Đang cập nhật thêm bài viết...",
      needConsult: "Cần tư vấn trực tiếp?",
      consultDesc: "Kỹ sư của chúng tôi sẵn sàng giải đáp mọi thắc mắc về kỹ thuật và tài chính.",
      callHotline: "Gọi Hotline:",
      notFound: "Bài viết không tồn tại.",
      readDetail: "Đọc chi tiết",
    },
    newsPosts: allNewsPostsByLanguage.VN,
  },
  EN: {
    nav: ["Home", "About Us", "Projects", "Careers", "News"],
    heroH1: "JAPANESE\nENGINEERING.\nVIETNAMESE\nENERGY.",
    heroSub: "Leveraging 30+ years of Watanabe Create heritage from Sendai to power Vietnam's industrial transition.",
    ctaMain: "REQUEST CONSULTING",
    ctaSub: "VIEW SPECIFICATIONS",
    heroSliderCta: "Get Consultation",
    heroSlides: [
      {
        title: "LEADING ENTERPRISE\nIN RENEWABLE ENERGY",
        description: "Wataco partners with businesses in Vietnam and Japan to drive dual transformation toward Net-Zero."
      },
      {
        title: "FLEXIBLE COOPERATION MODEL:\nZERO CAPEX SOLAR",
        description: "Zero upfront rooftop solar solutions designed for businesses."
      },
      {
        title: "INVESTMENT & DEVELOPMENT\nOF RENEWABLE ENERGY PROJECTS",
        description: "A trusted investor for commercial and industrial rooftop solar projects."
      },
      {
        title: "DUAL TRANSFORMATION SOLUTION:\nDIGITAL SHIFT - GREEN SHIFT",
        description: "We support businesses on the journey to 100% renewable energy and Net-Zero with internationally aligned digital roadmaps."
      }
    ],
    viewProject: "VIEW PROJECT",
    stats: [
      { label: "CAPACITY", val: 500, suffix: "MWp", prefix: "+" },
      { label: "YEARS EXPERIENCE", val: 10, suffix: "", prefix: "+" },
      { label: "COMPLETED PROJECTS", val: 200, suffix: "", prefix: "+" },
      { label: "SYSTEM RELIABILITY", val: 99.9, suffix: "%", prefix: "" }
    ],
    mapStats: [
      {
        label: "Projects Signed",
        val: 250,
        suffix: "+",
        icon: FileText,
        color: "#3B82F6",
      },
      {
        label: "Total Installed Capacity",
        val: 500,
        suffix: " MWp",
        icon: Zap,
        color: "#EAB308",
      },
      {
        label: "Operating Systems",
        val: 180,
        suffix: "+",
        icon: BarChart3,
        color: "#228B22",
      },
    ],
    section2SubTitle: "SCALE OF OPERATIONS",
    section2Title: "Nationwide\nProject Network",
    section2Description: "Committed to outstanding quality and performance throughout Vietnam with over 500MWp of total installed capacity.",
    section2ClientTitle: "Trusted Partners",
    introTitle: "Journey From Sendai to Vietnam",
    introSub: "WATANABE CREATE HERITAGE",
    introContent1: "WATACO was established on the foundation of WATANABE CREATE Group, Sendai,Japan. Founded on December 17 2015, WATANABE CREATE has achieved numerous successes in consulting, design and construction of solar‑power facilities in Japan, the forerunner nation in renewable‑energy technology.",
    introContent2: "WATACO was founded in 2021 in Vietnam, operating in the fields of consulting, design and construction of solar‑power projects with the motto “quality creates sustainable prestige”. We are committed to delivering the most optimal solutions, tailored to every customer’s requirement down to the smallest detail.",
    introContent3: "In addition, WATACO is expanding into residential construction, renovation and interior finishing, bringing comfortable, modern living spaces to Vietnam. We always listen to our customers’ wishes, craft works worthy of them, and continually learn to be the first choice.",
    benefitsTitle: "Application Solutions",
    benefitsSub: "INVESTMENT EFFICIENCY",
    benefitTabs: [
      {
        id: 'business',
        label: "Business",
        icon: Factory,
        title: "Optimize OpEx & Green Certification",
        desc: "Rooftop solar solutions for factories help businesses reduce up to 30% of peak hour electricity costs. Simultaneously, the system helps achieve green certifications (LEED, LOTUS) and carbon credits.",
        specs: [
          { label: "Lifespan", val: "30 Years" },
          { label: "Payback", val: "4-5 Years" },
          { label: "Warranty", val: "25 Years" }
        ],
        btnText: "Business Details",
        img: "https://images.unsplash.com/photo-1664360096660-c322b7244967?auto=format&fit=crop&q=80&w=1600"
      },
      {
        id: 'residential',
        label: "Residential",
        icon: Home,
        title: "Energy Independence & Green Living",
        desc: "Transform your roof into a smart power station. The system not only cuts monthly electricity bills but also cools the house and protects the roof structure.",
        specs: [
          { label: "Lifespan", val: "25+ Years" },
          { label: "Payback", val: "4-5 Years" },
          { label: "Savings", val: "90%" }
        ],
        btnText: "Residential Details",
        img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1600"
      },
      {
        id: 'agriculture',
        label: "Agriculture",
        icon: Sprout,
        title: "Agrivoltaics & Solar Farms",
        desc: "Optimize land use efficiency by combining power generation and farming under solar panels. Panels help regulate light and reduce water evaporation.",
        specs: [
          { label: "Lifespan", val: "30 Years" },
          { label: "Payback", val: "5-6 Years" },
          { label: "Efficiency", val: "150%" }
        ],
        btnText: "Agri Details",
        img: "https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?auto=format&fit=crop&q=80&w=1600"
      }
    ],
    projectsTitle: "Featured Projects",
    projectsSub: "ACTUAL WORKS",
    projectTabs: [
      { id: 'vietnam', label: 'Vietnam' },
      { id: 'international', label: 'International' },
    ],
    projectsPage: {
      heroSubtitle: "Portfolio",
      heroTitle: "PROJECT\nFOOTPRINT",
      heroDesc: "Over 200 projects delivered, WATACO is proud to bring clean energy to every corner of Vietnam.",
      statsCapacity: "Total Capacity (MWp)",
      statsProjects: "Completed Projects",
      statsProvinces: "Provinces Covered",
      mapNetwork: "Nationwide Project Network",
      libraryTitle: "Project Library",
      categoryVietnam: "Vietnam",
      categoryInternational: "International",
      categoryAll: "All Projects",
      noProjects: "No projects found.",
      showingProjects: "Showing {current} of {total} projects"
    },
    projectsData: projectsDataByLanguage.EN,
    productsTitle: "Technology",
    productsSub: "PARTNERS",
    productTabs: [
      { id: 'panels', label: "Panels", icon: Sun },
      { id: 'inverter_grid', label: "Grid Inv", icon: Cpu },
      { id: 'inverter_hybrid', label: "Hybrid", icon: Battery }
    ],
    baseProductsData: {
      'panels': [
        { name: "Canadian Solar HiKu7", spec: "600W", eff: "21.6%", img: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&q=80&w=600", tag: "Tier 1" },
        { name: "Longi Hi-MO 5m", spec: "550W", eff: "22.3%", img: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80&w=600", tag: "Best Seller" },
        { name: "Jinko Tiger Neo", spec: "575W", eff: "22.8%", img: "https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?auto=format&fit=crop&q=80&w=600", tag: "Premium" }
      ],
      'inverter_grid': [
        { name: "Huawei SUN2000", spec: "100kW", eff: "98.8%", img: "https://plus.unsplash.com/premium_photo-1682146435061-6d9258276f52?auto=format&fit=crop&q=80&w=600", tag: "Smart" },
        { name: "Sungrow SG110CX", spec: "110kW", eff: "98.7%", img: "https://images.unsplash.com/photo-1588127333419-b9d7de223dcf?auto=format&fit=crop&q=80&w=600", tag: "Industrial" },
        { name: "SMA Sunny Tripower", spec: "75kW", eff: "99.0%", img: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=600", tag: "German" }
      ],
      'inverter_hybrid': [
        { name: "DEYE SUN-12K", spec: "12kW", eff: "97.6%", img: "https://images.unsplash.com/photo-1581093583449-82558e396420?auto=format&fit=crop&q=80&w=600", tag: "Top Rated" },
        { name: "GoodWe ET Series", spec: "10kW", eff: "98.2%", img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=600", tag: "Reliable" },
        { name: "Sofar HYD 20KTL", spec: "20kW", eff: "98.0%", img: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=600", tag: "High Power" }
      ]
    },
    financeTitle: "Financial Solutions",
    financeSub: "FLEXIBLE",
    financeSolutions: [
      { icon: Zap, title: "ESCO Model", desc: "Zero upfront investment. WATACO handles everything.", link: "#esco" },
      { icon: Building2, title: "Roof Rental", desc: "Leverage idle roof space for passive income.", link: "#roof-rental" },
      { icon: TrendingUp, title: "Investment", desc: "Full-service EPC solutions for system owners.", link: "#investment" },
      { icon: Wallet, title: "Leasing", desc: "Financial support and green loans.", link: "#leasing" }
    ],
    solutionsSub: "FLEXIBLE COOPERATION MODELS",
    solutionsTitle: "DIVERSE INVESTMENT SOLUTIONS",
    solutionsLabels: {
      chooseSolution: "Choose a solution",
      benefitsTitle: "Key benefits",
      modelTitle: "Operating model",
      detailCta: "View solution details",
      detailBasePath: "/posts"
    },
    solutionsData: [
      {
        id: "esco",
        shortTitle: "1. ESCO Model",
        title: "ESCO (Energy Service Company) Solution",
        desc: "The ESCO model uses idle factory rooftops to deploy solar systems. WATACO acts as EPC contractor (engineering, procurement, construction, maintenance, and warranty) to ensure optimal system performance.",
        benefits: [
          "No upfront investment required.",
          "No concern about technology selection.",
          "No operation cost burden.",
          "Use clean energy.",
          "Reduce dependence on EVN and avoid annual tariff increase impact.",
          "Use lower electricity prices than EVN to cut energy costs.",
          "Own the full solar equipment value over time.",
          "Solar panels can reduce rooftop temperature by around 5*C.",
          "Improve brand value and production competitiveness.",
          "Position your business among green energy adopters."
        ],
        diagramType: "three-party",
        roles: {
          client: "Client",
          partner: "Financial Partner"
        },
        flows: {
          watacoToClient: "Consulting, design, EPC, O&M",
          clientToPartner: "Monthly electricity payment",
          partnerToWataco: "Financial disbursement"
        },
        linkSlug: "giai-phap-esco"
      },
      {
        id: "lease",
        shortTitle: "2. Rooftop Leasing",
        title: "Industrial Rooftop Leasing Solution",
        desc: "Businesses with qualified idle rooftops can lease them to increase income. The financial partner covers the full installation cost while WATACO executes as EPC contractor.",
        benefits: [
          "No solar installation cost required.",
          "Increase monthly income from rooftop leasing.",
          "Receive full solar system ownership after 20 years.",
          "Panels cool the roof by around 5*C, reducing HVAC electricity use.",
          "Strengthen brand image as a green-energy business."
        ],
        diagramType: "three-party",
        roles: {
          client: "Client",
          partner: "Financial Partner"
        },
        flows: {
          watacoToClient: "Installation, operation, maintenance",
          clientToPartner: "Receive monthly lease income",
          partnerToWataco: "Financial disbursement"
        },
        note: "Clients lease idle rooftop space with low risk and can renew leasing or inherit the system after 20 years.",
        linkSlug: "cho-thue-mai-xuong-lap-dien-mat-troi"
      },
      {
        id: "invest",
        shortTitle: "3. Direct Investment",
        title: "Direct Investment Solution",
        desc: "Invest once and benefit for over 30 years. By investing in solar, owners can save up to 90% on electricity and may sell surplus electricity to EVN. WATACO provides full EPC to maximize performance.",
        benefits: [
          "After payback, electricity from the system is effectively free.",
          "Purchase less electricity from EVN and reduce energy costs.",
          "Sell surplus electricity for additional monthly income.",
          "Use existing capital without loan-interest pressure.",
          "Reduce EVN dependence and tariff volatility impact.",
          "Freely operate and manage your own solar asset.",
          "Reduce rooftop temperature by around 5*C."
        ],
        diagramType: "two-party",
        roles: {
          client: "Investor"
        },
        flows: {
          clientToWataco: "Full EPC package (consulting, design, construction, warranty)"
        },
        linkSlug: "giai-phap-dau-tu-he-thong-dien-mat-troi-tu-do-tai-chinh"
      },
      {
        id: "finance",
        shortTitle: "4. Financial Leasing",
        title: "Financial Leasing Solution",
        desc: "WATACO helps businesses connect with banks offering favorable packages. The business pays only 20% upfront, while the bank finances the remaining 80%. WATACO serves as EPC contractor.",
        benefits: [
          "No real-estate collateral required.",
          "Low initial payment (only 20% of system cost).",
          "Fast system handover timeline.",
          "Efficient operation for 30+ years.",
          "Panel systems cool factory roofs by around 5*C.",
          "Use green energy to strengthen brand and competitive value."
        ],
        diagramType: "three-party",
        roles: {
          client: "Client",
          partner: "Bank"
        },
        flows: {
          watacoToClient: "Consulting, design, EPC, O&M",
          clientToPartner: "Monthly lease payment (principal + interest)",
          partnerToWataco: "80% financial disbursement"
        },
        note: "WATACO partners with trusted banks to provide preferential interest-rate services.",
        linkSlug: "cho-thue-tai-chinh-dien-mat-troi-dau-tu-20-phan-tram"
      }
    ],
    newsTitle: "Media Coverage",
    newsSub: "NEWS",
    newsArticles: [
      { source: "VnExpress", date: "Dec 20", title: "WATACO and Japanese Solar tech.", link: "#", tag: "Market", img: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=600" },
      { source: "Forbes", date: "Oct 15", title: "Top renewable energy firms in Vietnam.", link: "#", tag: "Ranking", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600" },
      { source: "Tuổi Trẻ", date: "Aug 05", title: "Rooftop solar solutions.", link: "#", tag: "Tech", img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=600" },
      { source: "CafeF", date: "Jan 10", title: "Green transition trends.", link: "#", tag: "Invest", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600" },
      { source: "VIR", date: "Nov 22", title: "WATACO CEO Interview.", link: "#", tag: "People", img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=600" },
      { source: "VTV News", date: "Sep 02", title: "Strategic partnership signing.", link: "#", tag: "Event", img: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&q=80&w=600" }
    ],
    mapTitle: "Map",
    getQuote: "QUOTE",
    viewAllArticles: "View All Articles",
    footer: {
      description: "Delivering sustainable value for the future.",
      solutionsTitle: "Solutions",
      solutions: [
        "EPC Contractor",
        "Operation & Maintenance (O&M)",
        "ESCO Investment",
        "Equipment Supply"
      ],
      companyTitle: "About WATACO",
      company: [
        "About Us",
        "Featured Projects",
        "News & Events",
        "Careers"
      ],
      contactTitle: "Contact",
      copyright: "© 2024 WATACO ENGINEERING | MEMBER OF WATANABE CREATE GROUP JAPAN.",
      privacy: "Privacy Policy",
      terms: "Terms of Use",
      contact: {
        address1: "Head Office in Vietnam: 29 Nguyen Khac Nhu, Cau Ong Lanh Ward, Ho Chi Minh City, Vietnam",
        address2: "Northern Representative Office: 4th Floor, 44 Trang Tien, Trang Tien Ward, Hoan Kiem District, Hanoi, Vietnam",
        email: "info@wataco.com.vn",
        phone: "0359 959 831"
      }
    },
    whySolar: {
      title: "WHY CHOOSE SOLAR ENERGY?",
      tagline: "Solar Power – A sustainable energy solution for the future!",
      items: [
        {
          icon: DollarSign,
          title: "Cost Savings",
          desc: "Significantly reduce monthly electricity bills – especially for high-consumption households or businesses."
        },
        {
          icon: Leaf,
          title: "Eco-Friendly",
          desc: "Green energy source – zero emissions, no environmental pollution."
        },
        {
          icon: Zap,
          title: "Energy Independence",
          desc: "No more worries about power outages – the system can operate independently (when paired with battery storage)."
        },
        {
          icon: Shield,
          title: "High Durability & Low Maintenance",
          desc: "System lifespan of 25–30 years with minimal failures and long-term warranty coverage."
        }
      ]
    },
    missionSection: {
      subtitle: "DEVELOPMENT ORIENTATION",
      title: "Vision & Mission",
      vision: {
        title: "Vision",
        desc: "Creating a sustainable future through constructing and investing in advanced solar energy in Vietnam, supporting business growth and partnering with the community."
      },
      mission: {
        title: "Mission",
        desc: "Providing high-quality, advanced, and environmentally friendly solar energy construction and investment solutions, contributing to enhancing life quality and supporting the sustainable development of businesses in Vietnam."
      },
      coreValues: {
        title: "Core Values",
        items: [
          "Sustainability and Eco-friendliness",
          "Quality and Innovation",
          "Responsibility and Transparency",
          "Collaboration and Development",
          "Innovation and Creativity"
        ]
      }
    },
    ppaSection: {
      subtitle: "ZERO INVESTMENT - POWER PURCHASE AGREEMENT",
      title: "HIGH QUALITY SOLAR POWER SOLUTIONS FOR BUSINESSES",
      desc: "A direct solar power purchase cooperation solution that utilizes idle factory rooftops. Partner investment funds cover 100% of the capital, while WATACO acts as a comprehensive EPC contractor to ensure optimal operational efficiency.",
      benefits: [
        "Zero initial capital investment (Zero Capex).",
        "Electricity rates lower than the EVN grid.",
        "100% free operation and maintenance (O&M) costs.",
        "Obtain International Renewable Energy Certificates (I-RECs)."
      ],
      button: "PPA Model"
    },
    ourServices: {
      subtitle: "WATACO SERVICES",
      title: "Our Services",
      items: [
        { icon: FileText, title: "System Consulting & Design", link: "/posts/tu-van-va-thiet-ke-he-thong-dien-mat-troi" },
        { icon: Package, title: "Equipment & Material Supply", link: "/posts/dich-vu-cua-chung-toi" },
        { icon: Wrench, title: "Installation & Construction", link: "/posts/tong-thau-va-quan-ly-epc" },
        { icon: Settings, title: "Operation & Maintenance (O&M)", link: "/posts/tong-thau-va-quan-ly-epc" },
        { icon: TrendingUp, title: "Financial & Investment Solutions", link: "/posts/giai-phap-esco" }
      ]
    },
    epcSection: {
      subtitle: "TURNKEY SOLUTIONS",
      title: "EPC General Contracting & Management",
      desc: "WATACO provides comprehensive rooftop solar implementation services, from design consultancy to operation, aimed at maximizing ROI and minimizing risks for businesses.",
      image: "sgs.png",
      steps: [
        { icon: PenTool, title: "Engineering", desc: "Site survey, structural load assessment, and 3D simulation using PVSyst/HelioScope to optimize installation layout and energy yield." },
        { icon: Package, title: "Procurement", desc: "Direct distribution of Global Tier 1 solar equipment (Longi, Canadian Solar, Huawei, Sungrow) with full CO/CQ certification." },
        { icon: Wrench, title: "Construction", desc: "Professional execution adhering strictly to HSE and Fire Safety standards without disrupting factory production activities." },
        { icon: BarChart3, title: "Operation & Maintenance (O&M)", desc: "24/7 performance monitoring via our NOC center. Periodic maintenance and cleaning ensure system stability throughout its lifecycle." }
      ],
      qualityCommitment: "Quality Commitment",
      japanStandard: "Japanese Standards",
      epcProfile: "EPC Capability Profile"
    },
    projectProcessFlow: {
      title1: "Project Implementation",
      title2: "Process Flow",
      steps: [
        "PROJECT SURVEY",
        "PRELIMINARY DESIGN, SIMULATION & ANALYSIS",
        "FEASIBILITY ASSESSMENT",
        "SYSTEM DESIGN",
        "CONSTRUCTION & INSTALLATION",
        "TESTING & COMMISSIONING",
        "COMMERCIAL OPERATION & HANDOVER",
        "OPERATION & MAINTENANCE (O&M)"
      ]
    },
    careersPage: {
      hero: {
        alt: "Professional working team",
        subtitle: "Join WATACO",
        title1: "CREATE THE FUTURE",
        title2: "OF GREEN ENERGY",
        description: "We are looking for passionate and enthusiastic associates to build a sustainable energy foundation for Vietnam together.",
        button: "View open positions"
      },
      culture: {
        subtitle: "Core Values",
        title: "WATACO Culture",
        description: "The collective strength and sustainable development orientation of WATACO are built on 5 inseparable cultural pillars.",
        values: [
          {
            title: "Honesty and Transparency",
            desc: "We always uphold ethical values in our work, demonstrating clarity, integrity, and a commitment to following the principles, thereby building solid trust with customers and partners."
          },
          {
            title: "Cooperation",
            desc: "The spirit of cooperation and teamwork is the foundation of Wataco; we always aim to create a cohesive environment that helps everyone promote their strengths and achieve common success."
          },
          {
            title: "Innovation",
            desc: "Every member of the company is encouraged to be creative and continuously improve, contributing new ideas to enhance the quality of work and solutions for customers."
          },
          {
            title: "Care and Respect",
            desc: "At Wataco, every individual is valued and listened to; we always focus on personal development and protecting the interests of the community, customers, and partners."
          },
          {
            title: "Proactively Overcoming Challenges",
            desc: "Wataco employees are always proactive in seeking creative solutions to overcome all difficulties, constantly learning and developing to face challenges with confidence and efficiency."
          }
        ]
      },
      jobBoard: {
        title: "Open Positions",
        description: "Find the right opportunity for you.",
        searchPlaceholder: "Search for jobs...",
        categories: ["All", "Technical", "Sales", "Operation", "Office"],
        noResults: "No suitable positions found.",
        viewAllJobs: "View all jobs",
        ctaTitle: "Can't find a suitable position?",
        ctaDescription: "Submit your CV to our talent database. We will contact you when an opportunity arises.",
        ctaButton: "Submit CV Now"
      },
      jobCard: {
        urgent: "Urgent",
        deadlinePrefix: "Apply by: ",
        apply: "View Detail"
      },
      jobs: [
        {
          "id": 1,
          "title": "Sales Executive",
          "department": "Sales",
          "location": "Ho Chi Minh City",
          "type": "Full-time",
          "salary": "Negotiable",
          "deadline": "02/09/2026",
          "urgent": true,
          "slug": "tuyen-dung-nhan-vien-kinh-doanh-solar"
        }
      ]
    },
    aboutUsPage: {
      hero: {
        badge: "Our Story",
        titlePrefix: "THE PEOPLE OF",
        titleHighlight: "WATACO",
        description: "More than a workplace, WATACO is a family where each individual is respected, developed, and recognized. Together, we are building a sustainable green-energy future.",
        imageAlt: "Wataco team"
      },
      recognition: {
        subtitle: "Honoring & Recognition",
        title: "Hall of Achievement",
        description: "At WATACO, every effort and contribution is properly recognized. Congratulations to the individuals and teams who have shined recently."
      },
      recognitions: [
        {
          type: "Quarterly Outstanding Employee",
          name: "Tran Hung Thinh",
          role: "Construction Supervision Engineer",
          desc: "Completed a project 15 days ahead of schedule while maintaining 100% labor safety at the site."
        },
        {
          type: "Outstanding Team",
          name: "Engineering Design Department",
          role: "Engineering - R&D Division",
          desc: "Innovated panel layout optimization, helping save 5% in material costs for major projects."
        },
        {
          type: "Rising Star",
          name: "Tran Thi Lan",
          role: "B2B Sales Specialist",
          desc: "Achieved record sales in the first month and secured two high-value ESCO contracts."
        }
      ],
      awards: {
        subtitle: "Affirming Our Position",
        title: "Prestigious Awards",
        description: "WATACO's relentless efforts to deliver clean-energy solutions have been recognized with prestigious awards.",
        sectionImageAlt: "WATACO Awards Background",
        items: [
          {
            title: "Top 10 Green Energy Enterprises 2023",
            desc: "Presented by the Vietnam Energy Association to EPC contractors with outstanding contributions to the clean-energy transition."
          },
          {
            title: "National Brand (Viet Value) Net-Zero Solution",
            desc: "Affirms WATACO's quality and credibility in delivering solar systems that meet top standards of safety and performance."
          },
          {
            title: "Asia Energy Innovation Award",
            desc: "Recognizes optimized design solutions and AI-based smart monitoring technology in O&M operations."
          },
          {
            title: "Excellent ESG Practice Certification",
            desc: "Honored for commitment to environmental protection, social responsibility, and transparent governance under international standards."
          }
        ]
      },
      culture: {
        subtitle: "Working Environment",
        title: "Life Rhythm \nAt WATACO",
        description: "Everyday moments, field trips, and smiles on-site are the most positive source of energy for us."
      },
      dailyActivities: [
        { title: "Team Building 2025", category: "Culture" },
        { title: "Site Supervision", category: "Work" },
        { title: "Internal Training", category: "Development" },
        { title: "Quarterly Strategy Meeting", category: "Office" },
        // { title: "Project Acceptance", category: "Work" },
        { title: "Sports Activities", category: "Connection" }
      ],
    },
    newsPage: {
      heroBadge: "Featured News",
      readMore: "Read more",
      noResults: "No articles found.",
      clearFilter: "Clear filter",
      loadMore: "Load more",
      searchPlaceholder: "Search...",
      trendingTitle: "Most Read",
      tagsTitle: "Hot Topics",
      tags: ["Solar Farm", "Rooftop Solar", "Inverter", "Energy Storage", "EPC", "ESCO", "Net Zero"],
      expertSubtitle: "In-depth Knowledge",
      expertTitle: "EXPERT CORNER",
      readResearch: "Read research",
      categoryAll: "All news",
      categoryProject: "Partnerships & Projects",
      home: "Home",
      share: "Share this article:",
      copied: "Link copied",
      tocTitle: "Table of contents",
      relatedArticles: "Related articles",
      updating: "Updating more articles...",
      needConsult: "Need direct consultation?",
      consultDesc: "Our engineers are ready to answer all technical and financial questions.",
      callHotline: "Call Hotline:",
      notFound: "Article does not exist.",
      readDetail: "Read detail",
    },
    newsPosts: allNewsPostsByLanguage.EN,
  },
  JP: {
    nav: ["ホーム", "私たちについて", "プロジェクト", "キャリア", "ニュース"],
    heroH1: "日本の\n技術。\nベトナムの\nエネルギー。",
    heroSub: "仙台のワタナベクリエイトグループの30年以上の技術遺産を継承。",
    ctaMain: "技術相談",
    ctaSub: "仕様を見る",
    heroSliderCta: "相談を申し込む",
    heroSlides: [
      {
        title: "再生可能エネルギー分野の\nリーディング企業",
        description: "Watacoはベトナムと日本の企業と共に、Net-Zeroに向けたデュアル変革を推進します。"
      },
      {
        title: "柔軟な協業モデル:\nZERO CAPEX SOLAR",
        description: "企業向けに初期投資ゼロの屋根置き太陽光発電を提供します。"
      },
      {
        title: "再生可能エネルギー\nプロジェクトへの投資・開発",
        description: "企業向け屋根置き太陽光プロジェクトの信頼できる投資パートナーです。"
      },
      {
        title: "デュアル変革ソリューション:\nデジタル変革 - グリーン変革",
        description: "国際基準に沿ったデジタル基盤で、100%再生可能エネルギーとNet-Zeroへの道のりを支援します。"
      }
    ],
    viewProject: "詳細",
    stats: [
      { label: "設備容量", val: 500, suffix: "MWp", prefix: "+" },
      { label: "経験年数", val: 10, suffix: "年", prefix: "+" },
      { label: "完了プロジェクト", val: 200, suffix: "", prefix: "+" },
      { label: "稼働信頼性", val: 99.9, suffix: "%", prefix: "" }
    ],
    mapStats: [
      {
        label: "署名済みプロジェクト",
        val: 250,
        suffix: "+",
        icon: FileText,
        color: "#3B82F6",
      },
      {
        label: "総設備容量",
        val: 500,
        suffix: " MWp",
        icon: Zap,
        color: "#EAB308",
      },
      {
        label: "運転中のシステム",
        val: 180,
        suffix: "+",
        icon: BarChart3,
        color: "#228B22",
      },
    ],
    section2SubTitle: "事業規模",
    section2Title: "全国の\nプロジェクト網",
    section2Description: "ベトナム全土で500MWp以上の総設置容量で、卓越した品質とパフォーマンスをお約束します。",
    section2ClientTitle: "信頼できるパートナー",
    introTitle: "仙台からベトナムへ",
    introSub: "ワタナベクリエイトの遺産",
    introContent1: "WATACOは、日本の宮城県仙台市に本拠を置くワタナベクリエイト グループの基盤の上に設立されました。2015年12月17日に創業したワタナベクリエイトは、 コンサルティング、設計、施工において多数の実績を挙げ、再生可能エネルギー技術の 先駆者として知られています。",
    introContent2: "WATACOは2021年にベトナムで設立され、太陽光発電所の コンサルティング・設計・施工を手掛けています。「品質こそが持続可能な信頼を生む」 というモットーのもと、お客様のご要望に細部まで応える最適なソリューションを提供 することをお約束します。",
    introContent3: "また、WATACOは住宅建築・リノベーション・インテリア分野にも 事業を広げ、ベトナムに快適でモダンな住環境を提供しています。常にお客様の ご期待に耳を傾け、ふさわしい作品を創り続け、第一の選択となるべく学び続けています。",
    benefitsTitle: "ソリューション",
    benefitsSub: "投資効率",
    benefitTabs: [
      {
        id: 'business',
        label: "企業",
        icon: Factory,
        title: "運用コストの最適化",
        desc: "工場向けの屋上太陽光発電ソリューションは、ピーク時の電力コストを削減します。",
        specs: [
          { label: "寿命", val: "30年" },
          { label: "回収", val: "4-5年" },
          { label: "保証", val: "25年" }
        ],
        btnText: "詳細",
        img: "https://images.unsplash.com/photo-1664360096660-c322b7244967?auto=format&fit=crop&q=80&w=1600"
      },
      {
        id: 'residential',
        label: "住宅",
        icon: Home,
        title: "エネルギーの自給自足",
        desc: "屋根をスマートな発電所に変えます。",
        specs: [
          { label: "寿命", val: "25年+" },
          { label: "回収", val: "4-5年" },
          { label: "節約", val: "90%" }
        ],
        btnText: "詳細",
        img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1600"
      },
      {
        id: 'agriculture',
        label: "農業",
        icon: Sprout,
        title: "ソーラーシェアリング",
        desc: "太陽光パネルの下で発電と農業を組み合わせます。",
        specs: [
          { label: "寿命", val: "30年" },
          { label: "回収", val: "5-6年" },
          { label: "効率", val: "150%" }
        ],
        btnText: "詳細",
        img: "https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?auto=format&fit=crop&q=80&w=1600"
      }
    ],
    projectsTitle: "プロジェクト",
    projectsSub: "施工事例",
    projectTabs: [
      { id: 'vietnam', label: 'ベトナム' },
      { id: 'international', label: '国際' },
    ],
    projectsPage: {
      heroSubtitle: "実績",
      heroTitle: "プロジェクト\nのフットプリント",
      heroDesc: "200以上のプロジェクトをベトナム全土で完成させ、WATACOはクリーンエネルギーを提供しています。",
      statsCapacity: "総設備容量 (MWp)",
      statsProjects: "完了プロジェクト",
      statsProvinces: "カバー省数",
      mapNetwork: "全国プロジェクト網",
      libraryTitle: "プロジェクトライブラリ",
      categoryVietnam: "ベトナム",
      categoryInternational: "国際",
      categoryAll: "すべてのプロジェクト",
      noProjects: "プロジェクトが見つかりません。",
      showingProjects: "{current} / {total} 件のプロジェクトが表示されています"
    },
    projectsData: projectsDataByLanguage.JP,
    productsTitle: "技術と設備",
    productsSub: "パートナー",
    productTabs: [
      { id: 'panels', label: "パネル", icon: Sun },
      { id: 'inverter_grid', label: "グリッド", icon: Cpu },
      { id: 'inverter_hybrid', label: "ハイブリッド", icon: Battery }
    ],
    baseProductsData: {
      'panels': [
        { name: "Canadian Solar HiKu7", spec: "600W", eff: "21.6%", img: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&q=80&w=600", tag: "Tier 1" },
        { name: "Longi Hi-MO 5m", spec: "550W", eff: "22.3%", img: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80&w=600", tag: "Best Seller" },
        { name: "Jinko Tiger Neo", spec: "575W", eff: "22.8%", img: "https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?auto=format&fit=crop&q=80&w=600", tag: "Premium" }
      ],
      'inverter_grid': [
        { name: "Huawei SUN2000", spec: "100kW", eff: "98.8%", img: "https://plus.unsplash.com/premium_photo-1682146435061-6d9258276f52?auto=format&fit=crop&q=80&w=600", tag: "Smart" },
        { name: "Sungrow SG110CX", spec: "110kW", eff: "98.7%", img: "https://images.unsplash.com/photo-1588127333419-b9d7de223dcf?auto=format&fit=crop&q=80&w=600", tag: "Industrial" },
        { name: "SMA Sunny Tripower", spec: "75kW", eff: "99.0%", img: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=600", tag: "German" }
      ],
      'inverter_hybrid': [
        { name: "DEYE SUN-12K", spec: "12kW", eff: "97.6%", img: "https://images.unsplash.com/photo-1581093583449-82558e396420?auto=format&fit=crop&q=80&w=600", tag: "Top Rated" },
        { name: "GoodWe ET Series", spec: "10kW", eff: "98.2%", img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=600", tag: "Reliable" },
        { name: "Sofar HYD 20KTL", spec: "20kW", eff: "98.0%", img: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=600", tag: "High Power" }
      ]
    },
    financeTitle: "金融ソリューション",
    financeSub: "柔軟性",
    financeSolutions: [
      { icon: Zap, title: "ESCOモデル", desc: "初期投資ゼロ。", link: "#esco" },
      { icon: Building2, title: "屋根賃貸", desc: "受動的収入。", link: "#roof-rental" },
      { icon: TrendingUp, title: "投資 (EPC)", desc: "フルサービス。", link: "#investment" },
      { icon: Wallet, title: "リース", desc: "金融サポート。", link: "#leasing" }
    ],
    solutionsSub: "柔軟な協業モデル",
    solutionsTitle: "多様な投資ソリューション",
    solutionsLabels: {
      chooseSolution: "ソリューションを選択",
      benefitsTitle: "主なメリット",
      modelTitle: "運用モデル",
      detailCta: "ソリューション詳細を見る",
      detailBasePath: "/posts"
    },
    solutionsData: [
      {
        id: "esco",
        shortTitle: "1. ESCOモデル",
        title: "ESCO（Energy Service Company）ソリューション",
        desc: "ESCOモデルは、企業の遊休屋根スペースを活用して太陽光発電設備を導入する方式です。WATACOはEPC請負（設計、調達、施工、保守、保証）を担い、最適な運用性能を実現します。",
        benefits: [
          "初期投資が不要。",
          "設備技術の選定を心配する必要がない。",
          "運用コスト負担がない。",
          "クリーンエネルギーを利用できる。",
          "EVNへの依存を減らし、毎年の電気料金上昇影響を抑えられる。",
          "EVNより低い電力単価を活用し、エネルギーコストを削減できる。",
          "長期的に設備価値の恩恵を受けられる。",
          "屋根温度を約5度C低減し、室内環境改善に寄与する。",
          "ブランド価値と生産競争力を高める。",
          "グリーンエネルギー利用企業としての位置付けを強化できる。"
        ],
        diagramType: "three-party",
        roles: {
          client: "顧客",
          partner: "金融パートナー"
        },
        flows: {
          watacoToClient: "コンサル、設計、EPC、O&M",
          clientToPartner: "毎月の電気料金支払い",
          partnerToWataco: "資金実行"
        },
        linkSlug: "giai-phap-esco"
      },
      {
        id: "lease",
        shortTitle: "2. 工場屋根リース",
        title: "工場屋根賃貸ソリューション",
        desc: "遊休屋根スペースが条件を満たす企業は、屋根を貸し出して追加収益を得られます。金融パートナーが設置費用を全額負担し、WATACOがEPCを担当します。",
        benefits: [
          "太陽光設備の設置費用が不要。",
          "屋根賃貸により毎月の収入を増やせる。",
          "20年後に太陽光設備全体を引き継げる。",
          "パネルにより屋根温度が約5度C下がり、空調電力を削減できる。",
          "グリーン企業としてブランド価値を向上できる。"
        ],
        diagramType: "three-party",
        roles: {
          client: "顧客",
          partner: "金融パートナー"
        },
        flows: {
          watacoToClient: "設置、運用、保守",
          clientToPartner: "毎月の賃料受取",
          partnerToWataco: "資金実行"
        },
        note: "顧客は遊休屋根を低リスクで賃貸でき、20年後に設備を継承または再契約が可能です。",
        linkSlug: "cho-thue-mai-xuong-lap-dien-mat-troi"
      },
      {
        id: "invest",
        shortTitle: "3. 直接投資",
        title: "直接投資ソリューション",
        desc: "一度の投資で30年以上の効果を得られます。太陽光発電へ投資することで最大90%の電力削減が可能で、余剰電力はEVNへ売電できます。WATACOがフルEPCを提供します。",
        benefits: [
          "初期投資回収後は実質的に無料電力として利用できる。",
          "EVN購入電力量を減らし、エネルギーコストを削減。",
          "余剰電力の売電で毎月収益を増やせる。",
          "自己資金活用で金利負担を回避できる。",
          "EVN依存と料金上昇リスクを抑制できる。",
          "設備を自由に運用・管理できる。",
          "屋根温度を約5度C下げられる。"
        ],
        diagramType: "two-party",
        roles: {
          client: "投資家"
        },
        flows: {
          clientToWataco: "フルEPC提供（コンサル、設計、施工、保証）"
        },
        linkSlug: "giai-phap-dau-tu-he-thong-dien-mat-troi-tu-do-tai-chinh"
      },
      {
        id: "finance",
        shortTitle: "4. ファイナンスリース",
        title: "ファイナンスリースソリューション",
        desc: "WATACOは企業と優遇条件の銀行商品をつなぎます。企業は20%を自己負担し、残り80%を銀行が融資。WATACOがEPC請負を担当します。",
        benefits: [
          "不動産担保が不要。",
          "初期費用が低い（システム費用の20%のみ）。",
          "短期間でシステム引き渡しが可能。",
          "30年以上の高効率運用が可能。",
          "パネルで屋根温度を約5度C低減できる。",
          "グリーンエネルギー活用でブランド価値と競争力を高められる。"
        ],
        diagramType: "three-party",
        roles: {
          client: "顧客",
          partner: "銀行"
        },
        flows: {
          watacoToClient: "コンサル、設計、EPC、O&M",
          clientToPartner: "毎月のリース支払い（元本+利息）",
          partnerToWataco: "80%資金実行"
        },
        note: "WATACOは信頼できる銀行パートナーと連携し、優遇金利サービスを提供しています。",
        linkSlug: "cho-thue-tai-chinh-dien-mat-troi-dau-tu-20-phan-tram"
      }
    ],
    newsTitle: "メディア掲載",
    newsSub: "ニュース",
    newsArticles: [
      { source: "VnExpress", date: "12/20", title: "WATACOと日本のソーラー技術。", link: "#", tag: "Market", img: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=600" },
      { source: "Forbes", date: "10/15", title: "再生可能エネルギー企業トップ。", link: "#", tag: "Ranking", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600" },
      { source: "Tuổi Trẻ", date: "08/05", title: "屋上太陽光発電ソリューション。", link: "#", tag: "Tech", img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=600" },
      { source: "CafeF", date: "01/10", title: "グリーントランジション。", link: "#", tag: "Invest", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600" },
      { source: "VIR", date: "11/22", title: "CEOインタビュー。", link: "#", tag: "People", img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=600" },
      { source: "VTV News", date: "09/02", title: "戦略的パートナーシップ。", link: "#", tag: "Event", img: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&q=80&w=600" }
    ],
    mapTitle: "マップ",
    getQuote: "見積もり",
    viewAllArticles: "すべての記事を見る",
    footer: {
      description: "未来に向けた持続可能な価値を提供する。",
      solutionsTitle: "ソリューション",
      solutions: [
        "EPC（設計・調達・建設）",
        "O&M（運用・保守）",
        "ESCO投資",
        "設備供給"
      ],
      companyTitle: "WATACOについて",
      company: [
        "会社概要",
        "主要プロジェクト",
        "ニュース & イベント",
        "採用情報"
      ],
      contactTitle: "お問い合わせ",
      copyright: "© 2024 WATACO ENGINEERING | MEMBER OF WATANABE CREATE GROUP JAPAN.",
      privacy: "プライバシーポリシー",
      terms: "利用規約",
      contact: {
        address1: "ベトナム本社: 29 Nguyen Khac Nhu, Cau Ong Lanh Ward, Ho Chi Minh City, Vietnam",
        address2: "北部駐在員事務所: 4th Floor, 44 Trang Tien, Trang Tien Ward, Hoan Kiem District, Hanoi, Vietnam",
        email: "info@wataco.com.vn",
        phone: "0359 959 831"
      }
    },
    whySolar: {
      title: "太陽光発電を選ぶ理由",
      tagline: "太陽光発電 — 未来のための持続可能なエネルギーソリューション！",
      items: [
        {
          icon: DollarSign,
          title: "電気代の削減",
          desc: "毎月の電気代を大幅に削減します。特に電力消費量の多いご家庭や企業様に最適です。"
        },
        {
          icon: Leaf,
          title: "環境に優しい",
          desc: "グリーンエネルギー源であり、排出ガスゼロで環境汚染を引き起こしません。"
        },
        {
          icon: Zap,
          title: "電力の自給自足",
          desc: "停電の心配はありません。システムは独立して稼働可能です（蓄電池併用時）。"
        },
        {
          icon: Shield,
          title: "高耐久・メンテナンスが容易",
          desc: "システム寿命は25〜30年。故障が少なく、安心の長期保証付きです。"
        }
      ]
    },
    missionSection: {
      subtitle: "開発の方向性",
      title: "ビジョン ＆ ミッション",
      vision: {
        title: "ビジョン",
        desc: "ベトナムにおいて先進的な太陽光エネルギーの建設と投資を通じて持続可能な未来を創造し、企業の発展を支援し、地域社会と共に歩みます。"
      },
      mission: {
        title: "ミッション",
        desc: "高品質で先進的、かつ環境に優しい太陽光発電システムの建設および投資ソリューションを提供し、生活の質の向上とベトナム企業の持続可能な発展に貢献します。"
      },
      coreValues: {
        title: "コアバリュー",
        items: [
          "持続可能性と環境への配慮",
          "品質と先進性",
          "責任と透明性",
          "協力と発展",
          "革新と創造"
        ]
      }
    },
    ppaSection: {
      subtitle: "初期投資ゼロ - 電力売買ソリューション",
      title: "ビジネス向けの高品質太陽光発電ソリューション",
      desc: "工場の遊休屋根スペースを活用した太陽光発電の直接売買協力ソリューションです。パートナー投資ファンドが資金を100%負担し、WATACOが総合EPC請負業者として最適な運用効率を保証します。",
      benefits: [
        "初期投資費用不要（Zero Capex）。",
        "EVNグリッドよりも安価な電力価格を実現。",
        "運用・保守（O&M）費用が100%無料。",
        "再生可能エネルギー証明書（I-RECs）の取得が可能。"
      ],
      button: "PPAモデル"
    },
    epcSection: {
      subtitle: "ターンキーソリューション",
      title: "EPC総括請負および管理",
      desc: "WATACOは、設計コンサルティングから運用まで、屋上太陽光発電システムの包括的な導入サービスを提供し、企業の収益最大化とリスク低減を実現します。",
      image: "sgs.png",
      steps: [
        { icon: PenTool, title: "設計・エンジニアリング (Engineering)", desc: "現地調査、構造荷重評価、PVSyst/HelioScope 3Dシミュレーションによる設置場所と発電量の最適化。" },
        { icon: Package, title: "資材調達 (Procurement)", desc: "グローバルTier 1基準の太陽光設備（Longi, Canadian Solar, Huawei, Sungrow）をCO/CQ証明書付きで直接提供。" },
        { icon: Wrench, title: "施工・設置 (Construction)", desc: "工場の生産活動を妨げることなく、HSE（安全衛生環境）および防火基準を厳守した専門的な施工。" },
        { icon: BarChart3, title: "運用・保守 (O&M)", desc: "NOCセンターによる24時間365日の監視。定期的なメンテナンスと洗浄により、ライフサイクル全体の安定稼働を保証。" }
      ],
      qualityCommitment: "品質保証",
      japanStandard: "日本基準",
      epcProfile: "EPC実績・会社概要"
    },
    projectProcessFlow: {
      title1: "プロジェクト実施",
      title2: "プロセスフロー",
      steps: [
        "プロジェクト調査",
        "基本設計、シミュレーション、分析",
        "実現可能性評価",
        "システム設計",
        "建設・設置",
        "テストと試運転",
        "商業運転と引き渡し",
        "運用・保守（O&M）"
      ]
    },
    careersPage: {
      hero: {
        alt: "プロフェッショナルな作業チーム",
        subtitle: "WATACOに参加",
        title1: "未来を創造する",
        title2: "グリーンエネルギー",
        description: "ベトナムの持続可能なエネルギー基盤を共に築くため、情熱と熱意にあふれる仲間を募集しています。",
        button: "募集中のポジションを見る"
      },
      culture: {
        subtitle: "コアバリュー",
        title: "WATACOカルチャー",
        description: "WATACOの集合的な強みと持続可能な開発志向は、切り離すことのできない5つの文化的柱の上に築かれています。",
        values: [
          {
            title: "正直さと透明性",
            desc: "私たちは常に仕事において倫理的価値観を堅持し、明確さ、誠実さ、原則に従うことへのコミットメントを示し、それによって顧客やパートナーとの固い信頼を築きます。"
          },
          {
            title: "協力",
            desc: "協力とチームワークの精神はWatacoの基盤です。私たちは常に、誰もが自分の強みを促進し、共通の成功を達成するのに役立つまとまりのある環境を作ることを目指しています。"
          },
          {
            title: "イノベーション",
            desc: "会社のすべてのメンバーは、創造的で継続的な改善を行うことが奨励されており、仕事の質と顧客向けのソリューションを向上させるための新しいアイデアを貢献しています。"
          },
          {
            title: "配慮と尊重",
            desc: "Watacoでは、すべての個人が尊重され、耳を傾けられます。私たちは常に個人の成長に焦点を当て、コミュニティ、顧客、パートナーの利益を保護します。"
          },
          {
            title: "課題を積極的に克服する",
            desc: "Watacoの従業員は、常にすべての困難を克服するための創造的な解決策を積極的に探し、自信と効率をもって課題に立ち向かうために絶えず学び、成長しています。"
          }
        ]
      },
      jobBoard: {
        title: "募集中のポジション",
        description: "あなたにぴったりの機会を見つけてください。",
        searchPlaceholder: "仕事を検索...",
        categories: ["すべて", "技術", "営業", "運営", "オフィス"],
        noResults: "適切なポジションが見つかりませんでした。",
        viewAllJobs: "すべての仕事を見る",
        ctaTitle: "適切なポジションが見つかりませんか？",
        ctaDescription: "あなたの履歴書を私たちのタレントデータベースに送信してください。機会があればご連絡いたします。",
        ctaButton: "今すぐ履歴書を送信"
      },
      jobCard: {
        urgent: "急募",
        deadlinePrefix: "応募締め切り: ",
        apply: "詳細を表示"
      },
      jobs: [
        {
          "id": 1,
          "title": "営業担当者",
          "department": "営業部",
          "location": "ホーチミン市",
          "type": "正社員",
          "salary": "応相談",
          "deadline": "2026/09/02",
          "urgent": true,
          "slug": "tuyen-dung-nhan-vien-kinh-doanh-solar"
        }
      ]
    },
    aboutUsPage: {
      hero: {
        badge: "私たちのストーリー",
        titlePrefix: "WATACOの",
        titleHighlight: "仲間たち",
        description: "WATACOは単なる職場ではなく、一人ひとりが尊重され、成長し、評価される家族のような場所です。私たちは持続可能なグリーンエネルギーの未来を共に築いています。",
        imageAlt: "WATACOチーム"
      },
      recognition: {
        subtitle: "称賛と評価",
        title: "栄誉の実績",
        description: "WATACOでは、すべての努力と貢献が正当に評価されます。最近活躍した個人とチームを称えます。"
      },
      recognitions: [
        {
          type: "四半期最優秀社員",
          name: "チャン・フン・ティン",
          role: "施工監理エンジニア",
          desc: "現場で100%の安全を維持しながら、プロジェクトを15日前倒しで完了しました。"
        },
        {
          type: "優秀チーム",
          name: "技術設計部",
          role: "技術・R&D部門",
          desc: "パネルレイアウト最適化で革新を生み、大型案件の資材コストを5%削減しました。"
        },
        {
          type: "ライジングスター",
          name: "チャン・ティ・ラン",
          role: "B2B営業スペシャリスト",
          desc: "入社初月で過去最高の売上を達成し、高額なESCO契約を2件獲得しました。"
        }
      ],
      awards: {
        subtitle: "確かな実績",
        title: "権威ある受賞歴",
        description: "クリーンエネルギーソリューションの提供に向けたWATACOの継続的な取り組みは、数々の権威ある賞として評価されています。",
        sectionImageAlt: "WATACO Awards Background",
        items: [
          {
            title: "2023年 グリーンエネルギー企業トップ10",
            desc: "ベトナムエネルギー協会より、クリーンエネルギー転換に卓越した貢献をしたEPC企業として表彰。"
          },
          {
            title: "国家ブランド（Viet Value）Net-Zeroソリューション",
            desc: "安全性と性能の最高水準を満たす太陽光システム提供におけるWATACOの品質と信頼性を証明。"
          },
          {
            title: "アジア・エネルギー・イノベーション賞",
            desc: "最適設計とAIスマート監視技術を活用したO&M運用が評価されました。"
          },
          {
            title: "ESG優良実践企業認証",
            desc: "環境保護、社会的責任、透明なガバナンスへの取り組みが国際基準で高く評価されました。"
          }
        ]
      },
      culture: {
        subtitle: "働く環境",
        title: "WATACOでの\n日々",
        description: "日常のひとコマ、出張、現場での笑顔こそが、私たちの前向きなエネルギーの源です。"
      },
      dailyActivities: [
        { title: "チームビルディング 2025", category: "文化" },
        { title: "現場監督", category: "業務" },
        { title: "社内研修", category: "成長" },
        { title: "四半期戦略会議", category: "オフィス" },
        // { title: "プロジェクト検収", category: "業務" },
        { title: "スポーツ活動", category: "つながり" }
      ],
    },
    ourServices: {
      subtitle: "WATACOサービス",
      title: "当社のサービス",
      items: [
        { icon: FileText, title: "システムのコンサルティング・設計", link: "/posts/tu-van-va-thiet-ke-he-thong-dien-mat-troi" },
        { icon: Package, title: "機材・設備の供給", link: "/posts/dich-vu-cua-chung-toi" },
        { icon: Wrench, title: "設置・施工", link: "/posts/tong-thau-va-quan-ly-epc" },
        { icon: Settings, title: "運用・保守 (O&M)", link: "/posts/tong-thau-va-quan-ly-epc" },
        { icon: TrendingUp, title: "金融・投資ソリューション", link: "/posts/giai-phap-esco" }
      ]
    },
    newsPage: {
      heroBadge: "注目ニュース",
      readMore: "続きを読む",
      noResults: "記事が見つかりません。",
      clearFilter: "フィルターをクリア",
      loadMore: "さらに読み込む",
      searchPlaceholder: "検索...",
      trendingTitle: "よく読まれている記事",
      tagsTitle: "人気タグ",
      tags: ["Solar Farm", "屋根設置型太陽光", "インバーター", "蓄電システム", "EPC", "ESCO", "ネットゼロ"],
      expertSubtitle: "専門知識",
      expertTitle: "専門家コーナー",
      readResearch: "研究を読む",
      categoryAll: "すべてのニュース",
      categoryProject: "提携 & プロジェクト",
      home: "ホーム",
      share: "記事をシェアする：",
      copied: "リンクをコピーしました",
      tocTitle: "目次",
      relatedArticles: "関連記事",
      updating: "さらに記事を更新中...",
      needConsult: "直接相談が必要ですか？",
      consultDesc: "当社のエンジニアが技術的・財務的なすべての質問にお答えします。",
      callHotline: "ホットライン：",
      notFound: "記事が存在しません。",
      readDetail: "詳細を見る",
    },
    newsPosts: allNewsPostsByLanguage.JP,
  }
};

export const useTranslation = () => {
  const { lang, setLang } = useLanguage();
  const t = translations[lang];

  return { t, lang, setLang, icons: { Factory, Home, Sprout, Sun, Cpu, Battery, Zap, Building2, TrendingUp, Wallet, Newspaper, MapPin, Calendar, BarChart3, Linkedin, Facebook, Youtube, Mail, Phone } };
};

export type { Language };

