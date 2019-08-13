import React from "react";
import JsonTree from "react-editable-json-tree";

export default props => {
  // Data
  const data = {
    error: new Error("error"),
    text: "text",
    int: 100,
    boolean: true,
    null: null,
    object: {
      text: "text",
      int: 100,
      boolean: true
    },
    array: [
      1,
      {
        string: "test"
      }
    ]
  };

  return <div>welcome</div>;
};
