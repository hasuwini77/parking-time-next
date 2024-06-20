// "use client"
// import Swal from 'sweetalert2'
// import { useLanguage } from "@/context/LanguageContext";
// import 'animate.css';
// import { FC } from 'react';
// import { useForm } from 'react-hook-form';
// import { FaEnvelope } from "react-icons/fa6";
// import axios from 'axios';
// import toast from 'react-hot-toast';


// export type FormData = {
//   email: string;
// };

// const NewsSubscribe: FC = () => {
//   const { language } = useLanguage();
//   const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

//   async function onSubmit(data: FormData) {
//     try {
//       // await axios.post("/api/email", data);
//       // reset();
//       // toast.success(language === "english" ? "Message received. We will contact you as soon as possible." : "Meddelandet mottaget. Vi kommer att kontakta dig så snart som möjligt.");
//       const response = await axios.post("/api/email", data);
//       if (response.status === 200) {
//         reset();
//         toast.success(language === "english" ? "Message received. We will contact you as soon as possible." : "Meddelandet mottaget. Vi kommer att kontakta dig så snart som möjligt.");
//       } else {
//         throw new Error("Failed to send email");
//       }
//     } catch (error) {
//       toast.error(language === "english" ? "Failed to send message. Please try again." : "Misslyckades med att skicka meddelande. Försök igen.");
//     }
//   }

//   const title = language === "english" 
//   ? "This feature will work soon. Feel free to contact us."
//   : "Den här funktionen kommer snart att fungera. Kontakta oss gärna.";


//   const subscribeAlert = () => {
//     Swal.fire({
//       title: title,
//       showClass: {
//         popup: `
//           animate__animated
//           animate__fadeInUp
//           animate__faster
//         `
//       },
//       hideClass: {
//         popup: `
//           animate__animated
//           animate__fadeOutDown
//           animate__faster
//         `
//       }
//     });
//   }

//   return (
//     <div className="flex-col flex w-full items-center justify-between py-4 px-2 text-center mb-8">
//         <p className="text-base">{language === "english" ? "Newsletter" : "Nyhetsbrev"}</p>
//         <h2 className="text-heading2 my-4 text-bold">{language === "english" ? "Don't Miss" : "Missar inte"}</h2>
//         <p className="text-base">{language === "english" ? "We are expanding rapidly, keep yourself updated via newsletter" : "Vi expanderar snabbt, håll dig uppdaterad via nyhetsbrevet"}</p>
//         <div className="sm:relative w-[360px] sm:w-[420px] flex-col sm:flex-row items-center justify-center mt-3 max-w-[98%]">
//           <form onSubmit={handleSubmit(onSubmit)} action="">
//             <input {...register("email", { required: true })} id="email" type="email" placeholder="example@gmail.com" className="sm:pe-32 ps-2 pe-2 py-[12px] w-full rounded-[40px] mb-2 sm:mb-0"/>
//             <button type="submit"   className="sm:w-[110px] w-[360px] max-w-[98%] py-[14px] sm:py-[6px] rounded-[40px] text-center sm:absolute text-base sm:text-[12px] sm:right-[10px] sm:top-[6px] sm:rounded-[20px] bg-black text-white hover:bg-[#d2cfcf] hover:text-black hover:border">
//               {language === "english" ? "Subscribe" : "Prenumerera"}
//             </button>
//           </form>
//         </div>
// {/* onClick={subscribeAlert} */}
//     </div>
//   )
// }

// export default NewsSubscribe

"use client"
import Swal from 'sweetalert2'
import { useLanguage } from "@/context/LanguageContext";
import 'animate.css';
import { FC, useState } from 'react';
import { FaEnvelope } from "react-icons/fa6";
import toast from 'react-hot-toast';

const NewsSubscribe: FC = () => {
  const { language } = useLanguage();
  const [userEmail, setUserEmail] = useState("")
console.log(userEmail);

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault(); 
//matilda@parkingtime.se
    const defaultEmail = "6murathan3@gmail.com";
    const subject = "Newsletter Subscription";
    const body = language === "english" 
      ? `Hi,

I would like to subscribe to the newsletter. 
My email: "${userEmail}"`
      : `Hej,

Jag skulle vilja prenumerera på nyhetsbrevet. 
Min e-post: "${userEmail}"`;

    const mailtoLink = `mailto:${defaultEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
    toast.success(language === "english" ? "Opening email client..." : "Öppnar e-postklient...");
  };

  return (
    <div className="flex-col flex w-full items-center justify-between py-4 px-2 text-center mb-8">
        <p className="text-base">{language === "english" ? "Newsletter" : "Nyhetsbrev"}</p>
        <h2 className="text-heading2 my-4 text-bold">{language === "english" ? "Don't Miss" : "Missar inte"}</h2>
        <p className="text-base">{language === "english" ? "We are expanding rapidly, keep yourself updated via newsletter" : "Vi expanderar snabbt, håll dig uppdaterad via nyhetsbrevet"}</p>
        <div className="sm:relative w-[360px] sm:w-[420px] flex-col sm:flex-row items-center justify-center mt-3 max-w-[98%]">
          <form onSubmit={onSubmit} >
            <input onChange={(e) => setUserEmail(e.target.value)} id="email" type="email" placeholder="example@gmail.com" className="sm:pe-32 ps-2 pe-2 py-[12px] w-full rounded-[40px] mb-2 sm:mb-0 text-primary focus-visible:outline-primary"/>
            <button type="submit" className="sm:w-[110px] w-[360px] max-w-[98%] py-[14px] sm:py-[6px] rounded-[40px] text-center sm:absolute text-base sm:text-[12px] sm:right-[10px] sm:top-[6px] sm:rounded-[20px] bg-black text-white hover:bg-[#d2cfcf] hover:text-black hover:border">
              {language === "english" ? "Subscribe" : "Prenumerera"}
            </button>
          </form>
        </div>
    </div>
  )
}

export default NewsSubscribe
