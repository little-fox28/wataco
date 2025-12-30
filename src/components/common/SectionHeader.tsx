import React from 'react';

interface SectionHeaderProps {
    title: string;
    icon?: React.ElementType;
    color?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, icon: Icon, color = "#228B22" }) => (
    <div className={`flex items-center space-x-3 mb-6 mt-12 border-b-2 border-gray-100 pb-2`}>
        <div className={`p-2 rounded-md bg-opacity-10`} style={{ backgroundColor: `${color}20` }}>
            {Icon && <Icon size={24} color={color} />}
        </div>
        <h2 className="text-2xl font-black text-[#1A2B3C] uppercase tracking-tight font-heading">{title}</h2>
    </div>
);

export default SectionHeader;
