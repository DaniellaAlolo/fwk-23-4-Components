import styles from "./InputForm.module.css";

const InputForm = () => {
  return (
    <form>
      <h2 className={styles.title}>Register</h2>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="name">
          Name
        </label>
        <input className={styles.input} type="text" id="name" name="name" />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="email">
          Email
        </label>
        <input className={styles.input} type="email" id="email" name="email" />
      </div>

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
    </form>
  );
};

export default InputForm;
