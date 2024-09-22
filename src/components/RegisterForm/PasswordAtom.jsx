import styles from "./RegisterForm.module.css";

const PasswordAtom = ({ onPasswordChange, value }) => {
  const handlePasswordChange = (e) => {
    onPasswordChange(e.target.value);
  };

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
        onChange={handlePasswordChange}
        value={value}
        placeholder="Enter passowrd"
      />
    </div>
  );
};
export default PasswordAtom;
