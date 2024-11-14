import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { TfiWorld } from "react-icons/tfi";
import styles from "../styles/layout/header.module.css"; // Correct import for CSS modules
import { Link, useLocation, useNavigate } from "react-router-dom";
import AppButton from "../components/button";
import AppLogo from "../assets/logo.svg";
import baseColor from "../config/color";
import { GoPerson } from "react-icons/go";
import { LiaHomeSolid } from "react-icons/lia";
import { BiPhone } from "react-icons/bi";
import { LuMenuSquare } from "react-icons/lu";

export default function AppHeader() {
  const navigate = useNavigate();
  const location = useLocation();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const isActive = (path) => {
    return location.pathname === path ? styles.active : "";
  };
  return (
    <>
      <div>
        <Navbar
          data-bs-theme="dark"
          className={styles.headerDiv}
          variant="light"
        >
          <Container className="p-0">
            <Nav className="d-flex justify-content-evenly justify-content-sm-between align-items-center gap-4  w-100">
              <Navbar.Brand href="#home" className={styles.headerLogoDiv}>
                <img src={AppLogo} className={styles.headerLogo} />
              </Navbar.Brand>
              <Nav className="d-flex  justify-content-end align-items-center ">
                <Link
                  className={`d-none d-lg-block ${styles.headerItem} ${isActive(
                    "/"
                  )}`}
                  to="/"
                >
                  Home
                </Link>
                <Link
                  className={`d-none d-lg-block ${styles.headerItem} ${isActive(
                    "/about"
                  )}`}
                  to="/about"
                >
                  About us
                </Link>
                <Link
                  className={`d-none d-lg-block ${styles.headerItem} ${isActive(
                    "/contact-us"
                  )}`}
                  to="/contact-us"
                >
                  Contact
                </Link>
              </Nav>
              <Nav className="d-flex  justify-content-end align-items-center ">
                <TfiWorld color={baseColor.primaryColor} size={20} />
                <GoPerson
                  color={baseColor.primaryColor}
                  size={20}
                  className={`d-block d-lg-none ms-2`}
                  onClick={() => navigate("/sign-in")}
                />
                <div
                  className={`d-lg-none ms-2 ${styles.Toggle} ${
                    show ? styles.toggleActive : ""
                  }`}
                  onClick={() => {
                    setShow(!show);
                  }}
                >
                  <span className={styles.toggleLine}></span>
                  <span className={styles.toggleLine}></span>
                  <span className={styles.toggleLine}></span>
                </div>

                <AppButton
                  title="Sign In"
                  onClick={() => navigate("/sign-in")}
                  background={baseColor.primaryColor}
                  className={`d-none d-lg-flex ${styles.HeaderBtn} mx-2`}
                />
                <AppButton
                  title="Sign Up"
                  onClick={() => navigate("/sign-up")}
                  background="transparent"
                  color={baseColor.primaryColor}
                  border={`0.5px solid ${baseColor.primaryColor}`}
                  className={`d-none d-lg-flex ${styles.HeaderBtn}`}

                  // to=""
                />
              </Nav>
            </Nav>
          </Container>
        </Navbar>
      </div>
      <Offcanvas show={show} className={styles.sideBar}>
        <Offcanvas.Header>
          <Offcanvas.Title>
            <img src={AppLogo} className={styles.headerLogo2} />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="d-flex flex-column justify-content-center py-3 align-items-start ">
            <Link className={`${styles.headerItem2} ${isActive("/")}`} to="/">
              <LiaHomeSolid className="me-3" size={22} /> Home
            </Link>
            <Link
              className={`${styles.headerItem2} ${isActive("/about")}`}
              to="/about"
            >
              <LuMenuSquare className="me-3" size={18} />About us
            </Link>
            <Link
              className={`${styles.headerItem2} ${isActive("/contact-us")}`}
              to="/contact-us"
            >
              <BiPhone className="me-3" size={22} /> Contact
            </Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
