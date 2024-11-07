import React, { useEffect, useState } from 'react';

const Captcha = ({ onCaptchaInputChange }) => {
  const [captchaRendered, setCaptchaRendered] = useState(false); 

  useEffect(() => {
    if (window.grecaptcha && !captchaRendered) {
      window.grecaptcha.enterprise.ready(() => {
        window.grecaptcha.enterprise.render("recaptcha-container", {
          sitekey: "6Ld793cqAAAAACMbljOBJpqI1E3i-_U9pu8BdOnF",
          callback: onCaptchaInputChange,
        });
        setCaptchaRendered(true); 
      });
    }
  }, [onCaptchaInputChange, captchaRendered]);

  return <div id="recaptcha-container"></div>;
};

export default Captcha;
