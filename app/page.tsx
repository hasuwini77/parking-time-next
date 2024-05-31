import SmartParking from "@/components/SmartParking";
import HomeHero from "@/components/HomeHero";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center">
      <HomeHero />
      <SmartParking />
    </section> 
  );
}
