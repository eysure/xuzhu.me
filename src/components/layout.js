import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Header from "./header";
import Footer from "./footer";
import "./layout.css";

const Layout = ({ noHeader, noFooter, children }) => (
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
                {!noHeader && <Header />}
                <main
                    style={{
                        background: "#FFF",
                        width: "100%"
                    }}
                >
                    {children}
                </main>
                {!noFooter && <Footer />}
            </>
        )}
    />
);

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;
