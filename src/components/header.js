import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import xyzhu from "../images/xyzhu_white.svg";

const Header = () => (
    <header id="header-container">
        <div id="header">
            <Link to="/">
                <div>
                    <img className="header-logo" alt="Xyzhu.me" src={xyzhu} />
                </div>
            </Link>
            <Link to="/resume">
                <div>Resume</div>
            </Link>
            <Link to="/projects">
                <div>Projects</div>
            </Link>
            <Link to="/life">
                <div>Life</div>
            </Link>
            <Link to="/contact">
                <div>Contact</div>
            </Link>
        </div>
    </header>
);

Header.propTypes = {
    siteTitle: PropTypes.string
};

Header.defaultProps = {
    siteTitle: ``
};

export default Header;
