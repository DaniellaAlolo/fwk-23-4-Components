import Sidebar from '../../components/Sidebar/Sidebar'
import Chat from '../../components/chat/Chat'
import styles from './Home.module.css'

const Home = () => {
    return (
        <div className={styles.home}>
            <Sidebar />
            <div className={styles.chatWrapper}>
                <Chat />
            </div>
        </div>
    );
}

export default Home;