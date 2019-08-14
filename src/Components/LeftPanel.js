import React from "react";
import Box from "@material-ui/core/Box";
import { JsonTree } from "react-editable-json-tree";

import { makeStyles } from "@material-ui/core/styles";
import SearchBar from "./SearchBar";
import Breadcrumb from "./Breadcrumb";


const useStyles = makeStyles({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400
  },
  input: {
    marginLeft: 8,
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4
  }
});

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
      <br/>
      <Breadcrumb />
      <Box bgcolor="#fafafa" padding={2}>
        <JsonTree data={data} style={{ margin: 20 }} />
      </Box>
    </Box>
  );
};
