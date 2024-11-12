import React, { useState } from "react";
import { Container, Row, Accordion, Card } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import styles from "../../styles/section/home/faq.module.css";

function Faq({faqs}) {
  const [active, setActive] = useState(1); // Using active state for accordion toggle

  const handleToggle = (index) => {
    if (active === index) {
      setActive(null); // Collapse the accordion if it's already open
    } else {
      setActive(index); // Open the clicked accordion
    }
  };

  return (
    <section className={styles.FaqSec}>
      <Container>
        <Row className={styles.FaqMain}>
          {faqs.map((faq, index) => (
            <div key={faq.id} className={styles.card}>
              {/* <div className={styles.cardToggleDiv}> */}
                <div
                  className={`${styles.cardToggle} ${
                    active === index ? styles.active : ""
                  }`}
                  onClick={() => handleToggle(index)} // Use index here
                >
                  <h5>{faq.header}</h5>
                  {active === index ? <FaMinus /> : <FaPlus />}
                </div>
              {/* </div> */}
              <div
                className={`${active === index ? "show" : ""}`}
                style={{
                  height: active === index ? "auto" : "0px",
                  transition: "height 0.3s ease-out", // Smooth transition for height change
                }}
              >
                <div className={styles.cardToggleBody}>
                  <p className="mb-0">{faq.text}</p>
                </div>
              </div>
            </div>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Faq;
