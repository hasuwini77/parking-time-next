'use client'
import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";
import ContactButton from "../ContactButton";

const Faq: React.FC = () => {
  const defaultContent : string =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";


  return (
    <> 
    <div className="container flex flex-col justify-center items-center"> 
<h5> FAQ</h5>
<h1> Do you have question? </h1>
<p> Here are some common questions answered</p>
    <Accordion variant="splitted">
      <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
        {defaultContent}
      </AccordionItem> 
      <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="4" aria-label="Accordion 4" title="Accordion 4">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="5" aria-label="Accordion 5" title="Accordion 5">
        {defaultContent}
      </AccordionItem>
    </Accordion>

    <h3> Still have a question? </h3>
    <p> Feel free to contact us if you have any questions.</p>
    <ContactButton linkHref="/contact" SWtext="Kontakta oss" ENtext="Contact us" />
    </div>
    </>
  );
}

export default Faq; 