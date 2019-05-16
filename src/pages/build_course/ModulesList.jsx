import React from "react";
import List from "../../components/List";

const ModuleList = ({
  title,
  data,
  handleSelect,
  handleRemove,
  handleModule
}) => {
  if (!data) return <h1>Nothing to display</h1>;
  return (
    <React.Fragment>
      <div className="column is-4" onClick={() => handleSelect(data)}>
        <h1>
          {title}
          <span>
            <button onClick={e => handleModule(data)} className="delete">
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
    </React.Fragment>
  );
};

export default ModuleList;
