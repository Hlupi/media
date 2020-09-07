import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import StyleReset from './styles'
import MediaOverview from './components/blocks/media-overview'
import Search from './components/blocks/search'


function App() {
  return (
    <Router>
      <StyleReset/>
      <Switch>
        <Route path='/:slug' component={MediaOverview}  />
        <Route path='/' component={Search} exact />
      </Switch>
    </Router>
  );
}

export default App;
