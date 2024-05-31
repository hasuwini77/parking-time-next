import HomeHero from "@/components/HomeHero";
import HomeHowWorks from "@/components/HomeHowWorks";
import HomeStatistics from "@/components/HomeStatistics";

export default function Home() {
  return (
    <section className="">
      <div className="text-center justify-center">
        <HomeHero />
        <HomeHowWorks />
        <HomeStatistics />
      </div>
    </section>
  );
}
