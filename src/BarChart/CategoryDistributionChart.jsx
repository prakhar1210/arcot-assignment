// import React from "react";
// import { Bar } from "react-chartjs-2";

// const CategoryDistributionChart = ({ categoryDistribution }) => {
//     // Extracting category names and query counts
//     const categories = Object.keys(categoryDistribution);
//     const queryCounts = Object.values(categoryDistribution);

//     // Data for the bar chart
//     const data = {
//         labels: categories,
//         datasets: [
//             {
//                 label: "Number of Queries",
//                 data: queryCounts,
//                 backgroundColor: [
//                     "rgba(255, 99, 132, 0.6)",
//                     "rgba(54, 162, 235, 0.6)",
//                     "rgba(255, 206, 86, 0.6)",
//                     "rgba(75, 192, 192, 0.6)",
//                     // Add more colors if needed
//                 ],
//                 borderColor: [
//                     "rgba(255, 99, 132, 1)",
//                     "rgba(54, 162, 235, 1)",
//                     "rgba(255, 206, 86, 1)",
//                     "rgba(75, 192, 192, 1)",
//                     // Add more colors if needed
//                 ],
//                 borderWidth: 1,
//             },
//         ],
//     };

//     // Options for the bar chart (if needed)
//     const options = {
//         maintainAspectRatio: false,
//         responsive: true,
//     };


//     return (
//         <div className="chart-container">

//             <h2 className="chart-title">Category Distribution</h2>
//             <Bar data={data} options={options} />
//         </div>
//     );
// };

// export default CategoryDistributionChart;
import React from "react";
import { Bar } from "react-chartjs-2";
import "./CategoryDistributionChart.css";

const CategoryDistributionChart = ({ categoryDistribution }) => {
    // Extracting category names and query counts
    const categories = Object.keys(categoryDistribution);
    const queryCounts = Object.values(categoryDistribution);

    // Data for the bar chart
    const data = {
        labels: categories,
        datasets: [
            {
                label: "Number of Queries",
                data: queryCounts,
                backgroundColor: [
                    "rgba(255, 99, 132, 0.6)",
                    "rgba(54, 162, 235, 0.6)",
                    "rgba(255, 206, 86, 0.6)",
                    "rgba(75, 192, 192, 0.6)",
                    // Add more colors if needed
                ],
                borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    // Add more colors if needed
                ],
                borderWidth: 1,
            },
        ],
    };

    // Options for the bar chart (if needed)
    const options = {
        maintainAspectRatio: false,
        responsive: true,
    };

    return (
        <div className="chart-container">
            <h2 className="chart-title">Category Distribution</h2>
            <div className="chart">
                <Bar data={data} options={options} />
            </div>
        </div>
    );
};

export default CategoryDistributionChart;
