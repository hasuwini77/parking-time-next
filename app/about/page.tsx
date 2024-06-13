import AboutHero from "@/components/AboutHero";
import AboutVision from "@/components/AboutVision";
import Quotes from "@/components/AboutQuotes";
import AboutKnow from "@/components/AboutKnow";
import AboutTeam from "@/components/AboutTeam";
import AboutCreativeScroll from "@/components/AboutCreativeScroll";

export default function AboutPage() {
  return (
    <div>
      <AboutHero />
      <AboutVision />
      <AboutCreativeScroll />
      <Quotes />
      <AboutTeam />
      <AboutKnow />
    </div>
  );
}
