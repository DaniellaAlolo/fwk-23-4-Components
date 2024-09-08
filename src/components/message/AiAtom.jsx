import styles from "./message.module.css";
import { FaBrain } from "react-icons/fa";

const AiAtom = () => {
    return (
        <div className={styles.aiAvatar}>
            <FaBrain
                style={{ marginLeft: "auto", marginRight: "auto" }}
                size={30}
                color="white"
            />
        </div>
    );
};

export default AiAtom;
