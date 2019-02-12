import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './hoc/layout';

import Home from './components/Home';
import About from './components/About';
import Play from './components/Play';
import Todo from './components/Todo/todo';
import Hacker from './components/Hacker';
import Flag from './components/Globe';

class App extends Component {
  render() {
    return (
    <Layout>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about-us' exact component={About} />
        <Route path='/playing-a-concert' exact component={Play} />
        <Route path='/todo' exact component={Todo} />
        <Route path='/hacker' exact component={Hacker} />
        <Route path='/mapGame' exact component={Flag} />
      </Switch>
    </Layout>
    );
  }
}

export default App;
