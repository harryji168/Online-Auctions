import React, {useState} from 'react';
import {Bid,Auction} from '../requests';


const PublishForm = (props)=>{
    const {id} = props 
    function handlePublishSubmit(event) {
        const formData= new FormData(event.currentTarget);           
        Auction.publish(id) 
        .then(()=>{
          console.log("here")
          Auction.show(id)
        }) 
      }
      return (
        <form className="m-3 ui form" onSubmit={handlePublishSubmit}>
          <button  autofocus="autofocus"  className="ui primary button" type="submit">
            Publish
          </button>
        </form>
      );
}
export default PublishForm;