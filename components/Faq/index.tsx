'use client'
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import ContactButton from "../ContactButton";

const Faq: React.FC = () => {
  const defaultContent: string =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <>
      <div className="container w-full min-w-full py-32 md:py-44 px-4 md:px-20 flex flex-col justify-center items-center text-center">
        <h5>FAQ</h5>
        <h1 className="text-4xl">Do you have a question?</h1>
        <p className="text-paragraph1 py-2">Here are some common questions answered</p>

        <Accordion variant="splitted" className="max-w-[430px] md:max-w-[70rem]">
  <AccordionItem isCompact={true} key="1" aria-label="Accordion 1" title="Accordion 1">
    {defaultContent}
  </AccordionItem>
  <AccordionItem isCompact={true} key="2" aria-label="Accordion 2" title="Accordion 2">
    {defaultContent}
  </AccordionItem>
  <AccordionItem isCompact={true} key="3" aria-label="Accordion 3" title="Accordion 3">
    {defaultContent}
  </AccordionItem>
  <AccordionItem isCompact={true} key="4" aria-label="Accordion 4" title="Accordion 4">
    {defaultContent}
  </AccordionItem>
  <AccordionItem isCompact={true} key="5" aria-label="Accordion 5" title="Accordion 5">
    {defaultContent}
  </AccordionItem>
</Accordion>
        <h3 className="text-3xl pt-4">Still have a question?</h3>
        <p className="m-0 py-2 text-paragraph1">Feel free to contact us if you have any questions.</p>
        <ContactButton linkHref="/contact" SWtext="Kontakta oss" ENtext="Contact us" />
      </div>
    </>
  );
};

export default Faq;
