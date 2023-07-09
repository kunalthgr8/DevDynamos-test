import React, { useState } from 'react';
import "./Faq.css";

const Faq = () => {
  const data = [
    {
      question: "Accordion 1",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      question: "Accordion 2",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      question: "Accordion 3",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      question: "Accordion 4",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      question: "Accordion 5",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      question: "Accordion 6",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
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
    return openItems.includes(index) ? '15px 15px 0 0' : '15px ';
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
