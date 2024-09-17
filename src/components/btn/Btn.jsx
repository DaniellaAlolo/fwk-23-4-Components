import styles from './Btn.module.css';

const Button = ({ text, onClick }) => {
  return (
    <button className={styles.submitBtn} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
