import { BarChart3, Battery, Building2, Calendar, Cpu, DollarSign, Facebook, Factory, FileText, Home, Leaf, Linkedin, Mail, MapPin, Newspaper, Package, PenTool, Phone, Settings, Shield, Sprout, Sun, TrendingUp, Wallet, Wrench, Youtube, Zap } from 'lucide-react';
import { useLanguage, type Language } from '../contexts/LanguageContext';
import type { Translations } from '../types';

export const translations: Translations = {
  VN: {
    nav: ["Trang chủ", "Dự án", "Tuyển dụng", "Tin tức"],
    heroH1: "KỸ THUẬT\nNHẬT BẢN.\nNĂNG LƯỢNG\nVIỆT NAM.",
    heroSub: "Kế thừa di sản kỹ thuật từ Watanabe Create Group (Sendai, Nhật Bản) để thúc đẩy quá trình chuyển đổi năng lượng công nghiệp tại Việt Nam.",
    ctaMain: "NHẬN TƯ VẤN KỸ THUẬT",
    ctaSub: "XEM THÔNG SỐ HỆ THỐNG",
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
    projectsData: {
      'vietnam': [
        { name: "Alpha Network", location: "Đồng Văn 4, Ninh Bình", capacity: "0.80 MWp", production: "1,161 MWh/Năm", year: "2023", img: "project/alpha.jpg" },
        { name: "TH Milk Dalat", location: "Đơn Dương, Lâm Đồng", capacity: "1.19 MWp", production: "1,723 MWh/Năm", year: "2023", img: "project/th.jpg" },
        { name: "MK Seiko Vietnam", location: "KCX Tân Thuận, TP.HCM", capacity: "0.34 MWp", production: "488 MWh/Năm", year: "2022", img: "project/mk.JPG" },
        { name: "Kaifa Industry Vietnam", location: "Phú Thọ", capacity: "1.23 MWp", production: "1,779 MWh/Năm", year: "2022", img: "project/kaifa.jpg" },
        { name: "Sato Sangyo Vietnam", location: "Mỹ Phước 3, Bình Dương", capacity: "0.48 MWp", production: "696 MWh/Năm", year: "2021", img: "project/Sato.jpg" },
        { name: "Ryobi Vietnam", location: "Khu công nghệ cao, TP.HCM", capacity: "0.76 MWp", production: "1,099 MWh/Năm", year: "2021", img: "project/Ryobi.JPG" },
        { name: "Stroman Plastic", location: "Văn Lâm, Hưng Yên", capacity: "1.24 MWp", production: "1,801 MWh/Năm", year: "2020", img: "project/stroman.png" },
        { name: "Tra Ly Yarn", location: "TP. Thái Bình", capacity: "3.01 MWp", production: "4,362 MWh/Năm", year: "2020", img: "project/tra-li.JPG" },
        { name: "The He Moi Phu Tho", location: "Phú Thọ", capacity: "1.23 MWp", production: "1,779 MWh/Năm", year: "2023", img: "project/the-he-moi.png" },
        { name: "Huong Sen", location: "Quỳnh Phụ, Thái Bình", capacity: "2.21 MWp", production: "3,201 MWh/Năm", year: "2022", img: "project/huong-sen.jpg" },
        { name: "Tan A Dai Thanh Group", location: "Thanh Liêm, Ninh Bình", capacity: "1.24 MWp", production: "1,798 MWh/Năm", year: "2021", img: "project/tan-a-dai-thanh.JPG" },
        { name: "AMANN Vietnam", location: "Tam Thăng, Đà Nẵng", capacity: "1.13 MWp", production: "1,637 MWh/Năm", year: "2020", img: "project/amann.png" }
      ],
      'international': [
        { name: "Dự án Marsushima", location: "Sendai, Nhật Bản", capacity: "10 MWp", production: "12,000 MWh/Year", year: "2022", img: "project/Matoba.jpg" },
        { name: "Dự án Higashimatsushima", location: "Miyagi, Nhật Bản", capacity: "5 MWp", production: "6,000 MWh/Year", year: "2021", img: "project/Higashimatsushima.jpg" },
        { name: "Dự án Nemawari Daini", location: "Osaka, Nhật Bản", capacity: "2 MWp", production: "2,400 MWh/Year", year: "2023", img: "project/Nemawari.jpg" },
      ]
    },
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
      description: "Kiến tạo hạ tầng năng lượng bền vững tại Việt Nam dựa trên tinh hoa kỹ thuật từ thành phố Sendai, Nhật Bản.",
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
        email: "info@wataco.net",
        phone: "0786788837"
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
      title: "Dịch vụ của chúng tôi",
      items: [
        { icon: FileText, title: "Tư vấn và thiết kế hệ thống" },
        { icon: Package, title: "Cung cấp vật tư, thiết bị" },
        { icon: Wrench, title: "Thi công lắp đặt" },
        { icon: Settings, title: "Vận hành và bảo trì" },
        { icon: TrendingUp, title: "Giải pháp tài chính và đầu tư" }
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
        apply: "Ứng tuyển"
      },
      jobs: [
        {
          id: 1,
          title: "Kỹ Sư Thiết Kế Điện Mặt Trời (Solar Design Engineer)",
          department: "Kỹ thuật",
          location: "TP. Hồ Chí Minh",
          type: "Toàn thời gian",
          salary: "Thỏa thuận",
          deadline: "30/06/2024",
          urgent: true
        },
        {
          id: 2,
          title: "Trưởng Nhóm Kinh Doanh B2B (Sales Team Leader)",
          department: "Kinh doanh",
          location: "Bình Dương",
          type: "Toàn thời gian",
          salary: "20 - 30 Triệu + HH",
          deadline: "15/06/2024",
          urgent: true
        },
        {
          id: 3,
          title: "Chuyên Viên Giám Sát An Toàn (HSE Supervisor)",
          department: "Vận hành",
          location: "Các tỉnh miền Nam",
          type: "Toàn thời gian",
          salary: "Thỏa thuận",
          deadline: "30/06/2024",
          urgent: false
        },
        {
          id: 4,
          title: "Kế Toán Tổng Hợp",
          department: "Văn phòng",
          location: "TP. Hồ Chí Minh",
          type: "Toàn thời gian",
          salary: "15 - 18 Triệu",
          deadline: "20/06/2024",
          urgent: false
        },
        {
          id: 5,
          title: "Thực Tập Sinh Kỹ Thuật Điện",
          department: "Kỹ thuật",
          location: "TP. Hồ Chí Minh",
          type: "Bán thời gian / Thực tập",
          salary: "Hỗ trợ lương",
          deadline: "Liên tục tuyển",
          urgent: false
        }
      ]
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
    },
  },
  EN: {
    nav: ["Home", "Projects", "Careers", "News"],
    heroH1: "JAPANESE\nENGINEERING.\nVIETNAMESE\nENERGY.",
    heroSub: "Leveraging 30+ years of Watanabe Create heritage from Sendai to power Vietnam's industrial transition.",
    ctaMain: "REQUEST CONSULTING",
    ctaSub: "VIEW SPECIFICATIONS",
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
    projectsData: {
      'vietnam': [
        { name: "Alpha Network", location: "Dong Van 4, Ninh Binh", capacity: "0.80 MWp", production: "1,161 MWh/Year", year: "2023", img: "project/alpha.jpg" },
        { name: "TH Milk Dalat", location: "Don Duong, Lam Dong", capacity: "1.19 MWp", production: "1,723 MWh/Year", year: "2023", img: "project/th.jpg" },
        { name: "MK Seiko Vietnam", location: "Tan Thuan EPZ, HCMC", capacity: "0.34 MWp", production: "488 MWh/Year", year: "2022", img: "project/mk.JPG" },
        { name: "Kaifa Industry Vietnam", location: "Phu Tho", capacity: "1.23 MWp", production: "1,779 MWh/Year", year: "2022", img: "project/kaifa.jpg" },
        { name: "Sato Sangyo Vietnam", location: "My Phuoc 3, Binh Duong", capacity: "0.48 MWp", production: "696 MWh/Year", year: "2021", img: "project/Sato.jpg" },
        { name: "Ryobi Vietnam", location: "Hi-Tech Park, HCMC", capacity: "0.76 MWp", production: "1,099 MWh/Year", year: "2021", img: "project/Ryobi.JPG" },
        { name: "Stroman Plastic", location: "Van Lam, Hung Yen", capacity: "1.24 MWp", production: "1,801 MWh/Year", year: "2020", img: "project/stroman.png" },
        { name: "Tra Ly Yarn", location: "Thai Binh City", capacity: "3.01 MWp", production: "4,362 MWh/Year", year: "2020", img: "project/tra-li.JPG" },
        { name: "The He Moi Phu Tho", location: "Phu Tho", capacity: "1.23 MWp", production: "1,779 MWh/Year", year: "2023", img: "project/the-he-moi.png" },
        { name: "Huong Sen", location: "Quynh Phu, Thai Binh", capacity: "2.21 MWp", production: "3,201 MWh/Year", year: "2022", img: "project/huong-sen.jpg" },
        { name: "Tan A Dai Thanh Group", location: "Thanh Liem, Ninh Binh", capacity: "1.24 MWp", production: "1,798 MWh/Year", year: "2021", img: "project/tan-a-dai-thanh.JPG" },
        { name: "AMANN Vietnam", location: "Tam Thang, Da Nang", capacity: "1.13 MWp", production: "1,637 MWh/Year", year: "2020", img: "project/amann.png" }
      ],
      'international': [
        { name: "Marsushima Solar", location: "Sendai, Japan", capacity: "10 MWp", production: "12,000 MWh/Year", year: "2022", img: "project/Matoba.jpg" },
        { name: "Higashimatsushima Sholar", location: "Miyagi, Japan", capacity: "5 MWp", production: "6,000 MWh/Year", year: "2021", img: "project/Higashimatsushima.jpg" },
        { name: "Nemawari Daini Sholar", location: "Osaka, Japan", capacity: "2 MWp", production: "2,400 MWh/Year", year: "2023", img: "project/Nemawari.jpg" }
      ]
    },
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
      description: "Creating sustainable energy infrastructure in Vietnam based on engineering excellence from Sendai, Japan.",
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
        email: "info@wataco.net",
        phone: "0786788837"
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
      title: "Our Services",
      items: [
        { icon: FileText, title: "System Consulting & Design" },
        { icon: Package, title: "Equipment & Material Supply" },
        { icon: Wrench, title: "Installation & Construction" },
        { icon: Settings, title: "Operation & Maintenance (O&M)" },
        { icon: TrendingUp, title: "Financial & Investment Solutions" }
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
        apply: "Apply"
      },
      jobs: [
        {
          id: 1,
          title: "Solar Design Engineer",
          department: "Technical",
          location: "Ho Chi Minh City",
          type: "Full-time",
          salary: "Negotiable",
          deadline: "30/06/2024",
          urgent: true
        },
        {
          id: 2,
          title: "B2B Sales Team Leader",
          department: "Sales",
          location: "Binh Duong",
          type: "Full-time",
          salary: "20 - 30 Million + Commission",
          deadline: "15/06/2024",
          urgent: true
        },
        {
          id: 3,
          title: "HSE Supervisor",
          department: "Operation",
          location: "Southern provinces",
          type: "Full-time",
          salary: "Negotiable",
          deadline: "30/06/2024",
          urgent: false
        },
        {
          id: 4,
          title: "General Accountant",
          department: "Office",
          location: "Ho Chi Minh City",
          type: "Full-time",
          salary: "15 - 18 Million",
          deadline: "20/06/2024",
          urgent: false
        },
        {
          id: 5,
          title: "Electrical Engineering Intern",
          department: "Technical",
          location: "Ho Chi Minh City",
          type: "Part-time / Internship",
          salary: "Stipend",
          deadline: "Continuous recruitment",
          urgent: false
        }
      ]
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
    },
  },
  JP: {
    nav: ["ホーム", "プロジェクト", "キャリア", "ニュース"],
    heroH1: "日本の\n技術。\nベトナムの\nエネルギー。",
    heroSub: "仙台のワタナベクリエイトグループの30年以上の技術遺産を継承。",
    ctaMain: "技術相談",
    ctaSub: "仕様を見る",
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
    projectsData: {
      'vietnam': [
        { name: "Alpha Network", location: "ニンビン省、ドンバン4", capacity: "0.80 MWp", production: "1,161 MWh/年", year: "2023", img: "project/alpha.jpg" },
        { name: "TH Milk Dalat", location: "ラムドン省、ドンズオン", capacity: "1.19 MWp", production: "1,723 MWh/年", year: "2023", img: "project/th.jpg" },
        { name: "MK Seiko Vietnam", location: "ホーチミン市、タントゥアン輸出加工区", capacity: "0.34 MWp", production: "488 MWh/年", year: "2022", img: "project/mk.JPG" },
        { name: "Kaifa Industry Vietnam", location: "フート省", capacity: "1.23 MWp", production: "1,779 MWh/年", year: "2022", img: "project/kaifa.jpg" },
        { name: "Sato Sangyo Vietnam", location: "ビンズオン省、ミーフオック3", capacity: "0.48 MWp", production: "696 MWh/年", year: "2021", img: "project/Sato.jpg" },
        { name: "Ryobi Vietnam", location: "ホーチミン市、ハイテクパーク", capacity: "0.76 MWp", production: "1,099 MWh/年", year: "2021", img: "project/Ryobi.JPG" },
        { name: "Stroman Plastic", location: "フンイエン省、ヴァンラム", capacity: "1.24 MWp", production: "1,801 MWh/年", year: "2020", img: "project/stroman.png" },
        { name: "Tra Ly Yarn", location: "タイビン市", capacity: "3.01 MWp", production: "4,362 MWh/年", year: "2020", img: "project/tra-li.JPG" },
        { name: "The He Moi Phu Tho", location: "フート省", capacity: "1.23 MWp", production: "1,779 MWh/年", year: "2023", img: "project/the-he-moi.png" },
        { name: "Huong Sen", location: "タイビン省、クインフー", capacity: "2.21 MWp", production: "3,201 MWh/年", year: "2022", img: "project/huong-sen.jpg" },
        { name: "Tan A Dai Thanh Group", location: "ニンビン省、タンリエム", capacity: "1.24 MWp", production: "1,798 MWh/年", year: "2021", img: "project/tan-a-dai-thanh.JPG" },
        { name: "AMANN Vietnam", location: "ダナン市、タムタン", capacity: "1.13 MWp", production: "1,637 MWh/年", year: "2020", img: "project/amann.png" }
      ],
      'international': [
        {
          name: "マルシマ・ソーラー", // Hoặc "松島ソーラー" (Matsushima) nếu tên gốc là Matsushima
          location: "日本、仙台市",
          capacity: "10 MWp",
          production: "12,000 MWh/年",
          year: "2022",
          img: "project/Matoba.jpg"
        },
        {
          name: "東松島ソーラー", // Higashimatsushima Solar
          location: "日本、宮城県",
          capacity: "5 MWp",
          production: "6,000 MWh/年",
          year: "2021",
          img: "project/Higashimatsushima.jpg"
        },
        {
          name: "根廻第二ソーラー", // Nemawari Daini Solar
          location: "日本、大阪府",
          capacity: "2 MWp",
          production: "2,400 MWh/年",
          year: "2023",
          img: "project/Nemawari.jpg"
        }]
    },
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
      description: "仙台市からの日本の技術的エッセンスに基づき、ベトナムで持続可能なエネルギーインフラを創造します。",
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
        email: "info@wataco.net",
        phone: "0786788837"
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
        apply: "応募する"
      },
      jobs: [
        {
          id: 1,
          title: "太陽光発電設計エンジニア",
          department: "技術",
          location: "ホーチミン市",
          type: "フルタイム",
          salary: "応相談",
          deadline: "2024/06/30",
          urgent: true
        },
        {
          id: 2,
          title: "B2Bセールスチームリーダー",
          department: "営業",
          location: "ビンズオン",
          type: "フルタイム",
          salary: "2000万～3000万+手数料",
          deadline: "2024/06/15",
          urgent: true
        },
        {
          id: 3,
          title: "HSEスーパーバイザー",
          department: "運営",
          location: "南部諸省",
          type: "フルタイム",
          salary: "応相談",
          deadline: "2024/06/30",
          urgent: false
        },
        {
          id: 4,
          title: "一般会計士",
          department: "オフィス",
          location: "ホーチミン市",
          type: "フルタイム",
          salary: "1500万～1800万",
          deadline: "2024/06/20",
          urgent: false
        },
        {
          id: 5,
          title: "電気工学インターン",
          department: "技術",
          location: "ホーチミン市",
          type: "パートタイム/インターンシップ",
          salary: "有給",
          deadline: "随時募集",
          urgent: false
        }
      ]
    },
    ourServices: {
      title: "当社のサービス",
      items: [
        { icon: FileText, title: "システムのコンサルティング・設計" },
        { icon: Package, title: "機材・設備の供給" },
        { icon: Wrench, title: "設置・施工" },
        { icon: Settings, title: "運用・保守 (O&M)" },
        { icon: TrendingUp, title: "金融・投資ソリューション" }
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
    }

  }
};

export const useTranslation = () => {
  const { lang, setLang } = useLanguage();
  const t = translations[lang];

  return { t, lang, setLang, icons: { Factory, Home, Sprout, Sun, Cpu, Battery, Zap, Building2, TrendingUp, Wallet, Newspaper, MapPin, Calendar, BarChart3, Linkedin, Facebook, Youtube, Mail, Phone } };
};

export type { Language };

