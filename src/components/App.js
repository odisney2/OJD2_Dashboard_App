//import React, { Component } from 'react';
//import logo from '../logo.svg';
import React from 'react';

import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

// App components
import Header from './Header';
import Home from './Home';
import About from './About';
import Weather from './Weather';
import SunMoon from './SunMoon';
import Lego from './Lego';
import NotFound from './NotFound';

// CSS files to import
import '../css/App.css';

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/About" render={ () => <About title='About'/>} />
        <Route path="/Weather" render={ () => <Weather title='Weather'/>} />
        <Route path="/SunMoon" render={ () => <SunMoon title='SunMoon'/>} />
        <Route path="/Lego" render={ () => <Lego title='Lego'/>}/>
        <Route component={NotFound} />
      </Switch>

    </div>
  </BrowserRouter>
);


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

export default App;
