import React from 'react';
import './App.css';
import Home from './Home.js';
import Wrapper from './Wrapper.js';
import Content from './component/Content.js';
import Header from './component/Header.js';
// import Header from './component/Header.js';
import {
  HashRouter,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'

function App() {
  return (
    <HashRouter>
          <div>
            {/*<Footer />*/}
            <div className="app-shell">
              <Switch>
                {/* <Route path="/login" component={Login} /> */}
                <Route path="/homey" component={Home} />
                <Route path="/home" component={Wrapper} />
                <Route path="/content" component={Content} />
                <Route path="/header" component={Header} />
                

                <Redirect from="/" to="/home" />
              </Switch>
            </div>
          </div>
        </HashRouter>
  );
}

export default App;
