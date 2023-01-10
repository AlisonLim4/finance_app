import "./ButtonLink.module.css";
import React from "react";

const ButtonLink = ({ text, href, bgcolor, border, hover }) => {
  return (
    <a
      href={href}
      style={{
        backgroundColor: `${bgcolor}`,
        border: `1px solid ${border}`,
      }}
    >
      {text}
    </a>
  );
};

export default ButtonLink;
