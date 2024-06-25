"use client";
import { useLanguage } from "@/context/LanguageContext";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
} from "@nextui-org/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "./styles.css";

const testimonials = [
  {
    id: 1,
    imgAlt: "Logo Falkoping",
    logoSrc: "/images/falkoping.webp",
    text: {
      english:
        "“Parking Time has significantly improved our parking management and user satisfaction in the city center. The ease of use and intuitive interface have made it simple for residents and visitors to find and manage parking. We highly recommend Parking Time to other municipalities looking for a modern and efficient parking solution.”",
      swedish:
        "“Parking Time har betydligt förbättrat vår parkeringshantering och användarnöjdhet i stadskärnan. Enkelheten och den intuitiva gränssnittet har gjort det enkelt för invånare och besökare att hitta och hantera parkering. Vi rekommenderar starkt Parking Time till andra kommuner som letar efter en modern och effektiv parkeringslösning.”",
    },
    personName: "Maria Lundin",
    personTitle: {
      english: "City Architect",
      swedish: "Stadsarkitekt",
    },
    municipality: "Falköping Kommun",
  },
  {
    id: 2,
    imgAlt: "Logo Nassjo",
    logoSrc: "/images/nassjokommun.webp",
    text: {
      english:
        "“Implementing Parking Time has been a game-changer for our urban planning efforts. The detailed usage data and behavior patterns provided by the app have given us valuable insights into parking trends and helped us optimize our parking resources. Parking Time has truly revolutionized the way we approach parking and urban development.”",
      swedish:
        "“Implementeringen av Parking Time har varit en verklig spelväxlare för våra stadsplaneringsinsatser. De detaljerade användningsdata och beteendemönster som appen tillhandahåller har gett oss värdefulla insikter i parkeringsmönster och hjälpt oss att optimera våra parkeringsresurser. Parking Time har verkligen revolutionerat vårt sätt att närma oss parkering och stadsutveckling.”",
    },
    personName: "Jonas Eriksson",
    personTitle: {
      english: "Municipal Manager",
      swedish: "Kommunal chef",
    },
    municipality: "Nässjö Kommun",
  },
];

const HomeCustomer: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="bg-background flex flex-col items-center text-center my-8">
      <div>
        <h2 className="font-bold text-4xl md:text-heading2 leading-[48px] mb-3">
          {language === "english" ? "Customer testimonials" : "Kundreferenser"}
        </h2>
        <p className="font-mono text-base mx-3 md:pt-2 pb-2">
          {language === "english"
            ? "Hear from some of our clients."
            : "Hör från några av våra kunder."}
        </p>
      </div>
      <div className="flex justify-center w-full md:pt-2">
        <Swiper
          className="w-full max-w-screen-xl"
          breakpoints={{
            768: {
              enabled: true,
              slidesPerView: 2,
            },
          }}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide
              key={testimonial.id}
              className="p-3 flex justify-center h-full"
            >
              <Card
                key={testimonial.id}
                className="w-[350px] md:w-[90%] h-full flex flex-col md:rounded-[32px] md:pl-2 md:pr-2"
              >
                <CardHeader>
                  <Image
                    alt={testimonial.imgAlt}
                    height={40}
                    src={testimonial.logoSrc}
                    className="rounded-none"
                  />
                </CardHeader>
                <CardBody className="font-mono text-base italic pt-1 pb-0 flex-grow">
                  <p>
                    {
                      testimonial.text[
                        language as keyof typeof testimonial.text
                      ]
                    }
                  </p>
                </CardBody>
                <CardFooter>
                  <div className="flex flex-col md:flex-row items-start md:items-center text-start md:pb-2">
                    <div></div>
                    <div className="font-mono text-base pt-2 md:p-0">
                      <p className="text-red font-bold">
                        {testimonial.personName}
                      </p>
                      <p>
                        {
                          testimonial.personTitle[
                            language as keyof typeof testimonial.personTitle
                          ]
                        }
                        , {testimonial.municipality}
                      </p>
                      <p></p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeCustomer;
