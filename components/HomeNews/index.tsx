import HomeNewsCard from "../HomeNewsCard"
import image1 from "../../public/images/news-img1.png"

const HomeNews: React.FC = () => {
  return (
    <section>
        <HomeNewsCard 
          title="Positive Impact in Nässjö" 
          text="After a year of using the Parking Time app for all central parking areas, Nässjö municipality reports positive results from digitalizing the parking disc." 
          image={image1}
          date="27 May 2024"
          readTime="4 min read" 
        />
    </section>
  )
}

export default HomeNews