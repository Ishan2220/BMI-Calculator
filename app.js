import React, { useState } from 'react';
import "C:\\Users\\Ishan\\bmi-checker\\src\\bmi checker\\app.css";

function App() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [gender, setGender] = useState('male'); // Default gender is male
  const [bmi, setBmi] = useState(null);
  const [idealWeightRange, setIdealWeightRange] = useState('');

  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = height / 100;
      const calculatedBmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(calculatedBmi);
      
      // Calculate ideal weight range based on gender
      let minWeight, maxWeight;
      if (gender === 'male') {
        minWeight = (20.0 * (heightInMeters * heightInMeters)).toFixed(1);
        maxWeight = (25.0 * (heightInMeters * heightInMeters)).toFixed(1);
      } else {
        minWeight = (19.0 * (heightInMeters * heightInMeters)).toFixed(1);
        maxWeight = (24.0 * (heightInMeters * heightInMeters)).toFixed(1);
      }
      setIdealWeightRange(`${minWeight}kg - ${maxWeight}kg`);
    }
  };

  return (
    <div className="App">
      <h1 className="title">BMI Calculator</h1>
      
      <div className="input-container">
        <label>Height (cm):</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Enter your height in cm"
        />

        <label>Weight (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Enter your weight in kg"
        />

        <label>Gender:</label>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <button className="calculate-button" onClick={calculateBMI}>
          Calculate BMI
        </button>
      </div>

      {bmi && (
        <div className="result">
          <p className="bmi-value">Your BMI: <strong>{bmi}</strong></p>
          <p className="ideal-weight">Ideal Weight Range: <strong>{idealWeightRange}</strong></p>
        </div>
      )}

      {/* BMI Categories Table */}
      <div className="bmi-table-container">
        <h2 className="table-title">BMI Categories</h2>
        <table className="bmi-table">
          <thead>
            <tr>
              <th>BMI Range</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Below 18.5</td>
              <td>Underweight</td>
            </tr>
            <tr>
              <td>18.5 - 24.9</td>
              <td>Normal weight</td>
            </tr>
            <tr>
              <td>25.0 - 29.9</td>
              <td>Overweight</td>
            </tr>
            <tr>
              <td>30.0 and above</td>
              <td>Obesity</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
