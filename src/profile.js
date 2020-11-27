import React from 'react';
import ProfilePics from "./images/empty_state_2x.jpg"
import {Link } from 'react-router-dom';

class Profile extends React.Component{

    render(){
        const {details} = this.props;
         
        
        return(
            <div id="profile-page">
               <div id="to-order-btn" className="btn">
                   <Link to="/orders">
                       <button>Check Order List</button>
                   </Link>
                    
               </div>
               <div id="customer-profile">
                    <img src={ProfilePics} alt="User's Profile" width="300px"/>
                    <p className="details"><span>Name</span>: {details.name}</p>
                    <p className="details"><span>Phone Number</span> : {details.phone}</p>
                    <p className="details"><span>Address</span> : {details.address}</p>
                    <p className="details"><span>About Me</span> : {details.about}</p>
                    <span>Likes</span>:<ul>
                               {details.likes.map((like)=><li>{like}</li>)}
                          </ul>
                    <span>DisLikes</span>:<ul>
                               {details.dislikes.map((dislike)=><li>{dislike}</li>)}
                             </ul>
               </div>
               
                
            </div>
        )
    }
}

export default Profile;