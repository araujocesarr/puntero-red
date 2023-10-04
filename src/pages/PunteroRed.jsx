import React from "react";
import NavBar from "../components/Navbar";
import hat from "../images/hats-protocol@2x.png";
import secret from "../images/secret-network@2x.png";
import check from "../images/check1.svg";
import check2 from "../images/check3.svg";
import group from "../images/group-1000004148.svg";
import group2 from "../images/group-1000004147.svg";
import group3 from "../images/group-1000004146.svg";

export default function PunteroRed() {
  return (
    <>
      <section className="bg-hero-img min-h-[300px] bg-cover bg-center">
        <NavBar />
        <div className="p-6">
          <h1 className="text-midnight-blue-100 text-2xl font-bold mb-5">
            Go global with NLCs: <br />
            Unchain project potential!
          </h1>
          <p className="text-midnight-blue-100 mb-2 text-xs tracking-wider">
            Register your Non-Limited Company (NLC) effortlessly.
          </p>
          <p className="text-midnight-blue-100 mb-5 text-xs tracking-wider">
            A business formation without state fees or bureaucracy.
          </p>
          <div className="flex gap-x-3 mb-5">
            <input
              type="text"
              name="username"
              id="username"
              class="appearance-none w-4/6 border p-2 text-midnight-blue-100 placeholder:text-gray-300 border-gray-200 rounded-md text-sm focus:border-gray-400"
              placeholder="Pick your NLC domain name"
            />
            <button className="rounded-md bg-crimson p-3 text-xs text-white">
              Get Started
            </button>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-first-gray text-sm tracking-wider w-1/3">
              Our Tech Partners
            </p>
            <div className="w-1/3">
              <img src={hat} alt="hat" className="w-1/2" />
            </div>
            <div className="w-1/3">
              <img src={secret} alt="secret" className="w-full" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-background py-16 px-6">
        <p className="text-sm text-lightseagreen text-center mb-5">
          Discover the NLC Adventage
        </p>
        <h1 className="mb-3 text-gray-200 font-bold text-center">
          NLC vs. LLC
        </h1>
        <h2 className="mb-6 text-gray-200 font-bold text-center">
          Choose the Future Business
        </h2>
        <div className="grid grid-cols-3 grid-rows-6 text-center text-lategray-100">
          <div className="p-3 border-b border-gray-300"></div>
          <div className="p-3 border-l border-r border-b border-gray-300 flex items-center justify-center">
            <p className="font-semibold">NLC</p>
          </div>
          <div className="p-3 border-r border-b border-gray-300  flex items-center justify-center">
            <p className="font-semibold">LLC</p>
          </div>
          <div className="p-3 border-b border-gray-300  flex items-center justify-center">
            <p className="font-semibold">Cost Efficiency</p>
          </div>
          <div className="p-3 border-l border-b border-r border-gray-300  flex items-center justify-center">
            <div className="bg-graysmoke-200 rounded-full p-2 flex gap-x-1">
              <img src={check} alt="check" className="w-1/6" />
              {/*  <p className="text-[8px] text-lategray-300 text-left">
                State registration & annual fees
              </p> */}
            </div>
          </div>
          <div className="p-3 border-b border-r border-gray-300  flex items-center justify-center">
            <div className="bg-graysmoke-200 rounded-full p-2 flex gap-x-1">
              <img src={check2} alt="check" className="w-1/6" />
              <p className="text-[8px] text-lategray-300 text-left">
                State registration & annual fees
              </p>
            </div>
          </div>
          <div className="p-3 border-b border-gray-300  flex items-center justify-center">
            <p className="font-semibold">Geographic Scope</p>
          </div>
          <div className="p-3 border-l border-b border-r border-gray-300  flex items-center justify-center">
            <div className="bg-graysmoke-200 rounded-full p-2 flex gap-x-1">
              <img src={check} alt="check" className="w-1/6" />
              <p className="text-[8px] text-lategray-300 text-left">
                Global reach without borders
              </p>
            </div>
          </div>
          <div className="p-3 border-b border-r border-gray-300  flex items-center justify-center">
            <div className="bg-graysmoke-200 rounded-full p-2 flex gap-x-1">
              <img src={check2} alt="check" className="w-1/6" />
              <p className="text-[8px] text-lategray-300 text-left">
                Limited to regional jurisdictions
              </p>
            </div>
          </div>
          <div className="p-3 border-b border-gray-300  flex items-center justify-center">
            <p className="font-semibold">Infrastructure</p>
          </div>
          <div className="p-3 border-l border-b border-r border-gray-300  flex items-center justify-center">
            <div className="bg-graysmoke-200 rounded-full p-2 flex gap-x-1">
              <img src={check} alt="check" className="w-1/6" />
              <p className="text-[8px] text-lategray-300 text-left">
                Web3 & blockchain
              </p>
            </div>
          </div>
          <div className="p-3 border-r border-b border-gray-300  flex items-center justify-center">
            <div className="bg-graysmoke-200 rounded-full p-2 flex gap-x-1">
              <img src={check2} alt="check" className="w-1/6" />
              <p className="text-[8px] text-lategray-300 text-left">
                Paperwork-heavy processes
              </p>
            </div>
          </div>
          <div className="p-3 border-b border-gray-300  flex items-center justify-center">
            <p className="font-semibold">Decision Making</p>
          </div>
          <div className="p-3 border-l border-b border-r border-gray-300  flex items-center justify-center">
            <div className="bg-graysmoke-200 rounded-full p-2 flex gap-x-1">
              <img src={check} alt="check" className="w-1/6" />
              <p className="text-[8px] text-lategray-300 text-left">
                Merit-based & transparent
              </p>
            </div>
          </div>
          <div className="p-3 border-r border-b border-gray-300  flex items-center justify-center">
            <div className="bg-graysmoke-200 rounded-full p-2 flex gap-x-1">
              <img src={check2} alt="check" className="w-1/6" />
              <p className="text-[8px] text-lategray-300 text-left">
                Bureaucratic & opaque
              </p>
            </div>
          </div>
          <div className="p-3 border-b border-gray-300  flex items-center justify-center">
            <p className="font-semibold">Community Engagement</p>
          </div>
          <div className="p-3 border-l border-b border-r border-gray-300  flex items-center justify-center">
            <div className="bg-graysmoke-200 rounded-full p-2 flex gap-x-1">
              <img src={check} alt="check" className="w-1/6" />
              <p className="text-[8px] text-lategray-300 text-left">
                Integrated & empowered
              </p>
            </div>
          </div>
          <div className="p-3 border-r border-b border-gray-300  flex items-center justify-center">
            <div className="bg-graysmoke-200 rounded-full p-2 flex gap-x-1">
              <img src={check2} alt="check" className="w-1/6" />
              <p className="text-[8px] text-lategray-300 text-left">
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
        <p className="text-sm text-lightseagreen text-center mb-5">
          Elevate Your Venture
        </p>
        <h1 className="mb-6 text-gray-200 font-bold text-center">
          Empowering Business in the Web3 Era
        </h1>
        <div className="space-y-12">
          <div className="flex items-center justify-center flex-col space-y-4">
            <h1 className="text-lg font-semibold">
              Beyond Traditional Boundaries
            </h1>
            <img src={group} alt="" />
            <p className="text-midnight-blue-100 text-center">
              Smart contracts, not state laws, enforce our new-age business
              rule-set.
            </p>
          </div>

          <div className="flex items-center justify-center flex-col space-y-4">
            <h1 className="text-lg font-semibold">The NLC Ecosystem </h1>
            <img src={group2} alt="" />
            <p className="text-midnight-blue-100 text-center">
              A curated suite of DApps, tailored exclusively for NLC operations.
            </p>
          </div>

          <div className="flex items-center justify-center flex-col space-y-4">
            <h1 className="text-lg font-semibold">Unstoppable & Adaptive</h1>
            <img src={group2} alt="" />
            <p className="text-midnight-blue-100 text-center">
              Experience unmatched flexibility and strength with NLC tools.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
