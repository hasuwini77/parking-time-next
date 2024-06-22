"use client"
import { useLanguage } from "@/context/LanguageContext";
import 'animate.css';
import { FC, useState } from 'react';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2'
import "./subscribe.css"

const NewsSubscribe: FC = () => {
  const { language } = useLanguage();
  const [userEmail, setUserEmail] = useState("")

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault(); 
    if (userEmail == "") {
      Swal.fire({
        title: "Oops...",
        text: language == "english" ? "Please write your e-mail address" : "Vänligen skriv din e-postadress",
        icon: "warning",
        confirmButtonColor: "#06433E",
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
    } else {
      const emailInput = document.getElementById("email") as HTMLInputElement;
      const defaultEmail = "matilda@parkingtime.se";
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
  
      emailInput.value = ""
    }
    
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
