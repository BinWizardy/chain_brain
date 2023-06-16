

import { Paper } from '@mui/material';
import {  Pie } from 'react-chartjs-2';



export default function PieVis(){
    
    const labels = ["Jan", "Feb", "Mar", "apr", "may", "jun", "jul"];
    let data = {
      labels: labels,
      datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)',
              'rgb(201, 203, 207)'
            ],
        borderWidth: 1
      },
      {
        label: 'Second Dataset',
        data: [65, 59, 80, 81, 56, 55, 40].reverse(),
        backgroundColor:  [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ],
        borderWidth: 1
      }]

    };



    const config = {
        type: 'doughnut',
        data: data,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Chart.js Doughnut Chart'
            }
          }
        },
      };
    
    return (
        <Paper variant="outlined" sx={{ height:"350px",alignItems: 'center', width:"350px", marginTop: "10px",
       p:"10px"}} >
        <Pie data={data} options={config} />
        </Paper>
    )
}


