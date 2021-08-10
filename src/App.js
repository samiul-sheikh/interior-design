import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import Blog from './Components/Blog/Blog';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
