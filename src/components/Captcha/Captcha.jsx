import React, { useEffect } from 'react';

const Captcha = ({ captchaToken, onCaptchaInputChange }) => {
  useEffect(() => {
    if (window.grecaptcha && !document.getElementById('recaptcha-container').hasChildNodes()) {
      window.grecaptcha.enterprise.ready(() => {
        window.grecaptcha.enterprise.render("recaptcha-container", {
          sitekey: "6Ld793cqAAAAACMbljOBJpqI1E3i-_U9pu8BdOnF", 
          callback: onCaptchaInputChange, 
        });
      });
    }
  }, [onCaptchaInputChange]);

  return (
    <div id="recaptcha-container"></div> 
  );
};

export default Captcha;
