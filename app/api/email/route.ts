import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
  const { name, jobtitle, email, phone, reason, message } = await request.json();

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: "New message from Parking Time",
    text: `Name: ${name}\nJob Title: ${jobtitle}\nEmail: ${email}\nPhone: ${phone}\nReason: ${reason}\nMessage: ${message}`,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Email sent');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: 'Email sent' });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}





/* import { NextResponse } from "next/server";
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
} */