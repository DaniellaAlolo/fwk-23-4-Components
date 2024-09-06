import styles from './footer.module.css'

const Footer = () => {
    return ( <div className={styles.footer}>
        Ai assistant,
        <br />
        boost your productivity!
        <div className={styles.list}>
            <div>Bla</div>
            <div>Bla</div>
            <div>Bla</div>
        </div>
    </div> );
}
 
export default Footer;