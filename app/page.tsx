import HomeHero from "@/components/HomeHero";
import HomeHowWorks from "@/components/HomeHowWorks";
import HomeStatistics from "@/components/HomeStatistics";
import TrustedLogo from "@/components/TrustedLogo";
import Faq from "@/components/Faq";
import SmartParking from "@/components/SmartParking";
import HomeWhyParking from "@/components/HomeWhyParking";

export default function Home() {
  return (
    <section className="">
      <HomeHero />
      <SmartParking />
      <HomeHowWorks />
      <HomeWhyParking />
      <HomeStatistics />
      <TrustedLogo />
      <Faq/>
    </section>
  );
}
