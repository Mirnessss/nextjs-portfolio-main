"use client"

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value.trim(),
      email: e.target.email.value.trim(),
      message: e.target.message.value.trim(),
    };
    const trimmedName = data.name;
    const trimmedEmail = data.email;
    const trimmedMessage = data.message;

    if (trimmedName === "") {
      setNameError("Name field is required.");
      return;
    } else {
      setNameError("");
    }

    if (trimmedEmail === "") {
      setEmailError("Email field is required.");
      return;
    } else {
      setEmailError("");
    }

    if (trimmedMessage === "") {
      setMessageError("Message field is required.");
      return;
    } else {
      setMessageError("");
    }

    if (/^\s+$/.test(trimmedName)) {
      setNameError("Name cannot be whitespace.");
      return;
    } else {
      setNameError("");
    }

    if (/^\s+$/.test(trimmedEmail)) {
      setEmailError("Email cannot be whitespace.");
      return;
    } else {
      setEmailError("");
    }

    if (/^\s+$/.test(trimmedMessage)) {
      setMessageError("Message cannot be whitespace.");
      return;
    } else {
      setMessageError("");
    }

    const JSONdata = JSON.stringify(data);
    const endpoint = "https://getform.io/f/wardkwra";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    try {
      const response = await fetch(endpoint, options);
      if (response.ok) {
        console.log("Message sent.");
        setEmailSubmitted(true);
        setTimeout(() => {
          setEmailSubmitted(false);
        }, 3000); // 3000 milliseconds = 3 seconds
      } else {
        console.error("Failed to send message.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <section id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
      <div>
        <h5 className="text-xl font-bold text-white my-2">Let us Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I am currently looking for new opportunities, my inbox is always open. Whether you have a question or just want
          to say hi, I will try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link target="_blank" href="https://github.com/Mirnessss">
            <Image src="/github-icon.svg" alt="Github Icon" width={32} height={32} />
          </Link>
          <Link target="_blank" href="https://www.linkedin.com/in/mirnes-kovacevic/">
            <Image src="/linkedin-icon.svg" alt="Linkedin Icon" width={32} height={32} />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">Email sent successfully!</p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className="text-white block mb-2 text-sm font-medium">
                Your Name
              </label>
              <input
                name="name"
                type="text"
                id="name"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Your Name"
              />
              {nameError && <p className="text-red-500 text-sm mt-1">{nameError}</p>}
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="jacob@google.com"
              />
              {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
              {messageError && <p className="text-red-500 text-sm mt-1">{messageError}</p>}
            </div>
            <button
              type="submit"
              className="bg-purple-700 hover:bg-primary-500 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
