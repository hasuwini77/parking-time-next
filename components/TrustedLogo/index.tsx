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
              src="/images/trusted/almi.webp"
              alt="almi"
              height={128}
              width={128}
              style={{ width: "auto", height: "auto" }}
            />
          </li>
          <li>
            <Image
              src="/images/trusted/go.webp"
              alt="gobusiness"
              width={128}
              height={69}
              style={{ width: "auto", height: "auto" }}
            />
          </li>
          <li>
            <Image
              src="/images/trusted/falk.webp"
              alt="logo1"
              width={250}
              height={128}
              style={{ width: "auto", height: "auto" }}
            />
          </li>
          <li>
            <Image
              src="/images/trusted/skapa.webp"
              alt="logo2"
              width={100}
              height={100}
              style={{ width: "auto", height: "auto" }}
            />
          </li>
          <li>
            <Image
              src="/images/trusted/arctic.webp"
              alt="logo3"
              width={250}
              height={128}
              style={{ width: "auto", height: "auto" }}
            />
          </li>
          <li>
            <Image
              src="/images/trusted/founders.webp"
              alt="logo4"
              width={128}
              height={128}
              style={{ width: "auto", height: "auto" }}
            />
          </li>
          <li>
            <Image
              src="/images/trusted/lulea.webp"
              alt="lulea"
              width={128}
              height={128}
              style={{ width: "auto", height: "auto" }}
            />
          </li>
          <li>
            <Image
              src="/images/trusted/nassjo.webp"
              alt="nass"
              width={128}
              height={100}
              style={{ width: "auto", height: "auto" }}
            />
          </li>
          <li>
            <Image
              src="/images/trusted/ltu.webp"
              alt="nass"
              width={150}
              height={100}
              style={{ width: "auto", height: "auto" }}
            />
          </li>
          <li>
            <Image
              src="/images/trusted/vc.webp"
              alt="nass"
              width={90}
              height={90}
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
              src="/images/trusted/almi.webp"
              alt="almi"
              height={128}
              width={128}
              style={{ width: "auto", height: "auto" }}
            />
          </li>
          <li>
            <Image
              src="/images/trusted/go.webp"
              alt="gobusiness"
              width={128}
              height={69}
              style={{ width: "auto", height: "auto" }}
            />
          </li>
          <li>
            <Image
              src="/images/trusted/falk.webp"
              alt="logo1"
              width={250}
              height={128}
              style={{ width: "auto", height: "auto" }}
            />
          </li>
          <li>
            <Image
              src="/images/trusted/skapa.webp"
              alt="logo2"
              width={100}
              height={100}
              style={{ width: "auto", height: "auto" }}
            />
          </li>
          <li>
            <Image
              src="/images/trusted/arctic.webp"
              alt="logo3"
              width={250}
              height={128}
              style={{ width: "auto", height: "auto" }}
            />
          </li>
          <li>
            <Image
              src="/images/trusted/founders.webp"
              alt="logo4"
              width={128}
              height={128}
              style={{ width: "auto", height: "auto" }}
            />
          </li>
          <li>
            <Image
              src="/images/trusted/lulea.webp"
              alt="lulea"
              width={128}
              height={128}
              style={{ width: "auto", height: "auto" }}
            />
          </li>
          <li>
            <Image
              src="/images/trusted/nassjo.webp"
              alt="nass"
              width={128}
              height={100}
              style={{ width: "auto", height: "auto" }}
            />
          </li>
          <li>
            <Image
              src="/images/trusted/ltu.webp"
              alt="nass"
              width={150}
              height={100}
              style={{ width: "auto", height: "auto" }}
            />
          </li>
          <li>
            <Image
              src="/images/trusted/vc.webp"
              alt="nass"
              width={90}
              height={90}
              style={{ width: "auto", height: "auto" }}
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default TrustedLogo;
