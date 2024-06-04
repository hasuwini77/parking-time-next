import HomeHero from "@/components/HomeHero";
import HomeHowWorks from "@/components/HomeHowWorks";
import HomeStatistics from "@/components/HomeStatistics";
import TrustedLogo from "@/components/TrustedLogo";
import Faq from "@/components/Faq";
import SmartParking from "@/components/SmartParking";
import HomeWhyParking from "@/components/HomeWhyParking";
import OurNews from "@/components/NewsApi";
import { Entry , EntrySkeletonType} from 'contentful';

interface NewsPostFields extends EntrySkeletonType {
  title: string;
  body: string;
}

interface HomeProps {
  newsPost: Entry<NewsPostFields>[];
}

const Home: React.FC<HomeProps> = ({ newsPost }) => {
  return (
    <section className=""> 
      <HomeHero />
      <HomeHowWorks />
      <HomeWhyParking />
      <HomeStatistics />
      <SmartParking />
      <TrustedLogo />
      <Faq />
      <OurNews newsPost={newsPost || []} />
    </section>
  );
}

export default Home;
