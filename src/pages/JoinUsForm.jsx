import React from "react";

export default function JoinUsForm() {
  return (
    <body className="flex items-center justify-center flex-col h-screen overflow-hidden">
      <div className="max-w-md max-h-[570px] bg-[#d8dbea] rounded-md">
        <div className="bg-white p-5 text-center m-[1.5px] rounded-md">
          <h1>Join the NLC Revolution! 🚀</h1>
        </div>
        <div className="py-8 px-8 space-y-8">
          <input
            type="text"
            name="domain"
            id="domain"
            placeholder="Choose your NLC domain name"
            className="py-4 w-full pl-4 mr-28 text-sm rounded-lg tracking-wider"
          />
          <div className="flex">
            <input
              type="text"
              name="wallet"
              id="wallet"
              placeholder="Connect Your Wallet"
              className="py-4 w-full pl-4 rounded-lg text-sm rounded-tr-none rounded-br-none tracking-wider"
            />
            <button className="p-2 w-2/5 text-white text-sm tracking-wider cursor-pointer bg-[#56bbd0] rounded-lg rounded-bl-none rounded-tl-none">
              Connect
            </button>
          </div>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your Email"
            className="py-4 w-full pl-4 mr-20 text-sm rounded-lg tracking-wider"
          />
        </div>
        <div className="px-8 w-full flex items-center justify-center mt-12 mb-10">
          <button className="p-4 w-full text-white text-lg tracking-wider cursor-pointer bg-[#56bbd0] rounded-lg">
            Send
          </button>
        </div>
      </div>
    </body>
  );
}
