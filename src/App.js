import Animation from "./components/Animation/Animation";
import Footer from "./components/Footer";
import Links from "./components/Links";
import PhotoProfile from "./components/PhotoProfile";

const App = () => {
  return (
    <div className="
    flex
    flex-col
    items-center
    justify-center
    min-h-screen
    ">
      <Animation/>
      <PhotoProfile/>
      <div>
        <h1 className="
        sm:text-3xl 
        md:text-4xl
        text-3xl
        font-bold
        text-center
        text-gray-300
        pt-6 
        sm:pt-6
        ">Ahmad Ammar Musyaffa</h1>
        <p className="
        text-gray-500
        text-center
        pb-10
        ">Junior Web Developer</p>
      </div>
      <Links />
      <Footer />
    </div>
  );
}

export default App;
