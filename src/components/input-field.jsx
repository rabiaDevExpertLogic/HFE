import React from "react";

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
    width
  } = props;
  return (
    <div className="py-2 w-100">
      {label && (
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
          background: `#EDF2F7`,
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
