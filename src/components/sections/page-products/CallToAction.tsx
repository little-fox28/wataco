import React from 'react';

interface CallToActionProps {
    t: any; // Translation object
}

const CallToAction: React.FC<CallToActionProps> = ({ t }) => {
    return (
        <section className="py-20 bg-[#228B22] text-white">
            <div className="max-w-[1440px] mx-auto px-6 text-center">
                <h2 className="text-3xl lg:text-4xl font-black mb-6 font-heading">{t.ui.ctaTitle}</h2>
                <p className="text-white/90 text-lg max-w-2xl mx-auto mb-10 font-light">
                    {t.ui.ctaDesc}
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button className="bg-white text-[#228B22] px-8 py-4 rounded-md font-black uppercase tracking-widest hover:bg-[#1A2B3C] hover:text-white transition-all shadow-xl">
                        {t.ui.ctaBtn1}
                    </button>
                    <button className="bg-transparent border border-white text-white px-8 py-4 rounded-md font-black uppercase tracking-widest hover:bg://www.wataco.com/white hover:text-[#228B22] transition-all">
                        {t.ui.ctaBtn2}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
