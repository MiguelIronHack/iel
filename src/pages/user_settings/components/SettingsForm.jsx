import React from "react";
import EditInput from "./EditInput";
import InputFile from "./../../../components/InputFile";

const SettingsForm = ({ handleSubmit, user, handleChange, errors }) => {
  if (!user) return null;
  return (
    <React.Fragment>
      <form
        id={user.userName}
        onSubmit={handleSubmit}
        className="column is-4 profile-settings-form"
      >
        <EditInput
          inputPlaceHolder={user.userName}
          text={user.userName}
          onChange={handleChange}
          name="userName"
          label="User Name"
          id="userName"
          error={errors.userName}
        />

        <EditInput
          text={user.firstName}
          inputPlaceHolder={user.firstName}
          onChange={handleChange}
          name="firstName"
          label="First Name"
          id="firstName"
          error={errors.firstName}
        />

        <EditInput
          text={user.lastName}
          inputPlaceHolder={user.lastName}
          name="lastName"
          onChange={handleChange}
          label="Last Name"
          id="lastName"
          error={errors.lastName}
        />

        <EditInput
          text={user.description}
          inputPlaceHolder={user.description}
          name="description"
          label="Description"
          id="description"
          error={errors.description}
        />

        <InputFile />

        <button
          className="button"
          disabled={Object.keys(errors).length ? true : false}
        >
          Save Changes
        </button>
      </form>
    </React.Fragment>
  );
};

export default SettingsForm;
