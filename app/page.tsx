import HomeHero from "@/components/HomeHero";
import SmartParking from "@/components/SmartParking";
import HomeHowWorks from "@/components/HomeHowWorks";
import HomeWhyParking from "@/components/HomeWhyParking";
import HomeCustomer from "@/components/HomeCustomer";
import TrustedLogo from "@/components/TrustedLogo";
import NewsSubscribe from "@/components/NewsSubscribe";
import OurNews from "@/components/OurNews";
import HomeDownload from "@/components/Home-Download";
import HomeStatistics from "@/components/HomeStatistics";
import Faq from "@/components/Faq";
import HomeKnow from "@/components/HomeKnow";

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
      <HomeDownload />
      <HomeStatistics />   
      <Faq />
      <HomeKnow />      
    </section>
  );
}