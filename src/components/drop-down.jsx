import React from "react";

export default function Dropdown(props) {
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
    list,
    listID,
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
      <div
        style={{
          background: `#EDF2F7`,
          borderRadius: `6px`,
          height: "45px",
          // width: width ? width : "350px",
          border: "none",
          padding: "5px 15px",
          textTransform: "capitalize",
          display: "flex",
          alignItems: "center ",
        }}
      >
        {/* <select
          id="cars"
          style={{
            background: "none",
            border: "none",
            outline: "none",
            width: "100%",
            height: "45px",
          }}
        >
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="vw">VW</option>
          <option value="audi" selected>
            Audi
          </option>
        </select> */}
        <select
          id={listID}
          style={{
            background: "none",
            border: "none",
            outline: "none",
            width: "100%",
            height: "45px",
          }}
        >
          {list.map((x, i) => (
            <option key={i} value={x.value} selected={x.selected}>
              {x.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
