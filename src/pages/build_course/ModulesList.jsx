import React from "react";
import List from "../../components/List";

const ModuleList = ({ title, data, handleSelect, handleRemove }) => {
  if (!data) return <h1>Nothing to display</h1>;
  return (
    <React.Fragment>
      <div onClick={() => handleSelect(data)}>
        <h1>{title}</h1>
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
