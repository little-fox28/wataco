const WatacoLogo = () => (
  <a href="/" className="flex items-center space-x-3">
    <div className="h-[40px] w-[40px] lg:h-[50px] lg:w-[50px] relative">
      <img src="/wataco-logo-svg.svg" alt="Wataco Logo" className="w-full h-full" />
    </div>

    <div className="flex flex-col">
      <span className="text-lg lg:text-xl font-black tracking-tighter leading-none text-white font-heading">WATACO</span>
      <span className="text-[6px] lg:text-[8px] text-white font-bold tracking-[0.2em] uppercase mt-1">Member of Watanabe Create Group</span>
    </div>
  </a>
);

export default WatacoLogo;