import React from "react";
import Portal from "./Portal";

const CustomDailog = (props) => {
  if (!props.show) return null;
  return (
    <Portal selector="#modal">
      <div
        style={{ top: "30%", left: "30%", right: "30%", bottom: "30%" }}
        className=" fixed drop-shadow-2xl rounded-2xl z-10  bg-slate-200 shadow-dhruv"
      >
        {props.children}
      </div>
    </Portal>
  );
};

export default CustomDailog;
