"use client";

import React, { useState } from "react";

const Clicker = () => {
  const [counter, setcounter] = useState(0);

  const handleclick = () => {
    setcounter(counter + 1);
  };

  const handleclick2 = () => {
    if (counter > 0) {
      setcounter(counter - 1);
    }
  };

  const handleclick3 = () => {
    setcounter(counter + 2);
  };

  const handleclick4 = () => {
    if (counter > 1) {
      setcounter(counter - 2);
    }
  };
  const handlereset = () => {
    setcounter(0);
  };

  const handleinterval = () => {
    const interval = setInterval(() => {
      setcounter((prevCounter: number) => {
        if (prevCounter < 100) {
          return prevCounter + 1;
        } else {
          clearInterval(interval); // Clear interval when counter reaches 100
          return prevCounter;
        }
      });
    }, 100);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-6xl font-bold p-6">APPLE COUNTER</p>
      <div className="flex gap-2 text-white">
        <button
          className="bg-blue-500 p-3 border-2 border-black rounded-3xl"
          onClick={handleclick}
        >
          COUNTER PLUS
        </button>
        <button
          className="bg-blue-500 p-3 border-2 border-black rounded-3xl"
          onClick={handleclick2}
        >
          COUNTER MINUS
        </button>
        <button
          className="bg-blue-500 p-3 border-2 border-black rounded-3xl"
          onClick={handleclick3}
        >
          COUNTER +2
        </button>
        <button
          className="bg-blue-500 p-3 border-2 border-black rounded-3xl"
          onClick={handleclick4}
        >
          COUNTER -2
        </button>
        <button
          className="bg-blue-500 p-3 border-2 border-black rounded-3xl"
          onClick={handleinterval}
        >
          100 INTERVAL
        </button>
        <button
          className="bg-red-500 p-3 border-2 border-black rounded-3xl"
          onClick={handlereset}
        >
          RESET{" "}
        </button>
      </div>
      <p className="font-bold p-6 text-2xl">COUNT IS: {counter}</p>
    </div>
  );
};

export default Clicker;
