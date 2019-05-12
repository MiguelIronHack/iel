import React, { useState } from "react";
import DropdownItem from "./DropdownItem";

//This component is a controlled component, it just gets info and displays it so "sfc" my boiz

const Dropdown = ({ currentItem, data, name, handleSelect }) => {
  const [isActive, setActiveClassName] = useState(false);

  return (
    <div
      onClick={() => setActiveClassName(!isActive)}
      className={isActive ? "dropdown is-active" : "dropdown"}
    >
      <div className="dropdown-trigger">
        <button className="button" aria-haspopup="true" aria-controls={name}>
          <span>{currentItem}</span>
          <span className="icon is-small">
            <i className="fas fa-angle-down" aria-hidden="true" />
          </span>
        </button>
      </div>
      <div className="dropdown-menu" id={name} role="menu">
        <div className="dropdown-content">
          {data.map((item, index) => (
            <DropdownItem
              handleSelect={handleSelect}
              key={index}
              data={item}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
