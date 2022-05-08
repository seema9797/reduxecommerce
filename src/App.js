
import React from "react";
import { BrowserRouter,  Route ,Switch,Redirect} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navabar'
import MainCont from './components/MainCont'
import Product from './components/Product'
import AddToCart from "./components/AddToCart";
function App() {
  return (
   <div>
    <div>
  
         <Navbar/>
    <Switch>
      <Route exact path='/' component={MainCont}/>
       <Route path='/Product/:id' component={Product}/>
       <Route path="/AddToCart" component={AddToCart}/>
      </Switch>
   


    </div>
    </div>
  );
}

export default App;
