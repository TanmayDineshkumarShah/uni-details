import React from 'react';

import {
  BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import LoginPage from '../login/login';

function App(){
  return(
    <Router>
      <Switch>
      
      <Route path="/">
        <LoginPage/>
       </Route>
  
    </Switch>
    </Router>
     
    
  );
}
// const Routes=props=>(
//   <Router {...props}>
//     <Route path="/" component={loginPage} />
//   </Router>
// );

// export default Routes;


// function App() {
//   return (
//     <loginPage/>
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//   );
// }

 export default App;
