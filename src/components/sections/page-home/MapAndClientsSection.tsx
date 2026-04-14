import { useState } from 'react';
import type { TranslationContent } from '../../../types';
import CountUp from '../../common/CountUp';
import Marquee from '../../common/Marquee';
import { StaggerContainer, StaggerItem } from '../../common/StaggerAnimations';

const projectLocations = [
    { top: "15%", left: "45%", name: "Bắc Ninh" },
    { top: "18%", left: "48%", name: "Hải Dương" },
    { top: "20%", left: "40%", name: "Hải Phòng" },
    { top: "48%", left: "50%", name: "Quảng Ngãi" },
    { top: "75%", left: "52%", name: "Lâm Đồng" },
    { top: "80%", left: "58%", name: "Bình Thuận" },
    { top: "85%", left: "40%", name: "Tây Ninh" },
    { top: "87%", left: "45%", name: "Bình Dương" },
    { top: "88%", left: "40%", name: "Đồng Nai" },
    { top: "92%", left: "38%", name: "Long An" },
];

const clientsList = [
    { name: "TH True Milk", logo: '/client-logo/TH.svg', color: "#013C78" },
    { name: "ALPHA", logo: '/client-logo/alpha.svg', color: "#00469B" },
    { name: "AMANN", logo: '/client-logo/amann.svg', color: "#028AD2" },
    { name: "ja", logo: '/client-logo/ja.svg', color: "#9CA3AF" },
    { name: "FGC", logo: '/client-logo/fgc.svg', color: "#42851F" },
    { name: "HAWA-EXPO", logo: '/client-logo/hawa-expo.svg', color: "#A13538" },
    { name: "HUONG SEN", logo: '/client-logo/huong-sen.svg', color: "#9CA3AF" },
    { name: "KAIFA", logo: '/client-logo/kaifa.svg', color: "#1D2088" },
    { name: "MKVN", logo: '/client-logo/mkvn.svg', color: "#00A650" },
    { name: "longi", logo: '/client-logo/longi.svg', color: "#9CA3AF" },
    { name: "RYOBI", logo: '/client-logo/ryobi.svg', color: "#1456A1" },
    { name: "STROMAN", logo: '/client-logo/stroman.svg', color: "#0F75BC" },
    { name: "TRALYTEX", logo: '/client-logo/tralytex.svg', color: "#9CA3AF" },
    { name: "jinko", logo: '/client-logo/jinko.svg', color: "#9CA3AF" },
    { name: "trina", logo: '/client-logo/trina.svg', color: "#9CA3AF" },
];

interface ClientLogoBoxProps {
    client: {
        name: string;
        logo: string | null;
        color?: string;
    };
}

const ClientLogoBox: React.FC<ClientLogoBoxProps> = ({ client }) => {
    const [imgError, setImgError] = useState(false);

    return (
        <div className="mx-8 flex items-center justify-center group cursor-default transition-all duration-300 min-w-25 min-h-12.5">
            {!imgError && client.logo ? (
                <img
                    src={client.logo}
                    alt={client.name}
                    className="h-12 lg:h-20 w-auto object-contain transition-all duration-500"
                    onError={() => setImgError(true)}
                />
            ) : (
                <span
                    className="text-lg lg:text-xl font-black uppercase tracking-wider font-heading leading-tight whitespace-nowrap opacity-60 group-hover:opacity-100 transition-opacity"
                    style={{ color: client.color || "#9CA3AF" }}
                >
                    {client.name}
                </span>
            )}
        </div>
    );
};


interface MapAndClientsSectionProps {
    t: TranslationContent;
}

const MapAndClientsSection: React.FC<MapAndClientsSectionProps> = ({ t }) => {
    const mapStats = t.mapStats;
    return (
        <section
            id="section-2"
            className="min-h-screen flex flex-col items-center justify-center bg-white relative overflow-hidden py-12 sm:py-16 md:py-20"
        >
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[20px_20px] opacity-30"></div>

            <div className="max-w-360 mx-auto px-4 sm:px-6 relative z-10 w-full">
                <StaggerContainer className="grid lg:grid-cols-12 gap-8 sm:gap-12 items-center mb-12 sm:mb-20">
                    <div className="lg:col-span-4 space-y-8">
                        <StaggerItem className="mb-8">
                            <h3 className="text-[#228B22] font-bold text-sm uppercase tracking-widest mb-3">
                                {t.section2SubTitle}
                            </h3>
                            <h2 className="text-4xl lg:text-5xl font-black text-[#1A2B3C] leading-tight font-heading whitespace-pre-line">
                                {t.section2Title}
                            </h2>
                            <p className="text-gray-500 mt-4 leading-relaxed font-light">
                                {t.section2Description}
                            </p>
                        </StaggerItem>

                        {mapStats &&
                            mapStats.map((stat, idx) => (
                                <StaggerItem
                                    key={idx}
                                    className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center space-x-5 hover:shadow-md transition-all hover:-translate-y-1"
                                >
                                    <div
                                        className="p-3 rounded-full bg-gray-50 shadow-sm shrink-0"
                                        style={{ color: stat.color }}
                                    >
                                        <stat.icon size={28} />
                                    </div>
                                    <div>
                                        <div className="text-3xl font-black text-[#1A2B3C] font-tech leading-none mb-1">
                                            <CountUp value={stat.val} suffix={stat.suffix} />
                                        </div>
                                        <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">
                                            {stat.label}
                                        </div>
                                    </div>
                                </StaggerItem>
                            ))}
                    </div>

                    <div className="lg:col-span-8 relative h-87.5 sm:h-112.5 lg:h-150 flex items-center justify-center">
                        <div className="relative grow flex items-center justify-center p-0 lg:p-8 w-full">
                            <img src='/client-logo/vietnam-maps.png' className='h-full w-[62%]' />

                            {projectLocations.map((loc, i) => (
                                <div
                                    key={i}
                                    className="absolute flex items-center justify-center group/dot"
                                    style={{
                                        top: loc.top,
                                        left: loc.left,
                                        transform: "translate(-50%, -50%)",
                                    }}
                                >
                                    <div className="absolute w-4 h-4 bg-[#228B22] rounded-full opacity-75 animate-ping" style={{ zIndex: 5 }}></div>
                                    <div className="w-3 h-3 bg-[#228B22] rounded-full z-10 cursor-pointer hover:scale-125 transition-transform"></div>
                                    <div className="absolute opacity-0 group-hover/dot:opacity-100 transition-opacity bg-[#1A2B3C] text-white text-[10px] px-2 py-1 rounded shadow-lg -top-8 whitespace-nowrap z-20 pointer-events-none font-bold">
                                        {loc.name}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </StaggerContainer>

                <StaggerContainer className="w-full border-t border-gray-100 pt-20 mt-20">
                    <div className="text-center mb-10">
                        <h5 className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                            {t.section2ClientTitle}
                        </h5>
                    </div>

                    <div className="relative z-10 flex items-center justify-center">
                        <Marquee>
                            {[...clientsList, ...clientsList].map(
                                (client, i) => (
                                    <ClientLogoBox key={i} client={client} />
                                )
                            )}
                        </Marquee>
                    </div>
                </StaggerContainer>
            </div>
        </section>
    );
}

export default MapAndClientsSection;
