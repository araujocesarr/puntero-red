import React, { useState } from "react";
import NavBar from "../components/Navbar";
import hat from "../images/hats-protocol@2x.png";
import secret from "../images/secret-network@2x.png";
import check from "../images/check1.svg";
import check2 from "../images/check3.svg";
import group from "../images/group-1000004148.svg";
import group2 from "../images/group-1000004147.svg";
import group3 from "../images/group-1000004146.svg";
import youtube from "../images/screenshot-20220908-at-1246-1@2x.png";
import uxbg from "../images/uxbg.svg";
import sticker from "../images/sticker.svg";
import plus from "../images/vector1.svg";
import minus from "../images/vector.svg";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function PunteroRed() {
  const [activeQuestion, setActiveQuestion] = useState(1);
  const toggleAccordion = (id) => {
    setActiveQuestion(id);
  };

  const faqData = [
    {
      id: 1,
      question: "01. What is a Non-Limited Company (NLC)?",
      answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Voluptatum ex odit in adipisci dolorem atque minus harum minimaalias delectus nobis voluptates cumque similique laboriosam, 
      perspiciatis aliquam deleniti autem corrupti!`,
    },
    {
      id: 2,
      question: "01. What is a Non-Limited Company (NLC)?",
      answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Voluptatum ex odit in adipisci dolorem atque minus harum minimaalias delectus nobis voluptates cumque similique laboriosam, 
      perspiciatis aliquam deleniti autem corrupti!`,
    },
    {
      id: 3,
      question: "01. What is a Non-Limited Company (NLC)?",
      answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Voluptatum ex odit in adipisci dolorem atque minus harum minimaalias delectus nobis voluptates cumque similique laboriosam, 
      perspiciatis aliquam deleniti autem corrupti!`,
    },
    {
      id: 4,
      question: "01. What is a Non-Limited Company (NLC)?",
      answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Voluptatum ex odit in adipisci dolorem atque minus harum minimaalias delectus nobis voluptates cumque similique laboriosam, 
      perspiciatis aliquam deleniti autem corrupti!`,
    },
  ];

  function AccordionItem({ question, answer, isActive, onClick }) {
    return (
      <div className="mb-8 border-b-[0.2px] border-midnight-blue-100">
        <div className="flex justify-between" onClick={onClick}>
          <h1 className="text-sm mb-2">{question}</h1>
          <img src={isActive ? minus : plus} alt="" />
        </div>
        <p
          className={`${
            isActive
              ? "h-auto  animate-flip-down animate-once animate-duration-[1000ms] animate-ease-in-out "
              : "max-h-5"
          } overflow-hidden text-sm mb-2`}
        >
          {answer}
        </p>
      </div>
    );
  }

  function openWindow() {
    window.open("/join-us-form", "popup");
  }

  return (
    <>
      <section
        className="bg-hero-img min-h-[300px] bg-cover bg-center
      lg:min-h-[500px] xl:min-h-[800px]"
      >
        <NavBar />
        <div className="p-6 lg:max-w-3xl lg:mx-auto xl:max-w-5xl xl:mt-24">
          <h1 className="text-midnight-blue-100 text-2xl font-bold mb-5 xl:text-4xl">
            Go global with NLCs: <br />
            Unchain project potential!
          </h1>
          <p className="text-midnight-blue-100 mb-2 text-xs tracking-wider xl:text-base">
            Register your Non-Limited Company (NLC) effortlessly.
          </p>
          <p className="text-midnight-blue-100 mb-5 text-xs tracking-wider xl:text-base">
            A business formation without state fees or bureaucracy.
          </p>
          <div className="flex gap-x-3 mb-5">
            <input
              type="text"
              name="username"
              id="username"
              class="appearance-none w-4/6 border p-2 text-midnight-blue-100 placeholder:text-gray-300 border-gray-200 rounded-md text-sm focus:border-gray-400
              xl:max-w-sm"
              placeholder="Pick your NLC domain name"
            />
            <button
              className="rounded-md bg-crimson p-3 text-xs text-white
            xl:text-base"
            >
              Get Started
            </button>
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <p className="text-first-gray text-sm tracking-wider w-1/3 xl:text-base">
              Our Tech Partners
            </p>
            <div className="w-1/3 md:w-1/6">
              <img src={hat} alt="hat" className="w-1/2 md:w-20" />
            </div>
            <div className="w-1/3 md:w-1/6">
              <img src={secret} alt="secret" className="w-full md:w-24" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-background py-16 px-6">
        <p className="text-sm text-lightseagreen text-center mb-5 xl:text-base">
          Discover the NLC Adventage
        </p>
        <h1 className="mb-3 text-gray-200 font-bold text-center xl:text-lg">
          NLC vs. LLC
        </h1>
        <h2 className="mb-6 text-gray-200 font-bold text-center">
          Choose the Future Business
        </h2>
        <div className="grid grid-cols-3 grid-rows-6 text-center text-lategray-100">
          <div className="p-3 border-b border-gray-300"></div>
          <div className="p-3 border-l border-r border-b border-gray-300 flex items-center justify-center">
            <p className="font-semibold xl:text-lg">NLC</p>
          </div>
          <div className="p-3 border-r border-b border-gray-300  flex items-center justify-center">
            <p className="font-semibold xl:text-lg">LLC</p>
          </div>
          <div className="p-3 border-b border-gray-300  flex items-center justify-center">
            <p className="font-semibold text-sm xl:text-lg">Cost Efficiency</p>
          </div>
          <div className="p-3 border-l border-b border-r border-gray-300  flex items-center justify-center">
            <div
              className="bg-graysmoke-200 rounded-full p-2 flex gap-x-1
              md:items-center md:justify-center"
            >
              <img src={check} alt="check" className="w-1/6" />
              {/*  <p className="text-[8px] text-lategray-300 text-left">
                State registration & annual fees
              </p> */}
            </div>
          </div>
          <div className="p-3 border-b border-r border-gray-300  flex items-center justify-center">
            <div
              className="bg-graysmoke-200 rounded-full p-2 flex gap-x-1
            md:items-center md:justify-center"
            >
              <img src={check2} alt="check" className="w-1/6" />
              <p
                className="text-[8px] text-lategray-300 text-left
              md:text-[10px] xl:text-sm"
              >
                State registration & annual fees
              </p>
            </div>
          </div>
          <div className="p-3 border-b border-gray-300  flex items-center justify-center">
            <p className="font-semibold text-sm xl:text-lg">Geographic Scope</p>
          </div>
          <div className="p-3 border-l border-b border-r border-gray-300  flex items-center justify-center">
            <div
              className="bg-graysmoke-200 rounded-full p-2 flex gap-x-1
            md:items-center md:justify-center "
            >
              <img src={check} alt="check" className="w-1/6" />
              <p
                className="text-[8px] text-lategray-300 text-left
              md:text-[10px] xl:text-sm"
              >
                Global reach without borders
              </p>
            </div>
          </div>
          <div className="p-3 border-b border-r border-gray-300  flex items-center justify-center">
            <div
              className="bg-graysmoke-200 rounded-full p-2 flex gap-x-1
            md:items-center md:justify-center"
            >
              <img src={check2} alt="check" className="w-1/6" />
              <p
                className="text-[8px] text-lategray-300 text-left
              md:text-[10px] xl:text-sm xl:whitespace-nowrap"
              >
                Limited to regional jurisdictions
              </p>
            </div>
          </div>
          <div className="p-3 border-b border-gray-300  flex items-center justify-center">
            <p className="font-semibold text-sm xl:text-lg">Infrastructure</p>
          </div>
          <div className="p-3 border-l border-b border-r border-gray-300  flex items-center justify-center">
            <div
              className="bg-graysmoke-200 rounded-full p-2 flex gap-x-1
            md:items-center md:justify-center"
            >
              <img src={check} alt="check" className="w-1/6" />
              <p
                className="text-[8px] text-lategray-300 text-left
              md:text-[10px] xl:text-sm"
              >
                Web3 & blockchain
              </p>
            </div>
          </div>
          <div className="p-3 border-r border-b border-gray-300  flex items-center justify-center">
            <div
              className="bg-graysmoke-200 rounded-full p-2 flex gap-x-1
            md:items-center md:justify-center"
            >
              <img src={check2} alt="check" className="w-1/6" />
              <p
                className="text-[8px] text-lategray-300 text-left
              md:text-[10px] xl:text-sm"
              >
                Paperwork-heavy processes
              </p>
            </div>
          </div>
          <div className="p-3 border-b border-gray-300  flex items-center justify-center">
            <p className="font-semibold text-sm xl:text-lg">Decision Making</p>
          </div>
          <div className="p-3 border-l border-b border-r border-gray-300  flex items-center justify-center">
            <div
              className="bg-graysmoke-200 rounded-full p-2 flex gap-x-1
            md:items-center md:justify-center"
            >
              <img src={check} alt="check" className="w-1/6" />
              <p
                className="text-[8px] text-lategray-300 text-left
              md:text-[10px] xl:text-sm"
              >
                Merit-based & transparent
              </p>
            </div>
          </div>
          <div className="p-3 border-r border-b border-gray-300  flex items-center justify-center">
            <div
              className="bg-graysmoke-200 rounded-full p-2 flex gap-x-1
            md:items-center md:justify-center"
            >
              <img src={check2} alt="check" className="w-1/6" />
              <p
                className="text-[8px] text-lategray-300 text-left
              md:text-[10px] xl:text-sm"
              >
                Bureaucratic & opaque
              </p>
            </div>
          </div>
          <div className="p-3 border-b border-gray-300  flex items-center justify-center">
            <p className="font-semibold text-sm xl:text-lg">
              Community Engagement
            </p>
          </div>
          <div className="p-3 border-l border-b border-r border-gray-300  flex items-center justify-center">
            <div
              className="bg-graysmoke-200 rounded-full p-2 flex gap-x-1
            md:items-center md:justify-center"
            >
              <img src={check} alt="check" className="w-1/6" />
              <p
                className="text-[8px] text-lategray-300 text-left
              md:text-[10px] xl:text-sm"
              >
                Integrated & empowered
              </p>
            </div>
          </div>
          <div className="p-3 border-r border-b border-gray-300  flex items-center justify-center">
            <div
              className="bg-graysmoke-200 rounded-full p-2 flex gap-x-1
            md:items-center md:justify-center"
            >
              <img src={check2} alt="check" className="w-1/6" />
              <p
                className="text-[8px] text-lategray-300 text-left
              md:text-[10px] xl:text-sm"
              >
                Less community-driven
              </p>
            </div>
          </div>
        </div>
        <p className="text-sm font-bold mt-5 text-center">
          Dive into the decentralized era with PunteroRed's NLCs and embrace a
          new paradigm of business registration.
        </p>
      </section>

      <section className="bg-gray-background py-16 px-6">
        <p className="text-sm text-lightseagreen text-center mb-5 xl:text-base">
          Elevate Your Venture
        </p>
        <h1 className="mb-6 text-gray-200 font-bold text-center xl:text-lg">
          Empowering Business in the Web3 Era
        </h1>
        <div className="space-y-12 xl:flex xl:items-center xl:justify-between xl:space-y-0 xl:mt-12">
          <div className="flex items-center justify-center flex-col space-y-6">
            <h1 className="text-lg font-semibold xl:text-xl">
              Beyond Traditional Boundaries
            </h1>
            <img src={group} alt="" />
            <p className="text-midnight-blue-100 text-center">
              Smart contracts, not state laws, enforce our new-age business
              rule-set.
            </p>
          </div>

          <div className="flex items-center justify-center flex-col space-y-6">
            <h1 className="text-lg font-semibold xl:text-xl">
              The NLC Ecosystem
            </h1>
            <img src={group2} alt="" />
            <p className="text-midnight-blue-100 text-center">
              A curated suite of DApps, tailored exclusively for NLC operations.
            </p>
          </div>

          <div className="flex items-center justify-center flex-col space-y-6">
            <h1 className="text-lg font-semibold xl:text-xl">
              Unstoppable & Adaptive
            </h1>
            <img src={group3} alt="" />
            <p className="text-midnight-blue-100 text-center">
              Experience unmatched flexibility and strength with NLC tools.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-background">
        <p className="text-sm text-lightseagreen text-center mb-5 xl:text-base">
          Empower Your Entrepreneurship
        </p>
        <h1 className="mb-6 text-gray-200 font-bold text-center xl:text-lg">
          Why You Probably Don’t Need an LLC
        </h1>
        <div
          className="bg-midnight-blue-200 px-6 py-6 relative overflow-hidden lg:px-16
        xl:flex xl:space-x-6 xl:py-20 xl:items-center xl:px-20"
        >
          <div>
            <h1 className="text-white/30 mb-3 xl:text-2xl">The Boomer Tip</h1>
            <p className="text-white font-bold mb-5 xl:text-3xl">
              Hear Ron: <br />
              Why NLCs Overpower <br />
              Traditional LLCs
            </p>
            <img src={uxbg} alt="" className="absolute left-40 z-20" />
          </div>

          <div
            className="bg-gray-background pt-1 px-1.5 pb-1.5 rounded-md relative z-30 
          md:max-w-xl md:mx-auto xl:w-full xl:max-w-2xl xl:mx-0"
          >
            <img
              src={sticker}
              alt="sticker"
              className="absolute w-[20%] right-1 -top-8 xl:-top-[55px]"
            />
            <img
              src={youtube}
              alt="youtube"
              className="w-[20%] max-w-[200px]"
            />
            <iframe
              className="w-full md:min-h-[300px]"
              src="https://www.youtube.com/embed/XXYlFuWEuKI?si=ntAt7D53pukY_ryj"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </section>

      <section
        className="py-16 bg-gray-background px-6
      md:px-14 xl:max-w-6xl xl:mx-auto"
      >
        <p className="text-sm text-lightseagreen text-center mb-5">
          Get your question answer
        </p>
        <h1 className="mb-6 text-gray-200 font-bold text-center">
          Frequantly asked question
        </h1>
        <div>
          {faqData.map((faq) => (
            <AccordionItem
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
              isActive={faq.id === activeQuestion}
              onClick={() => toggleAccordion(faq.id)}
            />
          ))}
        </div>
        <div className="flex justify-center">
          <Link onClick={openWindow}>
            <button className="bg-aliceblue-100 text-slate-gray p-3 rounded-md">
              Still Question? Contact us
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
