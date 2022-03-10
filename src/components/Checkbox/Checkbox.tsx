import { InputHTMLAttributes } from "react";
import "./Checkbox.scss";

type CheckboxProps = {
  type?: "checkbox";
} & InputHTMLAttributes<HTMLInputElement>;

export const Checkbox = ({ type = "checkbox", ...props }: CheckboxProps) => {
  return <input type="checkbox" className="checkbox" {...props} />;
};
