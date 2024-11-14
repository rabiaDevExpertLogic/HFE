import React from "react";
import baseColor from "../config/color";

export default function InputField(props) {
  const {
    label,
    value,
    onChange,
    type = "text",
    required,
    placeholder,
    className,
    disabled,
    width,
    horizental,
  } = props;
  return (
    <div
      className={
        horizental === true ? "d-flex align-item-center mb-3" : "py-2 w-100"
      }
    >
      {label && (
        <div
          style={{
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "14px",
            lineHeight: "24px",
            color: baseColor.darkGrey,
            margin: horizental === true ? "auto 0px" : "0 0 8px 0",
            textTransform: "capitalize",
            width: horizental === true ? "250px" : "auto",
          }}
        >
          {label}
        </div>
      )}

      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        className={className}
        style={{
          background: baseColor.lightGrey,
          borderRadius: `6px`,
          height: "45px",
          width: width ? width : "100%",
          border: "none",
          padding: "5px 15px",
        }}
      />
    </div>
  );
}
