import React from "react";
import faq from "../asset/faq.jpg";
import FAQItem from "./FAQitem";

const FAQList = () => {
  const FAQ = [
    {
      question: "What is Gojo?",
      answer:
        "Gojo is a premier house renting website designed to simplify your search for the perfect home. Whether you're looking for a cozy apartment in the city or a spacious house in the suburbs, Gojo offers an extensive and diverse selection of rental properties to suit your needs.",
    },
    {
      question: "Why is Gojo?",
      answer:
        "Gojo is your premier destination for house rentals, offering an extensive selection of properties to fit every budget and lifestyle. With its user-friendly interface and advanced search filters, Gojo makes finding your next home effortless. Each listing provides detailed information, high-quality photos, virtual tours, and reviews.",
    },
    {
      question: "How can I rent a house?",
      answer:
        "To rent a house with Gojo, start by registering on our website to become a user. Once registered, browse our extensive listings of homes tailored to your preferences. When you find a property you like, contact the owner directly through our platform to express your interest. Engage in negotiations to agree on terms, and once both parties are satisfied, finalize the rental agreement. Gojo makes the process straightforward, from search to securing your new home.",
    },
    {
      question: "How much is the subscription fee?",
      answer:
        "At Gojo, we offer three subscription packages to suit your needs: a monthly package for $10, a 6-month package for $20, and a yearly package for $40. Choose the plan that works best for you and start posting your rental properties with ease.",
    },
    {
      question: "How can I post a house?",
      answer:
        "To post a house on Gojo, first register on our website to create an account. Once registered, subscribe to one of our listing packages that best fits your needs. After subscribing, you can post your house by providing detailed information and high-quality photos. When potential tenants show interest, you can communicate with them directly through our platform. Negotiate the rental terms and finalize the agreement to rent your home quickly and efficiently with Gojo.",
    },
  ];

  return (
    <>
      <div className=" flex w-full ">
        <div className=" mt-5 flex overflow-hidden w-full">
          <div className="m-8 w-full lg:w-4/5">
            <h1 className="font-bold text-5xl mb-3 text-[#4a154b]">FAQ</h1>
            {FAQ.map((item, index) => (
              <FAQItem question={item.question} answer={item.answer} />
            ))}
          </div>
          <img
            className="lg:w-1/2 lg:block hidden m-5 h-[400px]"
            src={faq}
            alt="question marks"
          />
        </div>
      </div>
    </>
  );
};

export default FAQList;