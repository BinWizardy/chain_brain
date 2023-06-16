import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import { connect } from 'react-redux';
import "./feedback.css";

function Feedback(props) {

    const [activeBtn, setActiveBtn] = useState("none");
    const {metamask_connected} = props;

    const handleLikeClick = () => {
        if (activeBtn === "none") {
          setActiveBtn("like");
          return;
        }
     
        if (activeBtn === 'like'){
          setActiveBtn("none");
          return;
        }
     
        if (activeBtn === "dislike") {
          setActiveBtn("like");
        }
      };
      const handleDisikeClick = () => {
        if (activeBtn === "none") {
          
          setActiveBtn("dislike");
          return;
        }
       
        if (activeBtn === 'dislike'){
          setActiveBtn("none");
          return;
        }
     
        if (activeBtn === "like") {
          setActiveBtn("dislike");
        }
      };
   
  return  metamask_connected && (
    <Box sx={{ display: 'inline-flex', marginBottom:"30px" }}>
    <Typography variant="p" sx={{color:"white", fontSize:"25px", marginTop:"18px", fontFamily:"sans-serif"}}>Expected Result ?</Typography>
    <ThumbUpIcon className={`btn ${activeBtn === "like" ? "like-active" : ""}`} sx={{marginLeft:"10px"}} onClick={handleLikeClick}/>
    <ThumbDownIcon className={`btn ${activeBtn === "dislike" ? "dislike-active" : ""}`} onClick={handleDisikeClick}/>
    </Box>
    )
      
}
// /api/v1/dashboard/<id>/feedback

const mapStateToProps = state => {
    return {
      metamask_connected: state.counter.metamask_connected,
      wallet_address: state.counter.wallet_address,
      data: state.counter.data,
    }
  }
  
export default connect(mapStateToProps)(Feedback);
