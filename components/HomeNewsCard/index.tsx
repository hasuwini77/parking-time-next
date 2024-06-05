/* import React from "react";
import {Card, CardFooter, CardBody, Image} from "@nextui-org/react";

const HomeNewsCard: React.FC = () => {
  return (
    <Card className="w-[18.5%]">
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

export default HomeNewsCard */

/* import Image, { StaticImageData } from 'next/image'

interface HomeNewsCardProps {
  title: string;
  text: string;
  image: StaticImageData;
}


const HomeNewsCard: React.FC<HomeNewsCardProps> = ({ title, text, image }) => {
  return (
    <div className="py-5 w-[80%]">
      <div className="">
        <Image src={image} alt="card img" className='w-full' />
        <h2>{title}</h2>
        <p>{text}</p>
        <small className="text-default-500">27 May 2024 - 4 min read</small>
        <button>Read more</button>
      </div>
    </div>
  );
}

export default HomeNewsCard */

import React from 'react';
import Image, { StaticImageData } from 'next/image'
import styles from './HomeNewsCard.module.css';

interface HomeNewsCardProps {
  image: StaticImageData;
  title: string;
  text: string;
  date: string;
  readTime: string;
}

/* const HomeNewsCard: React.FC<HomeNewsCardProps> = ({ image, title, text, date, readTime }) => {
  return (
    <div className={styles.card}>
      <Image src={image} alt="Nässjö" width={500} height={250} className={styles.image} />
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{text}</p>
        <div className={styles.footer}>
          <span>{date}</span> • <span>{readTime}</span>
        </div>
        <a href="#" className={styles.readMore}>Read more</a>
      </div>
    </div>
  );
}; */


const HomeNewsCard: React.FC<HomeNewsCardProps> = ({ image, title, text, date, readTime }) => {
  return (
    <div className="w-2/6 m-3 border border-gray-300 rounded-lg overflow-hidden shadow-lg bg-white">
      <Image src={image} alt="Nässjö" width={500} height={250} className="w-full h-auto" />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{text}</p>
        <div className="text-sm text-gray-500 mb-4">
          <span>{date}</span> • <span>{readTime}</span>
        </div>
        <a href="#" className="text-blue-600 font-semibold hover:underline">Read more</a>
      </div>
    </div>
  );
};



export default HomeNewsCard;
