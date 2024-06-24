"use client"
import Swal from 'sweetalert2'
import { useLanguage } from "@/context/LanguageContext";
import 'animate.css';

const NewsSubscribe = () => {
  const { language } = useLanguage();

  const title = language === "english" 
  ? "This feature will work soon. Feel free to contact us."
  : "Den här funktionen kommer snart att fungera. Kontakta oss gärna.";


  const subscribeAlert = () => {
    Swal.fire({
      title: title,
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `
      }
    });
  }

  return (
    <div className="flex-col flex w-full items-center justify-between py-4 px-2 text-center mb-8">
        <p className="text-base">{language === "english" ? "Newsletter" : "Nyhetsbrev"}</p>
        <h2 className="text-heading2 my-4 text-bold">{language === "english" ? "Don't Miss" : "Missar inte"}</h2>
        <p className="text-base">{language === "english" ? "We are expanding rapidly, keep yourself updated via newsletter" : "Vi expanderar snabbt, håll dig uppdaterad via nyhetsbrevet"}</p>
        <div className="sm:relative w-[360px] sm:w-[420px] flex-col sm:flex-row items-center justify-center mt-3 max-w-[98%]">
          <input type="text" placeholder="example@gmail.com" className="sm:pe-32 ps-2 pe-2 py-[12px] w-full rounded-[40px] mb-2 sm:mb-0"/>
          <button onClick={subscribeAlert}  className="sm:w-[110px] w-[360px] max-w-[98%] py-[14px] sm:py-[6px] rounded-[40px] text-center sm:absolute text-base sm:text-[12px] sm:right-[10px] sm:top-[6px] sm:rounded-[20px] bg-black text-white hover:bg-[#d2cfcf] hover:text-black hover:border">
            {language === "english" ? "Subscribe" : "Prenumerera"}
          </button>
        </div>

    </div>
  )
}

export default NewsSubscribe