

import { Paper } from '@mui/material';
import React from 'react';
import {  Line } from 'react-chartjs-2';

import { inferTimestampLabels, inferLineGraphValues, timeseriesColumns } from './Utils';


export default function LineVisTimeseries(props){
  // datasetIdKey='id'
  // const labels = ["Jan", "Feb", "Mar", "apr", "may", "jun", "jul"];
  // const [labels, setLabels] = React.useState('');



  const timeseriesCols = timeseriesColumns(props.raw_data);
  const labels = inferTimestampLabels(props.raw_data, timeseriesCols[0]);


  const output = inferLineGraphValues(props.raw_data);
  // console.log(labels, output)
  let data = {
    labels: labels,
    datasets: output
  };

  const config = {
      type: 'line',

      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Line Chart'
          }
        }
      },
    };

  return (
      <Paper variant="outlined" sx={{ height:"350px",alignItems: 'center', width:"700px", marginTop: "10px",
     p:"10px"}} >
      <Line  data={data} options={config} />
      </Paper>
  )
}
