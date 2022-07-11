import React from "react";
import cx from "classnames";

function Mybutton({ children, customStyle, btnTypColor, myOnClick, variant, childColor }) {
  return (
    <button
      variant={variant}
      onClick={myOnClick}
      className={cx(
        "btn",
        "d-flex",
        "align-items-center",
        "justify-content-center",
        btnTypColor,
        childColor
      )}
      style={{ ...customStyle }}
    >
      {children}
    </button>
  );
}

export default Mybutton;
