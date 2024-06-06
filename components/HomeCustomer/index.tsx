"use client";
import { useLanguage } from "@/context/LanguageContext";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

const testimonials = [
    {
        id: 1,
        imgAlt: 'Logo Falkoping',
        logoSrc: '/images/falkoping.png',
        text: {
            english:'“Parking Time has significantly improved our parking management and user satisfaction in the city center. The ease of use and intuitive interface have made it simple for residents and visitors to find and manage parking. We highly recommend Parking Time to other municipalities looking for a modern and efficient parking solution.”',
            swedish: '“Parking Time har avsevärt förbättrat vår parkeringshantering och användartillfredsställelse i stadens centrum. Den användarvänliga och intuitiva gränssnittet har gjort det enkelt för invånare och besökare att hitta och hantera parkering. Vi rekommenderar starkt Parking Time till andra kommuner som letar efter en modern och effektiv parkeringslösning.”'
        },
        personImageSrc: '/images/marialundin.png',
        personName: 'Maria Lundin',
        personTitle: {
            english: 'City Architect, Falköping Kommun',
            swedish: 'Stadsarkitekt, Falköping Kommun'
        },
    },
    {
        id: 2,
        imgAlt: 'Logo Nassjo',
        logoSrc: '/images/nassjokommun.png',
        text: {
            english: '“Parking Time has significantly improved our parking management and user satisfaction in the city center. The ease of use and intuitive interface have made it simple for residents and visitors to find and manage parking. We highly recommend Parking Time to other municipalities looking for a modern and efficient parking solution.”',
            swedish: '“Implementeringen av Parking Time har varit en spelväxlare för våra stadsplaneringsinsatser. De detaljerade användningsdata och beteendemönster som appen tillhandahåller har gett oss värdefulla insikter i parkeringsmönster och hjälpt oss att optimera våra parkeringsresurser. Parking Time har verkligen revolutionerat vårt sätt att närma oss parkering och stadsutveckling.”'
        }
,       personImageSrc: '/images/jonaseriksson.png',
        personName: 'Jonas Eriksson',
        personTitle: {
            english: 'Municipal Manager, Nässjö Kommun',
            swedish: 'Kommunchef, Nässjö Kommun'
        },
      },
    // Add more testimonials as needed
  ];

const HomeCustomer: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="flex flex-col items-center text-center my-8 mx-3">
    <div>
      <h2 className="text-4xl font-bold">Customer testimonials</h2>
      <p className="py-3">Hear from some of our clients.</p>
    </div>
    <div className="overflow-x-auto scrollbar-hide flex gap-4 py-4 max-w-screen-lg">
    {testimonials.map((testimonial) => (
      <Card key={testimonial.id} className="w-[350px] md:w-[500px] md:rounded-[32px] mb-8">
        <CardHeader className="flex gap-3">
          <Image
            alt={testimonial.imgAlt}
            height={40}
            src={testimonial.logoSrc}
            className="rounded-none"
          />
        </CardHeader>
        <CardBody className="font-mono text-m italic pt-1 pb-2">
          <p>{testimonial.text[language as keyof typeof testimonial.text]}</p>
        </CardBody>
        <CardFooter>
          <div className="flex flex-col md:flex-row items-start text-start space-y-2 md:space-y-0 md:space-x-4">
            <div>
              <Image
                alt={testimonial.personName}
                height={40}
                width={40}
                src={testimonial.personImageSrc}
                className="rounded-full"
              />
            </div>
            <div>
              <p className="text-red font-bold">{testimonial.personName}</p>
              <p>{testimonial.personTitle[language as keyof typeof testimonial.personTitle]}</p>
            </div>
          </div>
        </CardFooter>
      </Card>
    ))}
    </div>
  </div>
  );
};

export default HomeCustomer;
