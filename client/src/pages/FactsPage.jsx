import React, { useState } from "react";
import { facts } from "../data/facts";

import components from "../data/components"; // <-- YOU WILL CREATE THIS FILE

const FactsPage = () => {
  const [view, setView] = useState("facts"); // "facts" or "components"

  return (
    <div className="min-h-screen text-white px-10 pt-28 pb-10">
      {/* HEADER WITH TOGGLE */}
      <div className="flex items-center justify-between mb-10">
        {/* Facts Tab */}
        <h1
<<<<<<< HEAD
          className={`text-3xl font-bold cursor-pointer transition ${
=======
          className={`pl-4 text-3xl font-bold cursor-pointer transition ${
>>>>>>> 1f207d1b6dcee03e6384cbf6e487abc92249d6ec
            view === "facts"
              ? "underline underline-offset-8"
              : "opacity-60 hover:opacity-100"
          }`}
          onClick={() => setView("facts")}
        >
          Fascinating Space Facts
        </h1>

        {/* Space Components Tab */}
        <h1
<<<<<<< HEAD
          className={`text-3xl font-bold cursor-pointer transition ${
=======
          className={`pr-4 text-3xl font-bold cursor-pointer transition ${
>>>>>>> 1f207d1b6dcee03e6384cbf6e487abc92249d6ec
            view === "components"
              ? "underline underline-offset-8"
              : "opacity-60 hover:opacity-100"
          }`}
          onClick={() => setView("components")}
        >
          Space Explorers
        </h1>
      </div>

      {/* ============================
              FACTS VIEW
         ============================ */}
      {view === "facts" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {facts.map((fact, index) => (
            <div
              key={index}
              className="bg-gray-600/40 shadow-xl p-6 rounded-xl border border-gray-500 backdrop-blur-md"
            >
              <h2 className="text-xl font-bold mb-3">{fact.title}</h2>
              <p className="text-gray-200">{fact.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* ============================
           SPACE COMPONENTS VIEW
         ============================ */}
      {view === "components" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {components.map((item, index) => (
            <div
              key={index}
              className="bg-gray-600/40 shadow-xl rounded-xl border border-gray-500 backdrop-blur-md overflow-hidden"
            >
              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.name}
                className="h-40 w-full object-cover"
              />

              {/* TEXT */}
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{item.name}</h2>
                <p className="text-gray-200">{item.info}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FactsPage;
