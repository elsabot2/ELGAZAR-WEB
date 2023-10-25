import React, { useEffect, useState } from "react";
import Animation from "./components/Animation/Animation";
import Footer from "./components/Footer";
import Links from "./components/Links";
import PhotoProfile from "./components/PhotoProfile";
import Loader from "./components/Loader";

const App = () => {

  const [loading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);



  const photoProfile = [
    {
      name: "Ahmad Ammar Musyaffa",
      imageUrl: "/img/ammar.jpeg",
      alt: "Ahmad Ammar Musyaffa",
      role: "Junior Web Developer",
    }
  ]

  return (
    <div
      className="
      flex
      flex-col
      items-center
      justify-center
      min-h-screen
      "
    >
      {loading ? (
        <Loader />
      ) : (
        <>
          <Animation />
          <PhotoProfile
            name={photoProfile[0].name}
            imageUrl={photoProfile[0].imageUrl}
            alt={photoProfile[0].alt}
          />
          <div>
            <h1
              className="
          sm:text-3xl 
          md:text-4xl
          text-3xl
          font-bold
          text-center
          text-gray-300
          pt-6 
          sm:pt-6
          cursor-default
          "
            >
              {photoProfile[0].name}
            </h1>
            <p
              className="
          text-gray-500
          text-center
          pb-10
          cursor-default
          "
            >
              {photoProfile[0].role}
            </p>
          </div>
          <Links />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
