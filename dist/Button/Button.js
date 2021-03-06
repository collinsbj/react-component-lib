import React from "react";
import styles from "./Button.module.scss";

function Button(props) {
  const variants = props.variants ? props.variants.split(" ") : [];
  const className = `${styles.button} ${variants.map(variant => `${styles[variant]}`).join(" ")}`;
  return /*#__PURE__*/React.createElement("button", {
    className: className
  }, props.children);
}

export default Button;