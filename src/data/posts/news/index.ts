import type { Language } from "../../../hooks/useTranslation";

export interface NewsPost {
    id: number;
    slug: string;
    category: string;
    categoryId: string;
    date: string;
    views: number;
    title: string;
    summary: string;
    metaDescription: string;
    heroImage: string;
    tags: string[];
    contentHTML: string;
    toc: { id: string; label: string }[];
}

export const vnNewsPosts: NewsPost[] = [
    {
        id: 2530,
        slug: "wataco-hop-tac-cung-tap-doan-th-trien-khai-he-thong-dien-mat-troi-day-manh-san-xuat-nong-nghiep-ben-vung",
        category: "Dự án",
        categoryId: "project",
        date: "22/07/2025",
        views: 1850,
        title: "Wataco hợp tác cùng Tập đoàn TH triển khai hệ thống điện mặt trời: Đẩy mạnh sản xuất nông nghiệp bền vững",
        summary: "Wataco cùng Quỹ TMG ký kết hợp tác với Tập đoàn TH triển khai hệ thống điện mặt trời áp mái 1,188 MWp tại Nhà máy sữa TH Dalat Milk, giảm 1.500 tấn CO₂ mỗi năm.",
        metaDescription: "Wataco cùng Quỹ TMG ký kết hợp tác với Tập đoàn TH triển khai hệ thống điện mặt trời áp mái 1,188 MWp tại Nhà máy sữa TH Dalat Milk, giảm 1.500 tấn CO₂ mỗi năm.",
        heroImage: "https://wataco.net/wp-content/uploads/2025/07/Buoi-le-ky-ket-hop-dong-du-an-dien-nang-luong-mat-troi-ap-mai-tai-Nha-may-sua-TH-Da-Lat-Milk-1-scaled.jpg",
        tags: ["Tin tức", "Hợp tác", "Tập đoàn TH", "Điện mặt trời áp mái", "ESG", "Lâm Đồng"],
        contentHTML: `
        <p><strong>Công ty TNHH Wataco</strong> cùng với Quỹ TMG (Công ty cổ phần đầu tư và phát triển năng lượng xanh TMG) đã chính thức ký kết thỏa thuận hợp tác với Tập đoàn TH, một trong những doanh nghiệp tiên phong trong lĩnh vực nông nghiệp sạch tại Việt Nam.</p>
    
        <p>Thỏa thuận lần này nhằm triển khai hệ thống điện mặt trời áp mái tại các cơ sở sản xuất của TH, hướng đến mục tiêu giảm phát thải, tiết kiệm năng lượng và hiện thực hóa chiến lược ESG một cách đồng bộ và bền vững. Theo nội dung hợp tác, Wataco sẽ đảm nhiệm vai trò thiết kế, thi công và vận hành hệ thống điện mặt trời áp mái, phối hợp chặt chẽ với TMG trong phát triển và triển khai dự án.</p>
    
        <figure>
          <img src="https://wataco.net/wp-content/uploads/2025/07/DSC_5188-scaled.jpg" alt="Wataco hợp tác với Quỹ TMG triển khai dự án Nhà máy sữa TH Dalat Milk" />
          <figcaption>Wataco hợp tác với Quỹ TMG triển khai dự án Nhà máy sữa TH Dalat Milk</figcaption>
        </figure>
    
        <h2 id="giai-doan-1-th-dalat-milk">Giai đoạn 1 – Nhà máy sữa TH Dalat Milk</h2>
        <p>Trong giai đoạn đầu, hệ thống sẽ được lắp đặt tại Nhà máy sữa TH Dalat Milk (huyện Đơn Dương, tỉnh Lâm Đồng) – một trong những cơ sở sản xuất trọng điểm của Tập đoàn TH tại khu vực Tây Nguyên. Dự kiến công suất lắp đặt trong giai đoạn 1 là <strong>1,188 MWp</strong>, với sản lượng phát điện hàng năm lên tới hơn một triệu kWh.</p>
    
        <h2 id="toi-uu-hieu-suat-giam-phat-thai">Tối ưu hiệu suất – Giảm phát thải – Gia tăng giá trị dài hạn</h2>
        <p>Các hệ thống điện mặt trời sau khi hoàn thành không chỉ giúp TH giảm chi phí vận hành, mà còn đóng góp đáng kể vào mục tiêu giảm phát thải khí nhà kính. Ước tính, hệ thống tại TH Dalat Milk sẽ giúp giảm khoảng <strong>1.500 tấn CO₂ mỗi năm</strong>, tương đương với việc trồng mới hơn 66.000 cây xanh. Toàn bộ hệ thống sẽ được tích hợp công nghệ giám sát thông minh, đảm bảo hiệu suất tối ưu và vận hành an toàn, ổn định theo chuẩn Nhật Bản và Quốc tế.</p>
    
        <h2 id="hop-tac-chien-luoc-esg">Hợp tác chiến lược, lan tỏa mô hình ESG điển hình</h2>
    
        <figure>
          <img src="https://wataco.net/wp-content/uploads/2025/07/Ba-ben-cam-ket-hop-tac-chat-che-dong-hanh-cung-giam-phat-thai-scaled.jpg" alt="Ba bên cam kết hợp tác chặt chẽ, đồng hành cùng giảm phát thải" />
          <figcaption>Ba bên cam kết hợp tác chặt chẽ, đồng hành cùng giảm phát thải</figcaption>
        </figure>
    
        <p>Sự kết hợp giữa TH – một doanh nghiệp giàu triết lý phát triển bền vững, TMG – đơn vị phát triển dự án năng lượng sạch, và Wataco – đối tác EPC dày dạn kinh nghiệm, tạo nên một chuỗi liên kết hoàn chỉnh cho mô hình ESG kiểu mẫu. Hợp tác ba bên này không chỉ mang lại giá trị cho từng doanh nghiệp, mà còn góp phần đẩy mạnh chuyển đổi năng lượng tại Việt Nam, hướng đến nền kinh tế tuần hoàn và giảm dấu chân carbon trong lĩnh vực nông nghiệp – chế biến thực phẩm.</p>
    
        <p><em>Nguồn: <a href="https://baodautu.vn/tap-doan-th-tiep-tuc-thuc-thi-esg-ben-vung-la-con-duong-khong-phai-dich-den-d333816.html" target="_blank" rel="noopener noreferrer">Tập đoàn TH tiếp tục thực thi ESG: Bền vững là con đường, không phải đích đến – Báo Đầu Tư</a></em></p>
      `,
        toc: [
            { id: "giai-doan-1-th-dalat-milk", label: "Giai đoạn 1 – Nhà máy sữa TH Dalat Milk" },
            { id: "toi-uu-hieu-suat-giam-phat-thai", label: "Tối ưu hiệu suất – Giảm phát thải" },
            { id: "hop-tac-chien-luoc-esg", label: "Hợp tác chiến lược – Mô hình ESG" },
        ]
    },
    {
        id: 2444,
        slug: "wataco-hop-tac-trien-khai-du-an-dien-mat-troi-ap-mai-cung-ryobi-ds",
        category: "Dự án",
        categoryId: "project",
        date: "27/11/2024",
        views: 1650,
        title: "Wataco hợp tác triển khai Dự án Điện mặt trời áp mái cùng Ryobi DS",
        summary: "Lễ ký kết Hợp đồng EPC và Lễ khởi công diễn ra tại Lô HC, Đường D2, Khu Công nghệ cao TP.HCM. Hệ thống giúp giảm khoảng 732,69t CO₂/năm với cam kết chất lượng và tiến độ cao nhất.",
        metaDescription: "Lễ ký kết Hợp đồng EPC và Lễ khởi công diễn ra tại Lô HC, Đường D2, Khu Công nghệ cao TP.HCM. Hệ thống giúp giảm khoảng 732,69t CO₂/năm.",
        heroImage: "https://wataco.net/wp-content/uploads/2024/11/wataco-1.jpg",
        tags: ["Tin tức", "Ryobi DS", "EPC", "Điện mặt trời áp mái", "Khu công nghệ cao"],
        contentHTML: `
        <p>Ngày 23/10/2024, <strong>Công ty TNHH Wataco</strong> và Ryobi DS Việt Nam đã chính thức ký kết hợp đồng EPC và tổ chức Lễ khởi công dự án điện mặt trời áp mái tại Khu Công nghệ cao TP.HCM.</p>
        
        <p>Dự án đánh dấu bước tiến quan trọng trong việc ứng dụng năng lượng tái tạo vào sản xuất công nghiệp, giúp giảm phát thải khoảng 732,69 tấn CO₂ mỗi năm. Wataco cam kết đảm bảo chất lượng và tiến độ thi công cao nhất cho dự án này.</p>
        `,
        toc: [
            { id: "ky-ket-hop-tac", label: "Ký kết hợp tác cùng Ryobi DS" },
            { id: "loi-ich-moi-truong", label: "Lợi ích môi trường và phát triển bền vững" }
        ]
    },
    {
        id: 2433,
        slug: "wataco-cung-sato-sangyo-viet-nam-khoi-dong-du-an-dien-mat-troi-ap-mai-giai-doan-1",
        category: "Dự án",
        categoryId: "project",
        date: "25/11/2024",
        views: 1200,
        title: "Wataco cùng Sato-Sangyo Việt Nam khởi động Dự án Điện mặt trời áp mái Giai đoạn 1",
        summary: "Ngày 16/10/2024, Công ty TNHH Sato-Sangyo Việt Nam và Wataco chính thức ký kết hợp đồng EPC và khởi công Dự án Điện mặt trời áp mái nhà Giai đoạn 1 tại KCN Mỹ Phước 3, Bình Dương.",
        metaDescription: "Ngày 16/10/2024, Sato-Sangyo Việt Nam và Wataco ký kết hợp đồng EPC và khởi công Dự án Điện mặt trời áp mái Giai đoạn 1 tại KCN Mỹ Phước 3, Bình Dương.",
        heroImage: "https://wataco.net/wp-content/uploads/2024/11/saoto-2.jpg",
        tags: ["Tin tức", "Sato-Sangyo", "Bình Dương", "Năng lượng xanh"],
        contentHTML: `
        <p>Vào ngày 16/10/2024, Công ty TNHH Sato-Sangyo Việt Nam cùng với <strong>Wataco</strong> đã chính thức thực hiện nghi thức ký kết hợp đồng EPC và khởi công Giai đoạn 1 của dự án điện mặt trời áp mái.</p>
        
        <p>Dự án được triển khai tại nhà máy của Sato-Sangyo trong Khu công nghiệp Mỹ Phước 3, tỉnh Bình Dương, hướng tới mục tiêu tự chủ năng lượng và giảm thiểu dấu chân carbon trong quy trình sản xuất.</p>
        `,
        toc: [
            { id: "khoi-dong-du-an", label: "Khởi động Dự án Giai đoạn 1" },
            { id: "tam-nhin-ben-vung", label: "Tầm nhìn phát triển bền vững" }
        ]
    },
    {
        id: 2017,
        slug: "cong-ty-tnhh-soi-det-huong-sen-comfor-hop-tac-cung-wataco",
        category: "Dự án",
        categoryId: "project",
        date: "08/05/2023",
        views: 1100,
        title: "Công ty TNHH sợi dệt Hương Sen Comfor hợp tác cùng Wataco",
        summary: "Dự án điện mặt trời áp mái công suất hơn 2.200 kWp do Wataco thi công tại nhà máy Hương Sen Comfor (Thái Bình), sử dụng công nghệ tiên tiến của Pháp và Nhật Bản, tổng vốn đầu tư khoảng 36 tỷ đồng.",
        metaDescription: "Dự án điện mặt trời áp mái công suất hơn 2.200 kWp tại Thái Bình, tổng vốn đầu tư 36 tỷ đồng do Wataco thi công.",
        heroImage: "https://wataco.net/wp-content/uploads/2023/05/752526c4a74f7811215e-1.jpg",
        tags: ["Tin tức", "Hương Sen Comfor", "Thái Bình", "Sợi dệt"],
        contentHTML: `
        <p>Dự án điện mặt trời áp mái tại nhà máy Hương Sen Comfor (Thái Bình) có công suất hơn 2.200 kWp, sử dụng công nghệ tiên tiến từ Pháp và Nhật Bản.</p>
        
        <p>Với tổng vốn đầu tư khoảng 36 tỷ đồng, <strong>Wataco</strong> đảm nhiệm vai trò đơn vị thi công, giúp nhà máy tối ưu hóa chi phí năng lượng và đáp ứng các tiêu chuẩn xanh quốc tế.</p>
        `,
        toc: [
            { id: "quy-mo-du-an", label: "Quy mô và công nghệ" },
            { id: "hieu-qua-kinh-te", label: "Hiệu quả kinh tế và môi trường" }
        ]
    }
];

