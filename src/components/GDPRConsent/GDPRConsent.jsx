import styles from "../RegisterForm/RegisterForm.module.css";
import React from 'react';

const GDPRConsent = ({ onConsentChange, isChecked }) => {
  const handleConsentChange = (e) => {
    setConsentGiven(handleConsentChange);
  };

  return (
    <div className={styles.consentWrapper}>
      <label className={styles.label}>
        <input
          type="checkbox"
          id="gdpr-consent"
          checked={isChecked}
          onChange={onConsentChange}
        />
        <label htmlFor="gdpr-consent">
          Jag godkänner att mina uppgifter lagras enligt GDPR.
        </label>
      </label>
    </div>
  );
};
export default GDPRConsent;
