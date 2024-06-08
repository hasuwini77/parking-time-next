/* 'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { FaEnvelope, FaPhone, FaLocationDot } from "react-icons/fa6";
import { sendEmail } from '@/utils/send-email';
import SendEmailButton from '../SendEmailButton';

export type FormData = {
  name: string;
  jobtitle: string;
  email: string;
  reason: string;
  subject: string;
};

const ContactForm: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
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
            <a href="mailto:info@parkingtime.se" className="hover:underline">info@parkingtime.se</a>
          </li>
          <li className="mb-2 flex items-center">
            <FaPhone className="mr-2" />
            <a href="tel:+46723991515" className="underline">+46 72 399 15 15</a>
          </li>
          <li className="mb-2 flex items-center">
            <FaLocationDot className="mr-2" />
            <a href="https://maps.google.com/?q=Nyköpingsvägen 52, 611 50 NYKÖPING" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Nyköpingsvägen 52 | 611 50 NYKÖPING
            </a>
          </li>
        </ul>
      </div>
      <div className="container mx-auto p-4 rounded-lg">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              First and last name
            </label>
            <input
              type="text"
              id="name"
              placeholder="First and last name"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
              {...register('name', { required: true })}
            />
          </div>
          <div>
            <label htmlFor="job" className="block text-sm font-medium text-gray-700">
              Job title
            </label>
            <input
              type="text"
              id="job"
              placeholder="Job title"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
              {...register('jobtitle', { required: true })}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="ex. name@email.com"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
              {...register('email', { required: true })}
            />
          </div>
          <div>
            <label htmlFor="reason" className="block text-sm font-medium text-gray-700">
              Reason for contact
            </label>
            <select
              id="reason"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
              {...register('reason', { required: true })}
            >
              <option value="option1">Option1</option>
              <option value="option2">Option2</option>
              <option value="option3">Option3</option>
              <option value="option4">Option4</option>
            </select>
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
              Write us a message
            </label>
            <textarea
              id="subject"
              rows={4}
              placeholder="Type your message..."
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 h-48 resize-y"
              {...register('subject', { required: true })}
            ></textarea>
          </div>
          <div>
            <SendEmailButton SWtext="Kontakta oss" ENtext="Contact us" />
          </div>
          
        </form>
      </div>
    </section>
  );
};

export default ContactForm; */




'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { FaEnvelope, FaPhone, FaLocationDot } from "react-icons/fa6";
import SendEmailButton from "../SendEmailButton";
import { sendEmail } from '@/utils/send-email';

export type FormData = {
  name: string;
  jobtitle: string;
  email: string;
  reason: string;
  subject: string;
  terms: boolean;
};

const ContactForm: FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
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
      <div className="container mx-auto p-4 rounded-lg">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              First and last name
            </label>
            <input
              type="text"
              id="name"
              placeholder="First and last name"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
              {...register('name', { required: true })}
            />
            {errors.name && <span className="text-red-500 text-sm">This field is required</span>}
          </div>
          <div>
            <label htmlFor="job" className="block text-sm font-medium text-gray-700">
              Job title
            </label>
            <input
              type="text"
              id="job"
              placeholder="Job title"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
              {...register('jobtitle', { required: true })}
            />
            {errors.jobtitle && <span className="text-red-500 text-sm">This field is required</span>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="ex. name@email.com"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
              {...register('email', { required: true })}
            />
            {errors.email && <span className="text-red-500 text-sm">This field is required</span>}
          </div>
          <div>
            <label htmlFor="reason" className="block text-sm font-medium text-gray-700">
              Reason for contact
            </label>
            <select
              id="reason"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
              {...register('reason', { required: true })}
            >
              <option value="option1">Option1</option>
              <option value="option2">Option2</option>
              <option value="option3">Option3</option>
              <option value="option4">Option4</option>
            </select>
            {errors.reason && <span className="text-red-500 text-sm">This field is required</span>}
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
              Write us a message
            </label>
            <textarea
              id="subject"
              rows={4}
              placeholder="Type your message..."
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 h-48 resize-y"
              {...register('subject', { required: true })}
            ></textarea>
            {errors.subject && <span className="text-red-500 text-sm">This field is required</span>}
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="terms"
              className="mr-2"
              {...register('terms', { required: true })}
            />
            <label htmlFor="terms" className="mr-2 text-sm font-medium text-gray-700">
              I accept the terms 
            </label>
            {errors.terms && <span className="text-red-500 text-sm">You must accept the terms!</span>}
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

