import AboutHero from "@/components/AboutHero";
import AboutVision from "@/components/AboutVision";
import Quotes from "@/components/AboutQuotes";
import AboutKnow from "@/components/AboutKnow";
import Values from "@/components/AboutValues";
import AboutTeam from "@/components/AboutTeam";

export default function AboutPage() {
  return (
    <div >
      <AboutHero />
      <AboutVision/>
      <Values />
      <Quotes />
      <AboutTeam />
      <AboutKnow />
    </div>
  );
}
