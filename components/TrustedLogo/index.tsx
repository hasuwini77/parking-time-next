import React from "react";
import Image from "next/image";

const TrustedLogo: React.FC = () => {
  return (
    <>
      <h3 className="bg-background text-center text-xl m-0 p-0 font-sans font-bold">
        Trusted by
      </h3>
      <div className="w-full inline-flex flex-nowrap bg-white p-4 my-5 overflow-hidden ">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          <li>
            <Image
              src="/images/BrandedLogos/almi.svg"
              alt="almi"
              width={100}
              height={100}
              style={{ width: "auto", height: "auto" }}
            />
          </li>
          <li>
            <Image
              src="/images/BrandedLogos/gobusiness.svg"
              alt="gobusiness"
              width={100}
              height={100}
              style={{ width: "auto", height: "auto" }}
            />
          </li>
          <li>
            <Image
              src="/images/BrandedLogos/falkoping2.png"
              alt="logo1"
              width={130}
              height={130}
              style={{ width: "auto", height: "auto" }}
            />
          </li>
          <li>
            <Image
              src="/images/BrandedLogos/skapa.png"
              alt="logo2"
              width={150}
              height={150}
              style={{ width: "auto", height: "auto" }}
            />
          </li>
          <li>
            <Image
              src="/images/BrandedLogos/logo3.svg"
              alt="logo3"
              width={100}
              height={100}
              style={{ width: "auto", height: "auto" }}
            />
          </li>
          <li>
            <Image
              src="/images/BrandedLogos/business.png"
              alt="logo4"
              width={130}
              height={130}
              style={{ width: "auto", height: "auto" }}
            />
          </li>
          <li>
            <Image
              src="/images/BrandedLogos/lulea.png"
              alt="lulea"
              width={100}
              height={100}
              style={{ width: "auto", height: "auto" }}
            />
          </li>
          <li>
            <Image
              src="/images/BrandedLogos/nassjo.png"
              alt="nass"
              width={100}
              height={100}
              style={{ width: "auto", height: "auto" }}
            />
          </li>
          <li>
            <Image
              src="/images/BrandedLogos/venture.png"
              alt="nass"
              width={150}
              height={150}
              style={{ width: "auto", height: "auto" }}
            />
          </li>
          <li>
            <Image
              src="/images/BrandedLogos/artic.png"
              alt="nass"
              width={150}
              height={150}
              style={{ width: "auto", height: "auto" }}
            />
          </li>
        </ul>

        <ul
          className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
          aria-hidden="true"
        >
          <li>
            <Image
              src="/images/BrandedLogos/almi.svg"
              alt="almi"
              width={100}
              height={100}
              style={{ width: "auto", height: "auto" }}
            />
          </li>
          <li>
            <Image
              src="/images/BrandedLogos/gobusiness.svg"
              alt="gobusiness"
              width={100}
              height={100}
              style={{ width: "auto", height: "auto" }}
            />
          </li>
          <li>
            <Image
              src="/images/BrandedLogos/falkoping2.png"
              alt="logo1"
              width={130}
              height={130}
              style={{ width: "auto", height: "auto" }}
            />
          </li>
          <li>
            <Image
              src="/images/BrandedLogos/skapa.png"
              alt="logo2"
              width={150}
              height={150}
              style={{ width: "auto", height: "auto" }}
            />
          </li>
          <li>
            <Image
              src="/images/BrandedLogos/logo3.svg"
              alt="logo3"
              width={100}
              height={100}
              style={{ width: "auto", height: "auto" }}
            />
          </li>
          <li>
            <Image
              src="/images/BrandedLogos/business.png"
              alt="logo4"
              width={130}
              height={130}
              style={{ width: "auto", height: "auto" }}
            />
          </li>
          <li>
            <Image
              src="/images/BrandedLogos/lulea.png"
              alt="lulea"
              width={100}
              height={100}
              style={{ width: "auto", height: "auto" }}
            />
          </li>
          <li>
            <Image
              src="/images/BrandedLogos/nassjo.png"
              alt="nass"
              width={100}
              height={100}
              style={{ width: "auto", height: "auto" }}
            />
          </li>
          <li>
            <Image
              src="/images/BrandedLogos/venture.png"
              alt="nass"
              width={150}
              height={150}
              style={{ width: "auto", height: "auto" }}
            />
          </li>
          <li>
            <Image
              src="/images/BrandedLogos/artic.png"
              alt="nass"
              width={150}
              height={150}
              style={{ width: "auto", height: "auto" }}
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default TrustedLogo;
