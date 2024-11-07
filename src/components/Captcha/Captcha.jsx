import React, { useEffect } from 'react';

const Captcha = ({ onCaptchaInputChange }) => {
  useEffect(() => {
    if (window.grecaptcha) {
      window.grecaptcha.enterprise.ready(() => {
        window.grecaptcha.enterprise.render("recaptcha-container", {
          sitekey: "6LectHcqAAAAAObYvabpFgmiNjfkuHTqEcI8Vjme", 
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
