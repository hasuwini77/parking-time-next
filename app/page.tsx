import HomeHero from "@/components/HomeHero";
import HomeHowWorks from "@/components/HomeHowWorks";
import HomeStatistics from "@/components/HomeStatistics";
import TrustedLogo from "@/components/TrustedLogo";
import Faq from "@/components/Faq";
import SmartParking from "@/components/SmartParking";
import HomeWhyParking from "@/components/HomeWhyParking";
import HomeDownload from "@/components/Home-Download";

export default function Home() {
  return (
    <section className="">
      <HomeHero />
      <HomeHowWorks />
      <HomeWhyParking />
      <HomeStatistics />
      <SmartParking />
      <TrustedLogo />
      <Faq />
      <HomeDownload />
    </section>
  );
}
