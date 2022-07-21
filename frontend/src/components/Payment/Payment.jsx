import { Box, Tab, Tabs, Typography } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { CheckOutHeader } from "../Address/CheckOutHeader";
import Style from "./payment.module.css";
import { Cod } from "./paymentComponent/Cod";
import { GooglePay } from "./paymentComponent/GooglePay";
import { Upi } from "./paymentComponent/Upi";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}
export const Payment = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <div>
        <CheckOutHeader />
      </div>
      <div className={Style.Psidebar}>
        <Box
          sx={{
            flexGrow: 1,
            bgcolor: "background.paper",
            display: "flex",
            height: 335,
          }}
        >
          <Tabs
            orientation="vertical"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: "divider" }}
          >
            <Tab label="Credit/Debit Card" {...a11yProps(0)} />
            <Tab label="UPI" {...a11yProps(1)} />
            <Tab label="GooglePay" {...a11yProps(2)} />
            <Tab label="Net Banking" {...a11yProps(3)} />
            <Tab label="Mobile Wallets" {...a11yProps(4)} />
            <Tab label="Cash on Delivery" {...a11yProps(6)} />
            <Tab label="Gift  Card" {...a11yProps(7)} />
          </Tabs>
          <TabPanel value={value} index={0}>
            Item One
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Upi />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <GooglePay />
          </TabPanel>  
          <TabPanel value={value} index={5}>
            <Cod />
          </TabPanel>
          <TabPanel value={value} index={6}>
            Item Seven
          </TabPanel>
        </Box>
      </div>
    </div>
  );
};
