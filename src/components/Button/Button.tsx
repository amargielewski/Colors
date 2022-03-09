import { ButtonHTMLAttributes, ReactChild } from "react";
import "./Button.scss";
type ButtonProps = {
  children: ReactChild;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button className="button" {...props}>
      {children}
    </button>
  );
};
