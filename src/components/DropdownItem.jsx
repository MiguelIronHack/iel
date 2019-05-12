import React from "react";

const DropdownItem = ({ index, data, handleSelect }) => {
  return (
    <React.Fragment>
      {!index > 0 ? null : <hr className="dropdown-divider" />}
      <div onClick={e => handleSelect(e)} className="dropdown-item">
        <p>{data.name}</p>
      </div>
    </React.Fragment>
  );
};

export default DropdownItem;
