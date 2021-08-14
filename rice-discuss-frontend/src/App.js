import React, {useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import './App.css';
import './components/button.css';
import LandingPage from './LandingPage.js';
import Protected from './components/Protected.js';
import SignUp from './signUp.js';

const auth = false;
const PrivateRoute = ({component: Component, ...args}) => (
	<Route {...args} render={(props) => (
		auth ? <Component {...props}/> : <Redirect to="/login"></Redirect>
	)}/>
);


function App() {

  return (
     <div>
		 <Router>
			<Switch>
        		<Route exact path = "/login" component= {LandingPage}></Route>
				<PrivateRoute component = {Protected} path= "/protected"></PrivateRoute>
			</Switch>
    	</Router>
    </div>
  );
}
export default App;
