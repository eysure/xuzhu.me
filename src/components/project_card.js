import React, { Component } from "react";
import { Tooltip } from "@material-ui/core";
import Icon from "./icon";
import Image from "./image";
import { navigate } from "gatsby";

const tagStyle = {
    backgroundColor: "#999",
    padding: "4px 8px",
    fontSize: "0.875rem",
    borderRadius: "8px",
    color: "white",
    marginRight: "6px"
};

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

    renderTagList = (tagList = []) => {
        return tagList.map(tag => {
            return (
                <span key={tag} style={tagStyle}>
                    {tag}
                </span>
            );
        });
    };

    render() {
        return (
            <div className="project-card" onClick={() => navigate(`/p/${this.props._key}`)}>
                <Image imgKey={this.props.p.imgKey} />
                <div style={{ boxSizing: "border-box", padding: "32px", width: "100%", paddingBottom: "96px" }}>
                    <h1 style={{ margin: "8px 0 16px 0", fontSize: "2rem" }}>{this.props.p.title}</h1>
                    <div>{this.renderTagList(this.props.p.tags)}</div>
                    <h2 style={{ fontSize: "1.2rem" }}>{this.props.p.subtitle}</h2>
                    <div style={{ position: "absolute", padding: 32, left: 0, bottom: 0, display: "flex", justifyContent: "start", alignItems: "center" }}>
                        {this.renderToolsList(this.props.p.techList)}
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectCard;
