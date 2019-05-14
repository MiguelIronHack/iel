import React from "react";
import "../settings.css";

const UserCard = ({ user, handleImage }) => {
  if (!user) return null;
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image profile-img is-64x64">
          <img src={user.avatar} alt="Placeholder image1" />
        </figure>
      </div>
      <div className="card-content profile-card">
        <div className="media">
          <div className="media-left" />
          <div className="media-content">
            <p className="title is-4">
              <span>{user.firstName}&nbsp;</span>
              {user.lastName}
            </p>
            <p className="subtitle is-6">
              username@&nbsp;{user.userName ? user.userName : "No Username yet"}
            </p>
            <p className="subtitle is-6">TODO DESCRIPTION HERE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
