import React from "react";

export default function Radiobutton(props) {
  const { btnField, id, name, value, label, image, checked, right, onChange } =
    props;

  return (
    <div className="form-check p-0">
      <div
        className={`mx-1 my-3 py-2 px-4 rounded-2 transition-all duration-300 ease-in-out 
                    form-check-label`}
        style={{
          background: "#EDF2F7",
          border: checked ? "2px solid #141416" : "2px solid #EDF2F7",
        }}
      >
        <input
          type="radio"
          id={id}
          name={name}
          value={value}
          className="form-check-input d-none"
          checked={checked}
          onChange={onChange}
          required
        />
        <label
          htmlFor={id}
          className={`d-flex align-items-center justify-content-center cursor-pointer`}
          style={{
            fontSize: "14px",
            fontFamily: `'DM Sans', sans-serif`,
            fontWeight: 500,
            color: "#27272E",
          }}
        >
          <span
            style={{
              width: "12px",
              height: "12px",
              border: "1px solid #141416",
            }}
            className={`rounded-circle me-2 d-flex align-items-center justify-content-center 
                                transition-all duration-300 ease-in-out `}
          >
            {checked ? (
              <span
                className="rounded-circle"
                style={{
                  width: "8px",
                  height: "8px",
                  background: "#141416",
                }}
              ></span>
            ) : (
              <span
                className=""
                style={{
                  width: "8px",
                  height: "8px",
                  background: "transparent",
                }}
              ></span>
            )}
          </span>

          {label}
        </label>
      </div>
    </div>
  );
}
