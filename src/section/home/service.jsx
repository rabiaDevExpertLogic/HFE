import React from "react";
import styles from "../../styles/section/home/service.module.css";
import useEmblaCarousel from "embla-carousel-react";
import { Col, Container, Row } from "react-bootstrap";
import AppButton from "../../components/button";
import { IoIosArrowForward } from "react-icons/io";

const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Service({ data, slides, options }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  return (
    <section className={styles.ServiceSec}>
      <Container>
        <Row className={styles.ServiceMain}>
          <Col md={8}>
            <div className={styles.subtitle}>{data.subtitle}</div>
            <h2 className={styles.title}>{data.title}</h2>
          </Col>
          <div className={styles.embla}>
            <div className={styles.emblaviewport} ref={emblaRef}>
              <div className={styles.emblaContainer}>
                {slides.map((item, index) => (
                  <div className={styles.emblaSlide} key={index}>
                    <div className={styles.card}>
                      <div
                        className={styles.CardImg}
                        style={{ backgroundImage: `url(${item.CardImg})` }}
                      ></div>
                      <div className={styles.CardContent}>
                        <div>
                          <h4>{item.title}</h4>
                          <p>{item.desc}</p>
                          <AppButton
                            title={item.buttonText}
                            //   onClick={() => navigate("/")}
                            background="#141416"
                            // to=""
                          />
                        </div>
                        <div className={styles.Arrow}>
                          <IoIosArrowForward />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
}
