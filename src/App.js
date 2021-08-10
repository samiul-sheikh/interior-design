import './App.css';
import Navbar from './Components/Reuse/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from './Components/Homepage/Homepage/Homepage';
import Contact from './Components/Contact/Contact';
import Blog from './Components/Blog/Blog';
import About from './Components/About/About';
import Footer from './Components/Reuse/Footer/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <div className="pages">
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/home" component={Homepage} />
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
