import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={"https://img.freepik.com/free-photo/view-3d-woman-using-laptop_23-2150710074.jpg?t=st=1715336547~exp=1715340147~hmac=ef1283279d9746fd1ea632e58edfed94584df3f4e4bca2564dc90452cc5e9833&w=740"}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={"https://github.com/CodeCompleteYT/react-portfolio/blob/main/assets/about/cursorIcon.png?raw=true"} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img  src={"https://cdn.iconscout.com/icon/free/png-512/free-python-2-226051.png?f=webp&w=256"} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Python Developer</h3>
              <p>
              Designed, code, and deploy development projects in the Python language. i also have worked on django.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={"https://cdn.iconscout.com/icon/premium/png-512-thumb/aws-5363099-4488889.png?f=webp&w=256"} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3> AWS Cloud Engineer</h3>
              <p>
                Handled various virtual machines and their configurations. Checked the configuration for load balancer and autoscaling group
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};