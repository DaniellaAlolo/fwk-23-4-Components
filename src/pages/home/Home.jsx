import Sidebar from '../../components/Sidebar/Sidebar'
import Message from '../../components/message/Message'
import Chat from '../../components/chat/Chat'
import styles from './Home.module.css'

const Home = () => {
    return (
        <div className={styles.home}>
            <Sidebar />
            <div className={styles.chatWrapper}>
                <Message />
                <Chat />
            </div>
        </div>
    );
}

export default Home;