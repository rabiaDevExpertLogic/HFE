import React from "react";

export default function FileUpload(props) {
  const { onChange, value, className, disabled, children, label } = props;

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
      <label for="uploadFile1" className={className}>
        {children}
        <input
          type="file"
          id="uploadFile1"
          className="d-none"
          disabled={disabled}
        />
      </label>
    </div>
  );
}
