import React, { useEffect, useState } from 'react';

const Captcha = ({ onCaptchaInputChange }) => {
  const [captchaRendered, setCaptchaRendered] = useState(false); 

  useEffect(() => {
    if (window.grecaptcha && !captchaRendered) {
      window.grecaptcha.enterprise.ready(() => {
        window.grecaptcha.enterprise.render("recaptcha-container", {
          sitekey: "6LectHcqAAAAAObYvabpFgmiNjfkuHTqEcI8Vjme",
          callback: onCaptchaInputChange,
        });
        setCaptchaRendered(true); 
      });
    }
  }, [onCaptchaInputChange, captchaRendered]);

  return <div id="recaptcha-container"></div>;
};

export default Captcha;
