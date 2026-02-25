import { BarChart3, Battery, Building2, Calendar, Cpu, DollarSign, Facebook, Factory, FileText, Home, Leaf, Linkedin, Mail, MapPin, Newspaper, Package, Phone, Settings, Shield, Sprout, Sun, TrendingUp, Wallet, Wrench, Youtube, Zap } from 'lucide-react';
import { Activity, useState } from 'react';
import type { Translations } from '../types';

// --- DỮ LIỆU NGÔN NGỮ ---
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
        icon: Activity,
        color: "#228B22",
      },
    ],
    section2SubTitle: "QUY MÔ HOẠT ĐỘNG",
    section2Title: "Mạng Lưới\nDự Án",
    section2Description: "Cam kết chất lượng và hiệu suất vượt trội trên toàn lãnh thổ Việt Nam với hơn 500MWp tổng công suất lắp đặt.",
    section2ClientTitle: "Đối tác tin cậy",
    // SECTION 1: HERITAGE
    introTitle: "Hành Trình Từ Sendai Đến Việt Nam",
    introSub: "DI SẢN WATANABE CREATE",
    introContent1: "WATACO được thành lập dựa trên nền tảng của Tập đoàn WATANABE CREATE tại thành phố Sendai, Tỉnh Miyagi, Nhật Bản. Ra đời vào ngày 17/12/2015, tập đoàn WATANABE CREATE đã có những thành tựu nhất định trong lĩnh vực tư vấn - thiết kế - thi công các công trình điện năng lượng mặt trời tại Nhật Bản, đất nước đi đầu về ngành công nghệ sử dụng nguồn năng lượng tái tạo nhằm bảo vệ môi trường.",
    introContent2: "Với phương châm chất lượng tạo nên uy tín bền vững, WATACO cam kết mang đến khách hàng những giải pháp tối ưu nhất phù hợp với yêu cầu của khách hàng đến từng chi tiết nhỏ của mỗi công trình.",
    introContent3: "WATANABE CREATE ra đời vào ngày 17/12/2015, tập đoàn đã có những thành tựu nhất định trong lĩnh vực tư vấn - thiết kế - thi công các công trình điện năng lượng mặt trời tại Nhật Bản, đất nước đi đầu về ngành công nghệ sử dụng nguồn năng lượng tái tạo nhằm bảo vệ môi trường.",
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
        { name: "Alpha Network", location: "Đồng Văn 4, Ninh Bình", capacity: "0.80 MWp", production: "1,161 MWh/Năm", year: "2023", img: "public/project/alpha.jpg" },
        { name: "TH Milk Dalat", location: "Đơn Dương, Lâm Đồng", capacity: "1.19 MWp", production: "1,723 MWh/Năm", year: "2023", img: "public/project/th.jpg" },
        { name: "MK Seiko Vietnam", location: "KCX Tân Thuận, TP.HCM", capacity: "0.34 MWp", production: "488 MWh/Năm", year: "2022", img: "public/project/mk.JPG" },
        { name: "Kaifa Industry Vietnam", location: "Phú Thọ", capacity: "1.23 MWp", production: "1,779 MWh/Năm", year: "2022", img: "public/project/kaifa.jpg" },
        { name: "Sato Sangyo Vietnam", location: "Mỹ Phước 3, Bình Dương", capacity: "0.48 MWp", production: "696 MWh/Năm", year: "2021", img: "public/project/Sato.jpg" },
        { name: "Ryobi Vietnam", location: "Khu công nghệ cao, TP.HCM", capacity: "0.76 MWp", production: "1,099 MWh/Năm", year: "2021", img: "public/project/Ryobi.JPG" },
        { name: "Stroman Plastic", location: "Văn Lâm, Hưng Yên", capacity: "1.24 MWp", production: "1,801 MWh/Năm", year: "2020", img: "public/project/stroman.png" },
        { name: "Tra Ly Yarn", location: "TP. Thái Bình", capacity: "3.01 MWp", production: "4,362 MWh/Năm", year: "2020", img: "public/project/tra-li.JPG" },
        { name: "The He Moi Phu Tho", location: "Phú Thọ", capacity: "1.23 MWp", production: "1,779 MWh/Năm", year: "2023", img: "public/project/the-he-moi.png" },
        { name: "Huong Sen", location: "Quỳnh Phụ, Thái Bình", capacity: "2.21 MWp", production: "3,201 MWh/Năm", year: "2022", img: "public/project/huong-sen.jpg" },
        { name: "Tan A Dai Thanh Group", location: "Thanh Liêm, Ninh Bình", capacity: "1.24 MWp", production: "1,798 MWh/Năm", year: "2021", img: "public/project/tan-a-dai-thanh.JPG" },
        { name: "AMANN Vietnam", location: "Tam Thăng, Đà Nẵng", capacity: "1.13 MWp", production: "1,637 MWh/Năm", year: "2020", img: "public/project/amann.png" }
      ],
      'international': [
        { name: "Dự án Marsushima", location: "Sendai, Nhật Bản", capacity: "10 MWp", production: "12,000 MWh/Year", year: "2022", img: "public/project/Matoba.jpg" },
        { name: "Dự án Higashimatsushima", location: "Miyagi, Nhật Bản", capacity: "5 MWp", production: "6,000 MWh/Year", year: "2021", img: "public/project/Higashimatsushima.jpg" },
        { name: "Dự án Nemawari Daini", location: "Osaka, Nhật Bản", capacity: "2 MWp", production: "2,400 MWh/Year", year: "2023", img: "public/project/Nemawari.jpg" },
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
    ourServices: {
      title: "Dịch vụ của chúng tôi",
      items: [
        { icon: FileText, title: "Tư vấn và thiết kế hệ thống" },
        { icon: Package, title: "Cung cấp vật tư, thiết bị" },
        { icon: Wrench, title: "Thi công lắp đặt" },
        { icon: Settings, title: "Vận hành và bảo trì" },
        { icon: TrendingUp, title: "Giải pháp tài chính và đầu tư" }
      ]
    }
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
        icon: Activity,
        color: "#228B22",
      },
    ],
    section2SubTitle: "SCALE OF OPERATIONS",
    section2Title: "Nationwide\nProject Network",
    section2Description: "Committed to outstanding quality and performance throughout Vietnam with over 500MWp of total installed capacity.",
    section2ClientTitle: "Trusted Partners",
    introTitle: "Journey From Sendai to Vietnam",
    introSub: "WATANABE CREATE HERITAGE",
    introContent1: "WATACO was established based on the foundation of WATANABE CREATE Group in Sendai City, Miyagi Prefecture, Japan. Founded on December 17, 2015, WATANABE CREATE has achieved significant success in consulting, design, and construction of solar energy projects in Japan.",
    introContent2: "With quality as our sustainable prestige, WATACO commits to providing the most optimal solutions tailored to every small detail of each project.",
    introContent3: "Established on December 17, 2015, WATANABE CREATE has achieved significant success in the consulting, design, and construction of solar energy projects in Japan—a leading nation in renewable energy technologies dedicated to environmental protection.",
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
    projectsData: {
      'vietnam': [
        { name: "Alpha Network", location: "Dong Van 4, Ninh Binh", capacity: "0.80 MWp", production: "1,161 MWh/Year", year: "2023", img: "public/project/alpha.jpg" },
        { name: "TH Milk Dalat", location: "Don Duong, Lam Dong", capacity: "1.19 MWp", production: "1,723 MWh/Year", year: "2023", img: "public/project/th.jpg" },
        { name: "MK Seiko Vietnam", location: "Tan Thuan EPZ, HCMC", capacity: "0.34 MWp", production: "488 MWh/Year", year: "2022", img: "public/project/mk.JPG" },
        { name: "Kaifa Industry Vietnam", location: "Phu Tho", capacity: "1.23 MWp", production: "1,779 MWh/Year", year: "2022", img: "public/project/kaifa.jpg" },
        { name: "Sato Sangyo Vietnam", location: "My Phuoc 3, Binh Duong", capacity: "0.48 MWp", production: "696 MWh/Year", year: "2021", img: "public/project/Sato.jpg" },
        { name: "Ryobi Vietnam", location: "Hi-Tech Park, HCMC", capacity: "0.76 MWp", production: "1,099 MWh/Year", year: "2021", img: "public/project/Ryobi.JPG" },
        { name: "Stroman Plastic", location: "Van Lam, Hung Yen", capacity: "1.24 MWp", production: "1,801 MWh/Year", year: "2020", img: "public/project/stroman.png" },
        { name: "Tra Ly Yarn", location: "Thai Binh City", capacity: "3.01 MWp", production: "4,362 MWh/Year", year: "2020", img: "public/project/tra-li.JPG" },
        { name: "The He Moi Phu Tho", location: "Phu Tho", capacity: "1.23 MWp", production: "1,779 MWh/Year", year: "2023", img: "public/project/the-he-moi.png" },
        { name: "Huong Sen", location: "Quynh Phu, Thai Binh", capacity: "2.21 MWp", production: "3,201 MWh/Year", year: "2022", img: "public/project/huong-sen.jpg" },
        { name: "Tan A Dai Thanh Group", location: "Thanh Liem, Ninh Binh", capacity: "1.24 MWp", production: "1,798 MWh/Year", year: "2021", img: "public/project/tan-a-dai-thanh.JPG" },
        { name: "AMANN Vietnam", location: "Tam Thang, Da Nang", capacity: "1.13 MWp", production: "1,637 MWh/Year", year: "2020", img: "public/project/amann.png" }
      ],
      'international': [
        { name: "Marsushima Solar", location: "Sendai, Japan", capacity: "10 MWp", production: "12,000 MWh/Year", year: "2022", img: "public/project/Matoba.jpg" },
        { name: "Higashimatsushima Sholar", location: "Miyagi, Japan", capacity: "5 MWp", production: "6,000 MWh/Year", year: "2021", img: "public/project/Higashimatsushima.jpg" },
        { name: "Nemawari Daini Sholar", location: "Osaka, Japan", capacity: "2 MWp", production: "2,400 MWh/Year", year: "2023", img: "public/project/Nemawari.jpg" }
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
    ourServices: {
      title: "Our Services",
      items: [
        { icon: FileText, title: "System Consulting & Design" },
        { icon: Package, title: "Equipment & Material Supply" },
        { icon: Wrench, title: "Installation & Construction" },
        { icon: Settings, title: "Operation & Maintenance (O&M)" },
        { icon: TrendingUp, title: "Financial & Investment Solutions" }
      ]
    }
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
        icon: Activity,
        color: "#228B22",
      },
    ],
    section2SubTitle: "事業規模",
    section2Title: "全国の\nプロジェクト網",
    section2Description: "ベトナム全土で500MWp以上の総設置容量で、卓越した品質とパフォーマンスをお約束します。",
    section2ClientTitle: "信頼できるパートナー",
    introTitle: "仙台からベトナムへ",
    introSub: "ワタナベクリエイトの遺産",
    introContent1: "WATACOは、日本の宮城県仙台市にあるワタナベクリエイトグループの基盤の上に設立されました。",
    introContent2: "「品質こそが持続可能な信頼を生む」という方針のもと、最適なソリューションを提供します。",
    introContent3: "「WATANABE CREATEは2015年12月17日に設立されました。当社は、環境保護のための再生可能エネルギー技術における先進国である日本において、太陽光発電施設のコンサルティング・設計・施工の分野で確かな実績を築いてまいりました。」",
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
    projectsData: {
      'vietnam': [
        { name: "Alpha Network", location: "ニンビン省、ドンバン4", capacity: "0.80 MWp", production: "1,161 MWh/年", year: "2023", img: "public/project/alpha.jpg" },
        { name: "TH Milk Dalat", location: "ラムドン省、ドンズオン", capacity: "1.19 MWp", production: "1,723 MWh/年", year: "2023", img: "public/project/th.jpg" },
        { name: "MK Seiko Vietnam", location: "ホーチミン市、タントゥアン輸出加工区", capacity: "0.34 MWp", production: "488 MWh/年", year: "2022", img: "public/project/mk.JPG" },
        { name: "Kaifa Industry Vietnam", location: "フート省", capacity: "1.23 MWp", production: "1,779 MWh/年", year: "2022", img: "public/project/kaifa.jpg" },
        { name: "Sato Sangyo Vietnam", location: "ビンズオン省、ミーフオック3", capacity: "0.48 MWp", production: "696 MWh/年", year: "2021", img: "public/project/Sato.jpg" },
        { name: "Ryobi Vietnam", location: "ホーチミン市、ハイテクパーク", capacity: "0.76 MWp", production: "1,099 MWh/年", year: "2021", img: "public/project/Ryobi.JPG" },
        { name: "Stroman Plastic", location: "フンイエン省、ヴァンラム", capacity: "1.24 MWp", production: "1,801 MWh/年", year: "2020", img: "public/project/stroman.png" },
        { name: "Tra Ly Yarn", location: "タイビン市", capacity: "3.01 MWp", production: "4,362 MWh/年", year: "2020", img: "public/project/tra-li.JPG" },
        { name: "The He Moi Phu Tho", location: "フート省", capacity: "1.23 MWp", production: "1,779 MWh/年", year: "2023", img: "public/project/the-he-moi.png" },
        { name: "Huong Sen", location: "タイビン省、クインフー", capacity: "2.21 MWp", production: "3,201 MWh/年", year: "2022", img: "public/project/huong-sen.jpg" },
        { name: "Tan A Dai Thanh Group", location: "ニンビン省、タンリエム", capacity: "1.24 MWp", production: "1,798 MWh/年", year: "2021", img: "public/project/tan-a-dai-thanh.JPG" },
        { name: "AMANN Vietnam", location: "ダナン市、タムタン", capacity: "1.13 MWp", production: "1,637 MWh/年", year: "2020", img: "public/project/amann.png" }
      ],
      'international': [
        {
          name: "マルシマ・ソーラー", // Hoặc "松島ソーラー" (Matsushima) nếu tên gốc là Matsushima
          location: "日本、仙台市",
          capacity: "10 MWp",
          production: "12,000 MWh/年",
          year: "2022",
          img: "public/project/Matoba.jpg"
        },
        {
          name: "東松島ソーラー", // Higashimatsushima Solar
          location: "日本、宮城県",
          capacity: "5 MWp",
          production: "6,000 MWh/年",
          year: "2021",
          img: "public/project/Higashimatsushima.jpg"
        },
        {
          name: "根廻第二ソーラー", // Nemawari Daini Solar
          location: "日本、大阪府",
          capacity: "2 MWp",
          production: "2,400 MWh/年",
          year: "2023",
          img: "public/project/Nemawari.jpg"
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
    ourServices: {
      title: "当社のサービス",
      items: [
        { icon: FileText, title: "システムのコンサルティング・設計" },
        { icon: Package, title: "機材・設備の供給" },
        { icon: Wrench, title: "設置・施工" },
        { icon: Settings, title: "運用・保守 (O&M)" },
        { icon: TrendingUp, title: "金融・投資ソリューション" }
      ]
    }

  }
};

export const useTranslation = () => {
  const [lang, setLang] = useState<Language>('VN');
  const t = translations[lang];

  return { t, lang, setLang, icons: { Factory, Home, Sprout, Sun, Cpu, Battery, Zap, Building2, TrendingUp, Wallet, Newspaper, MapPin, Calendar, BarChart3, Linkedin, Facebook, Youtube, Mail, Phone } };
};

export type Language = 'VN' | 'EN' | 'JP';
