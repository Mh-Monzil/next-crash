'use client'
import React from "react";

const Button = () => {
  return (
    <div className="mt-5">
      <button
        onClick={() => console.log("clicked")}
        className="bg-green-500 rounded-lg text-black text-lg font-semibold px-6 py-3"
      >
        Click Here
      </button>
    </div>
  );
};

export default Button;
