'use client'
import { FaEnvelope, FaPhone, FaLocationDot } from "react-icons/fa6";

const ContactForm: React.FC = () => {
  return (
    <section className="md:py-4 max-w-7xl lg:max-w-3xl md:max-w-2xl mx-auto flex flex-col xl:flex-row items-center pt-5 pb-4">
        <div className="p-4 align-self">
            <h1 className="font-bold text-5xl md:text-heading2 mb-3">Contact Us</h1>
            <p className="mb-4 font-mono text-base font-[500]">Whether you have a question, feedback, or need assistance, please fill out the form below, and our team will get back to you as soon as possible.</p>
            <ul className="list-none">
                <li className="mb-2 flex items-center">
                    <FaEnvelope className="mr-2" /> info@parkingtime.se</li>
                <li className="mb-2 flex items-center">
                    <FaPhone className="mr-2" /> +46 72 399 15 15 </li>
                <li className="mb-2 flex items-center">
                    <FaLocationDot className="mr-2" /> Nyköpingsvägen 52 | 611 50 NYKÖPING</li>
            </ul>
        </div>
        <div className="container mx-auto p-4 bg-gray-100 rounded-lg">
        <form action="action_page.php" className="space-y-4">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    First and last name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="First and last name"
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
            </div>
            <div>
                <label htmlFor="job" className="block text-sm font-medium text-gray-700">
                    Job title
                </label>
                <input
                    type="text"
                    id="job"
                    name="jobtitle"
                    placeholder="Job title"
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                </label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="ex. name@email.com"
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
            </div>
            <div>
                <label htmlFor="reason" className="block text-sm font-medium text-gray-700">
                    Reason for contact
                </label>
                <select
                    id="reason"
                    name="reason"
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                    <option value="option1">option1</option>
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
                    name="subject"
                    placeholder="Type your message..."
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 h-48 resize-y"
                ></textarea>
                </div>
                <div>
                <input
                    type="submit"
                    value="Submit"
                    className="w-full bg-green-600 text-white p-3 rounded-md cursor-pointer hover:bg-green-700"
                />
            </div>
        </form>
        </div>
    </section>
  )
}

export default ContactForm

/* import { useLanguage } from '@/context/LanguageContext';
import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <div className="container mx-auto p-6 bg-gray-100 rounded-lg">
      <form action="action_page.php" className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            First and last name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="First and last name"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="job" className="block text-sm font-medium text-gray-700">
            Job title
          </label>
          <input
            type="text"
            id="job"
            name="jobtitle"
            placeholder="Job title"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="ex. name@email.com"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="reason" className="block text-sm font-medium text-gray-700">
            Reason for contact
          </label>
          <select
            id="reason"
            name="reason"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="option1">option1</option>
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
            name="subject"
            placeholder="Type your message..."
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 h-48 resize-y"
          ></textarea>
        </div>
        <div>
          <input
            type="submit"
            value="Submit"
            className="w-full bg-green-600 text-white p-3 rounded-md cursor-pointer hover:bg-green-700"
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm; */