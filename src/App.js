import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';
import SingleCourse from './components/SingleCourse/SingleCourse';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div >
      <Router>
        <Header />
        <Switch>
        <Route exact path="/" >
        <Home />
        </Route>
        <Route exact path="/home" >
        <Home />
        </Route>
        <Route exact path="/courses" >
        <Courses />
        </Route>
        <Route exact path="/courses/:id">
                <SingleCourse/>
                </Route>
                <Route exact path="/about" >
        <About />
                </Route>
                <Route exact path="/contact" >
        <Contact />
        </Route>
        <Route path="*">
        <NotFound />
        </Route>


        </Switch>
        <Footer />

      </Router>
    </div>

  );
}

export default App;
