import React from 'react';
import sterlingIcon from '../assets/img/Group 3.svg';
import fashionFund from '../assets/img/fashion-fund.png';
import healthFund from '../assets/img/health-fund.png';
import covidFund from '../assets/img/covid19-fund.png';
import openAccountImg from '../assets/img/open-account.png';
import Header from '../components/Header';
import history from '../history';
import '../assets/styling/Landing.css';

function LandingPage() {
  return (
    <main>
      <section className="landing-sec1">
        <img src={sterlingIcon} alt="sterling bank" />
        <div className="landing-ctr-div">
          <h1>Find the right kind of funding you need</h1>
          <a href="#available-funds">
            <button className="cta">LEARN MORE</button>
          </a>
        </div>
      </section>
      <Header position="sticky" />
      <section id="available-funds" className="available-funds">
        <h2>AVAILABLE FUNDS</h2>
        <div className="fund-cards">
          <div className="fund-card" style={{background:`url(${fashionFund}) 0% 0% no-repeat padding-box`}}>
            <h3>FASHION INDUSTRY CREDIT</h3>
            <p>Building a fashion business is one of the most exciting things you can do, when you have the right support. That is why we have created a single digit interest rate loan at 9% to provide entrepreneurs in the fashion industry with all the financing they need to grow their business.</p>
            <a href="/fashion-industry-credit">
              <button className="cta">LEARN MORE</button>
            </a>
          </div>
          <div className="fund-card" style={{background:`url(${covidFund}) 0% 0% no-repeat padding-box`}}>
            <h3>COVID-19 TARGETED CREDIT FUND</h3>
            <p>The CBN has introduced a N50billion fund as a stimulus package to support households and MSMEs affected by COVID-19. Please see a summary below:</p>
            <a href="/covid-funds">
              <button className="cta">LEARN MORE</button>
            </a>
          </div>
          <div className="fund-card" style={{background:`url(${healthFund}) 0% 0% no-repeat padding-box`}}>
            <h3>HEALTH FUNDS</h3>
            <p>Building a fashion business is one of the most exciting things you can do, when you have the right support. That is why we have created a single digit interest rate loan at 9% to provide entrepreneurs in the fashion industry with all the financing they need to grow their business.</p>
            <a>
              <button className="cta">LEARN MORE</button>
            </a>
          </div>
        </div>
      </section>
      <section id="open-account" className="open-account"
        style={{background: `transparent url(${openAccountImg}) 0% 0% no-repeat padding-box`}}
      >
        <div className="open-acc-left">
          <h2>Open an Account today with sterling bank</h2>
          <p>It only takes less than five minutes</p>
        </div>
        <a href="https://sterlingonlineaccount.sterling.ng/#/" target="_blank">
          <button className="cta">OPEN ACCOUNT</button>
        </a>
      </section>
      <section id="footer" className="footer">
        <span>© 2020 Sterling Bank. All Rights Reserved</span>
        <span>Privacy</span>
        <span>Policy Terms and Conditions</span>
        <span>CBN Consumer Protection Regulation</span>
      </section>
    </main>
  );
}

export default LandingPage;
