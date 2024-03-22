import { useState } from "react";
import "./App.css";

const ColorSelect = () => {
  const [color, setColor] = useState("");
  const onChangeHandler = (event) => {
    setColor(event.target.value);
  };

  return (
    <div>
      <label>Select a Color: </label>
      <br />
      <select onChange={onChangeHandler}>
        <option value="Red">Red</option>
        <option value="Yellow">Yellow</option>
        <option value="Green">Green</option>
      </select>

      <p>{color && `Selected Color: ${color}`}</p>
    </div>
  );
};

const SelectDay = () =>  {
  const [day, setDay] = useState('')

  const onChangeHandler = (event) => {
    setDay(event.target.value)
  }
  
  return (
    <div>
      <label>Select a Color: </label>
      <br />
      <select onChange={onChangeHandler}>
        <option value="Sunday">Sunday</option>
        <option value="Monday">Monday</option>
        <option value="Tuesday">Tuesday</option>
        <option value="Thursday">Thursday</option>
        <option value="Friday">Friday</option>
        <option value="Saturday">Saturday</option>
      </select>

      <p>{day && ((day === "Sunday" || day === "Saturday") ? `${day} is a weekend` : `${day} is a weekday`)}</p>
    </div>
  )
}

export default function App() {
  return (
    <main>
      <ColorSelect />
      <br/>
      <SelectDay/>
    </main>
  );
}
