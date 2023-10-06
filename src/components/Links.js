/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

const Links = () => {
  const links = [
    {
      img: "/img/a.png",
      link: "https://ahmadammarm.github.io/ammar",
      title: "My Website",
    },
    {
      img: "/img/174857.png",
      link: "https://www.linkedin.com/in/ahmadammarmusyaffa/",
      title: "My LinkedIn",
    },
    {
      img: "/img/25231.png",
      link: "https://github.com/ahmadammarm",
      title: "My Github",
    },
  ]
  return (
    <div
      className="
        flex
        flex-col
        items-center
        justify-center
      "
    >
      {links.map((link, index) => (
        <a
          href={link.link}
          target="_blank"
          rel="noopener noreferrer"
          className="
            text-gray-300
            flex
            items-center
            justify-center
            bg-gradient-to-r
            from-gray-800
            to-gray-900
            border-2
            p-2
            w-80
            mb-4
            hover:scale-105
            transition
            left-0
          "
        >
          <img src={link.img} alt="Link Image" className="w-6 mr-5 inline-block" /> {/* Ubah margin di sini */}
          {link.title}
        </a>
      ))}
    </div>
  );
};

export default Links;
