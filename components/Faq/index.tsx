"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import ButtonEditable from "../ButtonEditable";

const Faq: React.FC = () => {
  const { language } = useLanguage();
  const theme = useTheme();

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
        className="container w-full min-w-full py-24 md:py-38 px-2 md:px-20 flex flex-col justify-center items-center text-center bg-primary"
        id="faq"
      >
        <h5
          className={
            theme === "dark"
              ? "mb-2 text-white text-heading5"
              : "mb-2 text-heading5"
          }
        >
          FAQ
        </h5>
        <h1 className={theme === "dark" ? "text-4xl text-white" : "text-4xl"}>
          {language === "english"
            ? "Do you have a question?"
            : "Har du någon fråga?"}
        </h1>
        <p
          className={
            theme === "dark"
              ? "text-paragraph1 py-2 mb-2 text-white"
              : "text-paragraph1 py-2 mb-2"
          }
        >
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
            className={theme === "dark" ? "p-1.2 text-white" : "p-1.2"}
          >
            <span
              className={
                theme === "dark"
                  ? "text-start text-sm text-white"
                  : "text-start text-sm"
              }
            >
              {content?.Accordion1}
            </span>
          </AccordionItem>
          <AccordionItem
            isCompact={true}
            key="2"
            aria-label="Accordion 2"
            title={content.Accordion2Title}
            classNames={{ title: "font-bold" }}
            className={theme === "dark" ? "p-1.2 text-white" : "p-1.2"}
          >
            <span
              className={
                theme === "dark"
                  ? "text-sm text-start text-white"
                  : "text-sm text-start"
              }
            >
              {content?.Accordion2}
            </span>
          </AccordionItem>
          <AccordionItem
            isCompact={true}
            key="3"
            aria-label="Accordion 3"
            title={content.Accordion3Title}
            classNames={{ title: "font-bold" }}
            className={theme === "dark" ? "p-1.2 text-white" : "p-1.2"}
          >
            <span
              className={
                theme === "dark"
                  ? "text-sm text-start text-white"
                  : "text-sm text-start"
              }
            >
              {content?.Accordion3}
            </span>
          </AccordionItem>
          <AccordionItem
            isCompact={true}
            key="4"
            aria-label="Accordion 4"
            title={content.Accordion4Title}
            classNames={{ title: "font-bold" }}
            className={theme === "dark" ? "p-1.2 text-white" : "p-1.2"}
          >
            <span
              className={
                theme === "dark"
                  ? "text-sm text-start text-white"
                  : "text-sm text-start"
              }
            >
              {content?.Accordion4}
            </span>
          </AccordionItem>
          <AccordionItem
            isCompact={true}
            key="5"
            aria-label="Accordion 5"
            title={content.Accordion5Title}
            classNames={{ title: "font-bold" }}
            className={theme === "dark" ? "p-1.2 text-white" : "p-1.2"}
          >
            <span
              className={
                theme === "dark"
                  ? "text-sm text-start text-white"
                  : "text-sm text-start"
              }
            >
              {content?.Accordion5}
            </span>
          </AccordionItem>
        </Accordion>
        <h3
          className={
            theme === "dark" ? "text-3xl pt-4 text-white" : "text-3xl pt-4"
          }
        >
          {language === "english"
            ? "Still have a question?"
            : "Har du fortfarande mer frågor?"}
        </h3>
        <p
          className={
            theme === "dark"
              ? "m-0 py-2 text-paragraph1 text-white"
              : "m-0 py-2 text-paragraph1"
          }
        >
          {language === "english"
            ? "Feel free to contact us if you have any questions."
            : "Kontakta oss gärna om du har några frågor."}
        </p>
        <span className="min-w-[300px] w-[342px]">
          <ButtonEditable
            linkHref="/contact"
            SWtext="Kontakta oss"
            ENtext="Contact us"
            textColor="text-white"
            bgColor="bg-black"
            hoverEffect="hover:bg-gray"
          />
        </span>
      </div>
    </>
  );
};

export default Faq;
