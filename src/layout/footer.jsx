import React from "react";
import styles from "../styles/layout/footer.module.css";
import { Container, Row } from "react-bootstrap";
import AppLogo from "../assets/logo.svg";
import Google from "../assets/google.png";
import Apple from "../assets/apple.png";

export default function Footer() {
  return (
    <div className={styles.footerSec}>
      <Container>
        <Row>
          <div className={styles.footerDiv}>
            <div className={styles.footerItem}>
              <img src={AppLogo} className={styles.footerLogo} />
              <p className="pt-3">
                3513 Sycamore School Road, Suite 125 - PMB 172 Fart Worth,
                <br />
                <strong>Tx 76133</strong>
              </p>
              <div className={styles.storeLogo}>
                <img src={Google} />
                <img src={Apple} />
              </div>
            </div>
            <div className={styles.footerItem}>
              <h5>Column One</h5>
              <ul>
                <li>
                  <a>Lorem ipsum dolor</a>
                </li>
                <li>
                  <a>Lorem ipsum dolor</a>
                </li>
                <li>
                  <a>Lorem ipsum dolor</a>
                </li>
                <li>
                  <a>Lorem ipsum dolor</a>
                </li>
              </ul>
            </div>
            <div className={styles.footerItem}>
              <h5>Column Two</h5>
              <ul>
                <li>
                  <a>Lorem ipsum dolor</a>
                </li>
                <li>
                  <a>Lorem ipsum dolor</a>
                </li>
                <li>
                  <a>Lorem ipsum dolor</a>
                </li>
                <li>
                  <a>Lorem ipsum dolor</a>
                </li>
              </ul>
            </div>
            <div className={styles.footerItem}>
              <h5>Column Three</h5>
              <ul>
                <li>
                  <a>Lorem ipsum dolor</a>
                </li>
                <li>
                  <a>Lorem ipsum dolor</a>
                </li>
                <li>
                  <a>Lorem ipsum dolor</a>
                </li>
                <li>
                  <a>Lorem ipsum dolor</a>
                </li>
              </ul>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}