export const enNewsPosts: NewsPost[] = [
    {
        id: 2530,
        slug: "wataco-hop-tac-cung-tap-doan-th-trien-khai-he-thong-dien-mat-troi-day-manh-san-xuat-nong-nghiep-ben-vung",
        category: "Project",
        categoryId: "project",
        date: "2025/07/22",
        views: 1850,
        title: "Wataco partners with TH Group to deploy solar power systems: Promoting sustainable agricultural production",
        summary: "Wataco and TMG Fund signed a partnership with TH Group to deploy a 1,188 MWp rooftop solar system at TH Dalat Milk Factory, reducing 1,500 tons of CO₂ annually.",
        metaDescription: "Wataco and TMG Fund signed a partnership with TH Group to deploy a 1,188 MWp rooftop solar system at TH Dalat Milk Factory, reducing 1,500 tons of CO₂ annually.",
        heroImage: "https://wataco.net/wp-content/uploads/2025/07/Buoi-le-ky-ket-hop-dong-du-an-dien-nang-luong-mat-troi-ap-mai-tai-Nha-may-sua-TH-Da-Lat-Milk-1-scaled.jpg",
        tags: ["News", "Partnership", "TH Group", "Rooftop Solar", "ESG", "Lam Dong"],
        contentHTML: `
        <p><strong>Wataco Co., Ltd.</strong> together with TMG Fund (TMG Green Energy Investment and Development Joint Stock Company) officially signed a cooperation agreement with TH Group, one of the pioneering enterprises in clean agriculture in Vietnam.</p>
    
        <p>This agreement aims to deploy rooftop solar systems at TH's production facilities, aiming at reducing emissions, saving energy, and realizing the ESG strategy in a synchronized and sustainable way. According to the cooperation content, Wataco will take the role of designing, constructing, and operating the rooftop solar system, working closely with TMG in project development and implementation.</p>
    
        <figure>
          <img src="https://wataco.net/wp-content/uploads/2025/07/DSC_5188-scaled.jpg" alt="Wataco cooperates with TMG Fund to implement TH Dalat Milk Factory project" />
          <figcaption>Wataco cooperates with TMG Fund to implement TH Dalat Milk Factory project</figcaption>
        </figure>
    
        <h2 id="phase-1-th-dalat-milk">Phase 1 – TH Dalat Milk Factory</h2>
        <p>In the first phase, the system will be installed at TH Dalat Milk Factory (Don Duong district, Lam Dong province) – one of the key production facilities of TH Group in the Central Highlands. The expected installed capacity in Phase 1 is <strong>1,188 MWp</strong>, with an annual power output of more than one million kWh.</p>
    
        <h2 id="optimization-emission-reduction">Optimize performance – Reduce emissions – Increase long-term value</h2>
        <p>The solar systems after completion will not only help TH reduce operating costs but also contribute significantly to the goal of reducing greenhouse gas emissions. It is estimated that the system at TH Dalat Milk will help reduce about <strong>1,500 tons of CO₂ per year</strong>, equivalent to planting more than 66,000 new trees. The entire system will be integrated with smart monitoring technology, ensuring optimal performance and safe, stable operation according to Japanese and International standards.</p>
    
        <h2 id="strategic-esg-partnership">Strategic partnership, spreading typical ESG model</h2>
    
        <figure>
          <img src="https://wataco.net/wp-content/uploads/2025/07/Ba-ben-cam-ket-hop-tac-chat-che-dong-hanh-cung-giam-phat-thai-scaled.jpg" alt="Three parties committed to close cooperation, accompanying emission reduction" />
          <figcaption>Three parties committed to close cooperation, accompanying emission reduction</figcaption>
        </figure>
    
        <p>The combination of TH – an enterprise rich in sustainable development philosophy, TMG – a clean energy project development unit, and Wataco – an experienced EPC partner, creates a complete linkage chain for a model ESG model. This tri-partite cooperation not only brings value to each enterprise but also contributes to promoting energy transition in Vietnam, towards a circular economy and reducing carbon footprint in the agriculture – food processing sector.</p>
    
        <p><em>Source: <a href="https://baodautu.vn/tap-doan-th-tiep-tuc-thuc-thi-esg-ben-vung-la-con-duong-khong-phai-dich-den-d333816.html" target="_blank" rel="noopener noreferrer">TH Group continues to implement ESG: Sustainability is the way, not the destination – Investment Newspaper</a></em></p>
      `,
        toc: [
            { id: "phase-1-th-dalat-milk", label: "Phase 1 – TH Dalat Milk Factory" },
            { id: "optimization-emission-reduction", label: "Optimize performance – Reduce emissions" },
            { id: "strategic-esg-partnership", label: "Strategic partnership – ESG Model" },
        ]
    },
    {
        id: 2444,
        slug: "wataco-hop-tac-trien-khai-du-an-dien-mat-troi-ap-mai-cung-ryobi-ds",
        category: "Project",
        categoryId: "project",
        date: "2024/11/27",
        views: 1650,
        title: "Wataco cooperates to implement Rooftop Solar Project with Ryobi DS",
        summary: "The EPC Contract Signing Ceremony and Groundbreaking Ceremony took place at Lot HC, D2 Street, HCMC Hi-Tech Park. The system helps reduce about 732.69t CO₂/year with the highest commitment to quality and progress.",
        metaDescription: "The EPC Contract Signing Ceremony and Groundbreaking Ceremony took place at Lot HC, D2 Street, HCMC Hi-Tech Park. The system helps reduce about 732.69t CO₂/year.",
        heroImage: "https://wataco.net/wp-content/uploads/2024/11/wataco-1.jpg",
        tags: ["News", "Ryobi DS", "EPC", "Rooftop Solar", "Hi-Tech Park"],
        contentHTML: `
        <p>On October 23, 2024, <strong>Wataco Co., Ltd.</strong> and Ryobi DS Vietnam officially signed an EPC contract and organized the Groundbreaking Ceremony for the rooftop solar project at HCMC Hi-Tech Park.</p>
        
        <p>The project marks an important step in applying renewable energy to industrial production, helping reduce emissions by about 732.69 tons of CO₂ annually. Wataco is committed to ensuring the highest construction quality and progress for this project.</p>
        `,
        toc: [
            { id: "cooperation-signing", label: "Cooperation signing with Ryobi DS" },
            { id: "environmental-benefits", label: "Environmental benefits and sustainability" }
        ]
    },
    {
        id: 2433,
        slug: "wataco-cung-sato-sangyo-viet-nam-khoi-dong-du-an-dien-mat-troi-ap-mai-giai-doan-1",
        category: "Project",
        categoryId: "project",
        date: "2024/11/25",
        views: 1200,
        title: "Wataco and Sato-Sangyo Vietnam launch Phase 1 of Rooftop Solar Project",
        summary: "On October 16, 2024, Sato-Sangyo Vietnam and Wataco officially signed the EPC contract and broke ground for Phase 1 of the Rooftop Solar Project at My Phuoc 3 IP, Binh Duong.",
        metaDescription: "On October 16, 2024, Sato-Sangyo Vietnam and Wataco officially signed the EPC contract and broke ground for Phase 1 of the Rooftop Solar Project at My Phuoc 3 IP, Binh Duong.",
        heroImage: "https://wataco.net/wp-content/uploads/2024/11/saoto-2.jpg",
        tags: ["News", "Sato-Sangyo", "Binh Duong", "Green Energy"],
        contentHTML: `
        <p>On October 16, 2024, Sato-Sangyo Vietnam and <strong>Wataco</strong> officially performed the EPC contract signing ceremony and broke ground for Phase 1 of the rooftop solar project.</p>
        
        <p>The project is implemented at Sato-Sangyo's factory in My Phuoc 3 Industrial Park, Binh Duong province, aiming at energy autonomy and carbon footprint reduction in the production process.</p>
        `,
        toc: [
            { id: "project-launch", label: "Launching Phase 1 Project" },
            { id: "sustainable-vision", label: "Sustainable development vision" }
        ]
    },
    {
        id: 2017,
        slug: "cong-ty-tnhh-soi-det-huong-sen-comfor-hop-tac-cung-wataco",
        category: "Project",
        categoryId: "project",
        date: "2023/05/08",
        views: 1100,
        title: "Huong Sen Comfor Spinning and Weaving Co., Ltd. cooperates with Wataco",
        summary: "The rooftop solar project with a capacity of more than 2,200 kWp constructed by Wataco at Huong Sen Comfor factory (Thai Binh), using advanced technology from France and Japan, with a total investment of about 36 billion VND.",
        metaDescription: "The rooftop solar project with a capacity of more than 2,200 kWp in Thai Binh, with a total investment of 36 billion VND constructed by Wataco.",
        heroImage: "https://wataco.net/wp-content/uploads/2023/05/752526c4a74f7811215e-1.jpg",
        tags: ["News", "Huong Sen Comfor", "Thai Binh", "Spinning & Weaving"],
        contentHTML: `
        <p>The rooftop solar project at Huong Sen Comfor factory (Thai Binh) has a capacity of more than 2,200 kWp, using advanced technology from France and Japan.</p>
        
        <p>With a total investment of about 36 billion VND, <strong>Wataco</strong> took the role of construction unit, helping the factory optimize energy costs and meet international green standards.</p>
        `,
        toc: [
            { id: "project-scale", label: "Scale and technology" },
            { id: "economic-efficiency", label: "Economic and environmental efficiency" }
        ]
    }
];

