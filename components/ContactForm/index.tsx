"use client";

import { FC } from "react";
import { useForm } from "react-hook-form";
import { FaEnvelope, FaPhone, FaLocationDot } from "react-icons/fa6";
import SendEmailButton from "../SendEmailButton";
import axios from "axios";
import toast from "react-hot-toast";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

export type FormData = {
  name: string;
  jobtitle: string;
  email: string;
  phone: number;
  reason: string;
  message: string;
  terms: boolean;
};

const ContactForm: FC = () => {
  const { language } = useLanguage();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  async function onSubmit(data: FormData) {
    try {
      await axios.post("/api/email", data);
      reset();
      toast.success(
        language === "english"
          ? "Message received. We will contact you as soon as possible."
          : "Meddelandet mottaget. Vi kommer att kontakta dig så snart som möjligt."
      );
    } catch (error) {
      toast.error(
        language === "english"
          ? "Failed to send message. Please try again."
          : "Misslyckades med att skicka meddelande. Försök igen."
      );
    }
  }

  return (
    <section className="xl:gap-10 md:py-7 xl:max-w-7xl lg:max-w-3xl md:max-w-2xl mx-auto flex flex-col xl:flex-row items-center pt-5 pb-4">
      <div className="p-4 xl:p-5 self-start">
        <h1 className="font-bold text-5xl md:text-heading2 mb-3">
          {language === "english" ? "Contact us" : "Kontakta oss"}
        </h1>
        <p className="mb-4 font-mono text-base leading-8 font-[500]">
          {language === "english"
            ? "Whether you have a question, feedback, or need assistance, please fill out the form below, and our team will get back to you as soon as possible."
            : "Oavsett om du har en fråga, feedback eller behöver hjälp, fyll i formuläret nedan så återkommer vårt team till dig så snart som möjligt."}
        </p>
        <ul className="list-none">
          <li className="mb-2 flex items-center">
            <FaEnvelope className="mr-2" />
            <a href="mailto:info@parkingtime.se" className="hover:underline">
              info@parkingtime.se
            </a>
          </li>
          <li className="mb-2 flex items-center">
            <FaPhone className="mr-2" />
            <a href="tel:+46723991515" className="hover:underline">
              +46 72 399 15 15
            </a>
          </li>
          <li className="mb-2 flex items-center">
            <FaLocationDot className="mr-2" />
            <a
              href="https://maps.google.com/?q=Nyköpingsvägen 52, 611 50 NYKÖPING"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Nyköpingsvägen 52 | 611 50 NYKÖPING
            </a>
          </li>
        </ul>
      </div>
      <div className="container mx-auto p-4">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-darkblue2"
            >
              {language === "english" ? "Name" : "Namn"}{" "}
              <span className="text-darkblue2 text-bold text-md">*</span>
            </label>
            <input
              type="text"
              id="name"
              placeholder={language === "english" ? "Name" : "Namn"}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-[10px]"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red text-xs">
                {language === "english"
                  ? "This field is required"
                  : "Detta fält är obligatoriskt"}
              </span>
            )}
          </div>
          <div>
            <label
              htmlFor="job"
              className="block text-sm font-medium text-darkblue2"
            >
              {language === "english" ? "Job title" : "Jobbtitel"}{" "}
              <span className="ps-[4px] text-[12px] text-grey1">
                {language === "english" ? "(optional)" : "(valfritt)"}
              </span>
            </label>
            <input
              type="text"
              id="job"
              placeholder={language === "english" ? "Job title" : "Jobbtitel"}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-[10px]"
              {...register("jobtitle", { required: false })}
            />
            {errors.jobtitle && (
              <span className="text-red text-xs">
                {language === "english"
                  ? "This field is required"
                  : "Detta fält är obligatoriskt"}
              </span>
            )}
          </div>

          {/* email & phone on the same line, min-width 1280px */}
          <div className="flex flex-col xl:flex-row gap-2">
            <div className="xl:w-8/12">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-darkblue2"
              >
                {language === "english" ? "Email" : "E-post"}{" "}
                <span className="text-darkblue2 text-bold text-md">*</span>
              </label>
              <input
                type="email"
                id="email"
                placeholder="ex. name@email.com"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-[10px]"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red text-xs">
                  {language === "english"
                    ? "This field is required"
                    : "Detta fält är obligatoriskt"}
                </span>
              )}
            </div>
            <div className="w-[69%] sm:w-1/2 xl:w-4/12">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-darkblue2"
              >
                {language === "english" ? "Phone number" : "Telefonnummer"}{" "}
                <span className="ps-[4px] text-[12px] text-grey1">
                  {language === "english" ? "(optional)" : "(valfritt)"}
                </span>
              </label>
              <input
                type="number"
                id="phone"
                placeholder="+46708123456"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-[10px]"
                {...register("phone", { required: false })}
              />
              {errors.phone && (
                <span className="text-red text-xs">
                  {language === "english"
                    ? "This field is required"
                    : "Detta fält är obligatoriskt"}
                </span>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="reason"
              className="block text-sm font-medium text-darkblue2"
            >
              {language === "english"
                ? "Reason for contact"
                : "Orsak till kontakt"}{" "}
              <span className="ps-[4px] text-[12px] text-grey1">
                {language === "english" ? "(optional)" : "(valfritt)"}
              </span>
            </label>
            <input
              type="text"
              id="reason"
              placeholder={
                language === "english"
                  ? "Reason for contact"
                  : "Orsak till kontakt"
              }
              className="mt-1 p-2 block w-full border border-gray-300 rounded-[10px]"
              {...register("reason", { required: false })}
            />
            {errors.reason && (
              <span className="text-red text-xs">
                {language === "english"
                  ? "This field is required"
                  : "Detta fält är obligatoriskt"}
              </span>
            )}
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-darkblue2"
            >
              {language === "english"
                ? "Write us a message"
                : "Skriv ett meddelande"}{" "}
              <span className="text-darkblue2 text-bold text-md">*</span>
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder={
                language === "english"
                  ? "Type your message..."
                  : "Skriv ditt meddelande..."
              }
              className="mt-1 p-2 block w-full border border-gray-300 rounded-[10px] h-28 resize-y"
              {...register("message", { required: true })}
            ></textarea>
            {errors.message && (
              <span className="text-red text-xs">
                {language === "english"
                  ? "This field is required"
                  : "Detta fält är obligatoriskt"}
              </span>
            )}
          </div>
          <div className="flex items-center !mt-[12px]">
            <input
              type="checkbox"
              id="terms"
              className="mr-2"
              {...register("terms", { required: true })}
            />
            <label
              htmlFor="terms"
              className="mr-2 text-sm font-medium text-darkblue2"
            >
              {language === "english" ? (
                <>
                  I accept the{" "}
                  <Link href="/terms" target="_blank" className="underline">
                    Terms
                  </Link>
                </>
              ) : (
                <>
                  Jag accepterar{" "}
                  <Link href="/terms" target="_blank" className="underline">
                    Villkoren
                  </Link>
                </>
              )}
            </label>
            {errors.terms && (
              <span className="text-red text-xs">
                {language === "english"
                  ? "You must accept the terms!"
                  : "Du måste acceptera villkoren!"}
              </span>
            )}
          </div>
          <div>
            <SendEmailButton SWtext="Skicka meddelande" ENtext="Send message" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
