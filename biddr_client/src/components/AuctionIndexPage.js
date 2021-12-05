import {Component} from "react"
import {Auction} from "../requests"
import {Link} from "react-router-dom"
import moment from "moment"
import { Session,User } from '../requests';
import Card from "react-bootstrap/Card"
class AuctionIndexPage extends Component{
    constructor(props){
        super(props);
        this.state ={
            auctions: []
        }
    }

    componentDidMount(){
        Auction.index()
        .then((auctions)=>{
            this.setState((state)=>{
                return{
                    auctions: auctions
                }
            })
        })
        Session.currentUser()
        .then(user=>{
           console.log('user', user);
           if(user!==null){
            this.setState((state)=>{              
                return {user_id:user.id}
            })
         }
        })
    }

    filterAuctions(){
        let user_id=this.state.user_id
        return this.state.auctions.filter(function(a){
                          console.log(user_id,a.author.id)
                            if(a.status==='draft'){
                              if(user_id === a.author.id){
                                return true
                              }else{
                                return false
                              }
                            }else{
                               return true
                            }
                        })
       }
    

    
    render(){
        return(
            <main>
                <h1>Auctions </h1>
                
                <div class="card"><a class="html5lightbox" onclick="javascript:document.getElementById('new_auction').pause();"  href="/new_auction.mp4" ><video id="new_auction"  muted autoplay="" > 
                <source src="/new_auction.mp4#t=10,19" type="video/mp4" />
                 Your browser does not support the video tag.
             </video><p>play video</p></a></div>
                 <div className="justify-content-center">
                { //current_user=this.state.user_id,
                 this.filterAuctions().map(a => {                    
                    return(
                        <div key={a.id}>
                                  <Card>
                                    <Card.Title><Link to={`/auctions/${a.id}`}><h3>{a.title}</h3></Link></Card.Title>
                                    <Card.Subtitle>
                                    <blockquote className="blockquote mb-0">
                                        <p>Price: ${a.reserve_price} </p>
                                      
                                    </blockquote>
                                    </Card.Subtitle>

                                    <p>Created at: {moment(a.created_at).format("MMM Do, YYYY")}</p>
                                    <p>End at: {moment(a.ends_at).format("MMM Do, YYYY")}</p>
                                    <p>Owner: {a.author ? a.author.full_name : null}</p>
                                    <p>Status: {a.status}</p>
                                    
                                </Card> 
                        <br/>
                        </div>       
                        
                        
                    )



                    
                })}
                </div>
            </main>
        )
    }
}

export default AuctionIndexPage