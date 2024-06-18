import NewsHero from "@/components/NewsHero";
import NewsSubscribe from "@/components/NewsSubscribe";
import OurNews from "@/components/OurNews";
import HomeCustomer from "@/components/HomeCustomer";

const myPost = () => {
  return (
    <div>
      <NewsHero />
      <OurNews />
      <NewsSubscribe />
      <HomeCustomer />
    </div>
  );
};

export default myPost;
