import styles from "./RegisterForm.module.css";
import UsernameAtom from "./UsernameAtom";
import EmailAtom from "./EmailAtom";
import PasswordAtom from "./PasswordAtom";
import RegisterBtn from "./RegisterBtn";

const RegisterForm = () => {
  return (
    <>
      <h2 classUsername={styles.title}>RegisterForm</h2>
      <UsernameAtom />
      <EmailAtom />
      <PasswordAtom />
      <RegisterBtn />
    </>
  );
};

export default RegisterForm;
