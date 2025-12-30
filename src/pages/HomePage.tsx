/*
 * WATACO ENGINEERING WEBSITE
 * Version: Homepage-v.2.5 (Fixed)
 * Date: 2024
 * Changes:
 * - CRITICAL BUG FIX: Removed duplicate declarations of helper components (`WatacoLogo`, `CountUp`, `StaggerContainer`, `StaggerItem`) that were causing build errors.
 * - Structure: Components are now defined exactly once at the top level.
 * - Functionality: Preserved all homepage features (Mobile Nav, Animations, Map, etc.).
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useInView } from 'framer-motion';
import { ArrowRight, Menu, X, MapPin, Home, Newspaper, Zap, Building2, TrendingUp, Wallet, Calendar, BarChart3, Download, ChevronLeft, ChevronRight, Cpu, Battery, Factory, Sprout, Sun, Linkedin, Facebook, Youtube, Mail, Phone } from 'lucide-react';
import WatacoLogo from '../components/common/WatacoLogo';
import type { CountUpProps, StaggerContainerProps, StaggerItemProps, Translations, TranslationContent, ProjectData, Product } from '../types';

// --- 1. GLOBAL STYLES ---
const FontStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&family=Roboto+Mono:wght@400;500;700&display=swap');
    
    :root {
      --font-body: 'Noto Sans JP', sans-serif;
      --font-heading: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
      --font-tech: 'Roboto Mono', monospace;
    }

    body {
      font-family: var(--font-body) !important;
      overflow-x: hidden;
    }
    
    .font-heading {
      font-family: var(--font-heading);
      letter-spacing: -0.01em; 
    }

    .font-tech {
      font-family: var(--font-tech);
      letter-spacing: -0.03em;
    }
    
    .font-jp-style {
      font-feature-settings: "palt";
      letter-spacing: 0.05em;
    }
    
    .hero-text-shadow {
      text-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
    }

    .news-list-scroll::-webkit-scrollbar {
      width: 4px;
    }
    .news-list-scroll::-webkit-scrollbar-track {
      background: #f1f1f1;
    }
    .news-list-scroll::-webkit-scrollbar-thumb {
      background: #ccc;
      border-radius: 4px;
    }
    .news-list-scroll::-webkit-scrollbar-thumb:hover {
      background: #228B22;
    }
    
    .no-scrollbar::-webkit-scrollbar {
      display: none;
    }
    .no-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  `}</style>
);

// --- 2. REUSABLE COMPONENTS (Defined ONCE) ---

const CountUp: React.FC<CountUpProps> = ({ value, suffix = "", decimals = 0, prefix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(current);
        }
      }, 2000 / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-mono font-tech">
      {prefix}{count.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}{suffix}
    </span>
  );
};

const StaggerContainer: React.FC<StaggerContainerProps> = ({ children, className, delay = 0 }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, amount: 0.1, margin: "0px 0px -50px 0px" }}
    variants={{
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: delay }
      }
    }}
    className={className}
  >
    {children}
  </motion.div>
);

const StaggerItem: React.FC<StaggerItemProps> = ({ children, className }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    }}
    className={className}
  >
    {children}
  </motion.div>
);

// --- 3. DATA & TRANSLATIONS ---
const translations: Translations = {
  VN: {
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
        { name: "Thanh Cong Textile Factory", location: "KCN Trảng Bàng, Tây Ninh", capacity: "1.2 MWp", production: "1,750 MWh/Năm", year: "2023", img: "https://images.unsplash.com/photo-1565128938229-43654489eb12?auto=format&fit=crop&q=80&w=800" },
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
    getQuote: "NHẬN BÁO GIÁ"
  },
  EN: {
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
    getQuote: "QUOTE"
  },
  JP: {
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
    introContent2: "「品質こそが持続可能な信頼を生む」という方針のもと、最適なソリューションを提供します。",
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
      { source: "Tuổi Trẻ", date: "08/05", title: "屋上太陽光発電ソリューション。", link: "#", tag: "Tech", img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=600" },
      { source: "CafeF", date: "01/10", title: "グリーントランジション。", link: "#", tag: "Invest", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600" },
      { source: "VIR", date: "11/22", title: "CEOインタビュー。", link: "#", tag: "People", img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=600" },
      { source: "VTV News", date: "09/02", title: "戦略的パートナーシップ。", link: "#", tag: "Event", img: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&q=80&w=600" }
    ],
    mapTitle: "マップ",
    getQuote: "見積もり"
  }
};

// --- MAIN APP ---
export default function HomePage() {
  const [lang, setLang] = useState<'VN' | 'EN' | 'JP'>('VN');
  const [activeBenefit, setActiveBenefit] = useState(0);

  // Mobile Menu State
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Projects Slider State
  const [activeProjectTab, setActiveProjectTab] = useState(0);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  // Product Slider State
  const [activeProductTab, setActiveProductTab] = useState('panels');
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [isProductSliderHovered, setIsProductSliderHovered] = useState(false);

  // NEWS STATE
  const [activeNewsIndex, setActiveNewsIndex] = useState(0);

  const t: TranslationContent = translations[lang];
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 200]);

  const CurrentIcon = t.benefitTabs[activeBenefit].icon;

  // Helper to generate full product list (16 items)
  const generateFullProductList = (category: string): Product[] => {
    const baseItems = t.baseProductsData[category];
    let fullList: Product[] = [];
    for (let i = 0; i < 16; i++) {
      const baseItem = baseItems[i % baseItems.length];
      fullList.push({
        ...baseItem,
        id: `${category}-${i}`,
        name: `${baseItem.name} ${String.fromCharCode(65 + i)}`,
      });
    }
    return fullList;
  };

  const currentProducts = generateFullProductList(activeProductTab);
  const itemsPerPage = 4;

  const handleProjectTabChange = (idx: number) => {
    setActiveProjectTab(idx);
    setCurrentProjectIndex(0);
  };

  const paginateProject = (newDirection: number) => {
    const projects: ProjectData[] = t.projectsData[activeProjectTab];
    let newIndex = currentProjectIndex + newDirection;
    if (newIndex < 0) newIndex = projects.length - 1;
    if (newIndex >= projects.length) newIndex = 0;
    setCurrentProjectIndex(newIndex);
  };

  // Helper to determine card position and style
  const getCardStyle = (index: number, total: number) => {
    let offset = index - currentProjectIndex;
    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;
    if (offset === 0) return { x: '0%', scale: 1, opacity: 1, zIndex: 10, filter: 'brightness(100%)', pointerEvents: 'auto' };
    else if (offset === -1 || (currentProjectIndex === 0 && index === total - 1)) return { x: '-70%', scale: 0.85, opacity: 0.6, zIndex: 5, filter: 'brightness(50%) blur(1px)', pointerEvents: 'none' };
    else if (offset === 1 || (currentProjectIndex === total - 1 && index === 0)) return { x: '70%', scale: 0.85, opacity: 0.6, zIndex: 5, filter: 'brightness(50%) blur(1px)', pointerEvents: 'none' };
    else return { x: '0%', scale: 0.5, opacity: 0, zIndex: 0, pointerEvents: 'none' };
  };

  // --- PRODUCT CAROUSEL LOGIC ---
  useEffect(() => {
    let interval: number | undefined;
    if (!isProductSliderHovered) {
      interval = setInterval(() => {
        handleProductNext();
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isProductSliderHovered, currentProductIndex]);

  const handleProductNext = () => {
    setCurrentProductIndex((prev) =>
      (prev + 1) >= (currentProducts.length - itemsPerPage + 1) ? 0 : prev + 1
    );
  };

  const handleProductPrev = () => {
    setCurrentProductIndex((prev) =>
      prev === 0 ? (currentProducts.length - itemsPerPage) : prev - 1
    );
  };

  // --- NEWS CAROUSEL LOGIC (AUTO-PLAY) ---
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveNewsIndex((prev) => (prev + 1) % t.newsArticles.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [t.newsArticles.length]);

  // Navigation Links Mapping
  const navLinks = ["/", "/projects", "/products", "/news"];

  return (
    <div className="bg-[#F4F7F6] text-[#1A2B3C] selection:bg-[#228B22] selection:text-white">
      <FontStyles />

      {/* Header - Green Background (#228B22) */}
      <header className="fixed top-0 w-full z-50 bg-[#228B22]/95 backdrop-blur-md border-b border-white/5 shadow-lg transition-colors duration-300">
        <div className="max-w-[1440px] mx-auto px-6 h-16 lg:h-20 flex justify-between items-center">
          <WatacoLogo />

          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-10 items-center text-[11px] font-bold uppercase tracking-[0.2em] text-white/90">
            {t.nav.map((item, idx) => (
              <a key={idx} href={navLinks[idx]} className="hover:text-[#FFD700] transition-colors">{item}</a>
            ))}
            <div className="h-4 w-px bg-white/20" />
            <div className="flex items-center space-x-3 text-xs">
              {['VN', 'EN', 'JP'].map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l as 'VN' | 'EN' | 'JP')}
                  className={`transition-colors ${lang === l ? 'text-[#FFD700] font-bold' : 'text-gray-200 hover:text-white'}`}
                >
                  {l}
                </button>
              ))}
            </div>
            <button className="bg-white text-[#228B22] px-6 py-2.5 rounded-md text-[10px] font-black tracking-widest hover:scale-105 transition-all uppercase shadow-lg border border-transparent hover:bg-[#FFD700] hover:text-[#1A2B3C]">
              {t.getQuote}
            </button>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-[#1A2B3C] text-white flex flex-col p-6 lg:hidden"
          >
            <div className="flex justify-between items-center mb-8">
              <WatacoLogo />
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2"><X size={28} /></button>
            </div>
            <nav className="flex flex-col space-y-6 text-xl font-bold uppercase tracking-widest">
              {t.nav.map((item, idx) => (
                <a key={idx} href={navLinks[idx]} onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#FFD700] border-b border-white/10 pb-4">{item}</a>
              ))}
            </nav>
            <div className="mt-auto flex flex-col space-y-6">
              <div className="flex space-x-6 text-sm font-bold">
                {['VN', 'EN', 'JP'].map((l) => (
                  <button key={l} onClick={() => setLang(l as 'VN' | 'EN' | 'JP')} className={lang === l ? 'text-[#FFD700]' : 'text-gray-400'}>{l}</button>
                ))}
              </div>
              <button className="bg-[#228B22] text-white w-full py-4 rounded-md font-black uppercase tracking-widest min-h-[44px]">
                {t.getQuote}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section (#section-0) */}
      <section id="section-0" className="relative h-screen flex items-center overflow-hidden bg-[#1A2B3C]">
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&q=80&w=2000"
            className="w-full h-full object-cover opacity-100"
            alt="Solar Panels on Green Grass"
            loading="eager"
          />
          {/* UPDATED OVERLAY: Restored simple clean gradient from v1.5 for readability (approx 10-40%) */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#FFD700]/10 to-[#228B22]/40" />
        </motion.div>

        <div className="absolute inset-0 z-1 pointer-events-none opacity-10"
          style={{ backgroundImage: 'linear-gradient(#ffffff22 1px, transparent 1px), linear-gradient(90deg, #ffffff22 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        <div className="max-w-[1440px] mx-auto px-6 w-full relative z-10 hero-text-shadow">
          <AnimatePresence mode="wait">
            <motion.div
              key={lang}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl"
            >
              <div className="flex items-center space-x-4 mb-4 lg:mb-8">
                <span className="h-px w-8 lg:w-12 bg-[#FFD700] drop-shadow-md" />
                <span className="text-[#FFD700] font-black text-[10px] lg:text-xs uppercase tracking-[0.5em] font-heading drop-shadow-md">Precision Engineering</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[80px] font-black text-white leading-[1.1] mb-8 lg:mb-12 whitespace-pre-line tracking-tighter font-heading drop-shadow-2xl">
                {t.heroH1.split('\n').map((line, index) => (
                  <span key={index} className={`block ${index >= 2 ? "text-[#FFD700]" : ""}`}>
                    {line}
                  </span>
                ))}
              </h1>

              <p className="text-white text-base lg:text-2xl max-w-2xl mb-8 lg:mb-12 font-bold leading-relaxed border-l-4 border-[#228B22] pl-6 lg:pl-8 drop-shadow-lg">
                {t.heroSub}
              </p>

              <div className="flex flex-wrap gap-6">
                <button className="bg-white text-[#228b22] px-8 lg:px-12 py-4 lg:py-6 font-black text-xs tracking-widest uppercase hover:bg-[#FFD700] hover:text-[#1A2B3C] transition-all shadow-xl border border-transparent rounded-md min-h-[44px]">
                  {t.ctaMain}
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Trust Bar (Stats) */}
      <section id="section-stats" className="bg-[#1A2B3C] py-12 lg:py-20 relative z-20 border-y border-white/10 shadow-2xl">
        <StaggerContainer className="max-w-[1440px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            {t.stats.map((stat, idx) => (
              <StaggerItem key={idx} className="text-center group px-4 pt-6 lg:pt-0">
                <div className="text-4xl lg:text-6xl font-bold text-[#FFD700] mb-2 lg:mb-4 font-tech tracking-tighter">
                  {stat.prefix}
                  <CountUp value={stat.val} suffix={stat.suffix} decimals={stat.val % 1 !== 0 ? 1 : 0} />
                </div>
                <div className="text-[10px] text-white font-bold uppercase tracking-[0.2em] font-heading">{stat.label}</div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </section>

      {/* Heritage Section */}
      <section id="section-1" className="py-20 lg:py-40 bg-white relative overflow-hidden">
        {/* BG SVG kept same */}
        <div className="max-w-[1440px] mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <StaggerContainer className="lg:col-span-5 relative">
              <div className="relative group">
                <div className="overflow-hidden rounded-[40px] lg:rounded-[100px/75px] border-[8px] lg:border-[12px] border-[#F4F7F6] shadow-2xl relative">
                  <img
                    src="https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&q=80&w=1200"
                    alt="Sendai City Heritage"
                    className="w-full aspect-[4/3] object-cover grayscale"
                    loading="lazy"
                  />
                  {/* Badge */}
                  <div className="absolute top-6 right-6 bg-[#FFD700] p-3 shadow-lg z-10">
                    <div className="text-[8px] lg:text-[10px] font-black uppercase tracking-widest text-[#1A2B3C] leading-none mb-1">ESTABLISHED</div>
                    <div className="text-lg lg:text-xl font-black text-[#1A2B3C] leading-none">2015</div>
                  </div>
                </div>
              </div>
            </StaggerContainer>

            <StaggerContainer className="lg:col-span-7" delay={0.2}>
              <StaggerItem className="flex items-center space-x-4 mb-6 lg:mb-8">
                <div className="p-3 bg-white border border-gray-100 rounded-full shadow-sm">
                  <MapPin size={20} className="text-[#228B22]" />
                </div>
                <h3 className="text-[#228b22] font-black text-sm uppercase tracking-[0.5em] font-heading">{t.introSub}</h3>
              </StaggerItem>
              <StaggerItem>
                <h2 className="text-4xl lg:text-7xl font-black text-[#1A2B3C] mb-8 lg:mb-12 tracking-tighter leading-none font-heading">{t.introTitle}</h2>
              </StaggerItem>
              <StaggerItem className="space-y-6 lg:space-y-8">
                <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
                  <div className="border-l-4 border-[#FFD700] pl-6 py-1">
                    <p className="text-lg lg:text-xl text-gray-700 italic font-medium leading-relaxed">"{t.introContent2}"</p>
                  </div>
                  <div className="flex flex-col space-y-4">
                    <p className="text-sm text-gray-500 leading-relaxed font-light">{t.introContent3}</p>
                    <div className="flex items-center space-x-2 text-[#228B22] font-bold text-xs uppercase tracking-widest mt-auto">
                      <Home size={16} />
                      <span>Residential & Industrial</span>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="section-2" className="py-20 lg:py-32 bg-[#F4F7F6] relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 relative z-10">
          <StaggerContainer className="flex flex-col items-center mb-12 lg:mb-16 text-center">
            <h3 className="text-xs font-black text-[#228b22] tracking-[0.6em] uppercase mb-4 font-heading">{t.benefitsSub}</h3>
            <h2 className="text-3xl lg:text-5xl font-black text-[#1A2B3C] font-heading">{t.benefitsTitle}</h2>
          </StaggerContainer>

          <StaggerContainer className="grid lg:grid-cols-12 gap-8 h-auto lg:h-[600px]" delay={0.2}>
            {/* Left Column: Square Grid Navigation - ROUNDED-MD */}
            <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-2 gap-4 h-full content-start">
              {t.benefitTabs.map((tab, idx) => (
                <StaggerItem key={tab.id}>
                  <button
                    onClick={() => setActiveBenefit(idx)}
                    className={`w-full relative aspect-square p-6 flex flex-col items-center justify-center text-center transition-all duration-300 group overflow-hidden border-0 shadow-lg rounded-md min-h-[140px] aspect-auto lg:aspect-square ${activeBenefit === idx
                      ? 'bg-[#1A2B3C] text-white scale-105 z-10'
                      : 'bg-white text-gray-400 hover:bg-[#228B22]/10 hover:text-[#228B22]'
                      }`}
                  >
                    <div className={`mb-4 p-3 rounded-full transition-colors ${activeBenefit === idx ? 'bg-white/10' : 'bg-[#228b22]/10 group-hover:bg-[#228b22]/20'
                      }`}>
                      <tab.icon size={32} className={activeBenefit === idx ? 'text-[#FFD700]' : 'text-[#228b22]'} />
                    </div>
                    <span className="font-black uppercase tracking-widest text-[10px] leading-relaxed font-heading">{tab.label}</span>
                  </button>
                </StaggerItem>
              ))}
              {/* Extra Box - ROUNDED-MD */}
              <StaggerItem className="aspect-square bg-[#228b22] p-6 flex flex-col items-center justify-center text-center shadow-lg rounded-md">
                <div className="text-white font-black text-3xl mb-1 font-tech">30%</div>
                <div className="text-white/80 text-[9px] font-bold uppercase tracking-widest leading-tight font-heading">Tiết kiệm trung bình</div>
                <ArrowRight className="mt-4 text-[#FFD700]" size={20} />
              </StaggerItem>
            </div>

            {/* Right Column: Content - FadeInUp Transition */}
            <StaggerItem className="lg:col-span-8 relative h-[500px] lg:h-full rounded-sm overflow-hidden shadow-2xl group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeBenefit}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <img
                    src={t.benefitTabs[activeBenefit].img}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                    alt="Solution Background"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#228B22] to-[#FFD700]/10 opacity-95 lg:opacity-90" />
                  <div className="absolute inset-0 p-8 lg:p-16 flex flex-col justify-end">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="flex items-center space-x-3 mb-4 text-[#FFD700]">
                        <CurrentIcon size={24} />
                        <span className="font-bold uppercase tracking-widest text-xs font-heading">{t.benefitTabs[activeBenefit].label} Solution</span>
                      </div>
                      <h3 className="text-2xl lg:text-5xl font-black text-white mb-4 lg:mb-6 leading-tight max-w-2xl font-heading">
                        {t.benefitTabs[activeBenefit].title}
                      </h3>
                      <p className="text-gray-100 leading-relaxed text-base lg:text-lg mb-8 lg:mb-10 max-w-2xl font-light border-l-2 border-[#FFD700] pl-6">
                        {t.benefitTabs[activeBenefit].desc}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-8 mb-8 lg:mb-10 border-t border-white/20 pt-8">
                        {t.benefitTabs[activeBenefit].specs.map((spec, i) => (
                          <div key={i}>
                            <div className="text-xl lg:text-3xl font-black text-white mb-1 font-tech">{spec.val}</div>
                            <div className="text-[9px] font-bold text-[#228b22] uppercase tracking-widest font-heading">{spec.label}</div>
                          </div>
                        ))}
                      </div>
                      <button className="inline-flex items-center space-x-3 bg-white text-[#228B22] px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-[#FFD700] hover:text-[#1A2B3C] transition-colors shadow-lg rounded-md min-h-[44px]">
                        <span>{t.benefitTabs[activeBenefit].btnText}</span>
                        <ArrowRight size={14} />
                      </button>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* SECTION 3: PROJECTS - 3-CARD CENTER CAROUSEL (NEW v1.16: Rounded Tabs) */}
      <section id="section-3" className="py-20 lg:py-32 bg-[#F8FAFC] text-[#1A2B3C] relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 relative z-10">
          {/* Section Header */}
          <StaggerContainer className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-8">
            <div>
              <h3 className="text-[#228B22] font-black text-sm uppercase tracking-[0.5em] font-heading mb-2">{t.projectsSub}</h3>
              <h2 className="text-3xl lg:text-6xl font-black tracking-tighter leading-none text-[#1A2B3C] font-heading">{t.projectsTitle}</h2>
            </div>

            {/* Tabs Navigation - ROUNDED-MD */}
            <div className="flex flex-wrap gap-4">
              {t.projectCategories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => handleProjectTabChange(idx)}
                  className={`px-6 py-3 text-[10px] font-black uppercase tracking-[0.2em] transition-all border rounded-md min-h-[44px] ${activeProjectTab === idx
                    ? 'bg-[#228b22] text-white border-[#228b22]'
                    : 'bg-transparent text-gray-500 border-gray-200 hover:border-[#228b22] hover:text-[#228b22]'
                    }`}
                >
                  <span className="font-heading">{cat}</span>
                </button>
              ))}
            </div>
          </StaggerContainer>

          {/* 3-CARD CAROUSEL - TRANSITION UPDATED TO FadeInUp for Category Switch */}
          <motion.div
            key={activeProjectTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative w-full h-[600px] lg:h-[500px] flex items-center justify-center touch-pan-y"
          >

            {/* Slider Track with Swipe */}
            <motion.div
              className="relative w-full h-full flex items-center justify-center"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, { offset }) => {
                const swipe = offset.x;
                if (swipe < -100) paginateProject(1);
                else if (swipe > 100) paginateProject(-1);
              }}
            >
              {t.projectsData[activeProjectTab].map((project, idx) => {
                const cardStyle = getCardStyle(idx, t.projectsData[activeProjectTab].length);

                return (
                  <motion.div
                    key={`${activeProjectTab}-${idx}`}
                    className="absolute top-0 w-[85%] lg:w-[65%] h-full bg-[#111] rounded-md shadow-2xl overflow-hidden border border-white/10"
                    initial={false}
                    animate={cardStyle}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <img
                      src={project.img}
                      alt={project.name}
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A2B3C] via-transparent to-transparent opacity-90" />

                    {/* Card Content - Only show for center card, or fade others */}
                    <div className="absolute bottom-0 left-0 w-full p-6 lg:p-12 transition-opacity duration-300"
                      style={{ opacity: cardStyle.opacity < 1 ? 0 : 1 }}>
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="text-[#FFD700] text-[10px] font-bold tracking-widest uppercase font-heading flex items-center">
                          <MapPin size={12} className="mr-2" />
                          {project.location}
                        </span>
                      </div>
                      <h3 className="text-2xl lg:text-5xl font-black text-white leading-tight mb-6 font-heading">
                        {project.name}
                      </h3>
                      {/* UPDATED STATS ROW: Year - Capacity - Production */}
                      <div className="flex flex-wrap items-center gap-4 lg:gap-6 border-t border-white/20 pt-6">
                        <div className="flex items-center text-[#FFD700]">
                          <Calendar size={16} className="mr-2 opacity-80" />
                          <span className="text-sm font-bold font-tech">{project.year}</span>
                        </div>
                        <div className="flex items-center text-[#FFD700]">
                          <Zap size={16} className="mr-2 opacity-80" />
                          <span className="text-sm font-bold font-tech">{project.capacity}</span>
                        </div>
                        <div className="flex items-center text-[#FFD700]">
                          <BarChart3 size={16} className="mr-2 opacity-80" />
                          <span className="text-sm font-bold font-tech">{project.production}</span>
                        </div>

                        <button className="ml-auto bg-white/10 hover:bg-[#228b22] text-white px-6 py-2 text-[9px] font-black uppercase tracking-widest transition-colors border border-white/20 hover:border-[#228b22] rounded-md min-h-[44px]">
                          {t.viewProject}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Controls */}
            <div className="absolute inset-y-0 left-0 flex items-center z-30 pointer-events-none">
              <button
                onClick={() => paginateProject(-1)}
                className="ml-2 lg:ml-4 w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center border border-white/20 bg-black/50 text-white rounded-full backdrop-blur-sm pointer-events-auto"
              >
                <ChevronLeft size={24} />
              </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center z-30 pointer-events-none">
              <button
                onClick={() => paginateProject(1)}
                className="mr-2 lg:mr-4 w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center border border-white/20 bg-black/50 text-white rounded-full backdrop-blur-sm pointer-events-auto"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Indicators */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
              {t.projectsData[activeProjectTab].map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentProjectIndex(idx)}
                  className={`h-1 transition-all duration-300 ${idx === currentProjectIndex ? 'bg-[#FFD700] w-8' : 'bg-[#1A2B3C]/30 w-4 hover:bg-[#1A2B3C]'}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section id="section-4" className="py-20 lg:py-32 bg-[#EAEFE9] relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 relative z-10">
          <StaggerContainer className="flex flex-col items-center mb-12 lg:mb-16 text-center">
            <h3 className="text-xs font-black text-[#228b22] tracking-[0.6em] uppercase font-heading mb-4">{t.productsSub}</h3>
            <h2 className="text-3xl lg:text-5xl font-black text-[#1A2B3C] font-heading">{t.productsTitle}</h2>
          </StaggerContainer>

          <StaggerContainer className="flex justify-center mb-12">
            <div className="inline-flex bg-white p-1 rounded-full shadow-lg overflow-x-auto max-w-full">
              {t.productTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveProductTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 lg:px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap min-h-[44px] ${activeProductTab === tab.id
                    ? 'bg-[#1A2B3C] text-white shadow-md'
                    : 'text-gray-400 hover:text-[#228b22]'
                    }`}
                >
                  <tab.icon size={14} />
                  <span className="font-heading">{tab.label}</span>
                </button>
              ))}
            </div>
          </StaggerContainer>

          {/* PRODUCT CAROUSEL */}
          <StaggerContainer
            className="relative w-full max-w-[1200px] mx-auto overflow-hidden px-4 lg:px-12"
            onMouseEnter={() => setIsProductSliderHovered(true)}
            onMouseLeave={() => setIsProductSliderHovered(false)}
          >
            <div className="overflow-hidden">
              <motion.div
                className="flex space-x-4 lg:space-x-8"
                drag="x"
                dragConstraints={{ right: 0, left: -((currentProducts.length * 320) - 300) }}
                animate={{ x: `-${currentProductIndex * (320 + 32)}px` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {currentProducts.map((product, idx) => (
                  <div
                    key={`${product.id}-${idx}`}
                    className="flex-shrink-0 w-72 lg:w-80 bg-white group hover:shadow-2xl transition-all duration-300 relative overflow-hidden border border-gray-100 hover:border-[#228b22] rounded-md"
                  >
                    <div className="absolute top-0 right-0 p-4 z-10">
                      <span className="bg-[#FFD700] text-[#1A2B3C] text-[9px] font-bold px-3 py-1 uppercase tracking-widest font-heading rounded-md">{product.tag}</span>
                    </div>
                    <div className="p-8 pb-0 flex justify-center bg-gray-50 group-hover:bg-white transition-colors">
                      <img src={product.img} alt={product.name} loading="lazy" className="h-40 lg:h-48 object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="p-6 lg:p-8 border-t border-gray-100">
                      <h4 className="text-lg font-black text-[#1A2B3C] mb-2 font-heading truncate">{product.name}</h4>
                      <div className="space-y-3 mb-6">
                        <div className="flex justify-between text-xs text-gray-500 border-b border-dashed border-gray-200 pb-2">
                          <span>Spec</span>
                          <span className="font-bold text-[#1A2B3C] font-tech">{product.spec}</span>
                        </div>
                        <div className="flex justify-between text-xs text-gray-500 border-b border-dashed border-gray-200 pb-2">
                          <span>Efficiency</span>
                          <span className="font-bold text-[#228b22] font-tech">{product.eff}</span>
                        </div>
                      </div>
                      <button className="w-full py-3 border border-[#1A2B3C] text-[#1A2B3C] text-[9px] font-black uppercase tracking-widest hover:bg-[#228b22] hover:text-white hover:border-[#228b22] transition-colors flex items-center justify-center space-x-2 rounded-md min-h-[44px]">
                        <Download size={12} />
                        <span>Download Datasheet</span>
                      </button>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Carousel Controls */}
            <button
              onClick={handleProductPrev}
              className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center bg-white border border-gray-200 text-[#1A2B3C] hover:bg-[#228b22] hover:text-white rounded-full shadow-lg transition-colors z-20"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleProductNext}
              className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center bg-white border border-gray-200 text-[#1A2B3C] hover:bg-[#228b22] hover:text-white rounded-full shadow-lg transition-colors z-20"
            >
              <ChevronRight size={20} />
            </button>
          </StaggerContainer>
        </div>
      </section>

      {/* FINANCE SECTION (#section-5) */}
      <section id="section-5" className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-slate-100 text-[#1A2B3C] relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 relative z-10">
          <StaggerContainer className="flex flex-col items-center mb-12 lg:mb-16 text-center">
            <h3 className="text-xs font-black text-[#228B22] tracking-[0.6em] uppercase font-heading mb-4">{t.financeSub}</h3>
            <h2 className="text-3xl lg:text-5xl font-black text-[#1A2B3C] font-heading">{t.financeTitle}</h2>
          </StaggerContainer>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" delay={0.2}>
            {t.financeSolutions.map((item, idx) => (
              <StaggerItem key={idx}>
                <a
                  href={item.link}
                  className="group p-8 h-full bg-white border border-gray-100 hover:border-[#228B22] hover:shadow-xl transition-all duration-300 rounded-md relative overflow-hidden block cursor-pointer shadow-sm flex flex-col min-h-[250px]"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FFD700] to-[#228B22] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <div className="w-16 h-16 bg-[#F0FDF4] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#228B22] transition-colors duration-300">
                    <item.icon size={32} className="text-[#228B22] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h4 className="text-xl font-bold text-[#1A2B3C] mb-4 font-heading group-hover:text-[#228B22] transition-colors flex items-center justify-between">
                    {item.title}
                    <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed font-light">{item.desc}</p>
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* SECTION 6: NEWS - NEW MASTER-DETAIL LAYOUT (v1.26 - Brighter) */}
      <section id="section-6" className="py-32 bg-gradient-to-b from-white via-[#F0FDF4] to-white border-t border-[#e5e7eb]">
        <div className="max-w-[1440px] mx-auto px-6">
          {/* Header */}
          <StaggerContainer className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-[#228b22]/10 rounded flex items-center justify-center text-[#228b22]">
                  <Newspaper size={20} />
                </div>
                <h3 className="text-[#228b22] font-black text-sm uppercase tracking-[0.5em] font-heading">{t.newsSub}</h3>
              </div>
              <h2 className="text-4xl lg:text-6xl font-black text-[#1A2B3C] tracking-tighter leading-none font-heading">{t.newsTitle}</h2>
            </div>
            <button className="text-[11px] font-black uppercase tracking-[0.2em] text-[#1A2B3C] flex items-center group">
              <span>Tất cả bài viết</span>
              <ArrowRight size={16} className="ml-3 group-hover:translate-x-2 transition-transform" />
            </button>
          </StaggerContainer>

          {/* MAIN CONTENT GRID */}
          <div className="grid lg:grid-cols-12 gap-8 lg:h-[600px]">

            {/* Left Column: Vertical Article Queue */}
            <StaggerContainer className="lg:col-span-5 flex flex-col h-full space-y-2 overflow-y-auto pr-2 news-list-scroll" delay={0.2}>
              {t.newsArticles.map((article, idx) => (
                <StaggerItem key={idx}>
                  <button
                    onClick={() => setActiveNewsIndex(idx)}
                    className={`w-full text-left p-6 transition-all duration-300 border-l-4 group rounded-r-md ${activeNewsIndex === idx
                      ? 'bg-[#DCFCE7] border-[#228B22] shadow-sm'
                      : 'bg-white border-transparent hover:bg-[#F0FDF4] hover:border-gray-200'
                      }`}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className={`text-[10px] font-bold font-tech uppercase tracking-wider ${activeNewsIndex === idx ? 'text-[#228B22]' : 'text-gray-400'}`}>
                        {article.source}
                      </span>
                      <span className="text-[10px] text-gray-400 font-tech">{article.date}</span>
                    </div>
                    <h4 className={`text-sm lg:text-base font-bold leading-relaxed transition-colors font-heading ${activeNewsIndex === idx ? 'text-[#1A2B3C]' : 'text-gray-500 group-hover:text-[#1A2B3C]'
                      }`}>
                      {article.title}
                    </h4>
                  </button>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Right Column: Large Preview Image */}
            <StaggerContainer className="lg:col-span-7 h-full" delay={0.4}>
              <div className="relative h-[400px] lg:h-full rounded-lg overflow-hidden shadow-2xl bg-gray-100 border-2 border-[#FFD700]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeNewsIndex}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0"
                  >
                    <img
                      src={t.newsArticles[activeNewsIndex].img}
                      alt={t.newsArticles[activeNewsIndex].title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A2B3C] via-transparent to-transparent opacity-80" />

                    <div className="absolute bottom-0 left-0 p-12 w-full">
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <span className="bg-[#FFD700] text-[#1A2B3C] px-3 py-1 text-[10px] font-black uppercase tracking-widest mb-4 inline-block rounded-sm shadow-sm">
                          {t.newsArticles[activeNewsIndex].tag}
                        </span>
                        <h3 className="text-2xl lg:text-4xl font-black text-white leading-tight mb-6 font-heading max-w-xl">
                          {t.newsArticles[activeNewsIndex].title}
                        </h3>
                        <a href={t.newsArticles[activeNewsIndex].link} className="inline-flex items-center text-white hover:text-[#FFD700] transition-colors text-xs font-bold uppercase tracking-widest group">
                          <span>Đọc chi tiết</span>
                          <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                        </a>
                      </motion.div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </StaggerContainer>

          </div>
        </div>
      </section>

      {/* Footer - Navy Blue */}
      <footer className="bg-[#1A2B3C] text-white pt-24 pb-12 border-t border-white/10 relative overflow-hidden font-jp-style">
        {/* Background Texture/Pattern for "Modern" feel */}
        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none transform scale-150 origin-top-right">
          <WatacoLogo />
        </div>

        <div className="max-w-[1440px] mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-4 gap-12 mb-20">
            {/* Col 1: Brand */}
            <div className="space-y-6">
              <WatacoLogo />
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                Kiến tạo hạ tầng năng lượng bền vững tại Việt Nam dựa trên tinh hoa kỹ thuật từ thành phố Sendai, Nhật Bản.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#228B22] transition-colors text-white">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#228B22] transition-colors text-white">
                  <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#228B22] transition-colors text-white">
                  <Youtube size={18} />
                </a>
              </div>
            </div>

            {/* Col 2: Solutions */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6 font-heading">Giải pháp</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li><a href="#" className="hover:text-[#FFD700] transition-colors">Tổng thầu EPC</a></li>
                <li><a href="#" className="hover:text-[#FFD700] transition-colors">Vận hành & Bảo dưỡng (O&M)</a></li>
                <li><a href="#" className="hover:text-[#FFD700] transition-colors">Đầu tư ESCO</a></li>
                <li><a href="#" className="hover:text-[#FFD700] transition-colors">Cung cấp thiết bị</a></li>
              </ul>
            </div>

            {/* Col 3: Company */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6 font-heading">Về WATACO</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li><a href="#" className="hover:text-[#FFD700] transition-colors">Giới thiệu chung</a></li>
                <li><a href="#" className="hover:text-[#FFD700] transition-colors">Dự án tiêu biểu</a></li>
                <li><a href="#" className="hover:text-[#FFD700] transition-colors">Tin tức & Sự kiện</a></li>
                <li><a href="#" className="hover:text-[#FFD700] transition-colors">Tuyển dụng</a></li>
              </ul>
            </div>

            {/* Col 4: Contact */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6 font-heading">Liên hệ</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li className="flex items-start">
                  <MapPin size={18} className="mr-3 text-[#228B22] flex-shrink-0 mt-1" />
                  <span>District 7, Ho Chi Minh City, Vietnam</span>
                </li>
                <li className="flex items-start">
                  <MapPin size={18} className="mr-3 text-[#228B22] flex-shrink-0 mt-1" />
                  <span>Minato-ku, Tokyo, Japan</span>
                </li>
                <li className="flex items-center">
                  <Mail size={18} className="mr-3 text-[#228B22]" />
                  <a href="mailto:info@wataco.com" className="hover:text-white">info@wataco.com</a>
                </li>
                <li className="flex items-center">
                  <Phone size={18} className="mr-3 text-[#228B22]" />
                  <a href="tel:+84123456789" className="hover:text-white">(+84) 123 456 789</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p>© 2024 WATACO ENGINEERING | MEMBER OF WATANABE CREATE GROUP JAPAN.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Chính sách bảo mật</a>
              <a href="#" className="hover:text-white transition-colors">Điều khoản sử dụng</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}