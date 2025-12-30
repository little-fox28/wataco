import { useState } from 'react';
import { Factory, Home, Sprout, Sun, Cpu, Battery, Zap, Building2, TrendingUp, Wallet, Newspaper, MapPin, Calendar, BarChart3, Linkedin, Facebook, Youtube, Mail, Phone } from 'lucide-react';

// --- DỮ LIỆU NGÔN NGỮ ---
const translations: { [key in Language]: TranslationContent } = {
  VN: {
    // Updated Nav Items
    nav: ["Trang chủ", "Dự án", "Sản phẩm", "Tin tức"],
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
    // SECTION 1: HERITAGE
    introTitle: "Hành Trình Từ Sendai Đến Việt Nam",
    introSub: "DI SẢN WATANABE CREATE",
    introContent1: "WATACO được thành lập dựa trên nền tảng của Tập đoàn WATANABE CREATE tại thành phố Sendai, Tỉnh Miyagi, Nhật Bản. Ra đời vào ngày 17/12/2015, tập đoàn WATANABE CREATE đã có những thành tựu nhất định trong lĩnh vực tư vấn - thiết kế - thi công các công trình điện năng lượng mặt trời tại Nhật Bản, đất nước đi đầu về ngành công nghệ sử dụng nguồn năng lượng tái tạo nhằm bảo vệ môi trường.",
    introContent2: "Với phương châm chất lượng tạo nên uy tín bền vững, WATACO cam kết mang đến khách hàng những giải pháp tối ưu nhất phù hợp với yêu cầu của khách hàng đến từng chi tiết nhỏ của mỗi công trình.",
    introContent3: "Bên cạnh đó, Wataco còn phát triển thêm lĩnh vực xây dựng, cải tạo nhà ở, nội thất nhằm đem lại không gian sống thoải mái, tiện nghi, hiện đại tới khách hàng. Chúng tôi luôn luôn lắng nghe ý muốn của khách hàng để kiến tạo nên những tác phẩm xứng tầm với những gì đã cam kết và không ngừng học hỏi để luôn xứng đáng là một trong những lựa chọn hàng đầu của mọi khách hàng.",
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
    projectCategories: ["Doanh Nghiệp", "Nhà Ở", "Nông Nghiệp"],
    projectsData: {
      0: [ // Business
        { name: "Nhà máy Dệt may Thành Công", location: "KCN Trảng Bàng, Tây Ninh", capacity: "1.2 MWp", production: "1,750 MWh/Năm", year: "2023", img: "https://images.unsplash.com/photo-1565128938229-43654489eb12?auto=format&fit=crop&q=80&w=800" },
        { name: "Kho vận Logis VI", location: "VSIP I, Bình Dương", capacity: "850 kWp", production: "1,240 MWh/Năm", year: "2022", img: "https://images.unsplash.com/photo-1581094794329-cd56b350a942?auto=format&fit=crop&q=80&w=800" },
        { name: "Nhà máy Cơ khí Chính xác", location: "KCN Cao, TP.HCM", capacity: "2.5 MWp", production: "3,600 MWh/Năm", year: "2023", img: "https://images.unsplash.com/photo-1534951474654-886e563204d5?auto=format&fit=crop&q=80&w=800" }
      ],
      1: [ // Residential
        { name: "Villa Thảo Điền", location: "Thủ Đức, TP.HCM", capacity: "15 kWp", production: "21 MWh/Năm", year: "2023", img: "https://images.unsplash.com/photo-1600596542815-2a502f35f6e4?auto=format&fit=crop&q=80&w=800" },
        { name: "Nhà phố Cityland Park Hills", location: "Gò Vấp, TP.HCM", capacity: "8 kWp", production: "11 MWh/Năm", year: "2022", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800" },
        { name: "Biệt thự nghỉ dưỡng", location: "Hồ Tràm, BR-VT", capacity: "20 kWp", production: "29 MWh/Năm", year: "2023", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800" }
      ],
      2: [ // Agriculture
        { name: "Farm Dưa Lưới Công Nghệ", location: "Đức Trọng, Lâm Đồng", capacity: "500 kWp", production: "720 MWh/Năm", year: "2022", img: "https://images.unsplash.com/photo-1582298649479-7a5528892787?auto=format&fit=crop&q=80&w=800" },
        { name: "Trại Nấm Solar", location: "Long Khánh, Đồng Nai", capacity: "200 kWp", production: "290 MWh/Năm", year: "2021", img: "https://images.unsplash.com/photo-1627823521360-1554558e658a?auto=format&fit=crop&q=80&w=800" },
        { name: "Farm Thanh Long Xuất Khẩu", location: "Hàm Thuận Nam, Bình Thuận", capacity: "1 MWp", production: "1,450 MWh/Năm", year: "2020", img: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&q=80&w=800" }
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
    partners: [
      "Canadian Solar", "SMA", "Huawei", "Sungrow", "Longi", "Jinko Solar", "Trina Solar", "Growatt", "GoodWe", "JA Solar"
    ],
    // NEW FINANCE SECTION DATA
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
    hero: {
        sub: "CÁC GIẢI PHÁP TIÊN TIẾN CHO MỌI NHU CẦU",
        title: "Dòng Sản Phẩm ",
        highlight: "Đa Dạng",
        desc: "Khám phá danh mục sản phẩm và công nghệ chất lượng cao, được tuyển chọn từ các đối tác hàng đầu thế giới, đảm bảo hiệu suất và độ tin cậy vượt trội cho mọi dự án năng lượng mặt trời."
    },
    filters: {
        all: "Tất cả",
        panels: "Tấm Pin Solar",
        inverter: "Biến Tần",
        storage: "Lưu Trữ"
    },
    ui: {
        searchPlaceholder: "Tìm kiếm sản phẩm...",
        showing: "Hiển thị",
        products: "sản phẩm",
        sort: "Sắp xếp",
        newest: "Mới nhất",
        priceLow: "Giá: Thấp đến Cao",
        priceHigh: "Giá: Cao đến Thấp",
        viewFast: "Xem nhanh",
        quoteBtn: "Nhận báo giá",
        specPower: "Công suất",
        specEff: "Hiệu suất",
        specWarranty: "Bảo hành",
        noResult: "Không tìm thấy sản phẩm nào.",
        resetFilter: "Đặt lại bộ lọc",
        ctaTitle: "Bạn đã sẵn sàng biến năng lượng mặt trời thành lợi nhuận?",
        ctaDesc: "Liên hệ ngay để nhận tư vấn giải pháp phù hợp nhất với nhu cầu của bạn.",
        ctaBtn1: "NHẬN BÁO GIÁ",
        ctaBtn2: "LIÊN HỆ TƯ VẤN"
    },
    navProducts: {
        home: "Trang chủ",
        products: "Sản phẩm",
        projects: "Dự án",
        contact: "Liên hệ",
        quote: "Báo giá"
    }
  },
  EN: {
    // Updated Nav Items
    nav: ["Home", "Projects", "Products", "News"],
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
    introTitle: "Journey From Sendai to Vietnam",
    introSub: "WATANABE CREATE HERITAGE",
    introContent1: "WATACO was established based on the foundation of WATANABE CREATE Group in Sendai City, Miyagi Prefecture, Japan. Founded on December 17, 2015, WATANABE CREATE has achieved significant success in consulting, design, and construction of solar energy projects in Japan.",
    introContent2: "With quality as our sustainable prestige, WATACO commits to providing the most optimal solutions tailored to every small detail of each project.",
    introContent3: "Furthermore, Wataco has expanded into construction, home renovation, and interior design to bring comfortable, convenient, and modern living spaces to our clients.",
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
    projectCategories: ["Business", "Residential", "Agriculture"],
    projectsData: {
      0: [
        { name: "Thanh Cong Textile", location: "Tay Ninh IP", capacity: "1.2 MWp", production: "1,750 MWh/Yr", year: "2023", img: "https://images.unsplash.com/photo-1565128938229-43654489eb12?auto=format&fit=crop&q=80&w=800" },
        { name: "Logis VI Logistics", location: "VSIP I", capacity: "850 kWp", production: "1,240 MWh/Yr", year: "2022", img: "https://images.unsplash.com/photo-1581094794329-cd56b350a942?auto=format&fit=crop&q=80&w=800" },
        { name: "Precision Mech Factory", location: "HCMC High-Tech", capacity: "2.5 MWp", production: "3,600 MWh/Yr", year: "2023", img: "https://images.unsplash.com/photo-1534951474654-886e563204d5?auto=format&fit=crop&q=80&w=800" }
      ],
      1: [
        { name: "Thao Dien Villa", location: "Thu Duc, HCMC", capacity: "15 kWp", production: "21 MWh/Yr", year: "2023", img: "https://images.unsplash.com/photo-1600596542815-2a502f35f6e4?auto=format&fit=crop&q=80&w=800" },
        { name: "Cityland Park Hills", location: "Go Vap, HCMC", capacity: "8 kWp", production: "11 MWh/Yr", year: "2022", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800" },
        { name: "Resort Villa", location: "Ho Tram", capacity: "20 kWp", production: "29 MWh/Yr", year: "2023", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800" }
      ],
      2: [
        { name: "Hi-tech Melon Farm", location: "Lam Dong", capacity: "500 kWp", production: "720 MWh/Yr", year: "2022", img: "https://images.unsplash.com/photo-1582298649479-7a5528892787?auto=format&fit=crop&q=80&w=800" },
        { name: "Solar Mushroom Farm", location: "Dong Nai", capacity: "200 kWp", production: "290 MWh/Yr", year: "2021", img: "https://images.unsplash.com/photo-1627823521360-1554558e658a?auto=format&fit=crop&q=80&w=800" },
        { name: "Dragon Fruit Farm", location: "Binh Thuan", capacity: "1 MWp", production: "1,450 MWh/Yr", year: "2020", img: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&q=80&w=800" }
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
    partners: ["Canadian Solar", "SMA", "Huawei", "Sungrow", "Longi", "Jinko", "Trina", "Growatt", "GoodWe", "JA Solar"],
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
    hero: {
        sub: "ADVANCED SOLUTIONS FOR EVERY NEED",
        title: "Diverse ",
        highlight: "Product Range",
        desc: "Explore our catalog of high-quality products and technologies, curated from leading global partners, ensuring superior performance and reliability for all solar energy projects."
    },
    filters: {
        all: "All",
        panels: "Solar Panels",
        inverter: "Inverters",
        storage: "Storage"
    },
    ui: {
        searchPlaceholder: "Search products...",
        showing: "Showing",
        products: "products",
        sort: "Sort",
        newest: "Newest",
        priceLow: "Price: Low to High",
        priceHigh: "Price: High to Low",
        viewFast: "Quick View",
        quoteBtn: "Get Quote",
        specPower: "Power",
        specEff: "Efficiency",
        specWarranty: "Warranty",
        noResult: "No products found.",
        resetFilter: "Reset Filter",
        ctaTitle: "Ready to turn solar energy into profit?",
        ctaDesc: "Contact us now to get the best solution for your needs.",
        ctaBtn1: "GET A QUOTE",
        ctaBtn2: "CONTACT US"
    },
    navProducts: {
        home: "Home",
        products: "Products",
        projects: "Projects",
        contact: "Contact",
        quote: "Quote"
    }
  },  JP: {
    // Updated Nav Items
    nav: ["ホーム", "プロジェクト", "製品", "ニュース"],
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
    introTitle: "仙台からベトナムへ",
    introSub: "ワタナベクリエイトの遺産",
    introContent1: "WATACOは、日本の宮城県仙台市にあるワタナベクリエイトグループの基盤の上に設立されました。",
    introContent2: "\"品質こそが持続可能な信頼を生む\"という方針のもと、最適なソリューションを提供します。",
    introContent3: "さらに、Watacoは建設、住宅改修分野にも進出しています。",
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
    projectCategories: ["企業", "住宅", "農業"],
    projectsData: {
      0: [
        { name: "Thanh Cong 繊維工場", location: "タイニン", capacity: "1.2 MWp", production: "1,750 MWh", year: "2023", img: "https://images.unsplash.com/photo-1565128938229-43654489eb12?auto=format&fit=crop&q=80&w=800" },
        { name: "Logis VI 物流倉庫", location: "ビンズオン", capacity: "850 kWp", production: "1,240 MWh", year: "2022", img: "https://images.unsplash.com/photo-1581094794329-cd56b350a942?auto=format&fit=crop&q=80&w=800" },
        { name: "精密機械工場", location: "HCMC", capacity: "2.5 MWp", production: "3,600 MWh", year: "2023", img: "https://images.unsplash.com/photo-1534951474654-886e563204d5?auto=format&fit=crop&q=80&w=800" }
      ],
      1: [
        { name: "タオディエン・ヴィラ", location: "HCMC", capacity: "15 kWp", production: "21 MWh", year: "2023", img: "https://images.unsplash.com/photo-1600596542815-2a502f35f6e4?auto=format&fit=crop&q=80&w=800" },
        { name: "Cityland Park Hills", location: "HCMC", capacity: "8 kWp", production: "11 MWh", year: "2022", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800" },
        { name: "リゾートヴィラ", location: "BR-VT", capacity: "20 kWp", production: "29 MWh", year: "2023", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800" }
      ],
      2: [
        { name: "ハイテクメロン農場", location: "ラムドン", capacity: "500 kWp", production: "720 MWh", year: "2022", img: "https://images.unsplash.com/photo-1582298649479-7a5528892787?auto=format&fit=crop&q=80&w=800" },
        { name: "ソーラーマッシュルーム", location: "ドンナイ", capacity: "200 kWp", production: "290 MWh", year: "2021", img: "https://images.unsplash.com/photo-1627823521360-1554558e658a?auto=format&fit=crop&q=80&w=800" },
        { name: "ドラゴンフルーツ農場", location: "ビントゥアン", capacity: "1 MWp", production: "1,450 MWh", year: "2020", img: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&q=80&w=800" }
      ]
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
    partners: ["Canadian Solar", "SMA", "Huawei", "Sungrow", "Longi", "Jinko", "Trina", "Growatt", "GoodWe", "JA Solar"],
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
      { source: "Tuổi trẻ", date: "08/05", title: "屋上太陽光発電ソリューション。", link: "#", tag: "Tech", img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=600" },
      { source: "CafeF", date: "01/10", title: "グリーントランジション。", link: "#", tag: "Invest", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600" },
      { source: "VIR", date: "11/22", title: "CEOインタビュー。", link: "#", tag: "People", img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=600" },
      { source: "VTV News", date: "09/02", title: "戦略的パートナーシップ。", link: "#", tag: "Event", img: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&q=80&w=600" }
    ],
    mapTitle: "マップ",
    getQuote: "見積もり",
    hero: {
        sub: "あらゆるニーズに対応する高度なソリューション",
        title: "多様な",
        highlight: "製品ラインナップ",
        desc: "世界をリードするパートナーから厳選された、高品質な製品と技術のカタログをご覧ください。あらゆる太陽光発電プロジェクトにおいて、優れた性能と信頼性を保証します。"
    },
    filters: {
        all: "全て",
        panels: "ソーラーパネル",
        inverter: "インバーター",
        storage: "蓄電池"
    },
    ui: {
        searchPlaceholder: "製品を検索...",
        showing: "表示中",
        products: "製品",
        sort: "並べ替え",
        newest: "最新",
        priceLow: "価格：安い順",
        priceHigh: "価格：高い順",
        viewFast: "クイック表示",
        quoteBtn: "見積もり依頼",
        specPower: "出力",
        specEff: "効率",
        specWarranty: "保証",
        noResult: "製品が見つかりません。",
        resetFilter: "フィルターをリセット",
        ctaTitle: "太陽エネルギーを利益に変える準備はできましたか？",
        ctaDesc: "今すぐお問い合わせください。お客様のニーズに最適なソリューションをご提案いたします。",
        ctaBtn1: "見積もり依頼",
        ctaBtn2: "お問い合わせ"
    },
    navProducts: {
        home: "ホーム",
        products: "製品",
        projects: "プロジェクト",
        contact: "お問い合わせ",
        quote: "見積もり"
    }
  },
};

export const useTranslation = () => {
  const [lang, setLang] = useState<Language>('VN');
  const t = translations[lang];

  return { t, lang, setLang, icons: { Factory, Home, Sprout, Sun, Cpu, Battery, Zap, Building2, TrendingUp, Wallet, Newspaper, MapPin, Calendar, BarChart3, Linkedin, Facebook, Youtube, Mail, Phone } };
};

export type Language = 'VN' | 'EN' | 'JP';

export interface TranslationContent {
    nav: string[];
    heroH1: string;
    heroSub: string;
    ctaMain: string;
    ctaSub: string;
    viewProject: string;
    stats: { label: string; val: number; suffix: string; prefix: string }[];
    introTitle: string;
    introSub: string;
    introContent1: string;
    introContent2: string;
    introContent3: string;
    benefitsTitle: string;
    benefitsSub: string;
    benefitTabs: {
        id: string;
        label: string;
        icon: any; 
        title: string;
        desc: string;
        specs: { label: string; val: string }[];
        btnText: string;
        img: string;
    }[];
    projectsTitle: string;
    projectsSub: string;
    projectCategories: string[];
    projectsData: {
        [key: number]: {
            name: string;
            location: string;
            capacity: string;
            production: string;
            year: string;
            img: string;
        }[];
    };
    productsTitle: string;
    productsSub: string;
    productTabs: { id: string; label: string; icon: any }[];
    baseProductsData: {
        [key: string]: { name: string; spec: string; eff: string; img: string; tag: string }[];
    };
    partners: string[];
    financeTitle: string;
    financeSub: string;
    financeSolutions: { icon: any; title: string; desc: string; link: string }[];
    newsTitle: string;
    newsSub: string;
    newsArticles: { source: string; date: string; title: string; link: string; tag: string; img: string }[];
    mapTitle: string;
    getQuote: string;
    // New fields from Products page (index.tsx)
    hero: {
        sub: string;
        title: string;
        highlight: string;
        desc: string;
    };
    filters: {
        all: string;
        panels: string;
        inverter: string;
        storage: string;
    };
    ui: {
        searchPlaceholder: string;
        showing: string;
        products: string;
        sort: string;
        newest: string;
        priceLow: string;
        priceHigh: string;
        viewFast: string;
        quoteBtn: string;
        specPower: string;
        specEff: string;
        specWarranty: string;
        noResult: string;
        resetFilter: string;
        ctaTitle: string;
        ctaDesc: string;
        ctaBtn1: string;
        ctaBtn2: string;
    };
    navProducts: { home: string; products: string; projects: string; contact: string; quote: string; };
}
