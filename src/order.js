import React from "react"
import {Link } from 'react-router-dom';

class Order extends React.Component{
    render(){
        const {name,street,city,state,zipcode} = this.props.restaurant
        const {details,items} = this.props
       
        return(
           <div className="container">
              <div id="profile-page-btn" className="btn">
                   <Link to="/">
                       <button>Profile</button>
                   </Link>
              </div>
              <div className="row">
              <div id="restaurant-details" className="col-md-6 col-sm-6">
                  <h3>Restaurant Details: </h3>
                  <div>
                      <p className="restaurant-detail"><span>Name</span>: {name}</p>
                      <p className="restaurant-detail"><span>Street</span>: {street}</p>
                      <p className="restaurant-detail"><span>City</span>: {city}</p>
                      <p className="restaurant-detail"><span>State</span>: {state}</p>
                      <p className="restaurant-detail"><span>ZipCode</span>: {zipcode}</p>
                  </div>
              </div>
              <div id="customer-details" className="col-md-6 col-sm-6"> 
                  <h3>Customer details: </h3> 
                    <p className="details"><span>Name</span> : {details.name}</p>
                    <p className="details"><span>Phone Number</span> : {details.phone}</p>
                    <p className="details"><span>Address</span> : {details.address}</p>
                    <p className="details"><span>About Me</span> : {details.about}</p>
               </div>
               </div>
               <div id="order-list"  className="row">
                   <h1 className="text-center">Order List </h1>
                       {items.map((item)=>{
                           
                           return(    
                                    <ul className="order-items col-md-6 col-sm-6">
                                            <li><span>Name</span>: {item.name}</li>
                                            <li><span>Category</span>: {item.category}</li>
                                            <li><span>Quantity</span>: {item.quantity}</li>
                                            <li><span>Price</span>: {item.price}</li>
                                            <li><span>Tax(percentage)</span>: {item.tax_pct}</li>
                                            <li><span>Total Price</span>: {item.price+((item.tax_pct/100)*item.price)}</li>
                                            
                                    </ul>
                           )
                       })}

               </div>
           </div>
        )
    }
}

export default Order;