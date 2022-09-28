import { BrowserRouter as Router, Routes,  Route} from 'react-router-dom';
import './App.css';
import './LoginData.js';
import Home from './Home';
import Registration from './Register';
import Profile from './Profile';
import HomePage from './HomePage';
function App() {
  return (
   
    <Router>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Routes>
        <Route exact path="/" element = {<Home />}/>
        <Route exact path="/registeration" element = {<Registration />}/>
        <Route exact path="/profile" element = {<Profile />}/>
        <Route exact path="/welcome" element = {<HomePage />}/>
      </Routes>
  </Router>
  );
}

export default App;
