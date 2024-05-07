import "./App.css";
import img1 from "./assets/bg2.jpg";
import img2 from "./assets/lake.jpg";
import img3 from "./assets/sunset.jpg";
import { useState } from "react";

function App() {
  const [images, setImages] = useState([img1, img2, img3]);
  const [index, setIndex] = useState(0);

  const nextImage = () => {
    setIndex((prevState) =>
      prevState === images.length - 1 ? 0 : prevState + 1
    );
  };

  const prevImage = () => {
    setIndex((prevState) =>
      prevState === 0 ? images.length - 1 : prevState - 1
    );
  };

  return (
    <>
      <div>
        <h1>React Caraosel!</h1>
      </div>
      <div className="transition">
        <img src={images[index]} alt="img1" /> <br />
        <button onClick={prevImage}>{`<`}</button>
        <button onClick={nextImage}>{`>`}</button>
      </div>
    </>
  );
}

export default App;
