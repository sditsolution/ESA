import React, { useState } from "react";
import styles from "../../styles/beACoach/incomeChart.module.css";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

const generateRandomData = () => {
  return Array.from({ length: 31 }, () => Math.floor(Math.random() * 1000));
};
function generateDaysArray(month) {
  const daysInMonth = new Date(new Date().getFullYear(), month, 0).getDate();
  return Array.from({ length: daysInMonth }, (_, index) =>
    (index + 1).toString()
  );
}

const IncomeChart = () => {
  const [selectedMonth, setSelectedMonth] = useState(months[0].value);
  const daysArray = generateDaysArray(selectedMonth);
  const [activeChart, setActiveChart] = useState(false);
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: false,
        text: "Monat",
      },
    },
  };
  const label = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "Dezember",
  ];
  const labels = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
  ];
  const data = {
    labels: daysArray,
    datasets: [
      {
        label: "Monat",
        data: generateRandomData(),
        backgroundColor: "rgba(25, 25, 209)",
      },
    ],
  };

  const months = [
    { name: "January", value: 1 },
    { name: "February", value: 2 },
    { name: "March", value: 3 },
    // ... füge die übrigen Monate hinzu ...
    { name: "December", value: 12 },
  ];

  const handleMonthChange = (e) => {
    setSelectedMonth(parseInt(e.target.value, 10));
  };

  return (
    <div className={styles.container}>
      <div className={styles.headercontainer}>
        <div className={styles.header}>
          <h3>Income</h3>
          <p>100€</p>
        </div>
        <div className={styles.chartSelection}>
          <select
            className={styles.selection}
            disabled={activeChart}
            onChange={handleMonthChange}
          >
            {months.map((month, index) => (
              <option key={index} value={month.value}>
                {month.name}
              </option>
            ))}
          </select>
          <div className={styles.buttonContainer}>
            <button
              className={
                !activeChart ? styles.activeChart : styles.inActiveChart
              }
              disabled={!activeChart}
              onClick={() => setActiveChart(!activeChart)}
            >
              Month
            </button>
            <button
              className={
                activeChart ? styles.activeChart : styles.inActiveChart
              }
              disabled={activeChart}
              onClick={() => setActiveChart(!activeChart)}
            >
              Year
            </button>
          </div>
        </div>
      </div>
      <div className={styles.chartContainer}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default IncomeChart;
