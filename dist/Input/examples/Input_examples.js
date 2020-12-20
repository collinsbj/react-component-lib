import React from "react";
import Input from "../index";
import { Search } from "@material-ui/icons";

function InputExamples(params) {
  const wrapperStyles = {
    padding: "50px 0",
    width: "fit-content",
    minWidth: "400px",
    alignItems: "center",
    justifyContent: "center",
    display: "flex"
  };

  function handleChange(value) {
    console.log(value);
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: "#f0f0f0",
      ...wrapperStyles
    }
  }, /*#__PURE__*/React.createElement(Input, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: "#4285f4",
      ...wrapperStyles
    }
  }, /*#__PURE__*/React.createElement(Input, {
    variants: "blue"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: "#db4437",
      ...wrapperStyles
    }
  }, /*#__PURE__*/React.createElement(Input, {
    variants: "red"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: "#f4b400",
      ...wrapperStyles
    }
  }, /*#__PURE__*/React.createElement(Input, {
    variants: "yellow"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: "#0f9d58",
      ...wrapperStyles
    }
  }, /*#__PURE__*/React.createElement(Input, {
    variants: "green"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: "#f0f0f0",
      ...wrapperStyles
    }
  }, /*#__PURE__*/React.createElement(Input, {
    variants: "concave"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: "#4285f4",
      ...wrapperStyles
    }
  }, /*#__PURE__*/React.createElement(Input, {
    variants: "blue convex"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: "#db4437",
      ...wrapperStyles
    }
  }, /*#__PURE__*/React.createElement(Input, {
    variants: "red pressed"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: "#f4b400",
      ...wrapperStyles
    }
  }, /*#__PURE__*/React.createElement(Input, {
    variants: "yellow"
  }, /*#__PURE__*/React.createElement(Search, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: "#0f9d58",
      ...wrapperStyles
    }
  }, /*#__PURE__*/React.createElement(Input, {
    variants: "green",
    value: "Passed Value"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: "#f0f0f0",
      ...wrapperStyles
    }
  }, /*#__PURE__*/React.createElement(Input, {
    handleChange: handleChange,
    value: "Handle Change"
  })));
}

export default InputExamples;