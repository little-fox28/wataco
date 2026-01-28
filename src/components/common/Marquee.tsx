import React from 'react';

interface MarqueeProps {
  children: React.ReactNode;
  duration?: number;
}

const Marquee: React.FC<MarqueeProps> = ({ children, duration = 40 }) => {
  return (
    <div className="overflow-hidden relative w-full">
      <div
        className="flex space-x-10 whitespace-nowrap"
        style={{
          animation: `scroll ${duration}s linear infinite`,
        }}
      >
        {children}
      </div>
      <style>
        {`
          @keyframes scroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Marquee;
