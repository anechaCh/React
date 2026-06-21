import { useState } from "react";
import "./PersonList.css";
import User from "./User";
import { BiHide } from "react-icons/bi";
import { BiShow } from "react-icons/bi";

function PersonList({data, deletePerson}) {
  const [show, setShow] = useState(true);
  
  return (
    <div className="container">
      <div className="header">
        <h1 style={{color:"blue", fontSize:"40px"}}>Population : <br/>{data.length} peoples</h1>
        <span onClick={() => setShow(!show)}>
          {show ? <BiHide size={30}/> : <BiShow size={30} />}
        </span>
      </div>
      <ul>
        {show &&
          data.map((item) => (
            <User key={item.id} item={item} deletePerson={deletePerson}/>
          ))}
      </ul>
    </div>
  );
}

export default PersonList;
