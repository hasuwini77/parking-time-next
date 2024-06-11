import React from "react";
import Image from "next/image";

const TrustedLogo: React.FC = () => {
  return (
    <>
      <h3 className="text-center text-xl m-0 p-0 font-sans font-bold">
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
              src="/images/BrandedLogos/logo1.svg"
              alt="logo1"
              width={100}
              height={100}
              style={{ width: "auto", height: "auto" }}
            />
          </li>
          <li>
            <Image
              src="/images/BrandedLogos/logo2.svg"
              alt="logo2"
              width={100}
              height={100}
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
              src="/images/BrandedLogos/logo4.svg"
              alt="logo4"
              width={100}
              height={100}
              style={{ width: "auto", height: "auto" }}
            />
          </li>
          <li>
            <Image
              src="/images/BrandedLogos/lulea.svg"
              alt="lulea"
              width={100}
              height={100}
              style={{ width: "auto", height: "auto" }}
            />
          </li>
          <li>
            <Image
              src="/images/BrandedLogos/nass.svg"
              alt="nass"
              width={100}
              height={100}
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
              src="/images/BrandedLogos/logo1.svg"
              alt="logo1"
              width={100}
              height={100}
              style={{ width: "auto", height: "auto" }}
            />
          </li>
          <li>
            <Image
              src="/images/BrandedLogos/logo2.svg"
              alt="logo2"
              width={100}
              height={100}
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
              src="/images/BrandedLogos/logo4.svg"
              alt="logo4"
              width={100}
              height={100}
              style={{ width: "auto", height: "auto" }}
            />
          </li>
          <li>
            <Image
              src="/images/BrandedLogos/lulea.svg"
              alt="lulea"
              width={100}
              height={100}
              style={{ width: "auto", height: "auto" }}
            />
          </li>
          <li>
            <Image
              src="/images/BrandedLogos/nass.svg"
              alt="nass"
              width={100}
              height={100}
              style={{ width: "auto", height: "auto" }}
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default TrustedLogo;
