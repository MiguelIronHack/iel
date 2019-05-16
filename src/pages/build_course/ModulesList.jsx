import React from "react";
import List from "../../components/List";

const ModuleList = ({
  selectedMod,
  title,
  data,
  handleSelect,
  handleRemove,
  handleModule
}) => {
  if (!data) return <h1>Nothing to display</h1>;
  return (
    <>
      <div
        className={selectedMod._id === data._id ? "module active" : "module"}
        onClick={e => handleSelect(e, data)}
      >
        <h1>
          {title}
          <span className="delete-btn">
            <button
              onClick={e => handleModule(data)}
              className="delete delete-btn"
            >
              x
            </button>
          </span>
        </h1>
        <List
          mod={data}
          deletable={true}
          handleClick={handleRemove}
          data={data.lessons}
        />
      </div>
    </>
  );
};

export default ModuleList;
