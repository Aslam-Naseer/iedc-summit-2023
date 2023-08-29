import Navbar from "../components/Navbar";
import CountDown from "../components/countDown";
import bg0 from "../assets/img/about/C0.png";
import bg1 from "../assets/img/about/C1.png";
import bg2 from "../assets/img/about/C2.png";

function LandingPage({ navbarItems }) {
  return (
    <div className="relative w-full bg- flex flex-col pb-12">
      <img src={bg0} className="absolute right-0 -z-50" />

      <div className="absolute left-0 right-0 flex flex-col items-start w-72 md:w-[22rem] lg:w-auto -z-50">
        <img src={bg1} className="mb-[-5px]" />
        <img src={bg2} className="" />
      </div>
      <Navbar navbarItems={navbarItems} />
      <div className="font-dm-sans flex flex-col self-center items-center sm:items-start md:w-9/12 pt-24 pb-20 md:py-28">
        <h1 className="font-bold text-5xl md:text-7xl lg:text-8xl bg-gradient-to-b from-[#097ED8] to-[#000000] bg-clip-text text-transparent pb-4">
          IEDC SUMMIT
        </h1>
        <h1 className="font-bold text-4xl md:text-6xl lg:text-7xl bg-gradient-to-b from-[#2B394366] to-[#000000] bg-clip-text text-transparent pb-16">
          2023
        </h1>
        <h1 className="font-bold text-2xl md:text-5xl text-[#0065B2] pb-4">
          OCTOBER 12
        </h1>
        <h1 className="font-semibold text-xl md:text-3xl text-[#676C70] pb-1">
          COLLEGE OF ENGINEERING,
        </h1>
        <h1 className="font-semibold text-xl md:text-3xl text-[#676C70] pb-16">
          TRIVANDRUM
        </h1>
        <div className="flex  items-center w-[232px] h-[58px] bg-[#097ED8] rounded-[30px] ">
          <div className="font-bold text-white text-2xl justify-center mx-auto cursor-pointer">
            BUY TICKETS
          </div>
        </div>
      </div>
      <CountDown />
    </div>
  );
}
export default LandingPage;
