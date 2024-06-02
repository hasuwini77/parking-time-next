import Footer from "@/components/Footer";
import HomeHero from "@/components/HomeHero";
import HomeHowWorks from "@/components/HomeHowWorks";
import HomeStatistics from "@/components/HomeStatistics";
import HomeWhyParking from "@/components/HomeWhyParking";
import TrustedLogo from "@/components/TrustedLogo";

export default function Home() {
  return (
    <section className="">
      <HomeHero />
      <HomeHowWorks />
      <HomeWhyParking />
      <HomeStatistics />
      <TrustedLogo />
      <Footer />
    </section>
  );
}
