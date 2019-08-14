import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import SaveIcon from "@material-ui/icons/Save";

const useStyles = makeStyles({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center"
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

// Component

export default props => {
  const classes = useStyles();
  return (
    <Paper className={classes.root} width={1}>
      <MenuIcon />
      <InputBase
        className={classes.input}
        placeholder={props.placeholder}
        inputProps={{ "aria-label": "Search" }}
      />
      <IconButton className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider className={classes.divider} />
      <IconButton
        color="primary"
        className={classes.iconButton}
        aria-label="directions"
      >
        <SaveIcon />
      </IconButton>
    </Paper>
  );
};
