import React from "react";
import EditInput from "./EditInput";

const SettingsForm = props => {
  const { userName, lastName, image } = props;
  return (
    <form className="column is-4">
      <EditInput inputPlaceHolder={userName} label="User Name" />
      <EditInput inputPlaceHolder={lastName} label="Last Name" />
      <EditInput inputPlaceHolder={image} label="Image url" />
      <button className="button">Submit changes</button>
    </form>
  );
};

export default SettingsForm;
