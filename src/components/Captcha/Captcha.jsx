import React, { useEffect, useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";

const Captcha = ({ onCaptchaInputChange }) => {


  return (
    <ReCAPTCHA
      sitekey="6Le-Xn4qAAAAAKcKDIn7GyWZPc6_CHjn-rV5k-v1"
    />
  );
};

export default Captcha;
