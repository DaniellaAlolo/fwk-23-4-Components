import React, { useEffect } from 'react';

const Captcha = ({ captchaToken, onCaptchaInputChange }) => {
  useEffect(() => {
    if (window.grecaptcha) {
      window.grecaptcha.enterprise.ready(() => {
        window.grecaptcha.enterprise.render("recaptcha-container", {
          sitekey: "6LectHcqAAAAAObYvabpFgmiNjfkuHTqEcI8Vjme", 
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
