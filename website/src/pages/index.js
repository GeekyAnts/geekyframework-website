import React from "react";
import { Link } from "gatsby";
import logo from "../images/logo.svg";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`react`, `framework`, `geekyframework`]} />
    <div class="hero">
      <img
        src={logo}
        style={{
          verticalAlign: "middle",
          marginRight: "10px",
          marginBottom: "20px",
          margin: 10
        }}
        width="80"
      />

      <h1>Focus on your thing!</h1>
      <p>The React & React Native framework</p>
    </div>

    <section>
      <h1>Installation</h1>
      <div>
        <p>Install the global CLI</p>
        <pre>npm install geekyframework-cli -g</pre>
      </div>
      <div>
        <p>Navigate to an existing TypeScript project and inject it</p>
        <pre>geek init ProjectName</pre>
      </div>
    </section>
    <section style={{ marginTop: "4em" }}>
      <h1>Why Reazy?</h1>
      <p>
        Have you heard of <strong>Decision Paralysis</strong> or{" "}
        <strong>JavaScript fatigue</strong>? Reazy sets the coding pattern,
        comes with a beautiful CLI and a set of decisions already made for you
        so that you can focus on your idea, focus on your app and not worry
        about the options which you should choose from when building a React /
        React Native app
      </p>
    </section>
    <section style={{ textAlign: "center", padding: "3em" }}>
      <a
        href="/docs"
        style={{
          borderRadius: 3,
          background: "#FFd800",
          color: "#fff",
          display: "inline-block",
          textDecoration: "none",
          padding: "20px",
          fontWeight: "bold",
          fontSize: 20
        }}
      >
        Read Documentation
      </a>
    </section>
  </Layout>
);

export default IndexPage;
