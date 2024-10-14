import React, { useState } from "react";
import styles from "./RegisterForm.module.css";
import { MdOutlineAccountCircle } from "react-icons/md";
import LoginSidebar from "../Login/LoginSidebar";
import Btn from "../Btn/Btn";
import { EmailAtom, PasswordAtom } from "../Atoms";
import { useAuth } from "../../hooks/auth";
import { GDPRConsent } from "../GDPRConsent";

const RegisterForm = () => {
  const { handleRegisterClick } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [consentGiven, setConsentGiven] = useState(false);
  const [messageState, setMessageState] = useState(""); // Använd en separat state för meddelanden

  const handleConsentChange = (e) => {
    setConsentGiven(e.target.checked);

    // Hantera meddelande beroende på samtycke
    if (e.target.checked) {
      setMessageState("Du har godkänt lagringen av dina data!");
    } else {
      setMessageState("Du måste godkänna att vi lagrar dina uppgifter!");
    }
  };

  const handleRegister = (e) => {
    e.preventDefault(); // Förhindra formulärinlämning

    // Manuell validering av email och samtycke
    if (!email) {
      setMessageState("Email-fältet får inte vara tomt!"); // Uppdatera message
      return;
    }

    if (!password) {
      setMessageState("Password-fältet får inte vara tomt!"); // Uppdatera message
      return;
    }

    if (!consentGiven) {
      setMessageState("Du måste godkänna att vi lagrar dina uppgifter!"); // Uppdatera message
      return;
    }

    // Om alla fält är giltiga, fortsätt med registreringen
    handleRegisterClick(email, password); // Skicka email och password som argument
    setMessageState("Registreringen lyckades!"); // Meddelande för framgångsrik registrering
  };

  return (
    <div className={styles.register}>
      <div className={styles.registerWrapper}>
        <h1>AI APP NAME</h1>
        <form className={styles.form}>
          <h2 className={styles.title}>Register</h2>
          <EmailAtom email={email} onEmailChange={setEmail} />
          <PasswordAtom password={password} onPasswordChange={setPassword} />
          <GDPRConsent
            isChecked={consentGiven}
            onConsentChange={handleConsentChange} // Använd korrekt funktion här
          />
          <Btn
            text="Register"
            icon={<MdOutlineAccountCircle />}
            onClick={handleRegister} // Använd registreringslogiken här
          />
          {messageState && (
            <p
              className={`${styles.message} ${
                messageState.includes("lyckades")
                  ? styles.success
                  : styles.error
              }`}
            >
              {messageState} {/* Använd messageState istället för message */}
            </p>
          )}
        </form>
        <a href="login">Already have an account? Go to login</a>
      </div>
      <LoginSidebar />
    </div>
  );
};

export default RegisterForm;
