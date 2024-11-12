import React, { useRef, useState } from "react";

const OTPInput = ({ length = 4, onComplete }) => {
  const inputRef = useRef(Array(length).fill(null));

  const [OTP, setOTP] = useState(Array(length).fill(""));

  const handleTextChange = (input, index) => {
    const newPin = [...OTP];
    newPin[index] = input;
    setOTP(newPin);

    if (input.length === 1 && index < length - 1) {
      inputRef.current[index + 1]?.focus();
    }

    if (input.length === 0 && index > 0) {
      inputRef.current[index - 1]?.focus();
    }

    if (newPin.every((digit) => digit !== "")) {
      onComplete(newPin.join(""));
      console.log("complete otp")
    }
  };

  return (
    <div className="d-flex">
      {Array.from({ length }, (_, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          value={OTP[index]}
          onChange={(e) => handleTextChange(e.target.value, index)}
          ref={(ref) => (inputRef.current[index] = ref)}
          style={{
            flex: `0 0 23%`,
            background: `#EDF2F7`,
            borderRadius: `6px`,
            height: "45px",
            width: "100%",
            border: "none",
            padding: "5px 15px",
            marginRight: index === length - 1 ? "0" : "2.5%",
          }}
          placeholder=""
        />
      ))}
    </div>
  );
};

export default OTPInput;
