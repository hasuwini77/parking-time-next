import HomeHero from "@/components/HomeHero";
import HomeHowWorks from "@/components/HomeHowWorks";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center">
      <HomeHero />
      <HomeHowWorks />
      <div className="text-center justify-center">
        <h1 className="text-heading1"> Welcome to Parking Time!</h1>
        <p className="text-paragraph1 font-mono">This is a paragraph</p>
      </div>
    </section>
  );
}
