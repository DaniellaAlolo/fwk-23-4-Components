import React, { useEffect } from 'react';

const Captcha = ({ onCaptchaInputChange }) => {
  useEffect(() => {
    if (window.grecaptcha) {
      window.grecaptcha.enterprise.ready(() => {
        window.grecaptcha.enterprise.render("recaptcha-container", {
          sitekey: "6Ld793cqAAAAAKK85uBqw2cNDFNns9zTT2Va0Z4m", 
          callback: (token) => onCaptchaInputChange(token), 
        });
      });
    }
  }, [onCaptchaInputChange]);

  return (
    <div id="recaptcha-container"></div>
  );
};

export default Captcha;
