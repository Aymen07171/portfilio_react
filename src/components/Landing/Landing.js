import React, { useEffect } from "react";
import styles from "./Landing.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Logo from "../Logo/Logo";
import Mouse from "../UI/Mouse";
import { Link } from "react-scroll";

const Landing = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div id="landing" className={styles.landing}>
      <div className={styles.left}>
        <div className={styles.leftWrapper}>
          <h2
            data-aos="fade-in"
            data-aos-duration="2000"
            className={styles.hookTitle}
          >
            Bringing Ideas to Life
          </h2>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.rightWrapper}>
          <h2
            data-aos="fade-in"
            data-aos-duration="2000"
            className={styles.intro}
          >
            Hello, My name is
          </h2>
          <Logo />
          <h1
            data-aos="fade-in"
            data-aos-duration="2000"
            className={styles.name}
          >
            Ayman ELATTAR
          </h1>
          <p
            data-aos="fade-in"
            data-aos-duration="2000"
            className={styles.description}
          >
            I'm a passionate Front End Developer with a keen eye for design and a 
            love for creating seamless user experiences. With expertise in modern 
            web technologies, I transform concepts into interactive, responsive, 
            and visually appealing websites.
          </p>
          <Link to="project" spy={true} smooth={true} offset={-30} duration={500}>
            <Mouse />
      </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;