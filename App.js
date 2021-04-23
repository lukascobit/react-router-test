import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import About from './components/About.js'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about" component={About}/>
      </Switch>
    </Router>
  )
}

export default App;
