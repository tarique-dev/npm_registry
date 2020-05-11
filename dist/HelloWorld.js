import React from "react";

const HelloWorld = props => {
  const children = props.children ? /*#__PURE__*/React.createElement("span", null, props.children) : false;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Hello World!"), children);
};

export default HelloWorld;