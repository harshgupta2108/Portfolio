import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { X } from "lucide-react";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const [showForm, setShowForm] = useState(false);
  const [sent, setSent] = useState(false);
  const formRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { triggerOnce: false, margin: "-100px" });

  // Function to send email
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_iv6fafp", "template_95g9hwe", formRef.current, "e4NIO7CqQZhkBkKbq")
      .then(() => {
          setSent(true);
          setTimeout(() => {
            setShowForm(false);
            setSent(false);
          }, 2000);
        },
        (error) => {
          console.error("Email send error:", error);
        }
      );
  };

  return (
    <div ref={sectionRef} className="relative w-full max-w-4xl mx-auto mt-10 p-4">
      <AnimatePresence mode="wait">
        {!showForm ? (
          <motion.div
            key="contact-me"
            initial={{ y: 100, opacity: 0 }}  // Start hidden at the bottom
            animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }} // Move up when in view
            exit={{ y: 100, opacity: 0 }}     // Exit back down
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-6 md:p-8 rounded-lg flex flex-wrap justify-between items-center shadow-lg transition-all duration-300"
          >
            <h2 className="text-xl md:text-2xl font-bold tracking-wide font-pacifico">
              Let's Build <span className="text-[#3FFF00]">Something Amazing!</span>
            </h2>

            <motion.button
              onClick={() => setShowForm(true)}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 rounded-lg text-white border border-[#3FFF00] bg-[#3FFF00] hover:bg-white hover:text-[#3FFF00] transition-all duration-300"
              aria-label="Open Contact Form"
            >
              CONTACT ME
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            key="contact-form"
            initial={{ rotateY: -180, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: 180, opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg relative max-w-[90%] md:max-w-4xl mx-auto min-h-[200px]"
          >
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all"
              aria-label="Close Contact Form"
            >
              <X size={24} />
            </button>

            <h2 className="text-center text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Get in <span className="text-[#3FFF00]">Touch</span>
            </h2>

            {!sent ? (
              <form
                ref={formRef}
                onSubmit={sendEmail}
                className="space-y-4"
                autoComplete="off"
              >
                <input
                  type="text"
                  name="user_name"
                  placeholder="Name"
                  className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                  required
                />
                <input
                  type="email"
                  name="user_email"
                  placeholder="Email"
                  className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Write a message"
                  className="w-full p-3 h-32 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-[#3FFF00] text-gray-900 py-3 px-6 rounded-md font-semibold hover:bg-white hover:text-[#3FFF00] transition-all"
                  aria-label="Send Message"
                >
                  Send Message
                </button>
              </form>
            ) : (
              <p className="text-center text-green-500 font-bold text-lg">
                ✅ Message Sent Successfully!
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactMe;
