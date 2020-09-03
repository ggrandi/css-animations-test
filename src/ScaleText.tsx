import React from "react";
import styles from "./ScaleText.module.css";

interface ScaleTextProps {}

const ScaleText: React.FC<ScaleTextProps> = () => {
  return (
    <>
      <p>Hover over the text to scale it</p>
      <p className={styles.text}>Hello</p>
      <p className={styles.text}>World</p>
    </>
  );
};

export default ScaleText;
