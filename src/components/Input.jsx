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
      <div className="control has-icons-left has-icons-right">
        <input
          name={name}
          value={text}
          onChange={handleChange}
          className={error ? "input is-danger" : "input is-success"}
          type="text"
          placeholder={inputPlaceHolder}
        />
        <span className="icon is-small is-left">
          <i className="fas fa-user" />
        </span>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

export default Input;
