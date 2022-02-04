import { useState } from "react";
import "./App.css";

function App() {
  let [weight, setWeight] = useState(0);
  let [bottles, setBottles] = useState(0);
  let [time, setTime] = useState(0);
  let [gender, setGender] = useState("male");
  let [result, setResult] = useState(0);

  function alcometer(e) {
    e.preventDefault();

    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let burned = weight / 10;
    let result1 = grams - burned * time;
    let alcoholLevel = 0;

    if (gender === "male") {
      alcoholLevel = result1 / (weight * 0.7);
    } else {
      alcoholLevel = result1 / (weight * 0.6);
    }
    if(alcoholLevel < 0){
      result = 0;
    }
    setResult(alcoholLevel);
  }

  return (
    <form onSubmit={alcometer}>
      <h3>Alcometer</h3>
      <div>
        <label>Weight (kg) </label>
        <input
          id="weight"
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div>
        <label>Bottles of beer (0,33 l) </label>
        <input
          id="bottles"
          type="number"
          value={bottles}
          onChange={(e) => setBottles(e.target.value)}
        />
      </div>
      <div>
        <label>Time (hours) </label>
        <input
          id="time"
          type="number"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <div>
        <label>Gender</label>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            defaultChecked
            onChange={(e) => setGender(e.target.value)}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={(e) => setGender(e.target.value)}
          />
          Female
        </label>
      </div>
      <button type="button" onClick={alcometer}>
        Calculate
      </button>
      <br></br>
      <h3>Blood level:</h3>
      <output>{result.toFixed(2)}</output>
    </form>
  );
}
export default App;