import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Aaditee</h1>
        <p className={styles.description}>
        I'm  software engineer who constantly seeks out innovative solutions to everyday problems. Reach out if you'd like to learn more!
        </p>
        <a href="https://drive.google.com/file/d/190Wrgyb7CO-oPb5ZI6IownCw0MTdL147/view?usp=drive_link" className={styles.contactBtn}>
          MY Resume
        </a>
        
      </div>
      <img
        src={"https://img.freepik.com/premium-vector/cute-girl-circle-sticker-banner_1639-49944.jpg?w=740"}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};