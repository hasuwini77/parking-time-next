import React from 'react';
import Image from 'next/image';

const TrustedLogo: React.FC = () => {
  return (
    <>
<div className="w-full inline-flex flex-nowrap bg-white p-4 overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)">
    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        <li>
            <Image src="/images/BrandedLogos/almi.svg" alt="almi" width={100} height={100}/>
        </li>
        <li>
        <Image src="/images/BrandedLogos/gobusiness.svg" alt="almi" width={100} height={100}/>
        </li>
        <li>
        <Image src="/images/BrandedLogos/logo1.svg" alt="almi" width={100} height={100}/>
        </li>
        <li>
        <Image src="/images/BrandedLogos/logo2.svg" alt="almi" width={100} height={100}/>
        </li>
        <li>
        <Image src="/images/BrandedLogos/logo3.svg" alt="almi" width={100} height={100}/>
        </li>
        <li>
        <Image src="/images/BrandedLogos/logo4.svg" alt="almi" width={100} height={100}/>
        </li>
        <li>
        <Image src="/images/BrandedLogos/lulea.svg" alt="almi" width={100} height={100}/>
        </li>
        <li>
        <Image src="/images/BrandedLogos/nass.svg" alt="almi" width={100} height={100}/>
        </li>
    </ul>       

    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll aria-hidden={true">
        <li>
            <Image src="/images/BrandedLogos/almi.svg" alt="almi" width={100} height={100}/>
        </li>
        <li>
        <Image src="/images/BrandedLogos/gobusiness.svg" alt="almi" width={100} height={100}/>
        </li>
        <li>
        <Image src="/images/BrandedLogos/logo1.svg" alt="almi" width={100} height={100}/>
        </li>
        <li>
        <Image src="/images/BrandedLogos/logo2.svg" alt="almi" width={100} height={100}/>
        </li>
        <li>
        <Image src="/images/BrandedLogos/logo3.svg" alt="almi" width={100} height={100}/>
        </li>
        <li>
        <Image src="/images/BrandedLogos/logo4.svg" alt="almi" width={100} height={100}/>
        </li>
        <li>
        <Image src="/images/BrandedLogos/lulea.svg" alt="almi" width={100} height={100}/>
        </li>
        <li>
        <Image src="/images/BrandedLogos/nass.svg" alt="almi" width={100} height={100}/>
        </li>
    </ul>       
             
</div>
    </>
  );
};

export default TrustedLogo;
