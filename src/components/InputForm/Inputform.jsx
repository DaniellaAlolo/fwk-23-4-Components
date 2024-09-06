import styles from "./InputForm.module.css";
import NameAtom from "./NameAtom";
import EmailAtom from "./EmailAtom";
import PasswordAtom from "./PasswordAtom";

const InputForm = () => {
  return (
    <>
      <h2 className={styles.title}>Register</h2>
      <NameAtom />
      <EmailAtom />
      <PasswordAtom />
    </>
  );
};

export default InputForm;
