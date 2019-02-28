import React, { Component } from "react";

export default class Section extends Component {
    render() {
        return (
            <section
                className="animated fadeIn"
                style={{
                    backgroundColor: this.props.backgroundColor,
                    ...this.props.style
                }}
            >
                <div
                    style={{
                        padding: "64px 32px",
                        width: "100%",
                        boxSizing: "border-box",
                        maxWidth: this.props.maxWidth || (this.props.fullWidth && "100%") || "1280px",
                        margin: "0 auto",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        ...this.props.contentStyle
                    }}
                >
                    {this.props.title && (
                        <div
                            style={{
                                textAlign: "center",
                                fontSize: "2.5rem",
                                fontFamily: "Serif",
                                paddingBottom: "16px"
                            }}
                        >
                            {this.props.title}
                        </div>
                    )}
                    {this.props.children}
                </div>
            </section>
        );
    }
}
