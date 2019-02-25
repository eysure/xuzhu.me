import React, { Component } from "react";
import { Tooltip } from "@material-ui/core";
import Icon from "./icon";
import Image from "./image";
import { Link } from "gatsby";

export class ProjectCard extends Component {
    renderToolsList = (techList = []) => {
        return techList.map(tech => {
            return (
                <Tooltip key={tech} title={tech} placement="top">
                    <div className="skill-badge-mini">
                        <Icon iconKey={tech || "none"} />
                    </div>
                </Tooltip>
            );
        });
    };

    render() {
        return (
            <Link to={`/p/${this.props.link || ""}`}>
                <div className="project-card">
                    <Image imgKey={this.props.imgKey} />
                    <div style={{ boxSizing: "border-box", padding: "32px", width: "100%", paddingBottom: "96px" }}>
                        <h1 style={{ margin: "8px 0 16px 0", fontSize: "2rem" }}>{this.props.title}</h1>
                        <h2 style={{ fontSize: "1.5rem" }}>{this.props.subtitle}</h2>
                        <div style={{ position: "absolute", padding: 32, left: 0, bottom: 0, display: "flex", justifyContent: "start", alignItems: "center" }}>
                            {this.renderToolsList(this.props.techList.split(" "))}
                        </div>
                    </div>
                </div>
            </Link>
        );
    }
}

export default ProjectCard;
