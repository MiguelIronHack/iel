import React from "react";

const Input = ({
  label,
  name,
  text,
  error,
  inputPlaceHolder,
  handleChange
}) => {
  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control ">
        <input
          name={name}
          value={text}
          onChange={handleChange}
          className={error ? "input is-danger" : "input is-info"}
          type="text"
          placeholder={inputPlaceHolder}
        />

        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

export default Input;
