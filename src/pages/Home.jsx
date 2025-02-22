import "../styles/styles.css";
import { Link } from "react-router-dom";
import phoneImg from "../assets/home-img.png";
import arrow from "../assets/arrow.png";
import phoneVisaImg from "../assets/about-img.png";
import getStarted from "../assets/call-to-action.png";

const Home = () => {
  return (
    <div className="home-container">
      <div className="trusted-element">
        <div className="profile-pics">
          <div className="profile-pic1"></div>
          <div className="profile-pic2"></div>
          <div className="profile-pic3"></div>
        </div>
        <p>Trusted by 21,000+ People</p>
      </div>
      <h1 className="home-heading">MoyoLedgers - your AI Accounting Assistant</h1>
      <div className="hero-btns">
      <Link to="/terms-of-use">
       <button className="terms-btn">Terms Of Use</button>
      </Link>
      <Link to="/privacy-policy">
       <button className="policy-btn">Privacy Policy <i class="ri-arrow-right-s-line"></i></button>
      </Link>
      </div>
      <div className="welcome-image">
        <img src={phoneImg} alt="Logo" className="home-img" />
      </div>

      <div className="section2">
        <div className="section-wrapper">
          <div className="text-icons">
           <p>Save Time and Money</p>
           <div className="icons">
            <i class="ri-medal-2-fill"></i>
            <i class="ri-quill-pen-ai-line"></i>
            <i class="ri-coins-line"></i>
            <i class="ri-emotion-happy-line"></i>
           </div>
          </div>

          <div className="benefits-container">
           <div>
             <div className="subheading">
               <div className="line"></div>
               < p>BENEFITS</p>
             </div>
             <h1 className="main-heading">WHY CHOOSE US</h1>

             <div className="benefits">
              <div className="column">
              <i class="ri-number-1"></i>
              <p className="big-txt">Quotations</p>
              <p className="small-txt">MoyoLedgers helps businesses create quick, accurate, and professional quotations effortlessly. Save time, reduce errors, and streamline your workflow—all in one place!</p>
              </div>

              <div className="arrow-img">
                <img src={arrow} alt="arrow" />
              </div>

              <div className="column">
              <i class="ri-number-2"></i>
              <p className="big-txt">Invoices</p>
              <p className="small-txt">MoyoLedgers helps businesses create quick, accurate, and professional invoices effortlessly.</p>
              </div>

              <div className="arrow-img">
                <img src={arrow} alt="arrow" />
              </div>

              <div className="column">
              <i class="ri-number-3"></i>
              <p className="big-txt">Receipts</p>
              <p className="small-txt">MoyoLedgers helps businesses create quick, accurate, and professional receipts effortlessly. Save time, reduce errors, and streamline your workflow—all in one place!</p>
              </div>


             </div>
           </div>
          </div>
        </div>
      </div>

      <div className="section3">
       <div className="section-wrapper">
         <div className="section-contents">
          <div className="about-img">
            <img src={phoneVisaImg} alt="phone" />
          </div>

          <div className="about-info">
             <div className="subheading about-heading">
               <div className="line"></div>
               < p>APPLICATION</p>
             </div>
             <h1 className="main-heading main2">FEATURES</h1>
             <p className="small-txt about-txt">
               MoyoLedgers is a business management platform designed for handling quotations, invoices, and financial tracking. 
               The dashboard provides a clear financial overview, showing pending, paid, and partially paid amounts.
             </p>

             <p className="small-txt about-txt">
               The Quotation and Invoice Management System simplifies creating, tracking, and managing business transactions. 
               Businesses can generate accurate quotations and send invoices efficiently.
             </p>

             <p className="small-txt about-txt">
             With multi-business support, users can manage multiple businesses, customers, and products from a single platform. 
             The intuitive UI and dropdown navigation ensure seamless access to key management sections like users, customers, and services.
             </p>

            <div className="readmore-btn">
              <a href="#read-more">
               <button className="policy-btn">Raad More <i class="ri-arrow-right-s-line"></i></button>
             </a>
            </div>

          </div>
         </div>
       </div>
      </div>

      <div className="section4">
       <div className="section-wrapper testimonial">
            <div className="subheading about-heading">
               <div className="line"></div>
               < p>OUR CLIENTS</p>
            </div>
             <h1 className="main-heading main2">TESTIMONIALS</h1>
             <p className="small-txt about-txt">
             Our clients' experiences speak for themselves. We take pride in delivering exceptional service, and their words reflect the trust and satisfaction we've built. From outstanding results 
             to seamless collaboration, these testimonials showcase the real impact of our work. See what our happy clients have to say!
             </p>

            <div className="card-wrapper">
              <div className="back">
                {/* <div className="image-card client1"></div> */}
                <div className="text-container">
                  <p className="small-txt name-txt">Mr Simon - <i>Business Owner</i></p>
                  <p className="small-txt testimony-txt">
                   <i class="ri-double-quotes-l"></i> MoyoLedgers made quoting effortless! It’s fast, accurate, and saves us so much time. Highly recommendMoyoLedgers made quoting effortless! It's fast, accurate, and saves us so much time. Highly recommend <i class="ri-double-quotes-r"></i>
                  </p>
                  <div>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                  </div>
                </div>
              </div>

              <div className="back back2">
                {/* <div className="image-card client2"></div> */}
                <div className="text-container">
                  <p className="small-txt name-txt">Leo - <i>Accountant</i></p>
                  <p className="small-txt testimony-txt">
                   <i class="ri-double-quotes-l"></i> MoyoLedgers simplified our quotations! Quick, accurate, and hassle-free. I highly recommend it for anyone looking for something efficient. <i class="ri-double-quotes-r"></i>
                  </p>
                  <div>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                  </div>
                </div>
              </div>

              <div className="back">
                {/* <div className="image-card client3"></div> */}
                <div className="text-container">
                  <p className="small-txt name-txt"> Ms Linda - <i>Entrepreneur</i></p>
                  <p className="small-txt testimony-txt">
                   <i class="ri-double-quotes-l"></i> MoyoLedgers-AI simplifies our accounting, saving time and reducing errors. A must-have for any business! I have been using it for a year now havent gotten any issues <i class="ri-double-quotes-r"></i>
                  </p>
                  <div>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                  </div>
                </div>
              </div>
            </div>
       </div>
      </div>

      <div className="section5" id="read-more">
        <div className="section-wrapper">
          <div className="contents-container">
            <div className="left-div">
              <div className="subheading2 about-heading">
                <div className="line"></div>
                < p>FREQUENTLY ASKED</p>
              </div>
              <h1 className="main-heading2">QUESTIONS</h1>
              <div className="question-img"></div>
            </div>

            <div className="right-div">
              <div className="first-row">
                <div className="question-div">
                  <div className="question">
                    <p><i class="ri-question-fill"></i> What is MoyoLedgers?</p>
                  </div>
                  <p className="answer">MoyoLedgers is an AI-powered accounting assistant designed to help businesses manage their financial data effortlessly. It automates tasks such as bookkeeping, expense tracking, invoicing, and reporting, allowing you to focus on growing your business.</p>
                </div>

                <div className="question-div">
                  <div className="question">
                    <p><i class="ri-question-fill"></i> How does MoyoLedgers work?</p>
                  </div>
                  <p className="answer">MoyoLedgers integrates with your financial systems and uses artificial intelligence to categorize transactions, generate reports, and assist with financial decision-making. It learns from your input and improves its accuracy over time.</p>
                </div>
              </div>

              {/* SECOND ROW */}
              <div className="first-row">
                <div className="question-div">
                  <div className="question">
                    <p><i class="ri-question-fill"></i> Is MoyoLedgers suitable for small businesses?</p>
                  </div>
                  <p className="answer"> Yes, MoyoLedgers is perfect for small businesses looking to simplify their accounting processes. It is user-friendly and scalable, making it easy to manage your finances as your business grows.</p>
                </div>

                <div className="question-div">
                  <div className="question">
                    <p><i class="ri-question-fill"></i> Can MoyoLedgers integrate with my existing accounting software?</p>
                  </div>
                  <p className="answer">Yes, MoyoLedgers can integrate with various accounting software, such as QuickBooks, Xero, and others. This allows seamless data transfer and ensures all your financial information is in one place.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section6">
        <div className="section-wrapper">
        <div className="subheading about-heading">
               <div className="line"></div>
               < p>GET STARTED</p>
            </div>
             <h1 className="main-heading main2">TODAY</h1>
             <p className="small-txt about-txt">
             Take control of your finances today with MoyoLedgers - the smart, AI-powered accounting assistant designed to 
             simplify your accounting tasks and help your business thrive. Whether you're a small business owner or a 
             growing enterprise, MoyoLedgers streamlines bookkeeping, invoicing, and reporting, so you can focus on what 
             really matters. Start your free trial now and experience the future of accounting. Let MoyoLedgers handle 
             the numbers, while you handle the growth!
             </p>

             <div className="about-img">
               <img src={getStarted} alt="phone" />
             </div>
        </div>
      </div>

      <div className="contact-section">
        <div className="section-wrapper contact-wrapper">

        <div>
            <div className="contact-cards">
            <div className="contact-us">
              <i class="ri-map-pin-line"></i>
              <p className="contact-name">Visit Us</p>
              <p className="description">5031 Crowhill Veiws, Harare, ZW</p>
               <a href="https://www.google.com/maps/place/Crowhill+Views,+Harare/@-17.6830863,31.1454268,17z/data=!3m1!4b1!4m6!3m5!1s0x1931b1ab3dfc48fd:0x7ba07c70b6f9f2a5!8m2!3d-17.6830914!4d31.1480017!16s%2Fg%2F11mxvdybhj?entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoASAFQAw%3D%3D">
                <button className="policy-btn">Location <i class="ri-arrow-right-s-line"></i></button>
               </a>
            </div>

            <div className="contact-us call-card">
              <i class="ri-phone-line"></i>
              <p className="contact-name">Call Us</p>
              <p className="description">+263 772 72 4514 / +27 646 39 4007</p>
               <a href="tel:+263772724514">
                <button className="call-btn">Call <i class="ri-arrow-right-s-line"></i></button>
               </a>
            </div>

            <div className="contact-us">
              <i class="ri-mail-line"></i>
              <p className="contact-name">E-mail Us</p>
              <p className="description">support@lioncapventures.com</p>
               <a href="mailto:support@lioncapventures.com">
                <button className="policy-btn">E-mail <i class="ri-arrow-right-s-line"></i></button>
               </a>
            </div>

          </div>
               <div className="map-div">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6097.898295591764!2d31.145782611565995!3d-17.683152707703798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931b1ab3dfc48fd%3A0x7ba07c70b6f9f2a5!2sCrowhill%20Views%2C%20Harare!5e0!3m2!1sen!2szw!4v1739923783846!5m2!1sen!2szw" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
          </div>
          
        </div>
      </div>

    </div>
  );
};

export default Home;