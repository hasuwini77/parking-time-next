"use client"
import HomeHero from "@/components/HomeHero";
import HomeHowWorks from "@/components/HomeHowWorks";
import HomeStatistics from "@/components/HomeStatistics";
import TrustedLogo from "@/components/TrustedLogo";
import HomeKnow from "@/components/HomeKnow";
import Faq from "@/components/Faq";
import SmartParking from "@/components/SmartParking";
import HomeWhyParking from "@/components/HomeWhyParking";
import HomeDownload from "@/components/Home-Download";
import OurNews from "@/components/OurNews";
import HomeCustomer from "@/components/HomeCustomer";
import NewsSubscribe from "@/components/NewsSubscribe";
import ButtonEditable from "@/components/ButtonEditable";

export default function Home() {
  return (
    <section className="relative">
      <HomeHero />
      <SmartParking />
      <HomeHowWorks />
      <HomeWhyParking />      
      <HomeCustomer />
      <TrustedLogo />
      <NewsSubscribe />      
      <OurNews />
      <div className="flex justify-center bg-primary pt-2 pb-6">
      <span className="max-w-[90%] w-[342px] mx-auto text-center"><ButtonEditable linkHref="/newsPost" SWtext="Visa alla" ENtext="View all" textColor="text-white" bgColor="bg-black" hoverEffect="hover:bg-gray hover:text-white" /></span>
      </div>
      <HomeDownload />
      <HomeStatistics />
      <Faq />      
      <HomeKnow />
    </section>
  );
}
