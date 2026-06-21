import "./PersonCount.css"
import PieChartGender from "./PieChartGender";

function PersonCount({ count, data }) {
  return (
    <div className="containercount">
      <h1>Number of Peoples : {count}</h1>
      <h2 style={{color:"green", fontSize:"24px"}}>Male population : {data.filter((person) => person.gender === "Male").length}</h2>
      <h2 style={{color:"purple", fontSize:"24px"}}>Female population : {data.filter((person) => person.gender  === "Female").length}</h2>
      {/* <PieChartGender data={data} /> */}
    </div>
  );
}

export default PersonCount;