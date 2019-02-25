import React, { Component } from "react";

export default class Section extends Component {
    render() {
        return (
            <div
                style={{
                    padding: "96px 0",
                    backgroundColor: this.props.backgroundColor
                }}
            >
                <div
                    style={{
                        maxWidth: this.props.maxWidth || "1280px",
                        margin: "0 auto",
                        display: "flex",
                        flexDirection: "column"
                    }}
                >
                    <p
                        style={{
                            textAlign: "center",
                            fontSize: "2.5rem",
                            fontFamily: "Serif",
                            paddingBottom: "16px"
                        }}
                    >
                        {this.props.title}
                    </p>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
