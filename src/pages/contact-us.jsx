import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/pages/contact-us.module.css";
import { Col, Container, Row } from "react-bootstrap";
import contactBG from "../assets/about/about-bg.jpg";
import InputField from "../components/input-field";
import TextArea from "../components/textarea";
import ReCAPTCHA from "react-google-recaptcha";
import baseColor from "../config/color";
import AppButton from "../components/button";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuMail } from "react-icons/lu";

console.log(process.env.REACT_APP_RECAPTCHA_SITE_KEY);

export default function ContactUs() {
  const recaptcha = useRef(null);
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);

  // Check if recaptcha is valid when form is submitted
  useEffect(() => {
    if (recaptcha.current) {
      const value = recaptcha.current.getValue();
      setIsCaptchaValid(value !== "");
    }
  }, [recaptcha]);

  const handleSubmit = () => {
    if (!isCaptchaValid) {
      // handle captcha error
      alert("Please complete the captcha.");
    } else {
      // handle form submission
      console.log("Form submitted successfully!");
    }
  };
  return (
    <div className={styles.contactSec}>
      <Container fluid>
        <Row className={styles.contactMain}>
          <div
            className={styles.contactBanner}
            style={{
              backgroundImage: `url(${contactBG})`,
            }}
          >
            <div className={styles.contactBannerContent}>
              <div className={styles.subtitle}>Contact Us</div>
              <h2>How Can We Help You .....!</h2>
              <p>Have any questions?</p>
            </div>
          </div>
          <Row className={`${styles.contactFormMain}`}>
            <Col md={8} lg={6} className={styles.contactForm}>
              <h3 className="py-2 mb-2">
                Feel Free To Drop Us A Line To Contact Us
              </h3>
              <div className={styles.Form}>
                <div className={styles.FormInputDiv}>
                  <InputField
                    horizental={true}
                    label="Full Name :"
                    type="text"
                    placeholder="Enter Your Name*"
                    required="true"
                    className="w-100"
                  />
                  <InputField
                    horizental={true}
                    label="E-mail:"
                    type="text"
                    placeholder="Enter Your Email*"
                    required="true"
                    className="w-100"
                  />
                  <TextArea
                    horizental={true}
                    label="Message:"
                    type="text"
                    placeholder="Enter Your Message*"
                    required="true"
                  />
                  <div
                    style={{
                      fontStyle: "normal",
                      fontWeight: 500,
                      fontSize: "14px",
                      lineHeight: "24px",
                      color: baseColor.darkGrey,
                      margin: "auto 0px",
                      textTransform: "capitalize",
                      width: "250px",
                      paddingBottom: "8px",
                    }}
                  >
                    ReCaptcha:
                  </div>
                  <ReCAPTCHA
                    sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                    ref={recaptcha}
                  />
                  <AppButton
                    width="100%"
                    title="Submit"
                    background={baseColor.primaryColor}
                    className="mt-3 rounded-1"
                    onClick={handleSubmit}
                  />
                </div>
              </div>
            </Col>
            <Col md={8} lg={3} className={styles.contactForm}>
              <h3 className="py-2 mb-2">CONTACT INFO</h3>
              <div className={styles.Form}>
                <div className={styles.info}>
                  <HiOutlineLocationMarker className={styles.infoSvg} />
                  <h5>
                    3515 Sycamore School Road, Suite <br /> 125 - PMB 172 Fort
                    Worth, TX 76133
                  </h5>
                </div>
                <div className={styles.info}>
                  <LuMail className={styles.infoSvg} />
                  <h5>support@hopeforeverybody.com</h5>
                </div>
              </div>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
}
