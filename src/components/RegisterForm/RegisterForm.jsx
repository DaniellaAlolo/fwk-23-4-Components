import styles from "./RegisterForm.module.css";
import UsernameAtom from "./UsernameAtom";
import EmailAtom from "./EmailAtom";
import PasswordAtom from "./PasswordAtom";
import RegisterBtn from "./RegisterBtn";

const RegisterForm = () => {
  return (
    <>
      <form className={styles.form}>
        <h2 className={styles.title}>Register</h2>
        <UsernameAtom />
        <EmailAtom />
        <PasswordAtom />
        <RegisterBtn />
      </form>
    </>
  );
};

export default RegisterForm;
