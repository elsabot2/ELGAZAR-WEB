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
      <PhotoProfile/>
      <div>
        <h1 className="
        text-3xl
        font-bold
        text-center
        text-gray-300
        pt-6
        ">Ahmad Ammar Musyaffa</h1>
        <p className="
        text-gray-500
        text-center
        ">Web Developer</p>
      </div>
    </div>
  );
}

export default App;
