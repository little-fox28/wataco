import type { TranslationContent } from '../../../types';
import CountUp from '../../common/CountUp';
import { StaggerContainer, StaggerItem } from '../../common/StaggerAnimations';

interface StatsSectionProps {
    t: TranslationContent;
}

const StatsSection: React.FC<StatsSectionProps> = ({ t }) => {
    return (
        <section id="section-stats" className="bg-[#1A2B3C] py-8 sm:py-12 lg:py-20 relative z-20 border-y border-white/10 shadow-2xl">
            <StaggerContainer className="max-w-360 mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-4 gap-2 sm:gap-8 lg:gap-12 divide-x sm:divide-y-0 sm:divide-x divide-white/10">
                    {t.stats.map((stat, idx) => (
                        <StaggerItem key={idx} className="text-center group px-3 sm:px-4 pt-6 sm:pt-0">
                            <div className="text-sm sm:text-4xl lg:text-6xl font-bold text-[#FFD700] mb-2 lg:mb-4 font-tech tracking-tighter">
                                {stat.prefix}
                                <CountUp value={stat.val} suffix={stat.suffix} decimals={stat.val % 1 !== 0 ? 1 : 0} />
                            </div>
                            <div className="text-[10px] text-white font-bold uppercase tracking-[0.2em] font-heading">{stat.label}</div>
                        </StaggerItem>
                    ))}
                </div>
            </StaggerContainer>
        </section>
    );
}

export default StatsSection;
