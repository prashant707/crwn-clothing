import React from 'react';
import { Switch,Route,Link } from 'react-router-dom'

import './App.css';
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage.component'


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

function App() {
  return (<div>
<Header />
<switch> 
  <Route  exact path='/' component={HomePage} />
  <Route exact path='/shop' component={ShopPage} />
  
  </switch>
  
  
  </div>) 
}

export default App;
