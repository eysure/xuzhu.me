import React, { Component } from "react";
import { navigate } from "gatsby";

export default class ProjectHeader extends Component {
    render() {
        return (
            <>
                <header className="title-bar animated fadeInDown fast">
                    <div className="flex-row between" style={{ maxWidth: 1200, width: "100%", margin: "0 auto" }}>
                        <div className="flex-row nowrap" style={{ fontSize: "1.5rem" }}>
                            <button className="invisible" onClick={() => navigate("/p")}>
                                <i className="material-icons" style={{ fontSize: "2rem" }}>
                                    keyboard_arrow_left
                                </i>
                            </button>
                            <h2>{this.props.p.title}</h2>
                        </div>
                        <div className="flex-row nowrap">
                            {this.props.p.demo && (
                                <a className="button dark invisible animated tada delay-1s" href={this.props.p.demo} target="_blank" rel="noopener noreferrer">
                                    <i className="material-icons with-text" style={{ fontSize: "2rem" }}>
                                        ondemand_video
                                    </i>
                                    <span>Live Demo</span>
                                </a>
                            )}
                            {this.props.p.repo && (
                                <a className="button dark invisible" href={this.props.p.repo} target="_blank" rel="noopener noreferrer">
                                    <i className="sm-icons with-text" style={{ fontSize: "2rem" }}>
                                        )
                                    </i>
                                    <span>Repo</span>
                                </a>
                            )}
                        </div>
                    </div>
                </header>
                {this.props.noReserve || <div className="title-bar-reserve animated fadeIn" />}
            </>
        );
    }
}
