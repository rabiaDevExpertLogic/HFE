import React from "react";
import styles from "../styles/pages/about.module.css";
import { Col, Container, Row } from "react-bootstrap";
import AboutBG from "../assets/about/about-bg.jpg";
import AboutImg from "../assets/about/about-Img.jpg";

export default function About() {
  return (
    <div className={styles.AboutSec}>
      <Container fluid>
        <Row className={styles.AboutMain}>
          <div
            className={styles.aboutBanner}
            style={{
              backgroundImage: `url(${AboutBG})`,
            }}
          >
            <div className={styles.aboutBannerContent}>
              {/* <div className={styles.subtitle}>About Us</div> */}
              <h2>About Us</h2>
              {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </div>
          </div>
          <Row className={`${styles.about}`}>
            <Col md={10} className={styles.aboutMain}>
              <Row className={styles.aboutMainBG}>
                <Col
                  md={5}
                  className={styles.aboutImg}
                  style={{
                    backgroundImage: `url(${AboutImg})`,
                  }}
                ></Col>
                <Col md={7} className={styles.aboutContent}>
                  <h3>Hope For Everybody, LLC.</h3>
                  <p>
                    This is an Internet property of Hope For Everybody, LLC.,
                    the purpose of which is to generate profits to provide a
                    legacy of sustainability to our families and the non-profit
                    organizations we support.
                  </p>
                  <p>
                    Committed to developing Internet properties that will
                    provide sustainability to non-profits.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
}
