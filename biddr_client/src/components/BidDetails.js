const BidDetails = ({ price, created_at,updated_at}) => {
  return (
    
    <div>
     
      <p>${price} on  {new Date(updated_at).toLocaleString()} </p>
    </div>
  )
}

export default BidDetails