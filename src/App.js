import React from 'react';
import Profile from "./profile";
import Order from "./order"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
    restaurant_details:[],
    users:[],
    orders:[]
    }
    this.getPosts = this.getPosts.bind(this)
  }
  async  getPosts() {
    const URL = "https://indapi.kumba.io/webdev/assignment";
  
    const response = await fetch(URL);
    const data = await response.json();
  
    console.log(data);
    return data;
  }
  async componentDidMount() {
    const posts = await this.getPosts();
    this.setState({
      restaurant_details:posts.restaurant,
      users:posts.user,
      orders: posts.items

    });
    console.log(this.state.restaurant_details)
  }
  // async getLikes(){
  //   let likes =await this.state.likes.map((like)=><li>{like}</li>)
  //   return likes
  // }
  render(){

    const {users,orders,restaurant_details} = this.state
    return(
      
         <Router>
            <Switch>
                {users.likes && <Route path="/" component={() => <Profile details = {users}/>} exact/>}
                {orders && <Route path="/orders" component={() => <Order items = {orders}  restaurant={restaurant_details} details = {users}/>} />}
            </Switch>
         </Router>
      
    )
  }

}

export default App;
