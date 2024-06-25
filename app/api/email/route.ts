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
      from: `Parking Time <${user}>`,
      to: "info@parkingtime.se",
      subject: "New message from Parking Time",
      text: `Name: ${name}\nJob title: ${jobtitle}\nEmail: ${email}\nPhone: ${phone}\nReason: ${reason}\nMessage: ${message}`,
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