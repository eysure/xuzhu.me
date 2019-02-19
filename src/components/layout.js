import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Header from "./header";
import "./layout.css";

const Layout = ({ children }) => (
    <StaticQuery
        query={graphql`
            query SiteTitleQuery {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `}
        render={() => (
            <>
                <Header />
                <main
                    style={{
                        background: "#FFF",
                        width: "100%"
                    }}
                >
                    <div
                        style={{
                            margin: `0 auto`,
                            maxWidth: 1280
                        }}
                    >
                        {children}
                    </div>
                </main>
                <footer>
                    <div className="columns">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti est odit ad iusto perferendis! Accusamus corporis, esse non harum
                        distinctio quis sit recusandae deleniti laborum placeat tempore inventore beatae exercitationem.
                    </div>
                    <div className="copyright">© {new Date().getFullYear()} Xinyang Zhu. All rights reserved. </div>
                </footer>
            </>
        )}
    />
);

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;
