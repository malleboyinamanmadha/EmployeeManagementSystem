import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import ListEmployeeComponent from './Components/ListEmployeeComponent';
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
import CreateEmployeeComponent from './Components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './Components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './Components/ViewEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent></HeaderComponent>
          <div className="container">
              <Switch>
                  <Route path='/' exact component={ListEmployeeComponent}/>
                  <Route path='/employees' component={ListEmployeeComponent}/>

                {/*step 1 */}
                  <Route path='/add-employee/:id' component={CreateEmployeeComponent}/>
                  {/*<Route path="/update-employee/:id" component={UpdateEmployeeComponent}/>*/}
                  <Route path='/view-employee/:id' component={ViewEmployeeComponent}/>
                  <ListEmployeeComponent/>
              </Switch> 
          </div>
          <FooterComponent></FooterComponent>
      </Router>
    </div>
  );
}

export default App;
