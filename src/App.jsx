import { useState, useEffect } from "react";
import Header from "./components/Header";
import PersonList from "./components/PersonList";
import "./App.css";
import AddForm from "./components/AddForm"; 
import PersonCount from "./components/PersonCount";

function App() {
  const name = "Son";
  const [age, setAge] = useState(23);

  function add() {
    setAge(age + 1);
  }
  function subtract() {
    setAge(age - 1);
  }

  return (
    <>
      <h1>Nice to meet you {name}</h1>
      <h3>Age : {age}</h3>
      <button onClick={add}>Add</button>
      <button onClick={subtract}>Subtract</button>
      <button onClick={() => setAge(23)}>Clear</button>
    </>
  );
}

function App1() {
  const [data, setData] = useState([
    { id: 1, name: "John", gender: "Male" },
    { id: 2, name: "Adam", gender: "Male" },
    { id: 3, name: "Sara", gender: "Female" },
  ]);

  //console.table(data);
  const [show, setShow] = useState(true);

  return (
    <>
      <h1>Population : {data.length} peoples</h1>
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
      <ul>
        {show &&
          data.map((item) => (
            <li key={item.id}>
              <h3>
                {item.id} | {item.name} | {item.gender}
              </h3>
            </li>
          ))}
      </ul>
    </>
  );
}

function App2() {
    const [data, setData] = useState([
    { id: 1, name: "John", gender: "Male" },
    { id: 2, name: "Adam", gender: "Male" },
    { id: 3, name: "Sara", gender: "Female" },
    { id: 4, name: "Laura", gender: "Female" },
  ]);

  //const [theme, setTheme] = useState("light"); // Default theme is light
  const [theme, setTheme] = useState(localStorage.getItem("mode") || "light"); // Load theme from localStorage or default to light

  function deletePerson(id){
    const result = data.filter((user) => user.id !== id);
    // Re-index the IDs to 1, 2, 3, etc.
    const reindexed = result.map((user, index) => ({
      ...user,
      id: index + 1,
    }));
    setData(reindexed);
  }

  useEffect(() => {
    localStorage.setItem("mode", theme);
  },[theme]);

  return (
    <div className={theme}>
    <div className="App">
      <Header title="Population Management Application" theme={theme} setTheme={setTheme}/>
      <main>
        <AddForm data={data} setData={setData}/>
        <PersonList data={data} deletePerson={deletePerson}/>
        <PersonCount count={data.length} data={data}/>
      </main>
    </div>
    </div>
  );
}

function App3() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.slice(1));
      });
  }, []);

  return (
    <div>
      <h1>Products</h1>

      {products.map((item, index) => (
        <div key={index}>
          {item[0]} - {item[1]}
        </div>
      ))}
    </div>
  );
}

export default App2;


// import { useState } from "react";

// const people = [
//   { id: 1, name: "John", gender: "Male" },
//   { id: 2, name: "Adam", gender: "Male" },
//   { id: 3, name: "Sara", gender: "Female" },
//   { id: 4, name: "Laura", gender: "Female" },
//   { id: 5, name: "Mike", gender: "Male" },
// ];

// export default function App() {
//   const [list, setList] = useState(people);
//   const [name, setName] = useState("");
//   const [gender, setGender] = useState("");

//   const males = list.filter(p => p.gender === "Male").length;
//   const females = list.filter(p => p.gender === "Female").length;

//   const handleSave = () => {
//     if (!name || !gender) return;
//     setList([...list, { id: Date.now(), name, gender }]);
//     setName("");
//     setGender("");
//   };

//   const handleDelete = (id) => setList(list.filter(p => p.id !== id));

//   return (
//     <div style={styles.bg}>
//       <div style={styles.orb1} />
//       <div style={styles.orb2} />
//       <div style={styles.orb3} />

//       <h1 style={styles.title}>Population Management Application</h1>

//       {/* Input panel */}
//       <div style={styles.inputPanel}>
//         <span style={styles.label}>Population Name</span>
//         <input
//           style={styles.input}
//           placeholder="Enter name..."
//           value={name}
//           onChange={e => setName(e.target.value)}
//         />
//         <select
//           style={styles.input}
//           value={gender}
//           onChange={e => setGender(e.target.value)}
//         >
//           <option value="">--Select Gender--</option>
//           <option value="Male">Male</option>
//           <option value="Female">Female</option>
//         </select>
//         <button style={styles.saveBtn} onClick={handleSave}>Save</button>
//       </div>

