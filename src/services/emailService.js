import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export async function sendEmail({
  email,
  user_name,
  subject,
  message,
}) {
  try {
    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        email,
        user_name,
        subject,
        message,
      },
      PUBLIC_KEY
    );

    return true;
  } catch (error) {
    console.error("Email failed:", error);
    return false;
  }
}