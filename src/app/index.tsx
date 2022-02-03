import { Route, Switch } from 'react-router';

import React from 'react';
// import { App as TodoApp } from 'app/containers/App';
import { hot } from 'react-hot-loader';

const FirstPage = () => (
  <div>
    <h1>Arkadii Aristov</h1>
    <p>Hey you, thanks for coming. This is my personal page and feels free to contact me.</p>
    <a href='mailto:arkadyaristov@gmail.com'>arkadyaristov@gmail.com</a>
  </div>)

export const App = hot(module)(() => (
  <Switch>
    <Route path="/" component={FirstPage} />
  </Switch>
));