//       {/* Main grid */}
//       <div style={styles.grid}>
//         {/* List panel */}
//         <div style={styles.panel}>
//           <h2 style={styles.listTitle}>Population : {list.length} peoples</h2>
//           <div style={styles.list}>
//             {list.map((p, i) => (
//               <div key={p.id} style={{
//                 ...styles.card,
//                 borderColor: p.gender === "Male"
//                   ? "rgba(100,160,255,0.35)"
//                   : "rgba(255,140,180,0.35)",
//                 background: p.gender === "Male"
//                   ? "rgba(100,160,255,0.10)"
//                   : "rgba(255,140,180,0.10)",
//               }}>
//                 <div style={{
//                   ...styles.avatar,
//                   background: p.gender === "Male"
//                     ? "rgba(100,160,255,0.20)"
//                     : "rgba(255,140,180,0.20)",
//                 }}>
//                   {p.gender === "Male" ? "👦" : "👧"}
//                 </div>
//                 <div style={{ flex: 1 }}>
//                   <div style={styles.num}>No.{i + 1}</div>
//                   <div style={styles.personName}>{p.name}</div>
//                   <div style={styles.personGender}>Gender : {p.gender}</div>
//                 </div>
//                 <button style={styles.deleteBtn} onClick={() => handleDelete(p.id)}>
//                   Delete
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Stats panel */}
//         <div style={styles.statsPanel}>
//           {[
//             { label: "Number of peoples", value: list.length, color: "#fff" },
//             { label: "Male population", value: males, color: "#7eb8ff" },
//             { label: "Female population", value: females, color: "#ffaad0" },
//           ].map(s => (
//             <div key={s.label} style={styles.statCard}>
//               <div style={styles.statLabel}>{s.label}</div>
//               <div style={{ ...styles.statValue, color: s.color }}>{s.value}</div>
//             </div>
//           ))}
//           <div style={styles.statCard}>
//             <div style={styles.statLabel}>Gender ratio</div>
//             <div style={styles.bar}>
//               <div style={{ ...styles.barFill, width: `${(males / list.length) * 100 || 0}%`, background: "#7eb8ff" }} />
//               <div style={{ ...styles.barFill, width: `${(females / list.length) * 100 || 0}%`, background: "#ffaad0" }} />
//             </div>
//             <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6, fontSize: 12 }}>
//               <span style={{ color: "#7eb8ff" }}>Male {Math.round((males / list.length) * 100) || 0}%</span>
//               <span style={{ color: "#ffaad0" }}>Female {Math.round((females / list.length) * 100) || 0}%</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// const glass = {
//   background: "rgba(255,255,255,0.09)",
//   border: "1px solid rgba(255,255,255,0.16)",
//   borderRadius: 16,
//   backdropFilter: "blur(6px)",
// };

// const styles = {
//   bg: {
//     minHeight: "100vh",
//     background: "linear-gradient(135deg, #1a1a4e 0%, #2d2d7a 30%, #1e4d6b 65%, #0f3d5a 100%)",
//     padding: "28px 32px",
//     position: "relative",
//     overflow: "hidden",
//     fontFamily: "sans-serif",
//   },
//   orb1: { position: "absolute", top: -100, right: -100, width: 350, height: 350, borderRadius: "50%", background: "rgba(100,120,255,0.15)", pointerEvents: "none" },
//   orb2: { position: "absolute", bottom: -80, left: -80, width: 300, height: 300, borderRadius: "50%", background: "rgba(30,180,160,0.12)", pointerEvents: "none" },
//   orb3: { position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 400, height: 400, borderRadius: "50%", background: "rgba(80,100,220,0.07)", pointerEvents: "none" },
//   title: { textAlign: "center", fontSize: 24, fontWeight: 500, color: "#fff", marginBottom: 24 },
//   inputPanel: { ...glass, padding: "18px 24px", display: "flex", alignItems: "center", gap: 14, marginBottom: 24 },
//   label: { fontSize: 14, color: "rgba(255,255,255,0.85)", whiteSpace: "nowrap" },
//   input: { background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.22)", borderRadius: 8, color: "#fff", padding: "8px 14px", fontSize: 14, flex: 1 },
//   saveBtn: { background: "rgba(255,255,255,0.18)", border: "1px solid rgba(255,255,255,0.35)", borderRadius: 8, color: "#fff", padding: "8px 22px", fontSize: 14, cursor: "pointer" },
//   grid: { display: "grid", gridTemplateColumns: "1fr 260px", gap: 20, alignItems: "start" },
//   panel: { ...glass, padding: 20 },
//   listTitle: { fontSize: 20, fontWeight: 500, color: "#7eb8ff", marginBottom: 16 },
//   list: { display: "flex", flexDirection: "column", gap: 10, maxHeight: 500, overflowY: "auto" },
//   card: { display: "flex", alignItems: "center", gap: 14, padding: "12px 16px", borderRadius: 10, border: "1.5px solid transparent" },
//   avatar: { width: 40, height: 40, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 },
//   num: { fontSize: 11, color: "rgba(255,255,255,0.5)" },
//   personName: { fontSize: 14, fontWeight: 500, color: "#fff" },
//   personGender: { fontSize: 12, color: "rgba(255,255,255,0.6)" },
//   deleteBtn: { background: "rgba(220,60,60,0.25)", border: "1px solid rgba(220,60,60,0.45)", borderRadius: 8, color: "#ff9090", padding: "5px 13px", fontSize: 12, cursor: "pointer" },
//   statsPanel: { ...glass, padding: 20, display: "flex", flexDirection: "column", gap: 16 },
//   statCard: { background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.13)", borderRadius: 8, padding: "14px 18px" },
//   statLabel: { fontSize: 12, color: "rgba(255,255,255,0.55)", marginBottom: 4 },
//   statValue: { fontSize: 26, fontWeight: 500 },
//   bar: { height: 6, borderRadius: 3, background: "rgba(255,255,255,0.12)", overflow: "hidden", display: "flex", marginTop: 12 },
//   barFill: { height: "100%" },
// };