
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import AddService from './components/AddService/AddService';
import Contacts from './components/Contacts/Contacts';

import Footer from './components/Footer/Footer';
import Galery from './components/Galery/Galery';
import Header from './components/Header/Header';
import Home from './components/Home/Home/Home';
import Services from './components/Home/Services/Services';
import NotFound from './components/NotFound/NotFound';

import Order from './components/Order/Order';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import AuthProvider from './Context/AuthProvider';
import Login from './Login/Login/Login';
import ManageOrders from './Login/ManageOrders/ManageOrders';
import PrivateRoute from './Login/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>

          <Switch>

            <Route exact path='/'>
              <Home></Home>
            </Route>

            <Route path='/home'>
              <Home></Home>
            </Route>

            <Route path='/services'>
              <Services></Services>
            </Route>

            <PrivateRoute path='/galery'>
              <Galery></Galery>
            </PrivateRoute>

            <PrivateRoute path='/contact'>
              <Contacts></Contacts>
            </PrivateRoute>
            <PrivateRoute path='/addService'>
              <AddService></AddService>
            </PrivateRoute>

            <PrivateRoute path='/order'>
              <Order></Order>
            </PrivateRoute>
            <PrivateRoute path='/manageorder'>
              <ManageOrders></ManageOrders>
            </PrivateRoute>

            <PrivateRoute path='/placeorder/:id'>
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>


            <Route path='/login'>
              <Login></Login>
            </Route>

            <Route path='*'>
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
