import { useEffect, useState } from "react";
import React from "react";
import { Grid } from "@mui/material";
import "./App.css";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Pie, Line } from "react-chartjs-2";
// import Data from "../src/data/data.json";
// import CategoryDistributionChart from "../src/BarChart/CategoryDistributionChart";
// import ResponseTimesChart from "./ResponseTimesChart";
// import UserSatisfactionChart from "./UserSatisfactionChart";
// import UsageStatisticsChart from "./UsageStatisticsChart";

import axios from "axios";
import LineChart from "./LineChart/LineChart.jsx";
import PieChart from "./PieChart/PieChart";
import FinalBar from "./FinalCharts/FinalBar.jsx";
import FinalPie from "./FinalCharts/FinalPie.jsx";
import CategoryDistributionChart from "./BarChart/CategoryDistributionChart.jsx";

function App() {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("/data.json");
      setJsonData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  if (!jsonData) {
    return <div>Loading...</div>;
  }

  console.log(jsonData);

  return (
    <div className="App">
      <div className="charts-below">
        <CategoryDistributionChart
          categoryDistribution={jsonData.category_distribution}
        />
        <LineChart responseTimes={jsonData.response_times} />
      </div>

      <div className="chart1">
        <PieChart userSatisfactionData={jsonData.user_satisfaction} />
        <FinalBar usageData={jsonData.usage_statistics} />
      </div>

      <div className="chart4">
        <FinalPie usageData={jsonData.usage_statistics} />
      </div>
    </div>
  );
}

export default App;

// import React, { useEffect, useState } from "react";
// import "./App.css";
// import axios from "axios";
// import LineChart from "./LineChart/LineChart.jsx";
// import PieChart from "./PieChart/PieChart";
// import FinalBar from "./FinalCharts/FinalBar.jsx";
// import FinalPie from "./FinalCharts/FinalPie.jsx";
// import CategoryDistributionChart from "./BarChart/CategoryDistributionChart.jsx";

// function App() {
//   const [jsonData, setJsonData] = useState(null);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get("/data.json");
//       setJsonData(response.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   if (!jsonData) {
//     return <div>Loading...</div>;
//   }

//   console.log(jsonData);

//   return (
//     <div className="App">
//       <div className="chart-container">
//         <CategoryDistributionChart
//           categoryDistribution={jsonData.category_distribution}
//         />
//       </div>
//       <div className="chart-container">
//         <LineChart responseTimes={jsonData.response_times} />
//       </div>
//       <div className="chart-container">
//         <PieChart userSatisfactionData={jsonData.user_satisfaction} />
//       </div>
//       <div className="chart-container">
//         <div className="chart-half">
//           <FinalBar usageData={jsonData.usage_statistics} />
//         </div>
//         <div className="chart-half">
//           <FinalPie usageData={jsonData.usage_statistics} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
