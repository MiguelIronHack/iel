import React from "react";

const DropdownItem = ({ index, data, handleSelect }) => {
  const raiseSelectedItem = e => {
    handleSelect(data);
  };

  return (
    <React.Fragment>
      {!index > 0 ? null : <hr className="dropdown-divider" />}
      <div onClick={e => raiseSelectedItem(e)} className="dropdown-item">
        <p>{data.name}</p>
      </div>
    </React.Fragment>
  );
};

export default DropdownItem;
