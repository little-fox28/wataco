import { StaggerContainer, StaggerItem } from "../../common/StaggerAnimations";
import type { TranslationContent } from "../../../types";

const ServicesSection: React.FC<{ t: TranslationContent }> = ({ t }) => (
  <section
    id="section-services"
    className="py-20 lg:py-32 bg-[#F0FDF4] relative overflow-hidden"
  >
    {/* Pattern */}
    <div
      className="absolute inset-0 opacity-20"
      style={{
        backgroundImage: "radial-gradient(#228B22 1px, transparent 1px)",
        backgroundSize: "30px 30px",
      }}
    ></div>

    <div className="max-w-[1440px] mx-auto px-6 relative z-10">
      <StaggerContainer className="text-center mb-16">
        <h3 className="text-xs font-black text-[#228B22] tracking-[0.6em] uppercase font-heading mb-4">
          WATACO SERVICES
        </h3>
        <h2 className="text-3xl lg:text-5xl font-black text-[#1A2B3C] font-heading">
          {t.ourServices.title}
        </h2>
      </StaggerContainer>

      <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {t.ourServices.items.map((item, idx) => (
          <StaggerItem
            key={idx}
            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center h-full justify-center border border-transparent hover:border-[#228B22] group"
          >
            <item.icon
              size={40}
              className="text-gray-400 group-hover:text-[#228B22] mb-6 transition-colors"
              strokeWidth={1.5}
            />
            <h4 className="text-sm lg:text-base font-bold text-[#1A2B3C] group-hover:text-[#228B22] transition-colors">
              {item.title}
            </h4>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </section>
);

export default ServicesSection;
