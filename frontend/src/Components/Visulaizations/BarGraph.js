import { Paper } from '@mui/material';
import { Bar } from 'react-chartjs-2';
// Chart.register(Bar);


export default function BarVis(){
    
    const labels = ["Jan", "Feb", "mar", "apr", "may", "jun", "jul"];
    const data = {
      labels: labels,
      datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: 'rgb(255, 99, 132)',
        // borderColor: [
        //   'rgb(255, 99, 132)',
        //   'rgb(255, 159, 64)',
        //   'rgb(255, 205, 86)',
        //   'rgb(75, 192, 192)',
        //   'rgb(54, 162, 235)',
        //   'rgb(153, 102, 255)',
        //   'rgb(201, 203, 207)'
        // ],
        borderWidth: 1
      },
      {
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: 'rgb(255, 205, 86)',
        //   'rgba(255, 99, 132, 0.2)',
        //   'rgba(255, 159, 64, 0.2)',
        //   'rgba(255, 205, 86, 0.2)',
        //   'rgba(75, 192, 192, 0.2)',
        //   'rgba(54, 162, 235, 0.2)',
        //   'rgba(153, 102, 255, 0.2)',
        //   'rgba(201, 203, 207, 0.2)'
        // ],
        // borderColor: [
        //   'rgb(255, 99, 132)',
        //   'rgb(255, 159, 64)',
        //   'rgb(255, 205, 86)',
        //   'rgb(75, 192, 192)',
        //   'rgb(54, 162, 235)',
        //   'rgb(153, 102, 255)',
        //   'rgb(201, 203, 207)'
        // ],
        borderWidth: 1
      }]

    };
    const config = {
        type: 'bar',
        data: data,
        options: {
          plugins: {
            title: {
              display: true,
              text: 'Chart.js Bar Chart - Stacked'
            },
          },
          responsive: true,
          // maintainAspectRatio: false,
          scales: {
            x: {
              stacked: true,
            },
            y: {
              stacked: true
            }
          }
        }
      };
    
    return (
        <Paper variant="outlined" sx={{ height:"350px", width:"700px",alignItems: 'center', marginTop: "10px",
       p:"10px"}} >
        <Bar data={data} options={config} />
        </Paper>
    )
}


