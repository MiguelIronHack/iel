import React from "react";

const UserCard = props => {
  const { firstName, lastName, userName, avatar, userDescription } = props.data;

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={avatar} alt="Placeholder image1" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left" />
          <div className="media-content">
            <p className="title is-4">
              <span>{firstName}&nbsp;</span>
              {lastName}
            </p>
            <p className="subtitle is-6">{userName}</p>
            <p className="subtitle is-6">{userDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
