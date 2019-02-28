import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Carousel from "../components/carousel";
import Section from "../components/section";
import { Link } from "gatsby";
import Icon from "../components/icon";
import Divider from "../components/divider";
import SocialMedia from "../components/social_media";
import { navigate } from "gatsby";

const IndexPage = () => (
    <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Carousel imgKey="home_carousel" cite="© Xinyang Zhu 2018" style={{ height: 800 }} contentStyle={{ marginTop: 20 }}>
            <h1>Hi, I'm Xinyang Zhu</h1>
            <h2>A full-stack developer for ultimate user experience</h2>
        </Carousel>
        <Section
            title={
                <span>
                    To obtain an <b>internship</b> position as a software engineer in 2019.
                </span>
            }
        >
            <div className="flex-row">
                <a className="button" href="https://docs.google.com/document/export?format=pdf&id=1w81QS9r4sta0MFz4QKj7qDqU5Zi7eXf236_bhiIkUi0">
                    Download Resume
                </a>
                <Link to="/contact">
                    <button>Contact me</button>
                </Link>
            </div>
        </Section>
        <Section title={<b>Technical Skills</b>}>
            <Divider center={<h3>Programming Languages</h3>} />
            <div className="skill-grid">
                <div className="skill-badge">
                    <Icon iconKey="js" /> JavaScript ES6
                </div>
                <div className="skill-badge">
                    <Icon iconKey="java" /> Java
                </div>
                <div className="skill-badge">
                    <Icon iconKey="python" /> Python
                </div>
                <div className="skill-badge">
                    <Icon iconKey="php" /> PHP
                </div>
            </div>
            <hr />
            <Divider center={<h3>Front End / Libraries</h3>} />
            <div className="skill-grid">
                <div className="skill-badge">
                    <Icon iconKey="react" /> React
                </div>
                <div className="skill-badge">
                    <Icon iconKey="redux" /> Redux
                </div>
                <div className="skill-badge">
                    <Icon iconKey="gatsby" /> Gatsby
                </div>
                <div className="skill-badge">
                    <Icon iconKey="html5" /> HTML 5
                </div>
                <div className="skill-badge">
                    <Icon iconKey="css3" /> CSS 3
                </div>
                <div className="skill-badge">
                    <Icon iconKey="jquery" /> jQuery
                </div>
                <div className="skill-badge">
                    <Icon iconKey="material_ui" /> Material-UI
                </div>
                <div className="skill-badge">
                    <Icon iconKey="bootstrap" /> Bootstrap
                </div>
            </div>
            <Divider center={<h3>Back End / Databases / Cloud</h3>} />
            <div className="skill-grid">
                <div className="skill-badge">
                    <Icon iconKey="expressjs" /> Express.js
                </div>
                <div className="skill-badge">
                    <Icon iconKey="meteor" /> Meteor
                </div>
                <div className="skill-badge">
                    <Icon iconKey="nodejs" /> Node.js
                </div>
                <div className="skill-badge">
                    <Icon iconKey="mongodb" /> MongoDB
                </div>
                <div className="skill-badge">
                    <Icon iconKey="mysql" /> MySQL
                </div>
                <div className="skill-badge">
                    <Icon iconKey="oracle" /> Oracle Database
                </div>
                <div className="skill-badge">
                    <Icon iconKey="apache" /> Apache HTTP Server
                </div>
                <div className="skill-badge">
                    <Icon iconKey="aws" /> Amazon Web Service
                </div>
                <div className="skill-badge">
                    <Icon iconKey="firebase" /> Google Firebase
                </div>
                <div className="skill-badge">
                    <Icon iconKey="alibaba_cloud" /> Alibaba Cloud
                </div>
            </div>
            <Divider center={<h3>Mobile / Desktop</h3>} />
            <div className="skill-grid">
                <div className="skill-badge">
                    <Icon iconKey="android" /> Android SDK
                </div>
            </div>
        </Section>
        <Section title={<b>Projects</b>}>
            <div className="center">
                <button onClick={() => navigate("/p")}>Check out here</button>
            </div>
        </Section>
        <Section title={<b>Let's have a chat</b>}>
            <div className="sm-list-main center">
                <SocialMedia />
            </div>
        </Section>
    </Layout>
);

export default IndexPage;
