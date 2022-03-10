import "./Footer.scss";

import { GithubIcon } from "Icons/GithubIcon";

export const Footer = () => {
  return (
    <div className="footer-wrapper">
      <a className="footer-link" href="https://github.com/amargielewski">
        <GithubIcon />
        <p className="footer-link-text">Github</p>
      </a>
    </div>
  );
};
