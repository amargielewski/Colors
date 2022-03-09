import { ReactChild } from "react";
import "./Label.scss";

type LabelProps = {
  children: ReactChild | ReactChild[];
  labelText: string;
};

export const Label = ({ children, labelText }: LabelProps) => {
  return (
    <div className="label-wrapper">
      <span className="label-text">{labelText}</span>
      {children}
    </div>
  );
};
