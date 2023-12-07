import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import './style.scss'
const BarChart = ({ chartData }) => {
  const options = {
    // responsive: true,
    // maintainAspectRatio: false, // Set to false to customize width and height
    width: 400, // Set the desired width
    height: 200, // Set the desired height
  };
  return (
    <div 
    // style={{width:'635px',height:'268px',border:'2px solid red',}}
    >
      <Bar
        data={chartData}
        style={{width:'100%'}}
        // chartOptions={options}
      />
    </div>

  )
}

export default BarChart