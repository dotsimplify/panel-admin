import React from "react";
import { Field } from "formik";
import { BiBlock } from "react-icons/bi";
import styles from "./RadioButton.module.css";

const RadioButton = (props) => {
  return (
    <div className="rounded-lg  flex items-center mx-4 ">
      <BiBlock />

      <label>
        <Field name={props.name} type="checkbox" className={styles.checkkbox} />
        <span className={styles.checkboxSpan}></span>
      </label>
      <BiBlock />
    </div>
  );
};

export default RadioButton;
