import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';

import EventCreatePost from './components/EventCreatePost';
import EventEditPost from './components/EventEditPost';
import EventBook from './components/EventBook';
import EventAddedEvent from './components/EventAddedEvent';
import EventHome from './components/EventHome';
import EventMenu from './components/EventMenu';
import EventPostDetails from './components/EventPostDetails';
import EventReceivedOrders from './components/EventReceivedOrders';

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
        
        <Route path="/eventadd" component={EventCreatePost}></Route>
        <Route path="/eventedit/:id" component={EventEditPost}></Route>
        <Route path="/eventbook/:id" component={EventBook}></Route>
        <Route path="/eventadded"  component={EventAddedEvent}></Route>
        <Route path="/eventHome" component={EventHome}></Route>
        <Route path="/eventmenu" component={EventMenu}></Route>
        <Route path="/eventpost/:id" component={EventPostDetails}></Route>
        <Route path="/eventorders" component={EventReceivedOrders}></Route>
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