import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Todo from './pages/Todo';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:id" exact component={Todo} />
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
