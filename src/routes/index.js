import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Welcome from '~/pages/Welcome';
import Home from '~/pages/Home';

export default function routes() {
  return (
    <Switch>
      <Route path="/" exact component={Welcome} />
      <Route path="/home" component={Home} />
    </Switch>
  );
}
