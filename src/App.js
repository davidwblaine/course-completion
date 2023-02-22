import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import Login from './Login';
import About from './About';
import NotFound from './NotFound';
import Contact from './Contact';
import SignUp from './SignUp';
import Account from './Account';

function App() {
  return (
    <div className="Router">
      <Router>
        <Routes>
          <Route path = {'/'} element ={<HomePage/>}></Route>
          <Route path = {'/Login'} element = {<Login/>}></Route>
          <Route path = {'/About'} element = {<About/>}></Route>
          <Route path ={'/Contact'} element = {<Contact/>}></Route>
          <Route path ={'/SignUp'} element = {<SignUp/>}></Route>
          <Route path = {'*'} element = {<NotFound/>}></Route>
          <Route path = {'/Account'} element = {<Account/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
