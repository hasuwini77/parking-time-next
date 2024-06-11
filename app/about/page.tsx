import Quotes from "@/components/AboutQuotes";
import AboutTeam from "@/components/AboutTeam";
import AboutHero from "@/components/AboutHero";
import AboutVision from "@/components/AboutVision";
import AboutKnow from "@/components/AboutKnow";

export default function AboutPage() {
  return (
    <div>
      <AboutHero />
      <AboutVision/>
      <Quotes />
      <AboutTeam />
      <AboutKnow />
    </div>
  );
}
