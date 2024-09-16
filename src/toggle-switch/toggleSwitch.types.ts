import { InputHTMLAttributes } from "react";

export type TLabelProps = {
  size?: "large" | "medium" | "small";
  onBackgroundColor?: string;
  offBackgroundColor?: string;
  onColor?: string;
  offColor?: string;
};
export type ToggleSwitchProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "size"
> &
  TLabelProps;
