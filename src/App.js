import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Items from './Pages/Items';

function App() {
  return (
    <Router>
      <div>
        <Switch>

          <Route path="/"> {/*At the 3000 port, Home page will be displayed*/}
            <Home/>
          </Route>

          <Route path="/Items">
            <Items/>
          </Route>

        </Switch>
      </div>
    </Router>
 
  );
}

export default App;
