import React from "react";

const Part = ({ mess, onChangeText }) => {
  return (
    <div className="messform">
      Message:
      <input
        value={mess.message}
        onChange={(e) => onChangeText(e.target.value)}
      />
    </div>
  );
};

export default Part;
