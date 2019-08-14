import React from "react";
import SwipeableViews from "react-swipeable-views";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import TabPanel from "./TabPanel";
import LeftPanel from "./LeftPanel";
import BusinessIcon from "@material-ui/icons/SupervisedUserCircle";
import CodeIcon from "@material-ui/icons/Code";
import AddressBar from "./Addressbar";

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`
  };
}

export default function App() {
  // const theme = useTheme();
  const [value, setValue] = React.useState(0);

  function handleChange(newValue) {
    setValue(newValue);
  }

  function handleChangeIndex(index) {
    setValue(index);
  }

  const theme = {
    spacing: 8
  };
  return (
    <Box width={1}>
      <AddressBar />
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        left
        aria-label="full width tabs example"
      >
        <Tab
          classes={{ width: 200 }}
          label="For Business"
          icon={<BusinessIcon />}
          {...a11yProps(0)}
        />
        <Tab
          style={{ width: 200 }}
          label="For Developer"
          {...a11yProps(1)}
          icon={<CodeIcon />}
        />
      </Tabs>

      <SwipeableViews
        axis={"x"}
        index={value}
        style={{ marginTop: 20 }}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <LeftPanel />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
