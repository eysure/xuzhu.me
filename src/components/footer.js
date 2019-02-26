import React from "react";
import xyzhu from "../images/xyzhu_white.svg";
import SocialMedia from "../components/social_media";
import { Link } from "gatsby";

const Quotes = [];

class Footer extends React.Component {
    renderQuote = () => {
        let luck = Math.floor(Quotes.length * Math.random());
        return Quotes && Quotes[luck];
    };
    render() {
        return (
            <footer>
                <div className="quote">{this.renderQuote()}</div>
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
    }
}

export default Footer;
