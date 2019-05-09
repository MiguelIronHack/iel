import React from "react";

const UserCard = props => {
  const {
    firstName,
    lastName,
    userName,
    image = "https://c-7npsfqifvt0x24hbnfqfejbx2edvstfdeox2edpn.g00.gamepedia.com/g00/3_c-7tusfbnfst.hbnfqfejb.dpn_/c-7NPSFQIFVT0x24iuuqtx3ax2fx2fhbnfqfejb.dvstfdeo.dpnx2fux78judi_hbnfqfejbx2f2x2f2bx2fJnbruqjf.QOHx3fwfstjpox3df429e3251gee9g70830cb847g67d3930x26j21d.nbslx3djnbhf_$/$/$/$/$"
  } = props.data;

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={image} alt="Placeholder image1" />
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
