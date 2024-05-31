import HomeHero from "@/components/HomeHero";
import HomeHowWorks from "@/components/HomeHowWorks";
import HomeStatistics from "@/components/HomeStatistics";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center">
      <HomeHero />
      <HomeHowWorks />
      <HomeStatistics />
    </section>
  );
}
