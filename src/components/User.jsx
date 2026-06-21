import boy from "../assets/boy.svg";
import girl from "../assets/girl.svg";

export default function User({item, deletePerson}) {
  return (
    <>
      <li
        style={{
          borderStyle: "solid",
          borderColor: item.gender == "Male" ? "green" : "pink",
          width: "400px",
        }}
      >
        <img src={item.gender == "Male" ? boy : girl} width={50} height={50} />
        <p style={{ textAlign: 'left' }}>
          No.{item.id}<br /> Name : {item.name}<br /> Gender : {item.gender}
        </p>
        <div className="control">
          <button onClick={()=>deletePerson(item.id)}>Delete</button>
        </div>
      </li>
    </>
  );
}
