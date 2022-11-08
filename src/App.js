import { useState, useEffect } from "react";
import Store from "./components/Store";
import Product from "./components/Product";
import axios from 'axios'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

function App() {

  const [storeItem, setStoreItem] = useState([])
  const [loading, setLoading] = useState(true)

  const handleClick = (itemData) => {
    setStoreItem([...storeItem, itemData])
   
 }

 useEffect( ()=> { 
  axios.get("http://fakestoreapi.com/products").then(({data}) => {
    setLoading(false)
    setStoreItem(data)
  })
 }, [])

 


  return <div>
       <h1> Hello world</h1>
       <p> {new Date().toString()} </p>
       <Store items = {storeItem} onItemAdd = {handleClick} loading={loading}/>
       <Router>
        <Routes>
          <Route path="/product/:id" component={props => <Product {...props}/>}/>
        </Routes>
       </Router>
      </div>
}
 
   
      

export default App;
