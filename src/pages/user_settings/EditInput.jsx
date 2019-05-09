import React from "react";

const EditInput = props => {
  const { label, inputPlaceHolder } = props;
  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control has-icons-left has-icons-right">
        <input
          className="input is-success"
          type="text"
          placeholder={inputPlaceHolder}
        />
        <span className="icon is-small is-left">
          <i className="fas fa-user" />
        </span>
      </div>
    </div>
  );
};

export default EditInput;
