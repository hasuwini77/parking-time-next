import HomeHero from "@/components/HomeHero";
import HomeHowWorks from "@/components/HomeHowWorks";
import HomeStatistics from "@/components/HomeStatistics";
import TrustedLogo from "@/components/TrustedLogo";
import HomeKnow from "@/components/HomeKnow";
import Faq from "@/components/Faq";
import SmartParking from "@/components/SmartParking";
import HomeWhyParking from "@/components/HomeWhyParking";
import HomeCustomer from "@/components/HomeCustomer";
import OurNews from "@/components/OurNews";

export default function Home() {
  return (
    <section className="">
      <HomeHero />
      <SmartParking />
      <HomeHowWorks />
      <HomeWhyParking />
      <HomeCustomer />
      <TrustedLogo />
      <HomeStatistics />
      <HomeKnow />
      <Faq />
      <OurNews />
    </section>
  );
}
