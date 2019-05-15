import React, { useState } from "react";
import DropdownItem from "./DropdownItem";

//This component is a controlled component, it just gets info and displays it so "sfc" my boiz

const Dropdown = ({ currentItem, data, name, handleSelect, label }) => {
  const [isActive, setActiveClassName] = useState(false);

  return (
    <React.Fragment>
      <div
        onClick={() => setActiveClassName(!isActive)}
        className={isActive ? "dropdown is-active" : "dropdown"}
      >
        <label>{label}</label>
        <div className="dropdown-trigger">
          <button
            onClick={e => e.preventDefault()}
            className="button"
            aria-haspopup="true"
            aria-controls={name}
          >
            <span>{currentItem && currentItem.name}</span>
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
    </React.Fragment>
  );
};

export default Dropdown;
