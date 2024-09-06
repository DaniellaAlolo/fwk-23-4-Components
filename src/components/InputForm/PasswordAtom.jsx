import styles from "./InputForm.module.css";

const PasswordAtom = () => {
  return (
    <div className={styles.formGroup}>
      <label className={styles.label} htmlFor="password">
        Password
      </label>
      <input
        className={styles.input}
        type="password"
        id="password"
        name="password"
      />
    </div>
  );
};
export default PasswordAtom;
