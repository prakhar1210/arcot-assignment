import React from "react";
import { Bar } from "react-chartjs-2";
import "./FinalBar.css";

const FinalBar = ({ usageData }) => {
    const countries = Object.keys(usageData.by_country);
    const usageCounts = Object.values(usageData.by_country);

    const data = {
        labels: countries,
        datasets: [{
            label: "Usage Count",
            data: usageCounts,
            backgroundColor: "rgba(75, 192, 192, 0.6)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1
        }]
    };

    // const options = {
    //     scales: {
    //         y: {
    //             beginAtZero: true
    //         }
    //     }
    // };
    const options = {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            tooltip: {
                enabled: true,
                mode: 'index',
                intersect: false,
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                bodyFont: {
                    family: "'Arial', sans-serif",
                    size: 14,
                },
                bodySpacing: 5,
                displayColors: false,
                callbacks: {
                    label: function (context) {
                        return `Usage: ${context.parsed.y}`;
                    }
                }
            }
        }
    };

    return (
        // <div>
        //     <h2>Usage by Country</h2>
        //     <Bar data={data} options={options} />
        // </div>
        <div className="graph-container">
            <h2 style={{ width: "100%", height: "5%" }}>Usage by Country</h2>

            <Bar data={data} options={options} style={{ width: "100%", height: "95%" }} />
        </div>

    );
};

export default FinalBar;
