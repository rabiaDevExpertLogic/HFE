import React from "react";
import styles from "../styles/layout/footer.module.css";
import { Container, Row } from "react-bootstrap";
import AppLogo from "../assets/logo.svg";
import Google from "../assets/google.png";
import Apple from "../assets/apple.png";
import baseColor from "../config/color";

export default function Footer2() {
  return (
    <div
      className="py-2"
      style={{
        background: `linear-gradient(to right, ${baseColor.primaryColor} 0%, ${baseColor.lightPrimaryColor} 100%)`,
      }}
    >
      <Container>
        <Row>
          <p
            className="pt-3 text-center"
            style={{
                color: baseColor.lightGrey,
            }}
          >
            Copyright © 2024 Hope For Everybody, LLC. All Rights Reserved
            <br />
            Privacy Policy | Terms of Service
          </p>
        </Row>
      </Container>
    </div>
  );
}
