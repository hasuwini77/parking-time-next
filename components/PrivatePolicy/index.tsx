"use client";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const PrivatePolicy: React.FC = () => {
  const { language } = useLanguage();
  return (
    <>
      <div className="m-2.5 p-2.5 md:py-5 md:flex md:flex-col md:items-start">
        {language === "english" ? (
          <span>
            <b className="text-4xl md:m-2.5 md:text-left md:ml-4">
              Private Policy
            </b>
            <p className="text-grey1 md:m-2.5 md:text-left md:ml-4">
              Effective date: April 3, 2023
            </p>
          </span>
        ) : (
          <span>
            <h1 className="text-4xl md:m-2.5 md:text-left md:ml-4">
              Integritetspolicy
            </h1>
            <p className="text-grey1 md:m-2.5 md:text-left md:ml-4">
              Gäller från: 3 april 2023
            </p>
          </span>
        )}
      </div>

      <section className="md:w-full md:flex md:flex-col md:justify-center md:items-center">
        <div className="max-w-full p-[8px] md:max-w-[50%] md:flex: md:justify-center">
          <section>
            {language === "english" ? (
              <span className="flex justify-center flex-col m-2.5 p-2.5">
                <b className="text-2xl">Private Policy</b>
                <b className="m-2.5">
                  This policy applies to all websites of Parking Time Sweden AB.
                  The personal data policy applies to Parking Time in connection
                  with services and products related to purchases, customer
                  service matters, other contact with Parking Time, and visits
                  to the website. Your personal data is important to us.
                </b>
              </span>
            ) : (
              <span className="flex justify-center flex-col m-2.5 p-2.5">
                <b className="text-2xl m-2.5">Integritetspolicy</b>
                <b className="m-2.5">
                  Denna policy gäller för alla webbplatser tillhörande Parking
                  Time Sweden AB. Integritetspolicyn gäller för Parking Time i
                  samband med tjänster och produkter relaterade till köp,
                  kundtjänstärenden lägger vi mycket vikt på, annan kontakt med
                  Parking Time samt besök på webbplatsen. Dina personuppgifter
                  är viktiga för oss.
                </b>
              </span>
            )}

            {language === "english" ? (
              <span className="flex justify-center flex-col m-2.5 p-2.5">
                <b className="text-2xl m-2.5">
                  Your personal data is significant to us
                </b>
                <p className="m-2.5">
                  Parking Time collects and processes personal data about you
                  when you visit or make a purchase on any of our websites or
                  contact Parking Time via email or social media. Parking Time
                  is committed to protecting your privacy and strives for a high
                  level of data protection. This privacy policy explains why and
                  how we collect and use your personal information. It also
                  describes your rights and how you can exercise them. For us,
                  it is significant that the personal data you entrust to us as
                  a customer and reader is handled in a careful, responsible,
                  transparent, and lawful manner.
                </p>
              </span>
            ) : (
              <span className="flex justify-center flex-col m-2.5 p-2.5">
                <b className="text-2xl m-2.5">
                  Dina personuppgifter är viktiga för oss.
                </b>
                <p className="m-2.5">
                  Parking Time samlar in och behandlar personuppgifter om dig
                  när du besöker eller gör ett köp på någon av våra webbplatser
                  eller kontaktar Parking Time via e-post eller sociala medier.
                  Parking Time är engagerade i att skydda din integritet och
                  strävar efter en hög nivå av dataskydd. Denna
                  integritetspolicy förklarar varför och hur vi samlar in och
                  använder din personliga information. Den beskriver också dina
                  rättigheter och hur du kan utöva dem. För oss är det viktigt
                  att de personuppgifter du som kund och läsare anförtror oss
                  hanteras på ett omsorgsfullt, ansvarsfullt, transparent och
                  lagligt sätt.
                </p>
              </span>
            )}

            {language === "english" ? (
              <span className="flex justify-center flex-col m-2.5 p-2.5">
                <b className="text-2xl m-2.5">
                  Who is responsible for the data we collect?
                </b>
                <p className="m-2.5">
                  Parking Time Sweden AB is responsible for the processing of
                  your personal data by Parking Time and is responsible for
                  ensuring that such processing is carried out in accordance
                  with applicable legislation.
                </p>
              </span>
            ) : (
              <span className="flex justify-center flex-col m-2.5 p-2.5">
                <b className="text-2xl m-2.5">
                  Vem är ansvarig för de uppgifter vi samlar in?
                </b>
                <p className="m-2.5">
                  Parking Time Sweden AB är ansvarig för behandlingen av dina
                  personuppgifter av Parking Time och är ansvarig för att
                  säkerställa att sådan behandling utförs i enlighet med
                  gällande lagstiftning.
                </p>
              </span>
            )}

            {language === "english" ? (
              <span className="flex justify-center flex-col m-2.5 p-2.5">
                <b className="text-2xl m-2.5">What is personal data?</b>
                <p className="m-2.5">
                  Personal data is any type of information that can directly or
                  indirectly be attributed to a living individual. Examples of
                  personal data include name, email address, phone number, and
                  personal identification number. Images and audio recordings
                  are also considered personal data even if no names are
                  mentioned. Encrypted data and various electronic identities
                  (such as IP addresses) are also considered personal data if
                  they can be linked to physical individuals.
                </p>
              </span>
            ) : (
              <span className="flex justify-center flex-col m-2.5 p-2.5">
                <b className="text-2xl m-2.5">vad är personlig data?</b>
                <p className="m-2.5">
                  Personuppgifter är all typ av information som direkt eller
                  indirekt kan hänföras till en levande individ. Exempel på
                  personuppgifter inkluderar namn, e-postadress, telefonnummer
                  och personnummer. Bilder och ljudinspelningar betraktas också
                  som personuppgifter även om inga namn nämns. Krypterade data
                  och olika elektroniska identiteter (som IP-adresser) anses
                  också vara personuppgifter om de kan kopplas till fysiska
                  personer.
                </p>
              </span>
            )}

            {language === "english" ? (
              <span className="flex justify-center flex-col m-2.5 p-2.5">
                <b className="text-2xl m-2.5">
                  Where do your personal data come from?
                </b>
                <p className="m-2.5">
                  The primary source of personal data about you is you, such as
                  the information you provide when you sign up for a
                  subscription, contact us via email, and receive/respond to an
                  email communication. Personal data is also created as a result
                  of you reading information on our website, using services, and
                  communicating with us. For example, we may save visit,
                  traffic, and other communication data. Examples of such
                  personal data include your IP address. This data is collected
                  via cookies and used to understand you better so that we can
                  target relevant information to you. To do this, we need your
                  consent. You give this by accepting cookies when you visit our
                  website.
                </p>
              </span>
            ) : (
              <span className="flex justify-center flex-col m-2.5 p-2.5">
                <b className="text-2xl m-2.5">
                  Varifrån kommer dina personuppgifter?
                </b>
                <p className="m-2.5">
                  Den främsta källan till personuppgifter om dig är du själv,
                  såsom den information du tillhandahåller när du registrerar
                  dig för ett abonnemang, kontaktar oss via e-post och tar
                  emot/svarar på e-postkommunikation. Personuppgifter skapas
                  också som ett resultat av att du läser information på vår
                  webbplats, använder tjänster och kommunicerar med oss. Till
                  exempel kan vi spara besöks-, trafik- och annan
                  kommunikationsdata. Exempel på sådana personuppgifter
                  inkluderar din IP-adress. Dessa data samlas in via cookies och
                  används för att förstå dig bättre så att vi kan rikta relevant
                  information till dig. För att göra detta behöver vi ditt
                  samtycke. Du ger detta genom att acceptera cookies när du
                  besöker vår webbplats.
                </p>
              </span>
            )}

            {language === "english" ? (
              <span className="flex justify-center flex-col m-2.5 p-2.5">
                <b className="text-2xl m-2.5">
                  Where does Parking Time get information for the parking zones?
                </b>
                <p className="m-2.5">
                  Parking Time Sweden AB presents parking zones in the app.
                  Information regarding the parking zones comes from the
                  municipalities that use the app. The information is imported
                  from the municipalities own parking maps, such as Katrineholm
                  municipalitys parking zones here. Parking Time Sweden AB is
                  an independent limited company and does not represent any
                  government authority.
                </p>
              </span>
            ) : (
              <span className="flex justify-center flex-col m-2.5 p-2.5">
                <b className="text-2xl m-2.5">
                  Varifrån får Parking Time informationen för parkeringszonerna?
                </b>
                <p className="m-2.5">
                  Parking Time Sweden AB presenterar parkeringszoner i appen.
                  Informationen om parkeringszonerna kommer från de kommuner som
                  använder appen. Informationen importeras från kommunernas egna
                  parkeringskartor, som till exempel Katrineholms kommuns
                  parkeringszoner här. Parking Time Sweden AB är ett oberoende
                  aktiebolag och representerar inte någon myndighet.
                </p>
              </span>
            )}

            {language === "english" ? (
              <span className="flex justify-center flex-col m-2.5 p-2.5">
                <b className="text-2xl m-2.5">
                  Personal data we collect about you if we require them
                </b>
                <li className="m-2.5">First and last name</li>
                <li className="m-2.5">User's vehicle registration number</li>
                <li className="m-2.5">
                  User's GPS location at the time of parking
                </li>
                <li className="m-2.5">
                  Contact information (address, email, and phone number)
                </li>
              </span>
            ) : (
              <span className="flex justify-center flex-col m-2.5 p-2.5">
                <b className="text-2xl m-2.5">
                  Personuppgifter vi samlar in om dig om vi behöver dem
                </b>
                <li className="m-2.5">Första och andra namn</li>
                <li className="m-2.5">Användarens regristreringsnummer</li>
                <li className="m-2.5">
                  Användarens GPS platts under parkeringen
                </li>
                <li className="m-2.5">
                  Kontakt information (adress, email, och telefonnummer)
                </li>
              </span>
            )}

            {language === "english" ? (
              <span className="flex justify-center flex-col m-2.5 p-2.5">
                <b className="text-2xl m-2.5">Cookies</b>
                <p className="m-2.5">
                  In a cookie, it is possible to track a user's browsing
                  activity. Cookies are used to provide you as a visitor with
                  access to various features and to customize content in
                  newsletters. We use cookies to tailor content in our
                  advertising. We also use cookies on our website to gather
                  statistics on how much the web is used. A cookie is a text
                  file that is saved to your device so that the website can
                  recognize your device. This cookie does not contain any
                  personal information. There are two types of cookies:
                  permanent and temporary (so-called session cookies). Permanent
                  cookies are stored as a file on your device for a longer
                  period, while session cookies are temporarily placed on your
                  device and only used while you browse the site. They are
                  deleted afterwards. If you want to know when your device
                  receives a cookie, you can set your browser to notify you.
                  This way, you have the opportunity to accept or reject a
                  cookie. Your device can also be set to reject all cookies.
                  Please note that if you choose not to accept cookies, some
                  features of our online services may no longer function as
                  intended.
                </p>
              </span>
            ) : (
              <span className="flex justify-center flex-col m-2.5 p-2.5">
                <b className="text-2xl m-2.5">Kakor</b>
                <p className="m-2.5">
                  I en cookie är det möjligt att spåra en användares
                  webbläsaraktivitet. Cookies används för att ge dig som
                  besökare tillgång till olika funktioner och för att anpassa
                  innehåll i nyhetsbrev. Vi använder cookies för att skräddarsy
                  innehåll i vår reklam. Vi använder också cookies på vår
                  webbplats för att samla in statistik om hur mycket webben
                  används. En cookie är en textfil som sparas på din enhet så
                  att webbplatsen kan känna igen din enhet. Denna cookie
                  innehåller ingen personlig information. Det finns två typer av
                  cookies: permanenta och tillfälliga (så kallade
                  sessionscookies). Permanenta cookies lagras som en fil på din
                  enhet under en längre period, medan sessionscookies temporärt
                  placeras på din enhet och används endast medan du surfar på
                  webbplatsen. De raderas efteråt. Om du vill veta när din enhet
                  tar emot en cookie kan du ställa in din webbläsare att meddela
                  dig. På så sätt har du möjlighet att acceptera eller avvisa en
                  cookie. Din enhet kan också ställas in att avvisa alla
                  cookies. Observera att om du väljer att inte acceptera cookies
                  kan vissa funktioner i våra onlinetjänster sluta fungera som
                  avsett.
                </p>
              </span>
            )}

            {language === "english" ? (
              <span className="flex justify-center flex-col m-2.5 p-2.5">
                <b className="text-2xl m-2.5">
                  Special Considerations for Consent to Direct Marketing
                </b>
                <p className="m-2.5">
                  Provided that you have given us your explicit consent, we will
                  continuously send and publish information and marketing via
                  various digital channels based on your profile. You may opt
                  out of receiving marketing communications from us at any time
                  by clicking "unsubscribe" in the email or SMS communication
                  that we send you. You can also contact Parking Time via
                  matildaohman@parkingtime.se for assistance in declining our
                  communication.
                </p>
              </span>
            ) : (
              <span className="flex justify-center flex-col m-2.5 p-2.5">
                <b className="text-2xl m-2.5">
                  Särskilda överväganden för samtycke till direktmarknadsföring
                </b>
                <p className="m-2.5">
                  Förutsatt att du har gett oss ditt uttryckliga samtycke kommer
                  vi kontinuerligt att skicka och publicera information och
                  marknadsföring via olika digitala kanaler baserat på din
                  profil. Du kan när som helst välja att avstå från att ta emot
                  marknadsföringskommunikation från oss genom att klicka på
                  "avregistrera" i det e-postmeddelande eller SMS som vi skickar
                  till dig. Du kan också kontakta Parking Time via
                  matildaohman@parkingtime.se för hjälp med att avböja vår
                  kommunikation.
                </p>
              </span>
            )}

            {language === "english" ? (
              <span className="flex justify-center flex-col m-2.5 p-2.5">
                <b className="text-2xl m-2.5">
                  How long do we keep your information?
                </b>
                <p className="m-2.5">
                  Your personal data is only stored for as long as there is a
                  need to keep it to fulfill the purposes for which the data was
                  collected. Parking Time may retain the data longer if
                  necessary to comply with legal requirements or to protect
                  Parking Time's legal interests, such as during a legal
                  process.
                </p>
              </span>
            ) : (
              <span className="flex justify-center flex-col m-2.5 p-2.5">
                <b className="text-2xl m-2.5">
                  Hur länge behåller vi din information?
                </b>
                <p className="m-2.5">
                  Dina personuppgifter lagras endast så länge det finns ett
                  behov av att behålla dem för att uppfylla de syften för vilka
                  uppgifterna samlades in. Parking Time kan behålla uppgifterna
                  längre om det är nödvändigt för att följa lagkrav eller för
                  att skydda Parking Times juridiska intressen, till exempel
                  under en rättsprocess.
                </p>
              </span>
            )}

            {language === "english" ? (
              <span className="flex justify-center flex-col m-2.5 p-2.5">
                <b className="text-2xl m-2.5">
                  Who can we share your personal information with?
                </b>
                <p className="m-2.5">
                  Your personal data may be shared with other companies. These
                  are Parking Time's data processors. A data processor is a
                  company that processes information on our behalf and according
                  to our instructions. Parking Time's data processors perform
                  services on our behalf, such as sending newsletters or
                  delivering ordered goods. All disclosures will be made in
                  accordance with the law, and your personal data will not be
                  used for purposes other than those we have informed you about.
                  We have written agreements with all data processors through
                  which they guarantee the security of the personal data
                  processed and undertake to comply with our security
                  requirements as well as limitations and requirements regarding
                  the international transfer of personal data. When your
                  personal data is shared with a company that is an independent
                  data controller, the counterparty's privacy policy and data
                  processing apply. We share your personal data with certain
                  companies that are independent data controllers. Examples of
                  independent data controllers with whom we share your personal
                  data include:
                </p>
                <li className="m-2.5">
                  Government agencies in case of suspected crime.
                </li>
              </span>
            ) : (
              <span className="flex justify-center flex-col m-2.5 p-2.5">
                <b className="text-2xl m-2.5">
                  Med vem kan vi dela dina personuppgifter?
                </b>
                <p className="m-2.5">
                  Dina personuppgifter kan delas med andra företag. Dessa är
                  Parking Times personuppgiftsbiträden. Ett
                  personuppgiftsbiträde är ett företag som behandlar information
                  på vårt uppdrag och enligt våra instruktioner. Parking Times
                  personuppgiftsbiträden utför tjänster på vårt uppdrag, såsom
                  att skicka nyhetsbrev eller leverera beställda varor. Alla
                  utlämnanden kommer att göras i enlighet med lagen, och dina
                  personuppgifter kommer inte att användas för andra ändamål än
                  de vi har informerat dig om. Vi har skriftliga avtal med alla
                  personuppgiftsbiträden där de garanterar säkerheten för de
                  personuppgifter som behandlas och åtar sig att följa våra
                  säkerhetskrav samt begränsningar och krav gällande
                  internationell överföring av personuppgifter. När dina
                  personuppgifter delas med ett företag som är en självständig
                  personuppgiftsansvarig gäller motpartens integritetspolicy och
                  databehandling. Vi delar dina personuppgifter med vissa
                  företag som är självständiga personuppgiftsansvariga. Exempel
                  på självständiga personuppgiftsansvariga med vilka vi delar
                  dina personuppgifter inkluderar:
                </p>
                <li className="m-2.5">Myndigheter vid misstanke om brott.</li>
              </span>
            )}

            {language === "english" ? (
              <span className="flex justify-center flex-col m-2.5 p-2.5">
                <b className="text-2xl m-2.5">
                  Where do we process your personal data?
                </b>
                <p className="m-2.5">
                  We always strive to ensure that your personal data is
                  processed within the EU/EEA, and all our own IT systems are
                  located within the EU/EEA.
                </p>
              </span>
            ) : (
              <span className="flex justify-center flex-col m-2.5 p-2.5">
                <b className="text-2xl m-2.5">
                  Var behandlar vi dina personuppgifter?
                </b>
                <p className="m-2.5">
                  Vi strävar alltid efter att säkerställa att dina
                  personuppgifter behandlas inom EU/EES, och alla våra egna
                  IT-system är belägna inom EU/EES.
                </p>
              </span>
            )}

            {language === "english" ? (
              <span className="flex justify-center flex-col m-2.5 p-2.5">
                <b className="text-2xl m-2.5">Your rights</b>
                <p className="m-2.5">
                  According to EU data protection legislation, you have certain
                  statutory rights as an individual in relation to the personal
                  data we process about you. If you encounter information about
                  yourself or related individuals that you for any reason do not
                  want to be published on Parking Time's website, we appreciate
                  it if you contact us via matildaohman@parkingtime.se
                </p>
                <p className="m-2.5">
                  You also have the right to lodge a complaint with the national
                  data protection authority, the Swedish Data Protection
                  Authority (Integritetsskyddsmyndigheten), if you believe that
                  our processing of your personal data does not comply with the
                  requirements of EU data protection legislation.
                </p>
                <p className="m-2.5">
                  Access to your personal data: You have the right to access
                  your personal data and how it is processed. Correction,
                  deletion, or restriction: You have the right to correct data
                  that you believe is inaccurate. In some cases, you also have
                  the right to have your personal data deleted. However, this
                  does not apply if your personal data still needs to be
                  retained, for example, if the law requires us to store the
                  data or if the data is needed to fulfill an agreement we have
                  with you. You also have the right to request that the
                  processing of personal data be restricted for a shorter period
                  while we investigate any inaccuracies. Withdrawal of consent:
                  If you have given consent to certain processing, you always
                  have the right to withdraw your consent.
                </p>
                <p className="m-2.5">
                  Objection regarding balancing of interests: When processing is
                  based on a so-called balancing of interests, you have the
                  right to object to the processing at any time. Objection to
                  direct marketing: You have the right to object at any time to
                  the processing of personal data concerning you for direct
                  marketing purposes. In that case, the personal data should no
                  longer be processed for such purposes.
                </p>
                <p className="m-2.5">
                  Data portability: You have the right to data portability,
                  which means that under certain circumstances, you have the
                  right to receive the personal data about you that you have
                  provided to us, in order to transfer the data to another data
                  controller.
                </p>
              </span>
            ) : (
              <span className="flex justify-center flex-col m-2.5 p-2.5">
                <b className="text-2xl m-2.5">Dina rättigheter</b>
                <p className="m-2.5">
                  Enligt EU dataskyddslagstiftning har du vissa lagstadgade
                  rättigheter som individ i förhållande till de personuppgifter
                  vi behandlar om dig. Om du stöter på information om dig själv
                  eller närstående som du av någon anledning inte vill ska
                  publiceras på Parking Times webbplats, uppskattar vi om du
                  kontaktar oss via matildaohman@parkingtime.se.
                </p>
                <p className="m-2.5">
                  Du har även rätt att lämna in klagomål till den nationella
                  dataskyddsmyndigheten, Integritetsskyddsmyndigheten, om du
                  anser att vår behandling av dina personuppgifter inte
                  överensstämmer med kraven i EU dataskyddslagstiftning.
                </p>
                <p className="m-2.5">
                  Tillgång till dina personuppgifter: Du har rätt att få
                  tillgång till dina personuppgifter och hur de behandlas.
                  Korrigering, radering eller begränsning: Du har rätt att
                  korrigera data som du anser är felaktig. I vissa fall har du
                  också rätt att få dina personuppgifter raderade. Detta gäller
                  dock inte om dina personuppgifter fortfarande behöver
                  behållas, till exempel om lagen kräver att vi lagrar
                  uppgifterna eller om uppgifterna behövs för att uppfylla ett
                  avtal vi har med dig. Du har också rätt att begära att
                  behandlingen av personuppgifter begränsas under en kortare tid
                  medan vi undersöker eventuella felaktigheter. Återkallelse av
                  samtycke: Om du har gett samtycke till viss behandling har du
                  alltid rätt att återkalla ditt samtycke.
                </p>
                <p className="m-2.5">
                  Invändning avseende avvägning av intressen: När behandlingen
                  grundas på en så kallad avvägning av intressen har du rätt att
                  invända mot behandlingen när som helst. Invändning mot
                  direktmarknadsföring: Du har rätt att när som helst invända
                  mot behandlingen av personuppgifter som rör dig för
                  direktmarknadsföringsändamål. I så fall bör inte
                  personuppgifterna längre behandlas för sådana ändamål.
                </p>
                <p className="m-2.5">
                  Dataportabilitet: Du har rätt till dataportabilitet, vilket
                  innebär att under vissa omständigheter har du rätt att få de
                  personuppgifter om dig som du har lämnat till oss, för att
                  överföra uppgifterna till en annan personuppgiftsansvarig.
                </p>
              </span>
            )}

            {language === "english" ? (
              <span className="flex justify-center flex-col m-2.5 p-2.5">
                <b className="text-2xl m-2.5">Contact Information</b>
                <p className="m-2.5">
                  If you wish to exercise any of your statutory rights, we ask
                  you to send a written and personally signed request to the
                  address provided below. You can also always contact Parking
                  Time via our website if you have any questions regarding the
                  processing of your personal data. We will respond in writing
                  to your registered address. You can also contact Parking Time
                  for any comments or complaints about how we handle your
                  personal data via matildaohman@parkingtime.se.
                </p>
                <ul className="m-2.5">
                  <li>Parking Time Sweden AB</li>
                  <li>Postal Address:</li>
                  <li>Nyköpingsvägen 52 611 50 NYKÖPING</li>
                </ul>
              </span>
            ) : (
              <span className="flex justify-center flex-col m-2.5 p-2.5">
                <b className="text-2xl m-2.5">Kontakt information</b>
                <p className="m-2.5">
                  Om du önskar utöva någon av dina lagstadgade rättigheter ber
                  vi dig att skicka en skriftlig och personligen underskriven
                  begäran till den nedan angivna adressen. Du kan också alltid
                  kontakta Parking Time via vår webbplats om du har några frågor
                  angående behandlingen av dina personuppgifter. Vi kommer att
                  svara skriftligt till din registrerade adress. Du kan också
                  kontakta Parking Time för eventuella kommentarer eller
                  klagomål om hur vi hanterar dina personuppgifter via
                  matildaohman@parkingtime.se.
                </p>
                <ul className="m-2.5">
                  <li>Parking Time Sweden AB</li>
                  <li>Post Address:</li>
                  <li>Nyköpingsvägen 52 611 50 NYKÖPING</li>
                </ul>
              </span>
            )}

            {language === "english" ? (
              <span className="flex justify-center flex-col m-2.5 p-2.5">
                <b className="text-2xl m-2.5">
                  Purpose and legal basis for processing your personal data
                </b>
                <p className="m-2.5">
                  Purpose and Legal Basis for Processing Your Personal Data. The
                  processing of your personal data serves specific purposes,
                  grounded in legal bases as outlined below. Additionally, we
                  elucidate how your personal data is processed for marketing
                  purposes.
                </p>
                <b className="m-2.5">Purpose</b>
                <b className="m-2.5">Legal Basis</b>
                <br />
                <b className="m-2.5">
                  Fulfillment of Orders for Services and Subscriptions
                </b>
                <li className="m-2.5">
                  Legal Basis: Performance of a contract of which you are a
                  party
                </li>
                <br />
                <b className="m-2.5">Targeted Marketing</b>
                <li>Upon your consent, we send newsletters</li>
                <li>Legal Basis</li>
                <li>Consent provided by you for this type of processing</li>
                <li>Balancing of interests</li>
                <br />
                <b className="m-2.5">Correspondence Regarding Inquiries</b>
                <li>
                  Handling queries directed to Parking Time via
                  matildaohman@parkingtime.se or to other responsible persons at
                  Parking Time, received through email, telephone, or digital
                  channels, including all social platforms
                </li>
                <li>Legal Basis: Balancing of interests</li>
                <br />
                <b className="m-2.5">Investigation of Complaints</b>
                <li>
                  Handling complaints received through email, telephone, or
                  other digital channels, including social media
                </li>
                <li>Legal Basis</li>
                <li>Performance of a contract of which you are a party</li>
                <li>Balancing of interests</li>
                <br />
                <b className="m-2.5">
                  Financial Management, Accounting, and Reporting
                </b>
                <li>
                  Utilization of your transactions for our accounting and
                  reporting purposes
                </li>
                <li>Legal Basis: Fulfillment of legal obligations</li>
                <br />
                <p className="m-2.5 md:pb-4">
                  For each purpose, a distinct legal basis is identified,
                  ensuring compliance with relevant legal requirements. These
                  purposes are clearly delineated to facilitate transparency and
                  accountability in the processing of personal data by Parking
                  Time Sweden AB
                </p>
              </span>
            ) : (
              <span className="flex justify-center flex-col m-2.5 p-2.5">
                <b className="text-2xl md:py-2">
                  Syfte och laglig grund för behandling av dina personuppgifter
                </b>
                <p>
                  Syfte och laglig grund för behandling av dina personuppgifter.
                  Behandlingen av dina personuppgifter tjänar specifika ändamål,
                  förankrade i lagliga grunder som beskrivs nedan. Dessutom
                  förklarar vi hur dina personuppgifter behandlas för
                  marknadsföringsändamål.
                </p>
                <b>Ändamål</b>
                <b>Laglig grund</b>
                <br />
                <b>
                  Uppfyllande av beställningar för tjänster och prenumerationer
                </b>
                <li>
                  Laglig grund: Uppfyllelse av ett avtal där du är en part
                </li>
                <br />
                <b>Riktad marknadsföring</b>
                <li>Vid ditt samtycke skickar vi nyhetsbrev</li>
                <li>Rättslig grund</li>
                <li>Samtycke som du har lämnat för denna typ av behandling</li>
                <li>Avvägning av intressen</li>
                <br />
                <b>Korrespondens angående förfrågningar</b>
                <li>
                  Hantering av förfrågningar riktade till Parking Time via
                  matildaohman@parkingtime.se eller till andra ansvariga
                  personer på Parking Time, mottagna via e-post, telefon eller
                  digitala kanaler, inklusive alla sociala plattformar
                </li>
                <li>Rättslig grund: Avvägning av intressen</li>
                <br />
                <b>Utredning av klagomål</b>
                <li>
                  Hantering av klagomål mottagna via e-post, telefon eller andra
                  digitala kanaler, inklusive sociala medier
                </li>
                <li>Rättslig grund</li>
                <li>Uppfyllelse av ett avtal där du är en part</li>
                <li>Avvägning av intressen</li>
                <br />
                <b>Finansiell förvaltning, redovisning och rapportering</b>
                <li>
                  Användning av dina transaktioner för våra redovisnings- och
                  rapporteringsändamål
                </li>
                <li>Rättslig grund: Uppfyllelse av lagliga förpliktelser</li>
                <br />
                <p>
                  För varje ändamål identifieras en tydlig rättslig grund,
                  vilket säkerställer efterlevnad av relevanta lagkrav. Dessa
                  ändamål är tydligt avgränsade för att underlätta transparens
                  och ansvarsskyldighet vid behandlingen av personuppgifter av
                  Parking Time Sweden AB.
                </p>
              </span>
            )}
          </section>
        </div>
      </section>
    </>
  );
};

export default PrivatePolicy;
