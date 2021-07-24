import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from './redux/features/users/userSlice';

//Components
import Sidebar from './components/Sidebar/Sidebar';
//Pages
import Landing from './pages/Landing/Landing';
import Register from './pages/Register/Register';
import Invoices from './pages/Invoices/Invoices';

function App() {
  const user = useSelector(selectUser);
  return (
    <div className="app">
      <Sidebar />
      <div className="sections">
        <Switch>
          <Route exact path="/">
            {user ? <Redirect to="/invoices"/> : <Landing/>}
          </Route>
          <Route exact path="/invoices">
            {user === null ? <Landing/> : <Invoices />}
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
