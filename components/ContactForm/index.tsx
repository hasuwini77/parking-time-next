'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { FaEnvelope, FaPhone, FaLocationDot } from "react-icons/fa6";
import SendEmailButton from "../SendEmailButton";
import axios from 'axios';
import toast from 'react-hot-toast';

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
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  async function onSubmit(data: FormData) {
    try {
      await axios.post("/api/email", data);
      reset();
      toast.success("Message received. We will contact you as soon as possible.");
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    }
  }

  return (
    <section className="xl:gap-10 md:py-7 xl:max-w-7xl lg:max-w-3xl md:max-w-2xl mx-auto flex flex-col xl:flex-row items-center pt-5 pb-4">
      <div className="p-4 self-start">
        <h1 className="font-bold text-5xl md:text-heading2 mb-3">Contact Us</h1>
        <p className="mb-4 font-mono text-base leading-8 font-[500]">
          Whether you have a question, feedback, or need assistance, please fill out the form below, and our team will get back to you as soon as possible.
        </p>
        <ul className="list-none">
          <li className="mb-2 flex items-center">
            <FaEnvelope className="mr-2" />
            <a href="mailto:info@parkingtime.se" className="text-blue-600 hover:underline">info@parkingtime.se</a>
          </li>
          <li className="mb-2 flex items-center">
            <FaPhone className="mr-2" />
            <a href="tel:+46723991515" className="text-blue-600 hover:underline">+46 72 399 15 15</a>
          </li>
          <li className="mb-2 flex items-center">
            <FaLocationDot className="mr-2" />
            <a href="https://maps.google.com/?q=Nyköpingsvägen 52, 611 50 NYKÖPING" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Nyköpingsvägen 52 | 611 50 NYKÖPING
            </a>
          </li>
        </ul>
      </div>
      <div className="container mx-auto p-4">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              First and last name <span className='text-red text-bold text-md'>*</span>
            </label>
            <input
              type="text"
              id="name"
              placeholder="First and last name"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-[10px] shadow-sm focus:border-blue-500 focus:ring-blue-500"
              {...register('name', { required: true })}
            />
            {errors.name && <span className="text-red text-sm">This field is required</span>}
          </div>
          <div>
            <label htmlFor="job" className="block text-sm font-medium text-gray-700">
              Job title <span className='ps-[4px] text-[12px] text-grey1'>(optional)</span>
            </label>
            <input
              type="text"
              id="job"
              placeholder="Job title"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-[10px] shadow-sm focus:border-blue-500 focus:ring-blue-500"
              {...register('jobtitle', { required: false })}
            />
            {errors.jobtitle && <span className="text-red text-sm">This field is required</span>}
          </div>

          {/* email & phone on the same line, min-width 1280px */}
          <div className='hidden xl:flex'>
            <div className='mr-2 lg:w-8/12'>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email <span className='text-red text-bold text-md'>*</span>
              </label>
              <input
                type="email"
                id="email"
                placeholder="ex. name@email.com"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-[10px] shadow-sm focus:border-blue-500 focus:ring-blue-500"
                {...register('email', { required: true })}
              />
              {errors.email && <span className="text-red text-sm">This field is required</span>}
            </div>
            <div className='lg:w-4/12'>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone number <span className='ps-[4px] text-[12px] text-grey1'>(optional)</span>
              </label>
              <input
                type="number"
                id="phone"
                placeholder="+46708123456"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-[10px] shadow-sm focus:border-blue-500 focus:ring-blue-500"
                {...register('phone', { required: false })}
              />
              {errors.phone && <span className="text-red text-sm">This field is required</span>}
            </div>
          </div>

            <div className='xl:mr-2 xl:w-8/12 xl:hidden'>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email <span className='text-red text-bold text-md'>*</span>
              </label>
              <input
                type="email"
                id="email"
                placeholder="ex. name@email.com"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-[10px] shadow-sm focus:border-blue-500 focus:ring-blue-500"
                {...register('email', { required: true })}
              />
              {errors.email && <span className="text-red text-sm">This field is required</span>}
            </div>
            <div className='xl:w-4/12 xl:hidden'>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone number <span className='ps-[4px] text-[12px] text-grey1'>(optional)</span>
              </label>
              <input
                type="number"
                id="phone"
                placeholder="+46708123456"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-[10px] shadow-sm focus:border-blue-500 focus:ring-blue-500"
                {...register('phone', { required: false })}
              />
              {errors.phone && <span className="text-red text-sm">This field is required</span>}
            </div>

          <div>
            <label htmlFor="reason" className="block text-sm font-medium text-gray-700">
              Reason for contact <span className='ps-[4px] text-[12px] text-grey1'>(optional)</span>
            </label>
            <input
              type="text"
              id="reason"
              placeholder="Reason for contact"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-[10px] shadow-sm focus:border-blue-500 focus:ring-blue-500"
              {...register('reason', { required: false })}
            />
            {errors.reason && <span className="text-red text-sm">This field is required</span>}
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Write us a message <span className='text-red text-bold text-md'>*</span>
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Type your message..."
              className="mt-1 p-2 block w-full border border-gray-300 rounded-[10px] shadow-sm focus:border-blue-500 focus:ring-blue-500 h-48 resize-y"
              {...register('message', { required: true })}
            ></textarea>
            {errors.message && <span className="text-red text-sm">This field is required</span>}
          </div>
          <div className="flex items-center !mt-[10px]">
            <input
              type="checkbox"
              id="terms"
              className="mr-2"
              {...register('terms', { required: true })}
            />
            <label htmlFor="terms" className="mr-2 text-sm font-medium text-gray-700">
              I accept the terms 
            </label>
            {errors.terms && <span className="text-red text-sm">You must accept the terms!</span>}
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
