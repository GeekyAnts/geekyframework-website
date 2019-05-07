import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import logo from "../images/logo.svg";
import "./header.css";

const Header = ({ siteTitle, description }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
      borderBottom: "2px solid #ffd800",
      backgroundColor: "#FFF9E5",
      color: "#000"
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0.15rem 0`
      }}
    >
      <table cellspacing="0" cellpadding="0" style={{ marginBottom: 0 }}>
        <tr>
          <td width="60">
            <img
              src={logo}
              style={{
                verticalAlign: "middle",
                marginRight: "10px",
                margin: 10
              }}
              width="35"
            />
          </td>
          <td style={{ padding: 0 }}>
            <h1 style={{ margin: 0, verticalAlign: "middle" }}>
              <Link
                to="/"
                style={{
                  color: "#000",
                  fontWeight: "normal",
                  fontSize: "36px",
                  color: "#000",
                  textDecoration: `none`,
                  verticalAlign: "middle"
                }}
              >
                {siteTitle}{" "}
                <small style={{ fontSize: 16, color: "#444" }}>
                  {description}
                </small>
              </Link>
            </h1>
          </td>
          <td>
            <ul class="header-menu">
              <li>
                <a href="/docs">Documentation</a>
              </li>
              <li>
                <a href="https://github.com/GeekyAnts/geekyframework">Github</a>
              </li>
            </ul>
          </td>
        </tr>
      </table>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
