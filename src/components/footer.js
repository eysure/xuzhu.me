import React from "react";
import xyzhu from "../images/xyzhu_white.svg";
import SocialMedia from "../components/social_media";
import { Link } from "gatsby";

const Footer = () => (
    <footer>
        <div className="columns">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti est odit ad iusto perferendis! Accusamus corporis, esse non harum distinctio quis
            sit recusandae deleniti laborum placeat tempore inventore beatae exercitationem.
        </div>
        <div className="sm-list-footer">
            <SocialMedia />
        </div>
        <div className="copyright">
            <div>© {new Date().getFullYear()} Xinyang Zhu. All rights reserved.</div>
            <Link to="/">
                <img className="header-logo" alt="Xyzhu.me" src={xyzhu} />
            </Link>
        </div>
    </footer>
);

export default Footer;
