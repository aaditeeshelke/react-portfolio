import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={"https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-256.png"} alt="Email icon" />
          <a href="mailto:shelkeaaditee45@gmail.com">shelkeaaditee45@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={"https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/aaditee-shelke-450a59225/">linkedin.com/aaditeeshelke</a>
        </li>
        <li className={styles.link}>
          <img src={("https://cdn0.iconfinder.com/data/icons/shift-logotypes/32/Github-256.png")} alt="Github icon" />
          <a href="https://github.com/aaditeeshelke">github.com/aaditeeshelke</a>
        </li>
      </ul>
    </footer>
  );
};