import React from 'react';
import Header from '../components/Header';
import eligibleParticipantsImg from '../assets/img/ryoji-iwata-n31JPLu8_Pw-unsplash.png';
import eligibleActivitiesImg from '../assets/img/noah-buscher-G0m9kKvkkB8-unsplash.png';
import loanLimitImg from '../assets/img/woman-wearing-purple-long-sleeved-shirt-standing-near-window-1181241.png';
import howToApplyImg from '../assets/img/two-woman-sitting-near-green-padded-chair-1181252.png';
import howDoWeHelpImg from '../assets/img/woman-wearing-black-sweatshirt-using-silver-macbook-1181230.png';
import openAccountImg from '../assets/img/open-account.png';
import '../assets/styling/FashionIndustry.css';
import '../assets/styling/CovidFund.css';

function CovidFunds() {
  return(
    <div>
      <Header></Header>
      <main className="main">
        <section id="covid-funds-banner" className="banner">
          <h1>COVID-19 Targeted Credit Fund</h1>
          <p style={{marginBottom:50}}>The CBN has introduced a N50billion fund as a stimulus package to support households and MSMEs affected by COVID-19. Please see a summary below:</p>
          <a target="_blank" href="https://nmfb.com.ng/covid-19-support/">
            <button className="cta" style={{width:'auto',padding:'0 32px'}}>APPLY FOR THIS CREDIT</button>
          </a>
        </section>
        <section id="img-txt-section" className="img-txt-section">
          <div className="txt1-img2-display">
            <div
              style={{
                height:423,
                background:`transparent url(${eligibleParticipantsImg}) center center no-repeat padding-box`,
              }}
            ></div>
            <div>
              <h2>Eligible Participants</h2>
              <ul>
                <li><span style={{paddingRight:5}}>- </span> <span>Households with verifiable evidence of livelihood adversely impacted by COVID-19</span> </li>
                <li><span style={{paddingRight:5}}>- </span> Existing enterprises with verifiable evidence of business activities adversely affected as a result of the COVID-19 pandemic</li>
                <li><span style={{paddingRight:5}}>- </span> <span>Enterprises with bankable plans to take advantage of opportunities arising from the COVID-19 pandemic.</span></li>
              </ul>
            </div>
          </div>
          <div className="img1-txt2-display">
            <div
              style={{
                height:423,
                background:`transparent url(${eligibleActivitiesImg}) center center no-repeat padding-box`,
              }}
            ></div>
            <div>
              <h2>Eligible activities</h2>
              <ul>
                <li><span style={{paddingRight:5}}>1 </span> <span>Agricultural value chain activities</span> </li>
                <li><span style={{paddingRight:5}}>2 </span> Hospitality (accommodation and food services)</li>
                <li><span style={{paddingRight:5}}>3 </span> <span>Health (pharmaceuticals and medical supplies)</span> </li>
                <li><span style={{paddingRight:5}}>4 </span> Airline service providers</li>
                <li><span style={{paddingRight:5}}>5 </span> <span>Manufacturing/value addition</span> </li>
                <li><span style={{paddingRight:5}}>6 </span> Trading</li>
              </ul>
            </div>
          </div>
          <div className="txt1-img2-display">
            <div
              style={{
                height:423,
                background:`transparent url(${loanLimitImg}) center center no-repeat padding-box`,
              }}
            ></div>
            <div>
              <h2>Loan Limit Brake Down</h2>
              <ul>
                <li><span style={{paddingRight:5}}>- </span> <span>SMEs – Maximum of N25million based on cashflow. Working capital is 25% of average of 3 years turnover if up to 3 years or 1 year turnover if less than 3 years</span> </li>
                <li><span style={{paddingRight:5}}>- </span> Households – Maximum of N3million</li>
                <li><span style={{paddingRight:5}}>- </span> <span>*Interest rate* – 5% per annum (all in) till February 2021 and thereafter 9%</span></li>
                <li><span style={{paddingRight:5}}>- </span> *Loan tenor* – Working capital – 1 year; Term loan – Maximum 3years (with up to one year moratorium)</li>
              </ul>
            </div>
          </div>
          <div className="img1-txt2-display">
            <div
              style={{
                height:423,
                background:`transparent url(${howToApplyImg}) center center no-repeat padding-box`,
              }}
            ></div>
            <div>
              <h2>How to apply for the Fund?</h2>
              <p style={{fontSize:18,fontWeight:600,lineHeight:'24px',color: '#DB353A'}}>
                *ALL APPLICATIONS ARE MADE DIRECTLY TO THE NIRSAL MICROFINANCE BANK IN VARIOUS STATES/POST OFFICES. THEY WILL PROCESS AND DISBURSE THE FUNDS FROM THE CBN.*
              </p>
              <p>Please apply through the following link. You can also view detailed guidelines as well: <a style={{color:'blue'}} target="_blank" href="https://nmfb.com.ng/covid-19-support/">https://nmfb.com.ng/covid-19-support/</a></p>
            </div>
          </div>
          <div className="txt1-img2-display" style={{marginBottom:0}}>
            <div
              style={{
                height:423,
                background:`transparent url(${howDoWeHelpImg}) center center no-repeat padding-box`,
              }}
            ></div>
            <div>
              <h2>How do we help?</h2>
              <p>Once submitted, please forward the following details to <a href="mailto:startrite@sterling.ng" style={{color:'blue'}}>startrite@sterling.ng</a></p>
              <ul>
                <li><span style={{paddingRight:5}}>1 </span> <span>Business Name</span> </li>
                <li><span style={{paddingRight:5}}>2 </span> Business sector of the customer,</li>
                <li><span style={{paddingRight:5}}>3 </span> <span>Amount applied for & Loan tenor</span> </li>
                <li><span style={{paddingRight:5}}>4 </span> Sterling Account Number</li>
                <li><span style={{paddingRight:5}}>5 </span> <span>Copy of evidence of impact of COVID-19 or plan to exploit opportunities</span> </li>
              </ul>
            </div>
          </div>
        </section>
        <section id="apply" className="apply-section" style={{padding:'0 5%'}}>
          <div><hr /></div>
          <h3>apply for COVID-19 Credit Fund</h3>
          <a target="_blank" href="https://nmfb.com.ng/covid-19-support/">
            <button className="cta">APPLY</button>
          </a>
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
    </div>
  );
}

export default CovidFunds;
