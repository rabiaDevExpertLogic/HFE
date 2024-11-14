import React from "react";
import baseColor from "../config/color";

export default function DropdownInput(props) {
  const {
    label,
    value,
    onChange,
    type = "text",
    required,
    placeholder,
    className,
    disabled,
    list,
    listID,
    width,
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
            color: baseColor.darkGrey,
            marginBottom: "8px",
            textTransform: "capitalize",
          }}
        >
          {label}
        </div>
      )}

      <div
        style={{
          background: baseColor.lightGrey,
          borderRadius: `6px`,
          height: "45px",
          // width: width ? width : "100%",
          border: "none",
          padding: "5px 15px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <select
          id={listID}
          style={{
            background: "none",
            border: "none",
            outline: "none",
            marginRight: "5px",
          }}
        >
          {list.map((x, i) => (
            <option key={i} value={x.value} selected={x.selected}>
              {x.label}
            </option>
          ))}
        </select>
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          className={className}
          style={{
            background: "none",
            width: "100%",
            border: "none",
            outline: "none",
            border: "1px solid transparent",
            borderLeftColor: "#d1d1d1",
            height: "28px",
            paddingLeft: "5px",
          }}
        />
      </div>
    </div>
  );
}
