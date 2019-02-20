import React, { Component } from "react";
import Image from "./image";

export default class Carousel extends Component {
    render() {
        return (
            <div className="carousel" style={this.props.style}>
                <Image imgKey={this.props.imgKey} className="carousel-image" style={this.props.imgStyle} />
                <div className="carousel-title" style={this.props.titleStyle}>
                    {this.props.title}
                </div>
                <span className="carousel-cite" style={this.props.citeStyle}>
                    {this.props.cite}
                </span>
            </div>
        );
    }
}
