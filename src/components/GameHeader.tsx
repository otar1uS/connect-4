import Logo from "../assets/images/logo.svg";

const GameHeader = () => {
  return (
    <div className="flex justify-between items-center w-full h-[40px] mb-[3.125rem] sm:mb-[2rem] md:mb-[3.3125rem] ">
      <button className="text-[16px] text-PureWhite bg-DarkPurple px-[20px] py-[10px]  rounded-[20px] cursor-pointer leading-5 ml-[22px] font-bold w-[86px] h-[39px] hover:bg-LightRed transition-all">
        Menu
      </button>
      <img
        src={Logo}
        alt="Logo"
        className="w-[40px]  h-[40px] sm:w-[52px]  sm:h-[52px] "
      />
      <button className="text-[16px] text-PureWhite bg-DarkPurple px-[20px]  py-[10px] rounded-[20px] cursor-pointer leading-5 font-bold w-[108px] h-[39px] hover:bg-LightRed transition-all">
        RESTART
      </button>
    </div>
  );
};

export default GameHeader;
