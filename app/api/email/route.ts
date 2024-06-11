/* import { type NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  return NextResponse.json('Hello from API!');
} */


/* import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const user = process.env.EMAIL;
const pass = process.env.PASSWORD;

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();
    
    const transporter = nodemailer.createTransport({
      service: "zoho",
      host: "smtpro.zoho.in",
      port: 465
      secure: true,
      auth: {
        user,
        pass,
      },
    });

    const mailOptions = {
      from: "user",
      to: "the-email-you-want-to-receive-the-message",
      subject: "New message from your-website",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    return new NextResponse("Failed to send message.", { status: 500 })
  }
} */



import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const user = process.env.EMAIL;
const pass = process.env.PASSWORD;

export async function POST(request: Request) {
  try {
    const { name, jobtitle, email, phone, reason, message } = await request.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user,
        pass,
      },
    });

    const mailOptions = {
      from: user,
      to: "test.smartparking12@gmail.com",
      subject: "New message from your website",
      text: `Name: ${name}\nJob Title: ${jobtitle}\nEmail: ${email}\nPhone: ${phone}\nReason: ${reason}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return new NextResponse("Failed to send message.", { status: 500 });
  }
}