import { CloseIcon } from "Icons/CloseIcon";
import { ReactChild } from "react";
import "./Badge.scss";

type BadgeProps = {
  variant?: "default" | "remove";
  children: ReactChild;
  onClick?: () => void;
};

export const Badge = ({
  children,
  variant = "default",
  ...props
}: BadgeProps) => {
  return (
    <div
      className={`badge ${variant === "remove" && " badge--remove"}`}
      {...props}
    >
      {variant === "remove" && <CloseIcon />}
      {children}
    </div>
  );
};
