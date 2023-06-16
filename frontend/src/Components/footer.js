import React, { Component, useEffect, useState } from 'react';
import { ethers } from "ethers";
import { Button } from '@mui/material';
import { useSnackbar } from 'notistack';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { connect, useDispatch } from 'react-redux';
import { SUCCESS } from '../redux/reducers/Counter/counter.types';
import { itemSuccess, setMetamaskConnection } from '../redux/reducers/Counter/counter.actions';
import axios from 'axios';
import { backend_url } from '../constants';

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#f2ebeb',
      contrastText: '#515151',
      backgroundColor: "white"
    }
  },
});

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function Footer (props){
  const dispatch = useDispatch();
  const  {metamask_connected, wallet_address, data, } = props;
  const [ sending_request, set_sending_request] = useState(false)
  const { enqueueSnackbar } = useSnackbar();

  const saveDashboard = async ()=>{

    try{
      set_sending_request("true")
      const res = await axios.post(`${backend_url}/api/v1/dashboard/${data?.id}`, {
      wallet_address: wallet_address,
    })

    enqueueSnackbar('Saved Dashboard');
    set_sending_request(false)
  }
    catch{
      set_sending_request(false)
      enqueueSnackbar('Server error!!');
    }
  }


  const renderFooter = () => {
    if (metamask_connected) {
        return (
            <>
          {/* <Button variant="contained" sx={{ marginTop:"10px", backgroundColor:'#701ea5' , marginRight:"10px"}}>
            Download
          </Button> */}
            <Button variant="contained" sx={{ marginTop:"10px", backgroundColor: '#701ea5', "&.Mui-disabled": {
          background: "#eaeaea",
          color: "#c0c0c0"
        }}}  disabled={sending_request}  onClick={saveDashboard}>
              Save To My Dashboard
            </Button>
            </>
          );
    }
  }

    return(
      <div>
        { renderFooter() }
      </div>
    )
}

const mapStateToProps = state => {
  return {
    metamask_connected: state.counter.metamask_connected,
    wallet_address: state.counter.wallet_address,
    data: state.counter.data,
  }
}


export default connect(mapStateToProps)(Footer);
