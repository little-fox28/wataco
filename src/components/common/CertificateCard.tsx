import { motion } from 'framer-motion';

export const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.4 }
    }
};

interface CertificateCardProps {
    imageSrc: string;
    title: string;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ imageSrc, title }) => (
    <motion.div
        variants={cardVariants}
        className="bg-white rounded-lg border border-gray-100 overflow-hidden hover:shadow-xl hover:border-gray-200 transition-all duration-300 group flex flex-col items-center justify-center p-4 h-full"
    >
        <div className="relative h-20 w-20">
            <img
                src={imageSrc}
                alt={title}
                className="h-full w-full object-contain group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
            />
        </div>
        <div className="text-center">
            <h3 className="text-[10px] font-semibold text-gray-600 font-heading tracking-wide uppercase mt-2" title={title}>
                {title}
            </h3>
        </div>
    </motion.div>
);

export default CertificateCard;
