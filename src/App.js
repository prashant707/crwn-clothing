import React from 'react';
import { Switch,Route,Link } from 'react-router-dom'

import './App.css';



import SignInAndSignUpPage from '../src/pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage.component'
import { auth, createUserProfileDocument} from './firebase/firebase.utils';

// const HomePage = (props) =>{
//   console.log(props)
//   return(

//     <div>
//     <button onClick={()=>props.history.push('/abcde/topics')}>Topics</button>
//     <h1>Home Page</h1>
//     </div>
//   )
// }

const HatsPage=()=>{
  return (
    <div>
    <h1>HEllo</h1>
    </div>
  )
}

const TopicList=(props)=>{
  console.log(props)
  return(
    <div>
    <Link to ={`${props.match.url}/13`}>To Topic 13</Link>
    <Link to ={`${props.match.url}/14`}>To Topic 14</Link>
    <Link to ={`${props.match.url}/15`}>To Topic 15</Link>
    <h1>Topic List</h1>
    </div>
  )
}

const TopicDetail=(props) => {
  console.log(props)
  return (
    <div>
    <h1>Topic Detail Page{props.match.params.topicId}</h1>
    </div>
  )
}

class App extends React.Component {
 constructor(){
   super();
   this.state={
     currentUser:null
   }

 }

 unsubscribeFromAuth=null;

 componentWillUnmount(){
   this.unsubscribeFromAuth();
   
 }

 componentDidMount(){
  this.unsubscribeFromAuth=auth.onAuthStateChanged(async (userAuth) => {
    
    if(userAuth){
      const userRef= await createUserProfileDocument(userAuth);
      await userRef.onSnapshot(snapshot => {
        console.log(snapshot.data())
       this.setState({
            currentUser:{
              id:snapshot.id,
            ...snapshot.data()
        }
        },()=> { console.log(this.state)});
      });
      
    }
    
    // //createUserProfileDocument(user)
    
    // this.setState({ currentUser:user });
    // console.log(user)
    this.setState({currentUser:userAuth})
  });


  
 }


 render(){
  return (<div>
    <Header currentUser={this.state.currentUser} />
    <Switch> 
      <Route  exact path='/' component={HomePage} />
      <Route exact path='/shop' component={ShopPage} />
      <Route exacr path='/signin' component={SignInAndSignUpPage}  />
      </Switch>
      
      
      </div>) 
    
 }
 }

export default App;
