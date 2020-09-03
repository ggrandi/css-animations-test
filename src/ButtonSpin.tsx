import React from "react";
import styles from "./ButtonSpin.module.css";

interface ButtonSpinProps {}

const ButtonSpin: React.FC<ButtonSpinProps> = () => {
  return (
    <>
      <p>Click the button to Spin it</p>
      <button className={styles.button}>Click Me</button>
    </>
  );
};

export default ButtonSpin;
