import Image from "next/image";
import BackgroundHeader from "./social media header/BackgroundHeader";
import MainNavbar from "./navbar/MainNavbar";
import CarouselData from "./caurosel page/CauroselData";
import BuyerLanding from "./buyers project/BuyerLanding";
import Ansewer from "./buyers project/BuyerNavbar/Ansewer";
// import "./globals.css"

export default function Home() {
  return (
    <div className="">
      {/* <BackgroundHeader />
      <MainNavbar />
      <CarouselData /> */}
      <BuyerLanding />
     
    </div>
  );
}
