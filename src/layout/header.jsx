import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { TbWorld } from "react-icons/tb";
import styles from "../styles/layout/header.module.css"; // Correct import for CSS modules
import { Link, useNavigate } from "react-router-dom";
import AppButton from "../components/button";
import AppLogo from "../assets/logo.svg";

export default function AppHeader() {
  const navigate = useNavigate();
  const [colorHover, setcolorHover] = useState(false);
  const [colorChange, setColorchange] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 300) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
    return () => {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, []);

  const handleResize = () => {
    if (window.innerWidth < 992) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div>
        <Navbar
          data-bs-theme="dark"
          className={styles.headerDiv}
          variant="light"
        >
          <Container className="p-0">
            <Nav className="d-flex justify-content-between align-items-center gap-4  w-100">
              <Navbar.Brand href="#home" className={styles.headerLogoDiv}>
                <img src={AppLogo} className={styles.headerLogo} />
              </Navbar.Brand>
              <Nav className="d-flex  justify-content-end align-items-center ">
                <Link
                  className={`d-none d-md-block ${styles.headerItem}`}
                  to="/"
                >
                  Home
                </Link>
                <Link
                  className={`d-none d-md-block ${styles.headerItem} `}
                  to="/about"
                >
                  About us
                </Link>
                <Link
                  className={`d-none d-md-block ${styles.headerItem}`}
                  to="/contact"
                >
                  Contact
                </Link>
              </Nav>
              <Nav className="d-flex  justify-content-end align-items-center ">
                <TbWorld color="#141416" size={24} />
                <AppButton
                  title="Sign In"
                  onClick={() => navigate("/sign-in")}
                  background="#141416"
                  className={`d-none d-lg-block ${styles.HeaderBtn} mx-2`}
                  // to=""
                />
                <AppButton
                  title="Sign Up"
                  onClick={() => navigate("/sign-up")}
                  background="transparent"
                  color="#141416"
                  border="0.5px solid #141416"
                  className={`d-none d-lg-block ${styles.HeaderBtn}`}

                  // to=""
                />
              </Nav>
            </Nav>
          </Container>
        </Navbar>
        {/* <Navbar
          bg="dark"
          data-bs-theme="dark"
          collapseOnSelect
          expand="lg"
          className="bg-body-tertiary d-block d-md-none text-white mx-3 px-2 mt-1 mb-0 py-0"
          style={{ top: -15, backgroundColor: "#4c4c4c", borderRadius: "2px" }}
        >
          <Container className="py-3 justify-content-end">
            <Navbar.Toggle aria-controls="responsive-navbar-nav " />
            <Navbar.Collapse id="responsive-navbar-nav" className="mb-5 pt-0">
              <Nav className="me-auto ">
                <Nav.Link
                  className={styles.headerItem2}
                  onClick={() => navigate("/")}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  className={styles.headerItem2}
                  onClick={() => navigate("/about")}
                >
                  About
                </Nav.Link>
                <Nav.Link
                  className={styles.headerItem2}
                  onClick={() => navigate("/service")}
                >
                  Service
                </Nav.Link>
                <Nav.Link
                  className={styles.headerItem2}
                  onClick={() => navigate("/schedule")}
                >
                  Schedule
                </Nav.Link>
                <Nav.Link
                  className={styles.headerItem2}
                  onClick={() => navigate("/gallery")}
                >
                  Gallery
                </Nav.Link>
                <Nav.Link
                  className={styles.headerItem2}
                  onClick={() => navigate("/blog")}
                >
                  Blog
                </Nav.Link>
                <Nav.Link
                  className={styles.headerItem2}
                  onClick={() => navigate("/contact")}
                  // className="mb-3"
                >
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar> */}
      </div>
    </>
  );
}
