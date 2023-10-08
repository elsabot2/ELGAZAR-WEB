import React from "react";

const Loader = () => {
  return (
    <div>
      <div
        className="
        flex
        flex-col
        items-center
        justify-center
        "
      >
        <svg
          className="animate-spin h-16 w-16 text-teal-500 mx-auto"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2.645-2.645a9.963 9.963 0 012.37-2.37M17.355 2.645a9.963 9.963 0 012.37 2.37"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Loader;
