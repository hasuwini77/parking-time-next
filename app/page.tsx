import HomeHero from "@/components/HomeHero";
import HomeHowWorks from "@/components/HomeHowWorks";
import HomeStatistics from "@/components/HomeStatistics";
import TrustedLogo from "@/components/TrustedLogo";
import HomeKnow from "@/components/HomeKnow";

export default function Home() {
  return (
    <section className="">
      <HomeHero />
      <HomeHowWorks />
      <HomeStatistics />
      <TrustedLogo/>
      <HomeKnow />
    </section>
  );
}