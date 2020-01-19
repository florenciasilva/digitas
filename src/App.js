import React from 'react';
import UserAuth from './Components/Views/UserAuth';
import Home from './Components/Views/Home';
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
  return (

    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={UserAuth} />
        <Route path="/home" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
