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

    let litres = bottles * 0.33
    let grams = litres * 8 * 4.5
    let burned = weight / 10
    let result = grams - (burned * time)

    if (gender === 'male') {
      burned = grams / (weight * 0.7);
    } else {
      burned = grams / (weight * 0.6);
    }
    setResult(result);
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
      </button><br></br>
      <h3>Blood level:</h3>
      <output>{result.toFixed(0)}</output>
    </form>
  );
}
export default App;




/* function App() {
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [litres, setLitres] = useState(0);
  const [grams, setGrams] = useState(0);
  const [burning, setBurning] = useState(0);
  const [time, setTime] = useState(0);
  const [gender, setGender] = useState("male");
  const [result, setResult] = useState(0);

  const calculate = () => {
    let bloodLevel = 0;
    if (gender === "male") {
      bloodLevel = grams / (weight * 0.7);
    } else {
      bloodLevel = grams / (weight * 0.6);
    }
    setResult(bloodLevel);
  };
} */