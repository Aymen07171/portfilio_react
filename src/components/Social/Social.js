import styles from "./Social.module.css";
import {
  faGithub,
  faGitlab,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Social = () => {
  return (
    <div className={styles.socials}>
      <ul data-aos="fade-up" className={styles.list}>
        <li>
          <a
            href="https://github.com/Aymen07171"
            aria-label="Github"
            className={styles.link}
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              className={styles.font}
              icon={faGithub}
              color="#DD0031"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/ayman-el-attar-50a37620a/"
            aria-label="Github"
            className={styles.link}
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              className={styles.font}
              icon={faLinkedin}
              color="#DD0031"
            />
          </a>
        </li>
        <li>
          <a
            href="https://gitlab.com/Aymen07171"
            aria-label="Github"
            className={styles.link}
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              className={styles.font}
              icon={faGitlab}
              color="#DD0031"
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Social;
