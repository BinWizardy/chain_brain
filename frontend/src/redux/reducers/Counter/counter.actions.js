import {  SETDATA, API_CALLED, SUCCESS, SET_VISUALIZATION, SET_METAMASKCONNECTION, SET_WALLET_ADDRESS, SET_HAVEMETAMASK, SET_PREDICTED_VIS } from './counter.types';


export const setData = (data) => {

    return {

        type: SETDATA,
        data: data

    };

};

export const itemSuccess = (data) => {
  return {
    type: SUCCESS,
    data: data,
  };
};

export const apiCalled = (data) => {
    return {
      type: API_CALLED,
      data: data
    };
  };

export const setVisualization = (data) => {
  return {
    type: SET_VISUALIZATION,
    data: data
  };
};

export const setMetamaskConnection = (data) => {
  return {
    type: SET_METAMASKCONNECTION,
    data: data
  };
};

export const setHaveMetaMask = (data) => {
  return {
    type: SET_HAVEMETAMASK,
    data: data
  };
};


export const setWalletAddress = (data) => {
  return {
    type: SET_WALLET_ADDRESS,
    data: data
  };
};
export const setPredictedVis = (data) => {
  return {
    type: SET_PREDICTED_VIS,
    data: data
  };
};