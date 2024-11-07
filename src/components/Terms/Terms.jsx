import styles from "../RegisterForm/RegisterForm.module.css";
import React from "react";

const Terms = ({ onTermsChange, isChecked }) => {
  const handleTermsChange = (e) => {
    setTermsGiven(handleTermsChange);
  };

  return (
    <div className={styles.consentWrapper}>
      <label className={styles.label}>
        <input
          type="checkbox"
          id="terms"
          checked={isChecked}
          onChange={onTermsChange}
        />
        <label htmlFor="terms">
          Jag har läst och godkänner användarvillkor.
        </label>
      </label>
    </div>
  );
};

export default Terms;
