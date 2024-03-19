import React from "react";
import { Pie } from "react-chartjs-2";
import "../PieChart/PieChart.css";

const PieChart = ({ userSatisfactionData }) => {
    const labels = userSatisfactionData.ratings.map((rating) => rating.rating);
    const counts = userSatisfactionData.ratings.map((rating) => rating.count);

    const data = {
        labels: labels,
        datasets: [
            {
                label: "User Satisfaction",
                data: counts,
                backgroundColor: [
                    "rgba(255, 99, 132, 0.6)",
                    "rgba(54, 162, 235, 0.6)",
                    "rgba(255, 206, 86, 0.6)",
                    "rgba(75, 192, 192, 0.6)",
                    "rgba(153, 102, 255, 0.6)",
                ],
                borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="pie-chart-container">
            <h2 className="pie-chart-container-h2" style={{ width: "100%", height: "5%" }}>User Satisfaction Pie Chart</h2>
            <Pie data={data} style={{ width: "100%", height: "80%" }} />
        </div>
    );
};

export default PieChart;
// userSatisfactionData={userSatisfactionData}