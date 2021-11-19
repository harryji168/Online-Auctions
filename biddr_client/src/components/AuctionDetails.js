import React from 'react';
import moment from "moment"
import Card from 'react-bootstrap/Card'
import {Grid} from "@material-ui/core"
const AuctionDetails = (props) => {
  const { title, description, ends_at, reserve_price,bid,author } = props;
  return (
    
    <Grid container justify="space-around">
       <h1 className="col-12">{title}</h1> 
      <Grid item className="col-12">
     
      <h6>{description}</h6>
      <p> Current Price:  ${Math.max(...bid)}</p>
      <p> Reserver Price:  ${reserve_price}</p>
      <p> Ends at: {moment(ends_at).format('MMM Do, YYYY')}</p>      
      <p> Owner: {author ? author.full_name : null}</p>            
      </Grid>
    </Grid>
  )
}

export default AuctionDetails;
