import React, { Component } from "react";

export default class Divider extends Component {
    state = { barWidth: 0 };
    contentRef = React.createRef();

    render() {
        const barStyle = {
            height: this.props.height,
            backgroundColor: this.props.color
        };
        return (
            <div
                style={{
                    width: "100%",
                    display: "grid",
                    gridTemplateColumns: "1fr auto 1fr",
                    alignItems: "center",
                    gridGap: this.props.padding
                }}
            >
                <span style={barStyle} />
                <span ref={this.contentRef}>{this.props.center}</span>
                <span style={barStyle} />
            </div>
        );
    }
}

Divider.defaultProps = {
    padding: 16,
    height: 1,
    color: "#ddd"
};
