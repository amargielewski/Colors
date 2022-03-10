import { ReactChild } from "react";
import "./Label.scss";

type LabelProps = {
  children: ReactChild | ReactChild[];
  labelText: string;
  displayPosition?: "column" | "row";
};

export const Label = ({
  children,
  labelText,
  displayPosition = "column",
}: LabelProps) => {
  return (
    <div className={`label-wrapper label-wrapper-${displayPosition}`}>
      <span className="label-text">{labelText}</span>
      {children}
    </div>
  );
};
