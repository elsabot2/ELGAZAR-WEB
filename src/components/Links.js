import React from "react";

const Links = () => {
  return (
    <div
      className="
    flex
    flex-col
    items-center
    justify-center
    "
    >
      <div className="
      bg-gradient-to-r
    from-green-400
    to-blue-500
    rounded-full
    p-2
      ">
        <img src="/img/linkedin.png" alt="LinkedIn" className="w-6" />
        <a
          href="https://github.com/ahmadammarm"
          target="blank"
          rel="noopener noreferrer"
        >
          Link to my GitHub
        </a>
      </div>
    </div>
  );
};

export default Links;
