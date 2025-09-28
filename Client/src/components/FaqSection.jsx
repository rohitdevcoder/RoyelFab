import React, { useState } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

function FaqSection() {
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  const handleToggle = (idx) => {
    setOpenQuestionIndex(openQuestionIndex === idx ? null : idx);
  }

    const faqs = [
    {
      question: "What materials are your products made from?",
      answer:
        "Our manhole covers, gratings, and pipes are primarily manufactured from high-grade materials like ductile iron (GGG50), grey cast iron (GG20), and composite materials. We also offer products in galvanized steel and stainless steel upon request.",
    },
    {
      question: "What types of coatings do you offer for your products?",
      answer:
        "Our standard coating is a black bitumen paint for corrosion resistance. We can also provide epoxy coatings, powder coatings, or hot-dip galvanization for enhanced durability and specific environmental requirements.",
    },
    {
      question: "What is your Minimum Order Quantity (MOQ)?",
      answer:
        "Our MOQ typically depends on the specific product and customization required. For standard items, we are flexible, but a common MOQ is one full pallet or a small container load to optimize shipping costs. Please contact us with your requirements for a specific answer.",
    },
    {
      question: "Which countries do you export to?",
      answer:
        "We ship our products worldwide. We have extensive experience exporting to UAE, Qatar, Saudi Arabia, UK, Germany, France, Belgium, USA, Canada, South Africa, Nigeria and Kenya.",
    },
    {
      question: "What are your shipping terms (Incoterms)?",
      answer:
        "We are flexible and can work with various Incoterms, including FOB (Free on Board), CIF (Cost, Insurance, and Freight), and DDP (Delivered Duty Paid). Let us know your preference, and we will arrange the logistics accordingly.",
    },
  ];
  return (
    <div className='pt-[60px] max-w-7xl mx-auto p-3 flex flex-col items-center gap-6'>
      <h2 className='text-secondary text-center text-2xl font-bold mb-7'>Frequently Asked <span className='text-primary dark:text-white'>Questions</span></h2>
      <div className= 'w-full p-3 flex flex-col gap-4'>
        {faqs.map((faq, index) => (
        <div key={index} className=' w-full bg-[#E9EDFF] dark:bg-darkBg dark:border-1 dark:border-white rounded-2xl'>
        <button
        onClick={() => handleToggle(index)}
        className='w-full p-6 flex justify-between'
        arial-expanded = {openQuestionIndex === index ? index : undefined}
        >
        <span className='text-primary dark:text-white text-[1.2rem] font-semibold'>{faq.question}</span>
        <span className='text-3xl text-primary dark:text-white'>{openQuestionIndex === index ? (<MdKeyboardArrowUp />):(<MdKeyboardArrowDown />) }</span>
        </button>
        {/* Answer Section */}
         <div
        className={`grid overflow-hidden transition-all duration-500 ease-in-out ${
          openQuestionIndex===index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
            <p className="px-6 pb-6 text-slate-500 dark:text-slate-100 leading-relaxed">
                {faq.answer}
            </p>
        </div>
      </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default FaqSection