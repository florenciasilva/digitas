import React, { useEffect } from 'react';
import UserAuth from './Components/Views/UserAuth';
import Home from './Components/Views/Home';
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact strict component={UserAuth} />
        <Route path="/home" exact strict component={Home} protected />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
