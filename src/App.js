import logo from './logo.svg';
import './App.css';
import Home from './component/Home/Home';
import Message from './component/Message/Message'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './component/NoMatch/NoMatch';
import Login from './component/Login/Login';
import Signup from './component/Signup/Signup';
import './component/Header/Header.css';
import { createContext, useState } from 'react';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import './Responsive.css';
import AddVehicle from './component/AddVehicle/AddVehicle';
import Admin from './component/Admin/Admin';
import Order from './component/Order/Order';



export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (

    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <div className="App">
        <Message></Message>
        <Router>
          <Header visitor={loggedInUser}></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
            <Route path="/addvehicle">
              <AddVehicle></AddVehicle>
            </Route>
            <PrivateRoute path="/order">
              <Order></Order>
            </PrivateRoute>
            <Route path="/admin">
              <Admin></Admin>
            </Route>
            <Route path="*">
              <NoMatch></NoMatch>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
