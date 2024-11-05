import styles from "./AccountDeletion.module.css";
import Btn from "../Btn/Btn.jsx";
import { MdOutlineDelete } from "react-icons/md";

const AccountDeletion = () => {
  return (
    <div className={styles.accSettingsWrapper}>
      <h3>Delete your account</h3>
      <p>
        Delete all your account and all associated information with your
        account.
      </p>
      <Btn
        text={"Delete Account"}
        backgroundColor="red"
        icon={<MdOutlineDelete />}
      />
    </div>
  );
};

export default AccountDeletion;
