import React from "react";
import casual from "../assets/casual.png";
import FAQDropdown from "./FAQitems";

function FAQs() {
  const faqs = [
    {
      question: "Can I work on a project I started before the hackathon?",
      answer:
        "URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.",
    },
    {
      question: "What happens if I need help during the hackathon?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In iaculis hendrerit ligula vitae condimentum.",
    },
    {
      question: "What happens if I don't have an idea for a project?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In iaculis hendrerit ligula vitae condimentum.",
    },
    {
      question: "Can I join a team or do I have to come with one?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In iaculis hendrerit ligula vitae condimentum.",
    },
    {
      question: "What happens after the hackathon ends?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In iaculis hendrerit ligula vitae condimentum.",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row m-6 md:m-10 border-b-[1px]">
      <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
        <img
          className="w-64 md:w-auto object-contain"
          src={casual}
          alt="Frequently Asked Questions"
        />
      </div>

      <div className="w-full md:w-1/2">
        <h3 className="text-2xl md:text-4xl text-white font-bold mb-4">
          Frequently Asked <br />
          Questions
        </h3>
        <p className="font text-white mb-6">
          We got answers to the questions that you might want to ask about
          getlinked Hackathon 1.0.
        </p>
        <FAQDropdown faqs={faqs} />
      </div>
    </div>
  );
}

export default FAQs;
