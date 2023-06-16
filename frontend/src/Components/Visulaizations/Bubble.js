


import { Paper } from '@mui/material';
import {  Bubble } from 'react-chartjs-2';
import * as Utils from './Utils';





export default function BubbleVis(){
    
    let data = {
        datasets: [{
          label: ['Deer Population'],
          data: [{
            x: 100,
            y: 0,
            r: 10
          }, {
            x: 60,
            y: 30,
            r: 20
          }, {
            x: 40,
            y: 60,
            r: 25
          }, {
            x: 80,
            y: 80,
            r: 50
          }, {
            x: 20,
            y: 30,
            r: 25
          }, {
            x: 0,
            y: 100,
            r: 5
          }],
        //   backgroundColor: "#FF9966"
        }, {
            label: ['Deer Population'],
            data: [   {
              x: 2,
              y: 3,
              r: 25
            }, {
              x: 0,
              y: 40,
              r: 5
            },{
                x: 500,
                y: 0,
                r: 10
              },{
                x: 60,
                y: 30,
                r: 20
              },{
                x: 40,
                y: 60,
                r: 25
              },{
                x: 80,
                y: 80,
                r: 50
              },],
            // backgroundColor: "#FF9966"
          }]
      };



    function channelValue(x, y, values) {
        return x < 0 && y < 0 ? values[0] : x < 0 ? values[1] : y < 0 ? values[2] : values[3];
      }
      
      function colorize(opaque, context) {
        const value = context.raw;
        const x = value.x / 100;
        const y = value.y / 100;
        const r = channelValue(x, y, [250, 150, 50, 0]);
        const g = channelValue(x, y, [0, 50, 150, 250]);
        const b = channelValue(x, y, [0, 150, 150, 250]);
        const a = opaque ? 1 : 0.5 * value.v / 1000;
      
        return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
      }
      
      const config = {
        type: 'bubble',
        data: data,
        options: {
          aspectRatio: 1,
          plugins: {
            legend: false,
            tooltip: false,
          },
          elements: {
            point: {
              backgroundColor: colorize.bind(null, false),
      
              borderColor: colorize.bind(null, true),
      
              borderWidth: function(context) {
                return Math.min(Math.max(1, context.datasetIndex + 1), 8);
              },
      
              hoverBackgroundColor: 'transparent',
      
              hoverBorderColor: function(context) {
                return Utils.color(context.datasetIndex);
              },
      
              hoverBorderWidth: function(context) {
                return Math.round(8 * context.raw.v / 1000);
              },
      
              radius: function(context) {
                const size = context.chart.width;
                const base = Math.abs(context.raw.v) / 1000;
                return (size / 24) * base;
              }
            }
          }
        }
      };


//       const DATA_COUNT = 16;
// const MIN_XY = -150;
// const MAX_XY = 100;
// Utils.srand(110);

// const actions = [
//   {
//     name: 'Randomize',
//     handler(chart) {
//       chart.data.datasets.forEach(dataset => {
//         dataset.data = generateData();
//       });
//       chart.update();
//     }
//   },
// ];
    
    
    return (
        <Paper variant="outlined" sx={{ height:"350px",alignItems: 'center', width:"700px", marginTop: "10px",
       p:"10px"}} >
        <Bubble data={data} options={config} />
        </Paper>
    )
}


