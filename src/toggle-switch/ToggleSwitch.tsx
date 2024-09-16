import React, { FC, useId } from "react";
import "./toggle-switch.scss";
import { ToggleSwitchProps } from "./toggleSwitch.types";

const ToggleSwitch: FC<ToggleSwitchProps> = ({
  size = "medium",
  onBackgroundColor = "#40679E",
  offBackgroundColor = "#ccc",
  onColor = "#7CF5FF",
  offColor = "#F6F5F2",
  ...props
}) => {
  const id = useId();

  return (
    <div
      className="toggle-switch"
      style={
        {
          "--on-background-color": onBackgroundColor,
          "--off-background-color": offBackgroundColor,
          "--on-handle-color": onColor,
          "--off-handle-color": offColor,
        } as React.CSSProperties
      }
    >
      <input type="checkbox" id={id} {...props} />
      <label
        data-size={size}
        aria-label="label"
        role="labelText"
        htmlFor={id}
      />
    </div>
  );
};

export default ToggleSwitch;
