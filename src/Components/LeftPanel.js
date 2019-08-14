import React from "react";
import Box from "@material-ui/core/Box";
import { JsonTree } from "react-editable-json-tree";

import SearchBar from "./SearchBar";
import Breadcrumb from "./Breadcrumb";

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

// Component

export default () => {
  return (
    <Box width={0.5}>
      <SearchBar placeholder="Search by json path" />
      <SearchBar placeholder="Search by value" />
      <br />
      <Breadcrumb />
      <Box bgcolor="#fafafa" padding={2}>
        <JsonTree data={data} style={{ margin: 20 }} />
      </Box>
    </Box>
  );
};
