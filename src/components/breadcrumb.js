import React, { Component, Fragment } from "react";
import { navigate } from "gatsby";
export default class Breadcrumb extends Component {
    paths = [];

    constructor(props) {
        super(props);
        this.paths = window && window.location.pathname.split("/");
        if (!this.paths[0]) this.paths.shift();
        if (!this.paths[this.paths.length - 1]) this.paths.pop();
    }

    handleClick = i => {
        let newPath = this.paths.slice(0, i + 1).join("/");
        navigate(newPath);
    };

    render() {
        return (
            <div className="breadcrumb">
                {}
                {this.paths.map((path, i) => {
                    return (
                        <Fragment key={path}>
                            <span> -> </span>
                            <span className="button invisible" onClick={() => this.handleClick(i)}>
                                {path}
                            </span>
                        </Fragment>
                    );
                })}
            </div>
        );
    }
}
