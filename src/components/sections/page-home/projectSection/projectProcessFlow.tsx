import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, ArrowUp } from "lucide-react";
import { useTranslation } from "../../../../hooks/useTranslation";

interface FadeInUpProps {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}

const FadeInUp = ({ children, delay = 0, className }: FadeInUpProps) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay, ease: "easeOut" }}
        className={className}
    >
        {children}
    </motion.div>
);

interface ProcessStep {
    id: number;
    title: string;
    isHighlight?: boolean;
    arrow: string | null;
}

interface ProcessCardProps {
    step: ProcessStep;
    delay: number;
}

const ProcessCard = ({ step, delay }: ProcessCardProps) => {
    const isGold = step.isHighlight;
    return (
        <FadeInUp delay={delay} className="w-full h-full flex items-center justify-center mt-6">
            <div className={`relative w-[95%] lg:w-full h-22.5 lg:h-25 rounded-full border-[3px] px-6 py-2 flex items-center justify-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${isGold
                ? 'bg-[#FFD700] border-[#EAB308] text-[#1A2B3C] shadow-[0_10px_25px_rgba(234,179,8,0.4)]'
                : 'bg-white border-[#228B22] text-[#1A2B3C] shadow-[0_10px_25px_rgba(34,139,34,0.15)]'
                }`}>
                <div className={`absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full flex items-center justify-center border-4 border-white shadow-md ${isGold ? 'bg-[#1A2B3C] text-[#FFD700]' : 'bg-[#228B22] text-white'
                    }`}>
                    <span className="font-black text-xl">{step.id}</span>
                </div>
                <span className={`font-black text-xs lg:text-sm uppercase tracking-widest leading-snug mt-2 ${isGold ? 'text-[#1A2B3C]' : 'text-[#1A2B3C]'}`}>
                    {step.title}
                </span>
            </div>
        </FadeInUp>
    );
};

const ProjectProcessFlow = () => {
    const { t } = useTranslation();
    const processSteps = [
        { id: 1, title: t.projectProcessFlow.steps[0], arrow: "down" },
        { id: 2, title: t.projectProcessFlow.steps[1], arrow: "down" },
        { id: 3, title: t.projectProcessFlow.steps[2], arrow: "right" },
        { id: 4, title: t.projectProcessFlow.steps[3], arrow: "up" },
        { id: 5, title: t.projectProcessFlow.steps[4], arrow: "up" },
        { id: 6, title: t.projectProcessFlow.steps[5], arrow: "right" },
        { id: 7, title: t.projectProcessFlow.steps[6], isHighlight: true, arrow: "down" },
        { id: 8, title: t.projectProcessFlow.steps[7], arrow: null }
    ];

    return (
        <section className="relative pt-20 pb-24 lg:pt-28 lg:pb-32 bg-white overflow-hidden border-b border-gray-200">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[20px_20px] opacity-50"></div>

            <div className="relative z-10 max-w-300 mx-auto px-6">
                <FadeInUp className="text-center mb-20 lg:mb-28">
                    <h2 className="text-3xl lg:text-5xl font-black text-[#228B22] leading-tight font-heading uppercase tracking-tight drop-shadow-sm">
                        {t.projectProcessFlow.title1}<br className="hidden md:block" />{t.projectProcessFlow.title2}
                    </h2>
                </FadeInUp>

                {/* Desktop Grid Layout (lg) - Matches exact U-shape structure */}
                <div className="hidden lg:grid grid-cols-3 gap-x-16 gap-y-20 relative">
                    {processSteps.map((step) => {
                        // Calculate Grid Placement (3 cols x 3 rows mapping)
                        let col = 1; let row = 1;
                        if (step.id === 1) { col = 1; row = 1; }
                        if (step.id === 2) { col = 1; row = 2; }
                        if (step.id === 3) { col = 1; row = 3; }
                        if (step.id === 4) { col = 2; row = 3; }
                        if (step.id === 5) { col = 2; row = 2; }
                        if (step.id === 6) { col = 2; row = 1; }
                        if (step.id === 7) { col = 3; row = 1; }
                        if (step.id === 8) { col = 3; row = 2; }

                        return (
                            <div key={step.id} style={{ gridColumnStart: col, gridRowStart: row }} className="relative flex justify-center items-center h-full">
                                <ProcessCard step={step} delay={step.id * 0.1} />

                                {/* Directional Arrows dynamically placed in the exact center of the gaps */}
                                {step.arrow === 'down' && (
                                    <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 text-[#228B22]">
                                        <ArrowDown size={40} strokeWidth={2.5} />
                                    </div>
                                )}
                                {step.arrow === 'up' && (
                                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-[#228B22]">
                                        <ArrowUp size={40} strokeWidth={2.5} />
                                    </div>
                                )}
                                {step.arrow === 'right' && (
                                    <div className="absolute top-[60%] -right-12 -translate-y-1/2 text-[#228B22]">
                                        <ArrowRight size={40} strokeWidth={2.5} />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Mobile & Tablet Layout (Stacked list) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:hidden">
                    {processSteps.map((step, idx: number) => (
                        <div key={step.id} className="relative flex flex-col items-center">
                            <ProcessCard step={step} delay={idx * 0.1} />
                            {/* Simple downward arrows for mobile 1-column view */}
                            {idx < processSteps.length - 1 && (
                                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[#228B22] sm:hidden z-10">
                                    <ArrowDown size={28} strokeWidth={3} />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectProcessFlow