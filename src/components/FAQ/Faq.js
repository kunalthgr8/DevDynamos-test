import React, { useState } from 'react';
import "./Faq.css";

const Faq = () => {
  const data = [
    {
      question: "How Do We Work ?",
      answer: "Our main work is to help people who are struggling with Open Source development."
    },
    {
      question: "What Is Our Function ?",
      answer: "Our function is to contribute towards Open Source development and preaching others."
    },
    {
      question: "How Should I Participate ?",
      answer: "Fill in below the contact form and our members will contact you shortly."
    },
    {
      question: "What Is Our Main Event ?",
      answer: "Our main events are FOSS Overflow (conducted by us) and GSOC (conducted by Google)."
    },
    {
      question: "Is There Any Registration Fee?",
      answer: "No, there is no registration fee as for now. You are free to join without any Terms and Conditions.."
    },
    {
      question: "What Are Perks of Joining?",
      answer: "Collaborate in projects and discussion with the community members."
    }
  ];

  const [openItems, setOpenItems] = useState([]);

  const toggleAccordion = (index) => {
    const isOpen = openItems.includes(index);
    if (isOpen) {
      setOpenItems(openItems.filter((item) => item !== index));
    } else {
      setOpenItems([...openItems, index]);
    }
  };

  const getHeaderBorderRadius = (index) => {
    return openItems.includes(index) ? '12px 12px 0 0' : '12px ';
  };

  return (
    <div className="accordion">
      <div className='faq-heading'>
        FAQ's
        <hr className='faq-hr'></hr>
      </div>
      <div className='faq-questions-container'>
        {data.map((item, index) => (
          <div className="accordion-item" key={index}>
            <div
              className="accordion-header"
              onClick={() => toggleAccordion(index)}
              style={{ borderRadius: getHeaderBorderRadius(index) }}
            >
              <h3 className="accordion-title">{item.question}</h3>
              <span className="accordion-icon">{openItems.includes(index) ? '-' : '+'}</span>
            </div>
            {openItems.includes(index) && (
              <div className="accordion-content">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
