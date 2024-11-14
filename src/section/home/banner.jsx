import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import styles from "../../styles/section/home/banner.module.css";
import { Col, Row } from "react-bootstrap";
import AppButton from "../../components/button";
import baseColor from "../../config/color";


const Banner = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  return (
    <section className={styles.bannerSec}>
      <div className={styles.embla}>
        <div className={styles.emblaViewport} ref={emblaRef}>
          <div className={styles.emblaContainer}>
            {slides.map((slide, index) => (
              <div className={styles.emblaSlide} key={index}>
                <Row className={styles.bannerMain}>
                  <Col md={6} className="my-auto">
                    <h1>
                      {slide.title} 
                    </h1>
                    <p>{slide.description}</p>
                    <AppButton
                      title={slide.buttonText || "Learn More"} 
                      background={baseColor.primaryColor}
                    />
                  </Col>
                  <Col md={6}>
                    <div
                      className={styles.BannerImg}
                      style={{
                        backgroundImage: `url(${slide.imageUrl})`,
                      }}
                    ></div>
                  </Col>
                </Row>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
