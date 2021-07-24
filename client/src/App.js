import { Switch, Route } from 'react-router-dom';
//Components
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
//Pages
import Landing from './pages/Landing/Landing';
import Register from './pages/Register/Register';
import Invoices from './pages/Invoices/Invoices';

import store  from './redux/store'

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="sections">
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/invoices">
            <Invoices/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
        </Switch>  
      </div>
    </div>
  );
}

export default App;
