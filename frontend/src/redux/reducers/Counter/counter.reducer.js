import { SETDATA, API_CALLED, SET_VISUALIZATION, SET_METAMASKCONNECTION, SET_WALLET_ADDRESS, SET_HAVEMETAMASK, SET_PREDICTED_VIS } from './counter.types';

const INITIAL_STATE = {

   isLoading: false,
    data: {},
    visualization: "table",
    metamask_connected: false,
    wallet_address: "",
    have_metamask: false,
    predictedVis:""
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case SETDATA:

           return {

             ...state, 
             data: action.data,

           };
         
      case API_CALLED :  
         return {
             ...state,
             isLoading: action.data
         };
      
      case SET_VISUALIZATION :  
         return {
             ...state,
             visualization: action.data
         };
      
      
    case SET_METAMASKCONNECTION :  
         return {
             ...state,
             metamask_connected: action.data
         };
    
    case SET_HAVEMETAMASK :  
         return {
             ...state,
             have_metamask: action.data
         };
    case SET_PREDICTED_VIS :  
         return {
             ...state,
             predictedVis: action.data
         };
         
    case SET_WALLET_ADDRESS :  
        return {
            ...state,
            wallet_address: action.data
        };
    
    
      default: return state;

    }

};

export default reducer;
