import React from 'react';
import sterlingIcon from '../assets/img/sterling-logo-off-white.svg';
import history from '../history';
import '../assets/styling/Header.css';

function Header(props) {
  return (
    <nav style={{position: props.position ? props.position : 'fixed'}}>
      <img src={sterlingIcon} alt="sterling bank" onClick={() => history.push('/')} />
      <ul>
        <li><a href="/fashion-industry-credit">FASHION FUNDS</a></li>
        <li><a href="/covid-funds">COVID-19 FUNDS</a></li>
      </ul>
    </nav>

  );
}

export default Header;
