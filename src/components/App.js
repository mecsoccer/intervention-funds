import React from 'react';
import { Router, Route } from 'react-router-dom';
import LandingPage from '../Pages/Landing';
import history from '../history';
import '../assets/styling/App.css';
import FashionIndustryCredit from '../Pages/FashionIndustryCredit';
import CovidFunds from '../Pages/CovidFunds';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <div style={{background:'white'}}>
            <Route path="/" exact component={LandingPage} />
            <Route path="/fashion-industry-credit" exact component={FashionIndustryCredit} />
            <Route path="/covid-funds" exact component={CovidFunds} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
