import { Link } from 'react-router-dom';
import CertificateCard from '../common/CertificateCard';
import WatacoLogo from '../common/WatacoLogo';

interface FooterProps {
  t: any;
  icons: {
    Linkedin: React.ComponentType<any>;
    Facebook: React.ComponentType<any>;
    Youtube: React.ComponentType<any>;
    MapPin: React.ComponentType<any>;
    Mail: React.ComponentType<any>;
    Phone: React.ComponentType<any>;
  };
}

const Footer: React.FC<FooterProps> = ({ t, icons }) => {
  const navLinks = ["/about-us", "/", "/projects", "/careers", "/news"];

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
              {t.footer.description}
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/wataco/" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#228B22] transition-colors text-white">
                <icons.Linkedin size={18} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61584943418127" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#228B22] transition-colors text-white">
                <icons.Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Col 2: Solutions */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 font-heading">{t.footer.solutionsTitle}</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              {t.footer.solutions.map((item: string, idx: number) => (
                <li key={idx}><a href="#" className="hover:text-[#FFD700] transition-colors">{item}</a></li>
              ))}
            </ul>
            <h4 className="text-lg font-bold text-white mb-6 mt-8 font-heading">{t.footer.certificatesTitle}</h4>
            <div className="grid grid-cols-3 gap-4">
              {[
                { src: '/iso/iso9001.svg', title: 'ISO 9001' },
                { src: '/iso/iso14001.svg', title: 'ISO 14001' },
                { src: '/iso/iso45001.svg', title: 'ISO 45001' },
              ].map((cert, index) => (
                <CertificateCard key={index} imageSrc={cert.src} title={cert.title} />
              ))}
            </div>
          </div>

          {/* Col 3: Company */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 font-heading">{t.footer.companyTitle}</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              {t.nav.map((item: string, idx: number) => (
                navLinks[idx].startsWith('/') ? (
                  <li>
                    <Link key={idx} to={navLinks[idx]} className="hover:text-[#FFD700] transition-colors">{item}</Link>
                  </li>
                ) : (
                  <a key={idx} href={navLinks[idx]} className="hover:text-[#FFD700] transition-colors">{item}</a>
                )
              ))}
            </ul>

          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 font-heading">{t.footer.contactTitle}</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start">
                <icons.MapPin size={18} className="mr-3 text-[#228B22] flex-shrink-0 mt-1" />
                <span>{t.footer.contact.address1}</span>
              </li>
              <li className="flex items-start">
                <icons.MapPin size={18} className="mr-3 text-[#228B22] flex-shrink-0 mt-1" />
                <span>{t.footer.contact.address2}</span>
              </li>
              <li className="flex items-center">
                <icons.Mail size={18} className="mr-3 text-[#228B22]" />
                <a href={`mailto:${t.footer.contact.email}`} className="hover:text-white">{t.footer.contact.email}</a>
              </li>
              <li className="flex items-center">
                <icons.Phone size={18} className="mr-3 text-[#228B22]" />
                <a href={`tel:${t.footer.contact.phone}`} className="hover:text-white">{t.footer.contact.phone}</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>{t.footer.copyright}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">{t.footer.privacy}</a>
            <a href="#" className="hover:text-white transition-colors">{t.footer.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;