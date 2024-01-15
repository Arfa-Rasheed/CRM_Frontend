import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale } from 'chart.js/auto';

import './style.scss';

const BarChart = ({ barChartData , selectedOption }) => {
  const options = {
    width: "4000px", 
    height: "273px", 
  };

  const months = Object.keys(barChartData);
  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "June",
    "July", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  const data = {
    // labels: months.map(month => {
    //   const [year, monthNumber] = month.split('-');
    //   return `${year}-0${parseInt(monthNumber, 10)}`;
    // }),

    

    
    
     labels : months.map(month => {
      const [year, monthNumber] = month.split('-');
      const monthName = monthNames[parseInt(monthNumber, 10) - 1];
      return `${monthName}`;
     }),
    
    datasets: [
      {
        label:selectedOption === "Policy Matrix" ? "Policies" : 'Sales',
        // backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.6)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: selectedOption === "Policy Matrix" 
              ? months.map(month => barChartData[month].totalSoldPolicies) 
              : months.map(month => barChartData[month].totalSalesCost),
        backgroundColor: [
          '#4dc9f6',
          '#f67019',
          '#f53794',
          '#537bc4',
          '#acc236',
          '#166a8f',
          '#00a950',
          '#58595b',
          '#8549ba'
      ],
      },
    ],
  };

  

  return (
    <div>
      <Bar data={data} options={options} plugins={[CategoryScale]} style={{width:'100%'}}/>
    </div>
  );
};

export default BarChart;
