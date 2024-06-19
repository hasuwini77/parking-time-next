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

export default function Home() {
  return (
    <section className="relative">
      <HomeHero />
      <SmartParking />
      <HomeHowWorks />
      <HomeWhyParking />      
      <HomeCustomer />
      <TrustedLogo />
      <HomeDownload />
      <HomeStatistics />
      <OurNews />
      <NewsSubscribe />      
      <HomeKnow />
      <Faq />      
    </section>
  );
}
