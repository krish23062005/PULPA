import React, { useState } from 'react';

const faqData = [
  {
    question: "Is it actually healthy?",
    answer: "Yes. It's 100% raw, cold-pressed fruit and veggies. But we refuse to make it taste like a boring salad. You're welcome."
  },
  {
    question: "Why is it so loud?",
    answer: "Because life is too short for boring, watered-down nonsense. We crush the ordinary to make something that actually wakes you up."
  },
  {
    question: "Do you use preservatives?",
    answer: "Zero. None. Zip. It's pure chaos in a bottle. Drink it fresh or keep it in the fridge before it gets angry."
  },
  {
    question: "Can I mix it with alcohol?",
    answer: "We legally can't tell you to use our juice as a premium cocktail mixer for your weekend ragers, but... you have a pulse, right?"
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="mb-6">
      <button 
        onClick={onClick}
        className={`w-full text-left p-6 md:p-8 flex justify-between items-center border-[4px] border-pulpa-navy rounded-2xl transition-all duration-300 ${
          isOpen ? 'bg-pulpa-yellow shadow-[4px_4px_0px_#161124] translate-y-1 translate-x-1' : 'bg-white shadow-[12px_12px_0px_#161124] hover:scale-[1.02] hover:-rotate-1 hover:bg-pulpa-yellow z-10 relative'
        }`}
      >
        <span className="font-hanken font-bold text-xl md:text-3xl text-pulpa-navy pr-4 leading-relaxed">{question}</span>
        <span className="font-space text-3xl md:text-4xl text-pulpa-navy font-bold">
          {isOpen ? '-' : '+'}
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'
        }`}
      >
        <div className="p-6 md:p-8 bg-pulpa-periwinkle border-[4px] border-pulpa-navy rounded-2xl shadow-[8px_8px_0px_#161124]">
          <p className="font-hanken text-lg md:text-xl font-bold text-pulpa-navy leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-24 px-4 md:px-12 w-full flex flex-col items-center justify-center bg-pulpa-hotpink border-y-4 border-pulpa-navy relative overflow-hidden z-10">
      <div className="max-w-4xl mx-auto w-full relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-anton text-5xl md:text-7xl uppercase text-pulpa-navy leading-tight transform -rotate-2">
            WTF?
          </h2>
          <p className="font-bricolage text-2xl md:text-4xl text-pulpa-yellow mt-4 font-bold inline-block transform -rotate-2">
            (What To know Facts)
          </p>
        </div>

        <div className="w-full">
          {faqData.map((faq, index) => (
            <FAQItem 
              key={index} 
              question={faq.question} 
              answer={faq.answer} 
              isOpen={openIndex === index}
              onClick={() => toggleAccordion(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
