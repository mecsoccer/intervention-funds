import React from 'react';
import Header from '../components/Header';
import subSectorsImg from '../assets/img/sub-sectors.png';
import eligibilityImg from '../assets/img/woman-wearing-white-and-multicolored-floral-v-neck-short-908934.png';
import whatsInForYouImg from '../assets/img/nathan-dumlao-x230a__cFO0-unsplash.png';
import openAccountImg from '../assets/img/open-account.png';
import history from '../history';
import '../assets/styling/FashionIndustry.css';

function FashionIndustryCredit() {
  return(
    <div>
      <Header></Header>
      <main className="main">
        <section id="fashion-funds-banner" className="banner">
          <h1>Fashion industry Credit</h1>
          <p>Building a fashion business is one of the most exciting things you can do, when you have the right support. That is why we have created a single digit interest rate loan at 9% to provide entrepreneurs in the fashion industry with all the financing they need to grow their business.</p>
          <a href="#img-txt-section">View Requirments</a>
          <a target="_blank" href="https://forms.office.com/Pages/ResponsePage.aspx?id=ep-KTPwRwk-QmQto9yoZfspIkzFQukZGiegFeGAPcIRUMzI2SUFMQlhBTjdYWkRPUkxVWjRENlFRUy4u">
            <button className="cta" style={{width:'auto',padding:'0 32px'}}>
              APPLY FOR THIS CREDIT
            </button>
          </a>
        </section>
        <section id="img-txt-section" className="img-txt-section">
          <div className="img1-txt2-display">
            <div
              style={{
                height:423,
                background:`transparent url(${subSectorsImg}) center center no-repeat padding-box`,
              }}
            ></div>
            <div>
              <h2>This is specific to the following sub-sectors:</h2>
              <ul>
                <li><span style={{paddingRight:5}}>1 </span> <span>Fashion designers</span> </li>
                <li><span style={{paddingRight:5}}>2 </span> <span>Uniform makers</span> </li>
                <li><span style={{paddingRight:5}}>3 </span> <span>Tailors</span> </li>
                <li><span style={{paddingRight:5}}>4 </span> <span>Shoe manufacturers</span></li>
                <li><span style={{paddingRight:5}}>5 </span> <span>Fashion school/hub, etc</span></li>
              </ul>
            </div>
          </div>
          <div className="txt1-img2-display">
            <div
              style={{
                height:423,
                background:`transparent url(${whatsInForYouImg}) center center no-repeat padding-box`,
              }}
            ></div>
            <div>
              <h2>What’s in it for You?</h2>
              <ul>
                <li><span style={{paddingRight:5}}>- </span> <span>Up to N20 Million for your fashion business.</span> </li>
                <li><span style={{paddingRight:5}}>- </span> Single digit (5% per annum) interest rate at 0.75% per month</li>
                <li><span style={{paddingRight:5}}>- </span> <span>No fees</span></li>
                <li><span style={{paddingRight:5}}>- </span> <span>Flexible repayment plan spread over 3 years</span></li>
                <li><span style={{paddingRight:5}}>- </span> <span>Customers can access up to 50% of average annual turnover</span></li>
              </ul>
            </div>
          </div>
          <div className="img1-txt2-display" style={{marginBottom:0}}>
            <div
              style={{
                height: 800,
                background:`transparent url(${eligibilityImg}) center center no-repeat padding-box`,
              }}
            ></div>
            <div>
              <h2>REQUIREMENTS & ELIGIBILITY TERMS</h2>
              <ul>
                <li><span style={{paddingRight:5}}>- </span> <span>Business must be duly registered with Corporate Affairs Commission with appropriate TIN and SCUML where applicable(Both Business names and Limited Liability Companies).</span> </li>
                <li><span style={{paddingRight:5}}>- </span> <span>Business must have been operating an account with the Bank for at least month.</span> </li>
                <li><span style={{paddingRight:5}}>- </span> <span>Qualified customers can access up to 60% of average monthly turnover).</span> </li>
                <li><span style={{paddingRight:5}}>- </span> <span>Turnover analysis on 12 months statements</span> </li>
                <li><span style={{paddingRight:5}}>- </span> <span>Satisfactory CRMS report of the customer (Borrower).</span> </li>
                <li><span style={{paddingRight:5}}>- </span> <span>Customer must not have any past due obligation with any Bank nor have any returned cheques in the last one (1) year.</span> </li>
              </ul>
            </div>
          </div>
        </section>
        <section id="apply" className="apply-section">
          <div><hr /></div>
          <h3>apply for Fashion Credit</h3>
          <a target="_blank" href="https://forms.office.com/Pages/ResponsePage.aspx?id=ep-KTPwRwk-QmQto9yoZfspIkzFQukZGiegFeGAPcIRUMzI2SUFMQlhBTjdYWkRPUkxVWjRENlFRUy4u">
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

export default FashionIndustryCredit;
