import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Trombi from './pages/trombi';
import Programme from './pages/programme';
import Contact from './pages/contact';
import Error404 from './pages/error404';

function App() {
  return (
    <BrowserRouter>
          <React.Suspense fallback={<div>{'loading'}</div>}>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/trombinoscope" exact component={Trombi} />
              <Route path="/programme" exact component={Programme} />
              <Route path="/contact" exact component={Contact} />
              <Route component={Error404} />
            </Switch>
          </React.Suspense>
        </BrowserRouter>
  );
}

export default App;
