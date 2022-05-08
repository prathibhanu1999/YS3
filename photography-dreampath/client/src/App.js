import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';


import AddedPackage from './components/AddedPackage';
import BookPackage from './components/BookPackage';
import CreatePackage from './components/CreatePackage';
import EditPackage from './components/EditPackage';
import PostDetails from './components/PostDetials';
import SpaHome from './components/SpaHome';
import SpaMenu from './components/SpaMenu';
import SpaReceivedOrders from './components/SpaReceivedOrders';
import Payment from './components/cart';
import admin from './admin';
import navAdmin from './adminNav';
import Home from './components/Dashboard';
import LoginAdminPage from './pages/LoginAdminPage/LoginAdminPage'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Route path="/" exact component={Home}></Route>
        
        
       
        <Route path="/spaadded" component={AddedPackage}></Route>
        <Route path="/spabook/:id" component={BookPackage}></Route>
        <Route path="/spaadd" component={CreatePackage}></Route>
        <Route path="/spaedit/:id" component={EditPackage}></Route>
        <Route path="/spapost/:id" component={PostDetails}></Route>
        <Route path="/spahome" component={SpaHome}></Route>
        <Route path="/spamenu" component={SpaMenu}></Route>
        <Route path="/spaorders" component={SpaReceivedOrders}></Route>
        <Route path="/payment" component={Payment}></Route>
        <Route path="/adminhome" component={admin}></Route>
        <Route path="/adminnav" component={navAdmin}></Route>
        <Route path='/adminlogin' exact component={LoginAdminPage} />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;