import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import LoginPage from '../login/login';
import UniDetailsPage from '../unidetails';
import ViewTable from '../ViewTable';

function App(){
  return(
    <Router>
      <Switch>
      
      <Route exact path="/">
        <UniDetailsPage />
       </Route>

       <Route path="/login">
         <LoginPage />
       </Route>

       <Route path="/uni-details">
         <UniDetailsPage />
       </Route>

       <Route path="/view-details">
         <ViewTable />
       </Route>

       
       {/* <Route exact path="/modify-uni" component={}></Route> */}
  
      </Switch>
    </Router>
     
    
  );
}


 export default App;
