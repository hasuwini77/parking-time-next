'use client'
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const Terms: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section className="container mx-auto px-4 xl:px-52 py-8">
      {language === "swedish" ? (
        <>
          <h1 className="text-3xl font-bold mb-1">Parking Time - Allmänna villkor</h1>
          <p className="mb-4 text-grey1">Giltig från 2024-07-01</p>
          
          <h2 className="text-xl font-semibold mb-2">1. Godkännande och samtycke</h2>
          <p className="mb-4">Dessa villkor reglerar användandet av alla tjänster som tillhandahålls av Parking Time Sweden AB (Parking Time), 559315-7547, till användare (fysiska personer över 18 år) och parkeringsoperatörer (juridiska personer) i Sverige. För tjänster som har specifika villkor så skall tjänstens specifika villkor gälla före dessa allmänna villkor.</p>
          
          <h2 className="text-xl font-semibold mb-2">2. Användning av personuppgifter</h2>
          <p className="mb-4">Parking Time samlar in och hanterar personuppgifter för att kunna tillhandahålla, hantera och ta betalt för sina tjänster. För användning av appen krävs endast att användaren uppger fordons registreringsnummer (skyltnummer). Användarens position samlas in (om användaren uttryckligen tillåter det) och sparas under parkeringen och en kort tid därefter, för att kunna erbjuda användaren bra funktioner under parkeringen och kvitto/bevis på parkeringen vid tvist om parkeringsböter.</p>
          
          <h2 className="text-xl font-semibold mb-2">3. Appens funktioner</h2>
          <p className="mb-4">Parking Times app erbjuder användaren funktioner för att hitta parkeringsplatser, och för att starta, hantera och avsluta parkering. Under pågående parkering ser användaren sluttiden, och får i appen påminnelser innan parkeringstiden går ut.</p>

          <h2 className="text-xl font-semibold mb-2">4. Avgifter och betalning</h2>
          <p className="mb-4">Användning av Parking Times app är kostnadsfritt för användare, men med avtalade avgifter från parkeringsoperatörerna.</p>

          <h2 className="text-xl font-semibold mb-2">5. Dataskydd och säkerhet</h2>
          <p className="mb-4">Parking Time hanterar användares och parkeringsoperatörers data på säkra servrar och med säker krypterad kommunikation med appen.</p>

          <h2 className="text-xl font-semibold mb-2">6. Ansvarsfriskrivning</h2>
          <p className="mb-4">Användare använder Parking Times app på egen risk. Parking Time ansvarar inte för eventuella förluster och skador på grund av användningen, om inte annat följer av svensk lag. Användare ska följa gällande vägmarken och annan skyltning om villkoren för parkeringen.</p>

          <h2 className="text-xl font-semibold mb-2">7. Användares rättigheter</h2>
          <p className="mb-4">Parking Time följer Dataskyddslagens och Dataskyddsförordningens (GDPR) bestämmelser om användares rättigheter. Användaren kan utöva sina rättigheter genom kontakt med Parking Times support, se kontaktuppgifter sist i dessa villkor. Användare har rätt att</p>
          <ul className="list-disc list-inside mb-4">
            <li>få information om vilka personuppgifter som Parking Time har lagrade om dem.</li>
            <li>få felaktiga personuppgifter rättade.</li>
            <li>få raderat alla personuppgifter som inte måste behållas av Parking Time för att uppfylla lagar och avtal.</li>
            <li>avsäga sig all framtida marknadsföring från Parking Time.</li>
            <li>få personuppgifterna exporterade till standard filformat för användning med annat företag.</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">8. Användares skyldigheter</h2>
          <p className="mb-4">Användare skall</p>
          <ul className="list-disc list-inside mb-4">
            <li>Skydda appen (mobilen) från obehörig användning.</li>
            <li>Skydda lösenord mot obehörig åtkomst och omedelbart meddela Parking Time vid misstanke om att lösenord har röjts.</li>
            <li>Tillse att mobilen har en fungerande Internet-anslutning.</li>
            <li>Registrera korrekta personuppgifter, och utan onödigt dröjsmål uppdatera dessa vid ändringar.</li>
            <li>Ange korrekt parkeringszon och registreringsnummer (skyltnummer) vid parkering.</li>
            <li>Följa gällande bestämmelser för parkeringsplatser.</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">9. Ändringar av dessa villkor</h2>
          <p className="mb-4">Parking Time har rätt att när som helst uppdatera dessa villkor. Sådana ändringar skall meddelas via en nyhet på www.parkingtime.se och på den webben skall alltid den senaste versionen av dessa villkor finnas publicerad.</p>

          <h2 className="text-xl font-semibold mb-2">10. Överlåtelse av Parking Times rättigheter</h2>
          <p className="mb-4">Parking Time har rätt att i sin helhet till tredje part överlåta alla rättigheter och skyldigheter enligt dessa villkor. Så kan till exempel ske vid uppköp av Parking Time. Sådan överlåtelse ska utan onödigt dröjsmål meddelas via ändring av dessa villkor enligt avsnitt 9.</p>

          <h2 className="text-xl font-semibold mb-2">11. Immaterialrätt</h2>
          <p className="mb-4">Parking Time äger alla immateriella rättigheter som hör till dess tjänster och appar. Användare får inte använda funktioner eller källkod för Parking Times webbar eller appar, utöver vad som erbjuds via dessas användargränssnitt.</p>

          <h2 className="text-xl font-semibold mb-2">12. Tillämplig lag och tvister</h2>
          <p className="mb-4">Parking Time följer alla rekommendationer av Allmänna reklamationsnämnden, www.arn.se.</p>

          <h2 className="text-xl font-semibold mb-2">13. Kontaktuppgifter</h2>
          <p className="mb-4">Parking Time kan kontaktas via</p>
          <p className="mb-4">Epost: info@parkingtime.se</p>
          <p className="mb-4">Telefon: 072-722 44 00</p>
          <p className="mb-4">Webb: www.parkingtime.se</p>
        </>
      ) : (
        <>
          <h1 className="text-3xl font-bold mb-1">Parking Time - Terms and Conditions</h1>
          <p className="mb-4 text-grey1">Effective from 2024-07-01</p>

          <h2 className="text-xl font-semibold mb-2">1. Acceptance and Consent</h2>
          <p className="mb-4">These terms regulate the use of all services provided by Parking Time Sweden AB (Parking Time), 559315-7547, to users (individuals over 18 years old) and parking operators (legal entities) in Sweden. For services that have specific conditions, the specific terms of the service shall take precedence over these general terms.</p>

          <h2 className="text-xl font-semibold mb-2">2. Use of Personal Data</h2>
          <p className="mb-4">Parking Time collects and manages personal data to provide, manage, and charge for its services. For the use of the app, only the vehicle&apos;s registration number (license plate number) is required. The user&apos;s position is collected (if the user explicitly allows it) and stored during parking and for a short time thereafter, to offer the user good features during parking and receipt/proof of parking in case of parking ticket disputes.</p>

          <h2 className="text-xl font-semibold mb-2">3. App Features</h2>
          <p className="mb-4">Parking Time&apos;s app offers the user features to find parking spaces, and to start, manage, and end parking. During ongoing parking, the user sees the end time, and receives reminders in the app before the parking time expires.</p>

          <h2 className="text-xl font-semibold mb-2">4. Fees and Payment</h2>
          <p className="mb-4">The use of Parking Time&apos;s app is free for users, but with agreed fees from the parking operators.</p>

          <h2 className="text-xl font-semibold mb-2">5. Data Protection and Security</h2>
          <p className="mb-4">Parking Time manages users&apos; and parking operators&apos; data on secure servers and with secure encrypted communication with the app.</p>

          <h2 className="text-xl font-semibold mb-2">6. Disclaimer</h2>
          <p className="mb-4">Users use Parking Time&apos;s app at their own risk. Parking Time is not responsible for any losses and damages due to the use, unless otherwise follows from Swedish law. Users must follow applicable road markings and other signage regarding the conditions for parking.</p>

          <h2 className="text-xl font-semibold mb-2">7. Users&apos; Rights</h2>
          <p className="mb-4">Parking Time complies with the provisions of the Data Protection Act and the General Data Protection Regulation (GDPR) regarding users&apos; rights. The user can exercise their rights by contacting Parking Time&apos;s support, see contact details at the end of these terms. Users have the right to</p>
          <ul className="list-disc list-inside mb-4">
            <li>obtain information about which personal data Parking Time has stored about them.</li>
            <li>have incorrect personal data corrected.</li>
            <li>have all personal data deleted that does not need to be retained by Parking Time to fulfill laws and agreements.</li>
            <li>opt out of all future marketing from Parking Time.</li>
            <li>have the personal data exported to a standard file format for use with another company.</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">8. Users&apos; Obligations</h2>
          <p className="mb-4">Users shall</p>
          <ul className="list-disc list-inside mb-4">
            <li>Protect the app (mobile) from unauthorized use.</li>
            <li>Protect passwords from unauthorized access and immediately notify Parking Time if they suspect that a password has been compromised.</li>
            <li>Ensure that the mobile has a functioning Internet connection.</li>
            <li>Register correct personal data, and without undue delay update these in case of changes.</li>
            <li>Specify the correct parking zone and registration number (license plate number) when parking.</li>
            <li>Follow applicable regulations for parking spaces.</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">9. Changes to These Terms</h2>
          <p className="mb-4">Parking Time has the right to update these terms at any time. Such changes shall be announced via a news item on www.parkingtime.se and the latest version of these terms shall always be published on that website.</p>

          <h2 className="text-xl font-semibold mb-2">10. Transfer of Parking Time&apos;s Rights</h2>
          <p className="mb-4">Parking Time has the right to transfer all rights and obligations under these terms to a third party in their entirety. For example, this can occur in the event of a purchase of Parking Time. Such transfer shall be notified without undue delay via an amendment to these terms in accordance with section 9.</p>

          <h2 className="text-xl font-semibold mb-2">11. Intellectual Property</h2>
          <p className="mb-4">Parking Time owns all intellectual property rights related to its services and apps. Users may not use features or source code of Parking Time&apos;s websites or apps, other than what is offered via their user interfaces.</p>

          <h2 className="text-xl font-semibold mb-2">12. Applicable Law and Disputes</h2>
          <p className="mb-4">Parking Time follows all recommendations of the National Board for Consumer Disputes, www.arn.se.</p>

          <h2 className="text-xl font-semibold mb-2">13. Contact Information</h2>
          <p className="mb-2">Parking Time can be contacted via:</p>
          <p className="mb-2">Email: info@parkingtime.se</p>
          <p className="mb-2">Phone: 072-722 44 00</p>
          <p>Web: www.parkingtime.se</p>
        </>
      )}
    </section>
  );
};

export default Terms;
