import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/layout/auth.module.css";
import authBG from "../../assets/auth/authBG.jpg";
import InputField from "../../components/input-field";
import AppButton from "../../components/button";
import OTPInput from "../../components/otpField";
import { FaEye } from "react-icons/fa";

function SignIn() {
  const [login, setLogin] = useState(true);
  const [forgetpassword, setForgetPassword] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const [resetPassword, setResetPassword] = useState(false);

  const handleForgetPassword = () => {
    setLogin(false);
    setForgetPassword(true);
  };

  const handleShowOtp = () => {
    setForgetPassword(false);
    setShowOtp(true);
  };

  const handleOtpComplete = (otp) => {
    console.log("OTP entered:", otp);
  };

  const handleResetPassword = () => {
    setShowOtp(false);
    setResetPassword(true);
  };

  return (
    <section className={styles.AuthSec}>
      <Container fluid>
        <Row className={styles.AuthMain}>
          <Col md={6} className="h-100 p-0">
            <div
              className={styles.AuthBG}
              style={{
                backgroundImage: `url("https://placehold.co/600x400/grey/white")`,
              }}
            ></div>
          </Col>
          <Col md={6} className="d-flex">
            <div className={styles.AuthForm}>
              {login && (
                <>
                  <h4 className="mb-2">Let's Sign In</h4>

                  <InputField
                    label="E-mail or phone number"
                    type="text"
                    placeholder="Email ID"
                    required="true"
                    className="w-100"
                  />
                  <InputField
                    label="Enter Password"
                    type="password"
                    placeholder="*****"
                    required="true"
                    className="w-100"
                  />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <button
                      style={{
                        fontStyle: "italic",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "24px",
                        color: "#425466",
                        marginBottom: "8px",
                        textAlign: "right",
                        textTransform: "capitalize",
                        background: "none",
                        border: "none",
                      }}
                      onClick={handleForgetPassword}
                    >
                      forget password
                    </button>
                  </div>

                  <AppButton width="100%" title="Submit" background="#141416" />

                  <div className={styles.AuthFormContent}>
                    <p>
                      Don't have an account? <span>Sign Up</span>
                    </p>
                  </div>
                </>
              )}

              {forgetpassword && (
                <div>
                  <h4 className="mb-2">Forget Password</h4>
                  <p className="pb-1 text-center">
                    Reset your password by receiving create password link on
                    your registered Email ID please enter your registered Email
                    Id Below
                  </p>
                  <InputField
                    type="text"
                    placeholder="alma.lawson@example.com"
                    required="true"
                    className="w-100 mb-3"
                  />
                  <AppButton
                    width="100%"
                    title="Submit"
                    background="#141416"
                    onClick={handleShowOtp}
                  />
                </div>
              )}

              {showOtp && (
                <>
                  <h4>OTP Verification</h4>
                  <p className="pb-2">
                    Reset your password by receiving create password link on
                    your registered Email ID please enter your registered Email
                    Id Below
                  </p>
                  <div className="d-flex mb-4">
                    <OTPInput length={4} onComplete={handleOtpComplete} />
                  </div>
                  <AppButton
                    width="100%"
                    title="Verify"
                    background="#141416"
                    onClick={handleResetPassword}
                  />
                  <p className="pt-2 text-center ">Resend Code in 00 : 02</p>
                </>
              )}

              {resetPassword && (
                <>
                  <h4 className="mb-2">Reset Password</h4>

                  <InputField
                    label="Enter New Password"
                    type="password"
                    placeholder="*****"
                    required="true"
                    className="w-100"
                  />

                  <InputField
                    label="Confirm Password"
                    type="password"
                    placeholder="*****"
                    required="true"
                    className="w-100"
                  />

                  <AppButton width="100%" title="Set Password" background="#141416" className="mt-3" />
                </>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default SignIn;
