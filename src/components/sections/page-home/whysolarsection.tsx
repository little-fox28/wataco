import { StaggerContainer, StaggerItem } from '../../common/StaggerAnimations';
import type { TranslationContent } from '../../../types';

const WhySolarSection: React.FC<{ t: TranslationContent }> = ({ t }) => (
  <section id="section-why-solar" className="py-20 lg:py-32 bg-white">
    <div className="max-w-[1440px] mx-auto px-6">
      <StaggerContainer className="text-center mb-16">
        <h2 className="text-3xl lg:text-5xl font-black text-[#1A2B3C] font-heading mb-4">
          {t.whySolar.title}
        </h2>
        <p className="text-[#228B22] font-bold text-lg">{t.whySolar.tagline}</p>
      </StaggerContainer>

      <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {t.whySolar.items.map((item, idx) => (
          <StaggerItem
            key={idx}
            className="p-8 bg-[#F8FAFC] rounded-xl border border-gray-100 hover:border-[#228B22] hover:shadow-lg transition-all duration-300 text-center group"
          >
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-[#228B22] group-hover:scale-110 transition-transform">
              <item.icon size={32} />
            </div>
            <h4 className="text-xl font-bold text-[#1A2B3C] mb-3">
              {item.title}
            </h4>
            <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </section>
);

export default WhySolarSection;
