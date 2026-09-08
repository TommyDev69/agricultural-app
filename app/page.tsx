import Image from "next/image";
import BackgroundHeader from "./social media header/BackgroundHeader";
import MainNavbar from "./navbar/MainNavbar";
import CarouselData from "./caurosel page/CauroselData";
import BuyerLanding from "./buyers project/BuyerLanding";

export default function Home() {
  return (
    <div className=" bg-zinc-50 ">
      {/* <BackgroundHeader />
      <MainNavbar />
      <CarouselData /> */}
      <BuyerLanding />
    </div>
  );
}
