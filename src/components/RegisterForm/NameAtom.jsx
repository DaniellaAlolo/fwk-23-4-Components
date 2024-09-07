import styles from "./RegisterForm.module.css";

const NameAtom = () => {
  return (
    <form>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="name">
          Name
        </label>
        <input className={styles.input} type="text" id="name" name="name" />
      </div>
    </form>
  );
};

export default NameAtom;
