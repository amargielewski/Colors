import { ReactChild } from "react";
import "./Error.scss";

type ErrorProps = {
  children: ReactChild;
  errorText: string;
};

export const Error = ({ children, errorText }: ErrorProps) => {
  return (
    <div className="error">
      {children}
      <p className="error-text">{errorText}</p>
    </div>
  );
};
