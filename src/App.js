import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';


function App() {
  return (
    <div className="Router">
      <Router>
        <Routes>
          <Route path = {'/'} element ={<HomePage/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
