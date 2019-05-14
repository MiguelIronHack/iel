import React from "react";

import EditInput from "./EditInput";

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

// import EditInput from "./EditInput";
// import { uploadImage } from "../../../services/imageUploadAPI";

// export default class SettingsForm extends Component {
//   state = {};

//   raiseSubmit = e => {
//     e.preventDefault();
//     this.props.handleSubmit({
//       firstName: this.state.firstName,
//       lastName: this.state.lastName,
//       userName: this.state.userName,
//       avatar: this.state.avatar
//     });
//   };

//   handleImage = e => {
//     uploadImage(e)
//       .then(res => {
//         console.log(res.data.results[0].secure_url);
//       })
//       .catch(err => console.log(err));
//   };

//   handleChange = e => {
//     this.setState({ [e.currentTarget.name]: e.currentTarget.value });
//     console.log(this.state);
//   };
//   prevent = e => {
//     e.preventDefault();
//   };

//   render() {
//     const { userName, lastName, avatar, firstName } = this.state;
//     return (
//       <React.Fragment>
//         <form id={userName} onSubmit={this.raiseSubmit} className="column is-4">
//           <EditInput
//             props={this.props}
//             inputPlaceHolder={userName}
//             onChange={this.handleChange}
//             name="userName"
//             label="User Name"
//           />
//           <EditInput
//             inputPlaceHolder={firstName}
//             onChange={this.handleChange}
//             name="firstName"
//             label="First Name"
//             id="firstName"
//           />
//           <EditInput
//             inputPlaceHolder={lastName}
//             name="lastName"
//             onChange={this.handleChange}
//             label="Last Name"
//           />
//           <EditInput
//             inputPlaceHolder={avatar}
//             name="avatar"
//             onChange={this.handleChange}
//             label="Image url"
//           />
//           <button className="button">Save Changes</button>
//         </form>
//         <input
//           type="file"
//           id="avatar2"
//           name="avatar2"
//           accept="image/png, image/jpeg"
//           onChange={this.handleImage}
//         />
//       </React.Fragment>
//     );
//   }
// }
