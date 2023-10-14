import React, { useState } from "react";
import "./App.css";

function calculateAge(birthDate) {
  const currentDate = new Date();
  const birthYear = birthDate.getFullYear();
  const birthMonth = birthDate.getMonth();
  const birthDay = birthDate.getDate();

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();

  let age = currentYear - birthYear;

  if (
    currentMonth < birthMonth ||
    (currentMonth === birthMonth && currentDay < birthDay)
  ) {
    age--;
  }

  return age;
}

function App() {
  const [birthDate, setBirthDate] = useState(new Date());
  const [age, setAge] = useState("");

  const handleDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    setBirthDate(selectedDate);
    const personAge = calculateAge(selectedDate);
    setAge(personAge);
  };

  return (
    <div className="App">
      <h1>Age Calculator</h1>
      <input type="date" onChange={handleDateChange} />
      {age !== "" && <p className="result">Age: {age}</p>}
    </div>
  );
}

export default App;
