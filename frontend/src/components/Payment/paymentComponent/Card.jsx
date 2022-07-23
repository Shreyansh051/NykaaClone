import { Box, ListItem, Stack, TextField } from "@mui/material";
import React from "react";
import Style from "../payment.module.css";

export const Card = () => {
  return (
    <div>
      <div>
        <h4>Credit/Debit Card</h4>
      </div>
      <hr style={{ background: "#8c8d94" }} />
      <div>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { width: "90%" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="standard-basic"
            label="Card Number"
            variant="standard"
            required
          />
        </Box>
        <div>
          <div className={Style.lae}>
            <p>expiry</p>
          </div>

          <div className={Style.cardInput}>
            <input type="text" placeholder="MM / YY" required />
            <input type="text" placeholder="CVV" required />
            <span>
              <img
                src="https://www.nykaa.com/assets/desktop/images/checkout/bank-card-back-side.png"
                alt=""
              />
            </span>
            <span>
              last 3 digits at <br /> the back of
              <br /> the card
            </span>
          </div>
          <div>
            <button
              style={{
                width: "100%",
                height: "50px",
                color: "#fff",
                backgroundColor: "#fc2779",
                fontWeight: "500",
                marginTop: "35px",
                cursor: "pointer",
              }}
              type="submit"
              name=""
              id=""
            >{`PAY  NOW >`}</button>
          </div>
        </div>
      </div>
    </div>
  );
};
