import logo from './logo.svg';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Project from './components/Project';
function App() {
  return (
    <Router>
      <>
        <Route exact path="/mycv" component={Home}/>
        <Switch>
          <Route path="/about" component={About}/>
          <Route path="/education" component={Education}/>
          <Route path="/skills" component={Skills}/>
          <Route path="/experience" component={Experience}/>
          <Route path="/project" component={Project}/>
        </Switch>
      </>
    </Router>
  );
}

export default App;
