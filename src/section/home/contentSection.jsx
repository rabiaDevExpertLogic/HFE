import React from "react";
import styles from "../../styles/section/home/contentSection.module.css";
import { Col, Row } from "react-bootstrap";
import AppButton from "../../components/button";
import ContentImg from "../../assets/home/banner/bannerImg-1.jpeg";

export default function ContentSection({
  contentLeft,
  BannerImg,
  contentRight,
}) {
  return (
    <section className={styles.ContentSec}>
      <Row className={styles.ContentMain}>
        {contentLeft && (
          <Col >
            <div className={styles.subtitle}>{contentLeft.subtitle}</div>
            <h2>{contentLeft.title}</h2>
            <p>{contentLeft.paragraph}</p>
            <div className={styles.pointsDiv}>
              {contentLeft.points.map((point, index) => (
                <div key={index} className={styles.points}>
                  <h4>{point.heading}</h4>
                  <p>{point.description}</p>
                </div>
              ))}
            </div>
            <AppButton
              title={contentLeft.buttonText}
              //   onClick={() => navigate("/")}
              background="#141416"
              // to=""
            />
          </Col>
        )}
        <Col>
          <div
            className={styles.ContentImg}
            style={{
              backgroundImage: `url(${BannerImg})`,  // Using the final imageUrl
            }}            
            ></div>
        </Col>
        {contentRight && (
          <Col className="">
            <div className={styles.subtitle}>{contentRight.subtitle}</div>
            <h2>{contentRight.title}</h2>
            <p>{contentRight.paragraph}</p>
            <div className={styles.pointsDiv}>
              {contentRight.points.map((point, index) => (
                <div key={index} className={styles.points}>
                  <h4>{point.heading}</h4>
                  <p>{point.description}</p>
                </div>
              ))}
            </div>
            <AppButton
              title={contentRight.buttonText}
              //   onClick={() => navigate("/")}
              background="#141416"
              // to=""
            />
          </Col>
        )}
      </Row>
    </section>
  );
}
