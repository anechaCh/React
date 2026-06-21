import "./AddForm.css";
import { useState } from "react";

export default function AddForm(props) {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");

  const { data, setData } = props;

  function saveData(e) {
    e.preventDefault();
    const person = {
      id: data.length + 1,
      name: name,
      gender: gender,
    };
    console.log(person);
    setData([...data, person]); // Add new person to the data array
    setName("");
    setGender("");
  }
  return (
    <section className="containerform">
      <form onSubmit={saveData}>
        <label>Population Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option className="placeholder">--Select Gender--</option>
          <option>Male</option>
          <option>Female</option>
        </select>
        <button
          type="submit"
          className="btn-save"
          disabled={name.trim() === "" || gender.trim() === "--Select Gender--" || gender.trim() === ""}
        >
          Save
        </button>
      </form>
    </section>
  );
}
