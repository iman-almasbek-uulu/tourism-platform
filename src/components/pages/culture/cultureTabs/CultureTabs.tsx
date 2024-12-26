import React from "react";
import styles from "./CultureTabs.module.scss";

interface CultureTabsProps {
  topHeading: string;
  topParagraph: string;
  mainPost: string;
  mainHeading: string;
  mainParagraph: string;
}
const CultureTabs = ({
  topHeading,
  topParagraph,
  mainPost,
  mainHeading,
  mainParagraph,
}: CultureTabsProps) => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles["muted-background"]}></div>
          <h1 className={styles["top-heading"]}>{topHeading}</h1>
          <p className={styles["top-paragraph"]}>{topParagraph}</p>
        </div>
        <div className={styles.main}>
          <div className={styles.img}>{mainPost}</div>
          <div className={styles["main-text"]}>
            <h3 className={styles["main-heading"]}>{mainHeading}</h3>
            <p className={styles["main-paragraph"]}>{mainParagraph}</p>
          </div>
        </div>
      </div>
    </section>

  );
};

export default CultureTabs;
