import "../styles/styles.css";

const PrivacyPolicy = () => {
  return (
    <div className="container">
      <h1>Privacy Policy</h1>
      <div className="privacy-content">
        <div className="row1">
          <div className="privacy-text">
            <h4>Introduction to Privacy Policy</h4>
            <div className="decorating-line"></div>
            <p>
            At MoyoLedgers, we are committed to protecting your privacy and ensuring that your personal and financial data remains secure. 
            This privacy policy outlines how we collect, use, and protect your information when you use our services. By using MoyoLedgers, 
            you agree to the terms set out in this 
            policy. We encourage you to review this policy periodically to stay informed about how we are safeguarding your information.
            </p>
          </div>
          <div>
            <h1 className="number">01</h1>
          </div>
        </div>

        <div className="row1">
          <div>
            <h1 className="number">02</h1>
          </div>
          <div className="privacy-text">
            <h4>Information We Collect</h4>
            <div className="decorating-line"></div>
            <p>
            We collect various types of information to provide you with the best service. This 
            includes personal data such as your name, email address, and contact details, as well 
            as financial information such as transaction records, account details, and tax-related 
            data. We also gather non-personal information, including device information, usage data, 
            and cookies, to improve the functionality and performance of MoyoLedgers.
            </p>
          </div>
        </div>

        <div className="row1">
          <div className="privacy-text">
            <h4>How We Use Your Information</h4>
            <div className="decorating-line"></div>
            <p>
             The information we collect is used to enhance your experience with MoyoLedgers. We use your personal 
             and financial data to provide accounting services, generate reports, and ensure compliance with relevant 
             regulations. Additionally, we may use your information to communicate with you about updates, offers, and 
             support. Rest assured, we do not sell or rent your personal data to third parties.
            </p>
          </div>
          <div>
            <h1 className="number">03</h1>
          </div>
        </div>

        <div className="row1">
          <div>
            <h1 className="number">04</h1>
          </div>
          <div className="privacy-text">
            <h4>Data Security and Retention</h4>
            <div className="decorating-line"></div>
            <p>
             We take the security of your data seriously and implement advanced encryption techniques and security measures to 
             protect your information from unauthorized access. Your data is stored in secure servers and is retained only for 
             as long as necessary to provide our services and comply with legal obligations. If you ever decide to discontinue 
             using MoyoLedgers, your data will be securely deleted in accordance with our data retention policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
