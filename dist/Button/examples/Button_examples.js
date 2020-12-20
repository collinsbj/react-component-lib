import React from "react";
import Button from "../index";
import { Search } from "@material-ui/icons";

function ButtonExamples(params) {
  const wrapperStyles = {
    padding: "50px 0",
    width: "fit-content",
    minWidth: "280px",
    alignItems: "center",
    justifyContent: "center",
    display: "flex"
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: "#f0f0f0",
      ...wrapperStyles
    }
  }, /*#__PURE__*/React.createElement(Button, null, "Button")), /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: "#4285f4",
      ...wrapperStyles
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variants: "blue"
  }, "Button")), /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: "#db4437",
      ...wrapperStyles
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variants: "red"
  }, "Button")), /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: "#f4b400",
      ...wrapperStyles
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variants: "yellow"
  }, "Button")), /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: "#0f9d58",
      ...wrapperStyles
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variants: "green"
  }, "Button")), /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: "#f0f0f0",
      ...wrapperStyles
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variants: "concave"
  }, "Button")), /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: "#4285f4",
      ...wrapperStyles
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variants: "blue convex"
  }, "Button")), /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: "#db4437",
      ...wrapperStyles
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variants: "red pressed"
  }, "Button")), /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: "#f4b400",
      ...wrapperStyles
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variants: "yellow icon"
  }, /*#__PURE__*/React.createElement(Search, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: "#0f9d58",
      ...wrapperStyles
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variants: "green"
  }, /*#__PURE__*/React.createElement(Search, {
    style: {
      fontSize: 32
    }
  }), /*#__PURE__*/React.createElement("div", null, "Search"))));
}

export default ButtonExamples;