import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      {/* Social media icons */}
      <div className={styles.socialIcons}>
        {/* Facebook */}
        <a
          className={`${styles.socialButton}`}
          style={{ backgroundColor: '#3b5998' }}
          href="#!"
          role="button"
        >
          <FaFacebookF />
        </a>

        {/* Twitter */}
        <a
          className={`${styles.socialButton}`}
          style={{ backgroundColor: '#55acee' }}
          href="#!"
          role="button"
        >
          <FaTwitter />
        </a>

        {/* Google */}
        <a
          className={`${styles.socialButton}`}
          style={{ backgroundColor: '#dd4b39' }}
          href="#!"
          role="button"
        >
          <FaGoogle />
        </a>

        {/* Instagram */}
        <a
          className={`${styles.socialButton}`}
          style={{ backgroundColor: '#ac2bac' }}
          href="#!"
          role="button"
        >
          <FaInstagram />
        </a>

        {/* Linkedin */}
        <a
          className={`${styles.socialButton}`}
          style={{ backgroundColor: '#0082ca' }}
          href="#!"
          role="button"
        >
          <FaLinkedinIn />
        </a>

        {/* Github */}
        <a
          className={`${styles.socialButton}`}
          style={{ backgroundColor: '#333333' }}
          href="#!"
          role="button"
        >
          <FaGithub />
        </a>
      </div>

      {/* Copyright section */}
      <div className={styles.footerText}>
        © 2024 Copyright:
        <a  className="text-body"> Group5</a>
      </div>
    </footer>
  );
};

export default Footer;
