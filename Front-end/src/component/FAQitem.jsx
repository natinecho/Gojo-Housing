import React, { useState } from 'react';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-200">
      <div className="flex justify-between items-center py-4 " onClick={toggleAccordion}>
        <h2 className="font-bold text-lg ">{question}</h2>
        {isOpen ? <p><ArrowDropUpIcon /></p>:<p><ArrowDropDownIcon  /></p>}
      </div>
      {isOpen && <p className="pb-4 text-black">{answer}</p>}
    </div>
  );
};

export default FAQItem;
