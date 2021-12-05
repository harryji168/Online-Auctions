import React, { Component } from 'react'
import AuctionDetails from './AuctionDetails';
import {Auction} from '../requests';
import {Link} from 'react-router-dom';
import BidForm from "./BidForm"
import BidDetails from "./BidDetails"
import PublishForm from "./PublishForm";
import {Grid} from "@material-ui/core"

class AuctionShowPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auction: {}
    }
  }
  
  componentDidMount(){
    Auction.show(this.props.match.params.id)
    .then(auction=>{
      this.setState((state)=>{
        return {
          auction : auction
        }
      })
    })
  }


  render() {
    const { id, title, description, ends_at, reserve_price,bids,author,status} = this.state.auction;
    let bid_arr=[]
    return(
      <main> 
        <Grid container justify="space-around">
          <Grid item className="col-12">
            {bids?bids.map(b => {
            bid_arr.push(b.price)}):[]}
        <AuctionDetails
          title={title}
          description={description}
          ends_at={ends_at}
          reserve_price={reserve_price}
          bid={bid_arr}
          author={author}    
          status={status}  
        />
       </Grid>

   { status == 'draft'? 
     (
          <Grid item className="col-12">
            <PublishForm id={id} history={this.props.history}
                auction={this.state.auction}
                onSubmit={this.createPublish}
                errors={this.state.errors}
              />
        </Grid>
     )
     :
     (
          <Grid item className="col-12">
          
              <BidForm id={id} reserve_price={reserve_price} history={this.props.history}/>
              <h6>Previous Bids</h6>
              {bids? bids.map((b, i) => {
              return <BidDetails
                key={i}
                id={b.id}
                price={b.price}
                created_at={b.created_at}
                updated_at={b.updated_at}
              />
              
              
            }): ""}
            </Grid>
     )
    }
     </Grid>
      
      </main>

    )
  }
}

export default AuctionShowPage
