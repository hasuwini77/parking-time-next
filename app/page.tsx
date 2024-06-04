import HomeHero from "@/components/HomeHero";
import HomeHowWorks from "@/components/HomeHowWorks";
import HomeStatistics from "@/components/HomeStatistics";
import HomeWhyParking from "@/components/HomeWhyParking";
import TrustedLogo from "@/components/TrustedLogo";
import Faq from "@/components/Faq";

export default function Home() {
  return (
    <section className="">
      <HomeHero />
      <HomeHowWorks />
      <HomeWhyParking />
      <HomeStatistics />
      <TrustedLogo />
      <Faq />
    </section>
  );
}
