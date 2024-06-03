import React from "react";
import {Card, CardFooter, CardBody, Image} from "@nextui-org/react";

const HomeNewsCard: React.FC = () => {
  return (
    <Card className="w-[23%]">
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="./images/news-img1.png"
          width={270}
        />
      </CardBody>
      <CardFooter className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">Positive Impact in Nässjö</h4>
        <p className="text-tiny">After a year of using the Parking Time app for all central parking areas, Nässjö municipality reports positive results from digitalizing the parking disc.</p>
        <small className="text-default-500">27 May 2024 - 4 min read</small>
        <button>Read more</button>
      </CardFooter>
    </Card>
  );
}

export default HomeNewsCard

/* import React from "react";
import {Card, CardFooter, CardHeader, CardBody, Image} from "@nextui-org/react";

const HomeNewsCard: React.FC = () => {
  return (
<Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Daily Mix</p>
        <small className="text-default-500">12 Tracks</small>
        <h4 className="font-bold text-large">Frontend Radio</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://nextui.org/images/hero-card-complete.jpeg"
          width={270}
        />
      </CardBody>
    </Card>
  );
}

export default HomeNewsCard */