export const jpNewsPosts: NewsPost[] = [
    {
        id: 2530,
        slug: "wataco-hop-tac-cung-tap-doan-th-trien-khai-he-thong-dien-mat-troi-day-manh-san-xuat-nong-nghiep-ben-vung",
        category: "プロジェクト",
        categoryId: "project",
        date: "2025/07/22",
        views: 1850,
        title: "Wataco、THグループと提携し太陽光発電システムを導入：持続可能な農業生産を推進",
        summary: "WatacoとTMG基金は、THグループと提携し、THダラットミルク工場に1,188MWpの屋根置き太陽光システムを導入。年間1,500トンのCO₂を削減します。",
        metaDescription: "WatacoとTMG基金は、THグループと提携し、THダラットミルク工場に1,188MWpの屋根置き太陽光システムを導入。年間1,500トンのCO₂を削減します。",
        heroImage: "https://wataco.net/wp-content/uploads/2025/07/Buoi-le-ky-ket-hop-dong-du-an-dien-nang-luong-mat-troi-ap-mai-tai-Nha-may-sua-TH-Da-Lat-Milk-1-scaled.jpg",
        tags: ["ニュース", "提携", "THグループ", "屋上太陽光", "ESG", "ラムドン省"],
        contentHTML: `
        <p><strong>Wataco有限会社</strong>は、TMG基金（TMGグリーンエネルギー投資開発株式会社）とともに、ベトナムのクリーン農業の先駆的企業の一つであるTHグループと協力協定を正式に締結しました。</p>
    
        <p>今回の合意は、THの生産施設に屋上太陽光発電システムを導入し、排出削減、省エネ、およびESG戦略を同期的かつ持続可能な方法で実現することを目指しています。協力内容によれば、Watacoは屋上太陽光発電システムの設計、建設、および運営を担当し、プロジェクトの開発と実施においてTMGと緊密に連携します。</p>
    
        <figure>
          <img src="https://wataco.net/wp-content/uploads/2025/07/DSC_5188-scaled.jpg" alt="WatacoはTMG基金と協力してTHダラットミルク工場プロジェクトを実施" />
          <figcaption>WatacoはTMG基金と協力してTHダラットミルク工場プロジェクトを実施</figcaption>
        </figure>
    
        <h2 id="phase-1-th-dalat-milk">フェーズ1 – THダラットミルク工場</h2>
        <p>第一段階では、システムは中央高地のTHグループの主要な生産施設の一つであるTHダラットミルク工場（ラムドン省ドンズオン県）に設置されます。フェーズ1の予定設置容量は<strong>1,188 MWp</strong>で、年間発電量は100万kWhを超えると予想されています。</p>
    
        <h2 id="optimization-emission-reduction">性能の最適化 – 排出削減 – 長期的価値の向上</h2>
        <p>完成後の太陽光発電システムは、THの運営コストを削減するだけでなく、温室効果ガス排出削減の目標にも大きく貢献します。THダラットミルクのシステムは、年間約<strong>1,500トンのCO₂を削減</strong>し、これは66,000本以上の新しい木を植えることに相当すると推定されています。システム全体にはスマートモニタリング技術が統合され、日本および国際基準に従った最適なパフォーマンスと安全で安定した運用が保証されます。</p>
    
        <h2 id="strategic-esg-partnership">戦略的提携、典型的なESGモデルの普及</h2>
    
        <figure>
          <img src="https://wataco.net/wp-content/uploads/2025/07/Ba-ben-cam-ket-hop-tac-chat-che-dong-hanh-cung-giam-phat-thai-scaled.jpg" alt="排出削減を伴う緊密な協力にコミットした三者" />
          <figcaption>排出削減を伴う緊密な協力にコミットした三者</figcaption>
        </figure>
    
        <p>持続可能な開発哲学に富んだ企業であるTH、クリーンエネルギープロジェクト開発ユニットであるTMG、そして経験豊富なEPCパートナーであるWatacoの組み合わせは、モデルESGモデルの完全な連携チェーンを作成します。この三者協力は、各企業に価値をもたらすだけでなく、ベトナムのエネルギー転換を促進し、循環型経済と農業・食品加工分野におけるカーボンフットプリントの削減に貢献します。</p>
    
        <p><em>出典: <a href="https://baodautu.vn/tap-doan-th-tiep-tuc-thuc-thi-esg-ben-vung-la-con-duong-khong-phai-dich-den-d333816.html" target="_blank" rel="noopener noreferrer">THグループ、ESGを引き続き実施：持続可能性は目的地ではなく道である – 投資新聞</a></em></p>
      `,
        toc: [
            { id: "phase-1-th-dalat-milk", label: "フェーズ1 – THダラットミルク工場" },
            { id: "optimization-emission-reduction", label: "性能の最適化 – 排出削減" },
            { id: "strategic-esg-partnership", label: "戦略的提携 – ESGモデル" },
        ]
    },
    {
        id: 2444,
        slug: "wataco-hop-tac-trien-khai-du-an-dien-mat-troi-ap-mai-cung-ryobi-ds",
        category: "プロジェクト",
        categoryId: "project",
        date: "2024/11/27",
        views: 1650,
        title: "Wataco、リョービDSと屋上太陽光発電プロジェクトの実施で協力",
        summary: "ホーチミン・ハイテクパークのLot HC、D2通りでEPC契約調印式と起工式が行われました。このシステムは、品質と進捗への最高のコミットメントにより、年間約732.69トンのCO₂削減に貢献します。",
        metaDescription: "ホーチミン・ハイテクパークのLot HC、D2通りでEPC契約調印式と起工式が行われました。このシステムは、年間約732.69トンのCO₂削減に貢献します。",
        heroImage: "https://wataco.net/wp-content/uploads/2024/11/wataco-1.jpg",
        tags: ["ニュース", "リョービDS", "EPC", "屋上太陽光", "ハイテクパーク"],
        contentHTML: `
        <p>2024年10月23日、<strong>Wataco有限会社</strong>とリョービDSベトナムは、EPC契約を正式に締結し、ホーチミン・ハイテクパークでの屋上太陽光発電プロジェクトの起工式を開催しました。</p>
        
        <p>このプロジェクトは、産業生産への再生可能エネルギーの適用における重要なステップであり、年間約732.69トンのCO₂排出削減に貢献します。Watacoは、このプロジェクトに対して最高の建設品質と進捗を保証することにコミットしています。</p>
        `,
        toc: [
            { id: "cooperation-signing", label: "リョービDSとの協力調印" },
            { id: "environmental-benefits", label: "環境上の利点と持続可能性" }
        ]
    },
    {
        id: 2433,
        slug: "wataco-cung-sato-sangyo-viet-nam-khoi-dong-du-an-dien-mat-troi-ap-mai-giai-doan-1",
        category: "プロジェクト",
        categoryId: "project",
        date: "2024/11/25",
        views: 1200,
        title: "Watacoとサトサンギョウ・ベトナム、屋上太陽光プロジェクトのフェーズ1を開始",
        summary: "2024年10月16日、サトサンギョウ・ベトナムとWatacoは、ビンズオン省ミーフオック3工業団地での屋上太陽光プロジェクト・フェーズ1のEPC契約を正式に締結し、着工しました。",
        metaDescription: "2024年10月16日、サトサンギョウ・ベトナムとWatacoは、ビンズオン省ミーフオック3工業団地での屋上太陽光プロジェクト・フェーズ1のEPC契約を正式に締結し、着工しました。",
        heroImage: "https://wataco.net/wp-content/uploads/2024/11/saoto-2.jpg",
        tags: ["ニュース", "サトサンギョウ", "ビンズオン", "グリーンエネルギー"],
        contentHTML: `
        <p>2024年10月16日、サトサンギョウ・ベトナムと<strong>Wataco</strong>は、屋上太陽光発電プロジェクトのフェーズ1のEPC契約調印式を正式に行い、着工しました。</p>
        
        <p>このプロジェクトは、生産プロセスにおけるエネルギーの自律性とカーボンフットプリントの削減を目指し、ビンズオン省ミーフオック3工業団地にあるサトサンギョウの工場で実施されます。</p>
        `,
        toc: [
            { id: "project-launch", label: "フェーズ1プロジェクトの開始" },
            { id: "sustainable-vision", label: "持続可能な開発ビジョン" }
        ]
    },
    {
        id: 2017,
        slug: "cong-ty-tnhh-soi-det-huong-sen-comfor-hop-tac-cung-wataco",
        category: "プロジェクト",
        categoryId: "project",
        date: "2023/05/08",
        views: 1100,
        title: "フオンセン・コンフォー紡績・織物有限会社がWatacoと協力",
        summary: "タイビン省のフオンセン・コンフォー工場でWatacoが建設した2,200kWp以上の屋上太陽光プロジェクト。フランスと日本の先進技術を使用し、総投資額は約360億ドン。",
        metaDescription: "タイビン省の2,200kWp以上の屋上太陽光プロジェクト。総投資額360億ドンでWatacoが建設。",
        heroImage: "https://wataco.net/wp-content/uploads/2023/05/752526c4a74f7811215e-1.jpg",
        tags: ["ニュース", "フオンセン・コンフォー", "タイビン", "紡績・織物"],
        contentHTML: `
        <p>タイビン省のフオンセン・コンフォー工場での屋上太陽光プロジェクトは、2,200kWp以上の容量を持ち、フランスと日本の先進技術を使用しています。</p>
        
        <p>総投資額約360億ドンで、<strong>Wataco</strong>は建設ユニットの役割を担い、工場がエネルギーコストを最適化し、国際的なグリーン基準を満たすのを支援しました。</p>
        `,
        toc: [
            { id: "project-scale", label: "規模と技術" },
            { id: "economic-efficiency", label: "経済的・環境的効率" }
        ]
    }
];

export const allNewsPostsByLanguage: Record<Language, NewsPost[]> = {
    VN: vnNewsPosts,
    EN: enNewsPosts,
    JP: jpNewsPosts
};

// Deprecated: use allNewsPostsByLanguage instead.
// Keeping this for backward compatibility during transition.
export const allNewsPosts = vnNewsPosts;
