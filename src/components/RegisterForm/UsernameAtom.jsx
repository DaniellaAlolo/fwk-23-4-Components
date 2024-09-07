import styles from "./RegisterForm.module.css";

const UsernameAtom = () => {
  return (
    <form>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="ursername">
          Username
        </label>
        <input
          className={styles.input}
          type="text"
          id="ursername"
          ursername="ursername"
        />
      </div>
    </form>
  );
};

export default UsernameAtom;
