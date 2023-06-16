import React, { Component, useEffect, useState } from 'react';
import { ethers } from "ethers";
import { Button } from '@mui/material';
import { useSnackbar } from 'notistack';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { connect, useDispatch } from 'react-redux';
import { setMetamaskConnection, setWalletAddress } from '../redux/reducers/Counter/counter.actions';
import {  useNavigate } from 'react-router-dom';
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

function Metamask (props){
  const dispatch = useDispatch();
  // const  [selectedAddress, setSelectedAddress] = useState("");
  // const  [connected, setConnected] = useState("");
  const {metamask_connected, setMetamaskConnection, setWalletAddress, haveMetamask } = props;
  const  [balance, setBalance] = useState("");
  // const [haveMetamask, sethaveMetamask] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
    let navigate = useNavigate()

const goToDashboard = (event) => {
  navigate('/dashboard')
}

  const connectToMetamask = async ()=> {
    
    try{
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const accounts = await provider.send("eth_requestAccounts", []);
    const balance = await provider.getBalance(accounts[0]);
    const balanceInEther = ethers.utils.formatEther(balance);
    setWalletAddress(accounts[0]);
    setMetamaskConnection(true)
    // if(accounts[0]){
    //   enqueueSnackbar('Connected to Metamask');
    // }
    setBalance(balanceInEther);}
    catch (exc){
      // console.log(exc)
      if(exc.code === -32002){
        enqueueSnackbar('Metamask connection in progress, click on extenstion');
      }
      else{
      
      enqueueSnackbar('Download metamask extension to connect your wallet');
      }
      setMetamaskConnection(false)
    }
  }
  // if (haveMetamask ){
  
  // connectToMetamask()
  // }
    // <div>
        // <p>Welcome {this.state.selectedAddress}</p>
          // <p>Your ETH Balance is: {this.state.balance}</p>
        // </div>
  useEffect(() => {
    const { ethereum } = window;
    const checkMetamaskAvailability = () => {
      if(window.ethereum) {
        if(haveMetamask){
        connectToMetamask()}
             window.ethereum.on('chainChanged', () => {
                window.location.reload();
              })
              window.ethereum.on('accountsChanged', (accounts) => {
                if(accounts.length === 0){
                  setWalletAddress("");
                  setMetamaskConnection(false)
                }
                else{
                  setWalletAddress(accounts[0]);
                  setMetamaskConnection(true)
                }
                
              })
    };}
    checkMetamaskAvailability();
  }, [haveMetamask, metamask_connected]);

  const renderMetamask = () => {
    if (!metamask_connected) {
      return (
        
        // <button onClick={() => this.connectToMetamask()}>Connect to Metamask</button>
        <Button color="primary"  onClick={connectToMetamask} sx={[{ "&:hover": { backgroundColor: 'grey' , position: "sticky", top: 0, float: 'right'} }]}>Connect</Button>
      )
    } else {
      return (
        <>
        <Button onClick={goToDashboard} variant="contained" sx={{ position: "sticky", top: 0, marginRight:"10px", backgroundColor: "#0074d7", color:"white"}}>
        MY Dashboard
        </Button>
        <Button variant="contained" sx={{ position: "sticky", top: 0, backgroundColor: "#0074d7", color:"white"}}>
          Connected
        </Button>
        </>
      );
    }
  }
  
    return(
      <div>
        <ThemeProvider theme={theme}>
        {renderMetamask()}
        </ThemeProvider>
      </div>
    )
}



const mapStateToProps = state => {
  return {
    metamask_connected: state.counter.metamask_connected,
    wallet_address: state.counter.wallet_address,
    haveMetamask: state.counter.have_metamask
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setMetamaskConnection: (data) => dispatch(setMetamaskConnection(data)),
    setWalletAddress: (data) => dispatch(setWalletAddress(data))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Metamask);
