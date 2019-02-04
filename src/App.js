import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './hoc/layout';

import Home from './components/Home';
import About from './components/About';

class App extends Component {
  render() {
    return (
    <Layout>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about-us' exact component={About} />
      </Switch>
    </Layout>
    );
  }
}

export default App;
