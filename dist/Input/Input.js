import React, { useState, useEffect } from "react";
import styles from "./Input.module.scss";

function Input(props) {
  const [value, setValue] = useState("");
  useEffect(() => {
    if (props.value) setValue(props.value);
  }, [props.value]);

  function handleChange(event) {
    setValue(event.target.value);
    if (props.handleChange) props.handleChange(event.target.value);
  }

  const variants = props.variants ? props.variants.split(" ") : [];
  const className = `${styles.input} ${variants.map(variant => `${styles[variant]}`).join(" ")}`;
  return /*#__PURE__*/React.createElement("div", {
    className: className
  }, props.children, /*#__PURE__*/React.createElement("input", {
    value: value,
    placeholder: "Placeholder",
    onChange: handleChange
  }));
}

export default Input;