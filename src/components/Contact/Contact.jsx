import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9mj7d3m",
        "template_isd2exw",
        form.current,
        "l0wtA5yzAU7DizpXD",
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        },
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white transition-colors duration-300">CONTACT</h2>

        {/* 🔄 Purple → Green */}
        <div className="w-32 h-1 bg-green-500 mx-auto mt-4"></div>

        <p className="text-gray-700 dark:text-gray-400 transition-colors duration-300 mt-4 text-lg font-semibold">
          I’d love to hear from you—reach out for any opportunities or
          questions!
        </p>
      </div>

      {/* Contact Form */}
      <div className="mt-8 w-full max-w-md bg-white dark:bg-[#0a0f0d] transition-colors duration-300 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white transition-colors duration-300 text-center">
          Connect With Me <span className="ml-1">🚀</span>
        </h3>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="mt-4 flex flex-col space-y-4"
        >
          {/* 🔄 Input Fields */}
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-gray-50 dark:bg-[#101a14] text-gray-900 dark:text-white transition-colors duration-300 border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-green-500"
          />

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-gray-50 dark:bg-[#101a14] text-gray-900 dark:text-white transition-colors duration-300 border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-green-500"
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-3 rounded-md bg-gray-50 dark:bg-[#101a14] text-gray-900 dark:text-white transition-colors duration-300 border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-green-500"
          />

          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
            className="w-full p-3 rounded-md bg-gray-50 dark:bg-[#101a14] text-gray-900 dark:text-white transition-colors duration-300 border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-green-500"
          />

          {/* 🔄 Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-600 to-green-400 py-3 text-white font-semibold rounded-md hover:shadow-[0_0_25px_rgba(34,197,94,0.6)] transition duration-300"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
