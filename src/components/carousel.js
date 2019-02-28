import React, { Component } from "react";
import Image from "./image";

export default class Carousel extends Component {
    render() {
        return (
            <div className="carousel" style={this.props.style}>
                {this.props.imgKey && <Image imgKey={this.props.imgKey} className="carousel-image" style={this.props.imgStyle} />}
                <div className="carousel-content" style={this.props.contentStyle}>
                    {this.props.children}
                </div>
                <span className="carousel-cite" style={this.props.citeStyle}>
                    {this.props.cite}
                </span>
            </div>
        );
    }
}
