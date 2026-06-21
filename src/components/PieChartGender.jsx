import { Pie } from "react-chartjs-2";

function PieChartGender({ data }) {
  const chartData = {
    labels: ["Male", "Female"],
    datasets: [
      {
        data: [data.filter((person) => person.gender === "Male").length, data.filter((person) => person.gender === "Female").length],
        backgroundColor: ["#0088FE", "#be00c4"],
      }
    ]
  };

  return <Pie data={chartData} />;
}

export default PieChartGender;
