import React, {useState} from 'react';
import {Bid,Auction} from '../requests';


const BidForm = (props)=>{
    const {id, reserve_price} = props
    const [price,setPrice]=useState('');
    const handleSubmit = (event)=>{
        event.preventDefault();
        const formData= new FormData(event.currentTarget);
        const params={
            price: formData.get('price'),
        }
        console.log(price);
        console.log(reserve_price);
        Bid.create(id,params)
        .then(()=>{ 
           if( price > reserve_price){  
                Auction.reserve(id)
           } 
           window.location.reload();
        })         
    }

    return(
        <div className="d-flex justify-content-center">
            <form className="ui form m-5"  onSubmit={event=>handleSubmit(event)}>
                <div className="field">
                    <label htmlFor="price">Price</label>
                    <input autofocus="autofocus"  className="m-1" type="number" name='price' id='price' value={price} onChange={e=>setPrice(e.target.value)}/>
                    <input type='submit' value='Bid' className="ui primary button"/>
                </div>  
            </form>
        </div>
    )
}
export default BidForm;