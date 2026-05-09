import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
function App() {
  const [temp, setTemp] = useState(10);

  const increaseTemp = () => {
    setTemp(temp + 1);
  };
  const decreaseTemp = () => {
    setTemp(temp - 1);
  };

  return (
    <>
      <section id="wrapper" className={temp > 15 ? "too-warm" : "too-cold"}>
        <header></header>
        <main id="main">
          <p id="temp">{temp}C</p>
          <div id="buttons">
            <Button
              id="decrease"
              btnHandler={decreaseTemp}
              inputName="Decrease"
            />
            <Button
              id="increase"
              btnHandler={increaseTemp}
              inputName="Increase"
            />
          </div>
        </main>
        <footer></footer>
        <div id="bg-blur"></div>
      </section>
    </>
  );
}

export default App;
