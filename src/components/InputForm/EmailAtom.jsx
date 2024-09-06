import styles from "./InputForm.module.css";

const EmailAtom = () => {
  return (
    <div className={styles.formGroup}>
      <label className={styles.label} htmlFor="email">
        Email
      </label>
      <input className={styles.input} type="email" id="email" name="email" />
    </div>
  );
};

export default EmailAtom;
