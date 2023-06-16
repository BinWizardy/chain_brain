import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { connect } from 'react-redux';
import { setVisualization } from '../../redux/reducers/Counter/counter.actions';

function RowRadioButtonsGroup(props) {
    const [value, setValue] = React.useState('female');
    const {visualization, setVisualization} = props;
    const handleChange = (event) => {
        setVisualization(event.target.value);
      };

  const renderRadio = ()=>{
    const {predictedVis} = props;
    switch (predictedVis) {

      case "line-chart":

         return (
          <FormControlLabel value="line-chart" control={<Radio  sx={{
            color: "white",
            '&.Mui-checked': {
              color: "#00FFFF",
            },
          }}/>} label="Line Chart" />
         );
      case "line-chart-timeseries":

         return (
          <FormControlLabel value="line-chart-timeseries" control={<Radio  sx={{
            color: "white",
            '&.Mui-checked': {
              color: "#00FFFF",
            },
          }}/>} label="Line Chart Time Series" />
         );
        //  <FormControlLabel value="pie-chart" control={<Radio  sx={{
        //   color: "white",
        //   '&.Mui-checked': {
        //     color: "#00FFFF",
        //   },
        // }}/>} label="Pie chart" />
        //       <FormControlLabel value="bar-graph" control={<Radio  sx={{
        //   color: "white",
        //   '&.Mui-checked': {
        //     color: "#00FFFF",
        //   },
        // }}/>} label="Bar Graph" />
        // <FormControlLabel value="bubble" control={<Radio  sx={{
        //   color: "white",
        //   '&.Mui-checked': {
        //     color: "#00FFFF",
        //   },
        // }}/>} label="Bubble Chart" />

    default: return (<></>);

  }}
  return (
    <FormControl sx={{marginTop:"10px"}}>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        sx ={{color:"white"}}
        value={visualization}
        defaultValue={visualization}
        onChange={handleChange}
      >
        <FormControlLabel value="table" control={<Radio sx={{
    color: "white",
    '&.Mui-checked': {
      color: "#00FFFF",
    },
  }}/>} label="Table" />
      {
        renderRadio()
      }
      </RadioGroup>
    </FormControl>
  );
}

const mapStateToProps = state => {
    return {
      visualization: state.counter.visualization,
      predictedVis: state.counter.predictedVis,
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
        setVisualization: (data) => dispatch(setVisualization(data))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(RowRadioButtonsGroup);
