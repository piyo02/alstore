import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ProductPage from './Product/index.jsx';
import DetailPage from './Detail/index.jsx';
import ProfilePage from './Profile/index.jsx';

import './style.css';

class App extends Component {
  render() {
    return(
      <Router>
        <div className="wrapper">
          <Switch>
            <Route exact path="/" component={() => (
              <ProductPage data={{
                title: 'Handphone',
                data: 'product'
              }} />
            )} />
            <Route path="/accessories" component={() => (
              <ProductPage data={{
                title: 'Aksesoris',
                data: 'accessories'
              }} />
            )} />
            <Route path="/detail" component={() => (
              <DetailPage data={{}} />
            )} />
            <Route path="/profile" component={ProfilePage} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;