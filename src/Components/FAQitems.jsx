import React, { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="text-xs leading-10 max-w-[500px]">
      <div className="border-b-2 flex justify-between" onClick={toggleOpen}>
        <span>{question}</span>
        <span className={`faq-icon ${isOpen ? "open" : ""}`}>
          {isOpen ? "−" : "+"}
        </span>
      </div>
      {isOpen && <div className="">{answer}</div>}
    </div>
  );
};

const FAQDropdown = ({ faqs }) => {
  return (
    <div className="text-white font ">
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FAQDropdown;
