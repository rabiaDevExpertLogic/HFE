import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/layout/auth.module.css";
import InputField from "../../components/input-field";
import AppButton from "../../components/button";
import { BsPersonCircle } from "react-icons/bs";
import { BsBriefcaseFill } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import Radiobutton from "../../components/radio-button";
import DropdownInput from "../../components/drop-down-input";
import FileUpload from "../../components/file-upload";
import Dropdown from "../../components/drop-down";
import { IoAddCircleOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import TextArea from "../../components/textarea";
import { FaFilePdf } from "react-icons/fa6";
import AppLogo from "../../assets/logo.svg";
import { GrUploadOption } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

const contactNumber = [
  {
    value: "usa",
    label: "+1",
    selected: true,
  },
  {
    value: "canada",
    label: "+1",
  },
  {
    value: "mexico",
    label: "+52",
  },
  {
    value: "united kingdom",
    label: "+44",
  },
  {
    value: "germany",
    label: "+49",
  },
  {
    value: "france",
    label: "+33",
  },
  {
    value: "india",
    label: "+91",
  },
  {
    value: "australia",
    label: "+61",
  },
  {
    value: "japan",
    label: "+81",
  },
  {
    value: "brazil",
    label: "+55",
  },
  {
    value: "china",
    label: "+86",
  },
  {
    value: "south africa",
    label: "+27",
  },
];

const category = [
  {
    value: "service-providers",
    label: "Service Providers",
    selected: true,
  },
  {
    value: "housing",
    label: "Housing",
  },
  {
    value: "healthcare",
    label: "Healthcare",
  },
  {
    value: "plumbers",
    label: "Plumbers",
  },
];

const subCategory = [
  {
    value: "employment",
    label: "Employment",
    selected: true,
  },
  {
    value: "housing",
    label: "Housing",
  },
  {
    value: "healthcare",
    label: "Healthcare",
  },
  {
    value: "service-providers",
    label: "Service Providers",
  },
  {
    value: "plumbers",
    label: "Plumbers",
  },
];

const offered = [
  {
    value: "no",
    label: "No",
    selected: true,
  },
  {
    value: "yes",
    label: "Yes",
  },
];

const language = [
  {
    value: "english",
    label: "English",
    selected: true,
  },
  {
    value: "spanish",
    label: "Spanish",
  },
];

function SignUp() {
  const navigate = useNavigate();
  const [role, setRole] = useState(true);
  const [signup, setSignup] = useState(false);
  const [selectedOption, setSelectedOption] = useState("company");
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  const handleSignup = () => {
    setRole(false);
    setSignup(true);
  };

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const addLink = () => {
    if (text.trim() !== "") {
      setList([...list, { text, isEditing: false }]);
      setText("");
    } else {
      alert("Please Add Link");
    }
  };

  const removeLink = (i) => {
    const newList = [...list];
    newList.splice(i, 1);
    setList(newList);
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
          <Col md={6} className={styles.AuthFormMain}>
            <div className={styles.AuthForm}>
              {role && (
                <div className="d-flex flex-column align-items-center w-75 mx-auto">
                  <h4>Select your role</h4>
                  <button className={styles.roleBtn}>
                    <BsPersonCircle size={22} className="me-2" /> Service
                    Provider
                  </button>
                  <button className={styles.roleBtn}>
                    <BsBriefcaseFill size={22} className="me-2" /> Client
                  </button>
                  <AppButton
                    width="100%"
                    title="Continue"
                    background="#141416"
                    className="mt-2"
                    onClick={handleSignup}
                  />
                </div>
              )}
              {signup && (
                <div className="d-flex flex-column align-items-center justify-content-center py-5 w-75 mx-auto mt-5">
                  <h4 className="mt-2 mb-0">Sign up</h4>
                  <p className="fs-6">Create an account to Service Provider!</p>
                  <div className="">
                    <FileUpload className="mx-auto">
                      <div className={styles.profile}>
                        <img src="https://th.bing.com/th/id/OIP.aiDGdmdUAX_iNgRMERipyQHaHF?rs=1&pid=ImgDetMain" />
                        <div className={styles.profileEdit}>
                          <MdEdit size={14} color="white" />
                        </div>
                      </div>
                    </FileUpload>
                  </div>

                  <div className="d-flex ">
                    <Radiobutton
                      id="company"
                      name="company"
                      value="company"
                      label="Company"
                      checked={selectedOption === "company"}
                      onChange={handleRadioChange}
                    />
                    <Radiobutton
                      id="individual"
                      name="individual"
                      value="individual"
                      label="Individual"
                      checked={selectedOption === "individual"}
                      onChange={handleRadioChange}
                    />
                  </div>

                  <InputField
                    label="Company Name*"
                    type="text"
                    placeholder="GEN - General Enterprise"
                    required="true"
                  />

                  <InputField
                    label="Estimated Number*"
                    type="text"
                    placeholder="40"
                    required="true"
                  />

                  <InputField
                    label="Email*"
                    type="text"
                    placeholder="deanna.curtis@expamle.com"
                    required="true"
                  />

                  <DropdownInput
                    label="Mobile*"
                    type="text"
                    placeholder="(603) 555-0123"
                    required="true"
                    list={contactNumber}
                  />

                  <InputField
                    label="Phone*"
                    type="text"
                    placeholder="Cameron Willamson"
                    required="true"
                  />

                  <FileUpload
                    className={styles.FileUpload}
                    label={
                      <p className="text-start">
                        company logo upload <br /> maximum file size is 5mb
                      </p>
                    }
                  >
                    <img src="https://learn.starlegacyfoundation.org/wp-content/plugins/tutor/assets/images/placeholder.svg" />
                  </FileUpload>

                  <Dropdown list={category} label="Select Category" />

                  <Dropdown list={subCategory} label="Sub Category" />

                  <InputField
                    label="Tax ID Number*"
                    type="text"
                    placeholder="000-000-0000"
                    required="true"
                  />

                  <InputField
                    label="Contact Name*"
                    type="text"
                    placeholder="Johnson Smith"
                    required="true"
                  />

                  <DropdownInput
                    label="Contact Phone*"
                    type="text"
                    placeholder="(603) 555-0123"
                    required="true"
                    list={contactNumber}
                  />

                  <InputField
                    label="Address*"
                    type="text"
                    placeholder="Address"
                    required="true"
                  />

                  <InputField
                    label="Address2"
                    type="text"
                    placeholder="Address"
                    required="true"
                  />

                  <Dropdown list={offered} label="Work with sex Offenders" />

                  <div className="py-2 w-100">
                    <div
                      style={{
                        fontStyle: "normal",
                        fontWeight: 500,
                        fontSize: "14px",
                        lineHeight: "24px",
                        color: "#425466",
                        marginBottom: "8px",
                        textTransform: "capitalize",
                      }}
                    >
                      Social Media Links
                    </div>
                    <div
                      style={{
                        // width: "0px",
                        border: "none",
                        background: `#EDF2F7`,
                        borderRadius: `6px`,
                        height: "45px",
                        border: "none",
                        padding: "5px 15px",
                        textTransform: "capitalize",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <input
                        placeholder="http://x.com/@href"
                        style={{
                          border: "none",
                          background: "transparent",
                          outline: "none",
                        }}
                        value={text}
                        onChange={(e) => {
                          setText(e.target.value);
                        }}
                      />
                      <IoAddCircleOutline size={22} onClick={addLink} />
                    </div>
                    {list.map((x, i) => (
                      <div
                        className="my-2"
                        style={{
                          // width: "0px",
                          border: "none",
                          background: `#EDF2F7`,
                          borderRadius: `6px`,
                          height: "45px",
                          border: "none",
                          padding: "5px 15px",
                          textTransform: "capitalize",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <span>{x.text}</span>

                        <MdDelete size={22} onClick={() => removeLink(i)} />
                      </div>
                    ))}
                  </div>

                  <InputField
                    label="Website Link"
                    type="text"
                    placeholder="https://websitelink.com"
                    required="true"
                  />

                  {/* <InputField
                    label="City*"
                    type="text"
                    placeholder="TX, USA"
                    required="true"
                  />

                  <InputField
                    label="state*"
                    type="text"
                    placeholder="Texas, USA"
                    required="true"
                  /> */}

                  <InputField
                    label="Country*"
                    type="text"
                    placeholder="USA"
                    required="true"
                  />

                  <InputField
                    label="Zip*"
                    type="text"
                    placeholder="92105"
                    required="true"
                  />

                  <InputField
                    label="Enter Password*"
                    type="password"
                    placeholder="*****"
                    required="true"
                  />

                  <InputField
                    label="Confirm Password*"
                    type="password"
                    placeholder="*****"
                    required="true"
                  />

                  <Dropdown list={language} label="Select Language" />

                  <TextArea
                    label="organization Products*"
                    type="text"
                    placeholder="Please enter a describtion"
                    required="true"
                  />

                  <FileUpload className="border rounded-2 py-3 w-100 text-center">
                    <div>
                      <FaFilePdf size={24} />
                      <h6 className="pt-2">Drop Your File Here, Browser</h6>
                      <p>Support: pdf, Max file size 100MB</p>
                    </div>
                  </FileUpload>

                  <FileUpload label="Upload Bussiness Proof" className="w-100">
                    <div className="d-flex align-items-center">
                      <div
                        className="w-25 text-center p-2 border text-white d-flex align-items-center justify-content-center"
                        style={{
                          background: "#141416",
                          borderTopLeftRadius: "5px",
                          borderBottomLeftRadius: "5px",
                          fontSize: "12px",
                        }}
                      >
                        {" "}
                        UPLOAD <GrUploadOption size={14} className="ms-1" />
                      </div>
                      <div
                        className="w-75 p-2 text-center border"
                        style={{
                          borderTopRightRadius: "5px",
                          borderBottomRightRadius: "5px",
                          fontSize: "14px",
                        }}
                      >
                        Please upload docs
                      </div>
                    </div>
                  </FileUpload>

                  <AppButton
                    width="100%"
                    title="Submit"
                    background="#141416"
                    className="mt-3"
                  />

                  <div className={styles.AuthFormContent}>
                    <p>
                      Already have an Accout{" "}
                      <span
                        onClick={() => {
                          navigate("/sign-in");
                        }}
                      >
                        Log In
                      </span>
                    </p>
                  </div>
                </div>
              )}
            </div>
            <div
              className="position-absolute start-50 translate-middle"
              style={{ top: "70px" }}
              onClick={() => {
                navigate("/");
              }}
            >
              <img src={AppLogo} className={` ${styles.Logo} `} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default SignUp;
