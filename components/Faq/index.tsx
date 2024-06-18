"use client";
import React, { useState } from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { useLanguage } from "@/context/LanguageContext";
import ContactButton from "../ContactButton";

const Faq: React.FC = () => {
  const { language } = useLanguage();

  interface AccordionContent {
    Accordion1Title: string;
    Accordion1: string;
    Accordion2Title: string;
    Accordion2: string;
    Accordion3Title: string;
    Accordion3: string;
    Accordion4Title: string;
    Accordion4: string;
    Accordion5Title: string;
    Accordion5: string;
  }

  const myEngContent: AccordionContent = {
    Accordion1Title: "What is Parking Time?",
    Accordion1:
      "Parking Time allows you to fully take your parking slot to the next level. You will be sure that you get a fine spot while respecting the law!",
    Accordion2Title: "How do I use Parking Time?",
    Accordion2:
      "You go into your App Store or Google Play store and search for Parking Time, download the app. You can also get started by visiting parkingtime.se",
    Accordion3Title: "Is it free?",
    Accordion3: "Yes of course, it is free to use!",
    Accordion4Title: "How do I get it in my municipality?",
    Accordion4:
      "Please contact the authorities within your commune or region for more information.",
    Accordion5Title: "Known problems with the app",
    Accordion5:
      "At this moment, we are unaware of any issues with our App. It's as perfect as it can be!",
  };

  const mySweContent: AccordionContent = {
    Accordion1Title: "Vad är Parking Time?",
    Accordion1:
      "Parking Time låter dig utnyttja din parkeringsplats till fullo. Du kommer att vara säker på att du får en bra plats samtidigt som du respekterar lagen!",
    Accordion2Title: "Hur använder jag Parking Time?",
    Accordion2:
      "Gå in i din App Store eller Google Play butik och sök efter Parking Time, ladda ner appen. Du kan också komma igång genom att besöka parkingtime.se",
    Accordion3Title: "Är det gratis?",
    Accordion3: "Ja självklart, det är gratis att använda!",
    Accordion4Title: "Hur får jag det i min kommun?",
    Accordion4:
      "Kontakta myndigheterna inom din kommun eller region för mer information.",
    Accordion5Title: "Kända problem med appen",
    Accordion5:
      "För tillfället är vi inte medvetna om några problem med vår app. Den är så perfekt som den kan vara!",
  };

  const content = language === "english" ? myEngContent : mySweContent;

  return (
    <>
      <div
        className="container w-full min-w-full py-28 md:py-38 px-4 md:px-20 flex flex-col justify-center items-center text-center"
        id="faq"
      >
        <h5 className="mb-2">FAQ</h5>
        <h1 className="font-bold text-4xl md:text-heading2 mb-3">
          {language === "english"
            ? "Do you have a question?"
            : "Har du någon fråga?"}
        </h1>
        <p className="text-paragraph1 py-2 mb-2">
          {language === "english"
            ? "Here are some common questions answered?"
            : "Här är några vanliga frågor besvarade?"}
        </p>
        <Accordion
          variant="splitted"
          className="max-w-[430px] text-start md:max-w-[70rem]"
        >
          <AccordionItem
            isCompact={true}
            key="1"
            aria-label="Accordion 1"
            title={content.Accordion1Title}
            classNames={{ title: "font-bold" }}
            className="p-1.5"
          >
            <span className="my-2 text-start">{content?.Accordion1}</span>
          </AccordionItem>
          <AccordionItem
            isCompact={true}
            key="2"
            aria-label="Accordion 2"
            title={content.Accordion2Title}
            classNames={{ title: "font-bold" }}
            className="p-1.5"
          >
            <span className="my-2 text-start">{content?.Accordion2}</span>
          </AccordionItem>
          <AccordionItem
            isCompact={true}
            key="3"
            aria-label="Accordion 3"
            title={content.Accordion3Title}
            classNames={{ title: "font-bold" }}
            className="p-1.5"
          >
            <span className="my-2 text-start">{content?.Accordion3}</span>
          </AccordionItem>
          <AccordionItem
            isCompact={true}
            key="4"
            aria-label="Accordion 4"
            title={content.Accordion4Title}
            classNames={{ title: "font-bold" }}
            className="p-1.5"
          >
            <span className="my-2 text-start">{content?.Accordion4}</span>
          </AccordionItem>
          <AccordionItem
            isCompact={true}
            key="5"
            aria-label="Accordion 5"
            title={content.Accordion5Title}
            classNames={{ title: "font-bold" }}
            className="p-1.5"
          >
            <span className="my-2 text-start">{content?.Accordion5}</span>
          </AccordionItem>
        </Accordion>
        <h3 className="text-3xl pt-4">
          {" "}
          {language === "english"
            ? "Still have a question?"
            : "Har du fortfarande mer frågor?"}
        </h3>
        <p className="m-0 py-2 text-paragraph1">
          {" "}
          {language === "english"
            ? "Feel free to contact us if you have any questions."
            : "Kontakta oss gärna om du har några frågor."}
        </p>
        <span className="min-w-[300px]">
          <ContactButton
            linkHref="/contact"
            SWtext="Kontakta oss"
            ENtext="Contact us"
          />
        </span>
      </div>
    </>
  );
};

export default Faq;
