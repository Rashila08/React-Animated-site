import { Redirect, Route, Switch } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Home from './Home';
import Contact from './Contact';
import Service from './Service';
import About from './About';
import NavBar from './NavBar';
import Footer from './Footer';
import "../node_modules/bootstrap/dist/js/bootstrap.js";

function App() {
  return (
    <div>
    <NavBar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/service" component={Service}/>
        <Redirect to="/"/>
      </Switch>
      <Footer/>
      
    </div>
  );
}

export default App;
