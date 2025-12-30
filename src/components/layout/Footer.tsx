import WatacoLogo from '../common/WatacoLogo';

interface FooterProps {
  icons: {
    Linkedin: React.ComponentType<any>;
    Facebook: React.ComponentType<any>;
    Youtube: React.ComponentType<any>;
    MapPin: React.ComponentType<any>;
    Mail: React.ComponentType<any>;
    Phone: React.ComponentType<any>;
  };
}

const Footer: React.FC<FooterProps> = ({ icons }) => {
  return (
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
                <icons.Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#228B22] transition-colors text-white">
                <icons.Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#228B22] transition-colors text-white">
                <icons.Youtube size={18} />
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
                <icons.MapPin size={18} className="mr-3 text-[#228B22] flex-shrink-0 mt-1" />
                <span>District 7, Ho Chi Minh City, Vietnam</span>
              </li>
              <li className="flex items-start">
                <icons.MapPin size={18} className="mr-3 text-[#228B22] flex-shrink-0 mt-1" />
                <span>Minato-ku, Tokyo, Japan</span>
              </li>
              <li className="flex items-center">
                <icons.Mail size={18} className="mr-3 text-[#228B22]" />
                <a href="mailto:info@wataco.com" className="hover:text-white">info@wataco.com</a>
              </li>
              <li className="flex items-center">
                <icons.Phone size={18} className="mr-3 text-[#228B22]" />
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
  );
};

export default Footer;