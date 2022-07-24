import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Stack,
  Divider,
  Button,
  Skeleton,
} from "@mui/material";
import {useNavigate} from "react-router-dom"
import React from "react";
import { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem, getAllCart } from "../../actions/products";
import styles from "./MuiDrawer.module.css";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { changeQuantity } from "../../actions/products";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
export const MuiDrawer = () => {
  const navigate= useNavigate()
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { cart, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleProceed = () => {
    localStorage.setItem("total", JSON.stringify({ total: total }));
    navigate("/address")
  }
  useEffect(() => {  
    const localStorageData = JSON.parse(localStorage.getItem("oAuth")) || JSON.parse(localStorage.getItem("user")) || []
    const userID= localStorageData.ID
        dispatch(getAllCart(userID));
  }, [dispatch])
  return (
    <>
      <IconButton
        onClick={() => setIsDrawerOpen(true)}
        style={{ marginLeft: "80%" }}
        size="large"
        edge="end"
        color="inherit"
        aria-label="logo"
      >
        <ShoppingCartIcon style={{ marginLeft: "80%", color: "#fd7aac" }} />
        <p style={{ color: "#fd7aac", fontSize: "16px" }}>{cart.length}</p>
      </IconButton>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box p={2} width="350px" role="presentation" textAlign="center">
          <Stack flexDirection="row">
            <IconButton onClick={() => setIsDrawerOpen(false)}>
              <ArrowBackIcon />
            </IconButton>
            <Typography marginLeft="5px" marginTop="5px" variant="h5">
              Bag
            </Typography>
            <Typography color="grey" marginLeft="10px" marginTop="9px">
              {cart.length} items
            </Typography>
          </Stack>
          <Divider />
          {cart ? (
            cart.map((e, i) => (
              <div key={i} className={styles.card_container}>
                <Stack
                  padding={1}
                  flexDirection="row"
                  justifyContent={"space-between"}
                >
                  <img className={styles.cartImage} src={e.image_url} alt="" />
                  <Typography
                    marginLeft={1}
                    marginRight={1}
                    variant="subtitle2"
                  >
                    {e.name}
                  </Typography>
                  <Stack>
                    <IconButton onClick={() => dispatch(deleteItem(e._id))}>
                      <DeleteOutlineOutlinedIcon
                        fontSize="small"
                        style={{ color: "rgba(0,0,0,0.30)" }}
                      />
                    </IconButton>
                  </Stack>
                </Stack>
                <Divider style={{ width: "90%", margin: "auto" }} />
                <div style={{ display: "flex" }}>
                  <Box marginTop={2} marginLeft={2} sx={{ minWidth: 80 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Quantity
                      </InputLabel>
                      <Select
                        size="small"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={e.quantity}
                        label="Quantity"
                        onChange={(event) =>
                          dispatch(changeQuantity(e._id, event.target.value))
                        }
                      >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                  <Typography variant="subtitle1" marginLeft={24} marginTop={3}>
                    ₹{e.price * e.quantity}
                  </Typography>
                </div>
              </div>
            ))
          ) : (
            <Skeleton variant="rectangular" width={210} height={118} />
          )}
          <div
            style={{
              textAlign: "start",
              paddingLeft: "15px",
              paddingRight: "15px",
            }}
            className={styles.paymentContainer}
          >
            <div>
              <h3>Price Details</h3>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography fontSize={13} variatnt="subtitle1">
                Bag MRP ({cart.length} items)
              </Typography>
              <Typography fontSize={13} variatnt="subtitle1">
                ₹{total}
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "20px",
              }}
            >
              <Typography fontSize={13} variatnt="subtitle1">
                Shipping
              </Typography>
              <Typography fontSize={13} variatnt="subtitle1">
                <s>₹70</s> Free
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "20px",
              }}
            >
              <h3 style={{ marginTop: "-8px" }}>You Pay</h3>
              <h3 style={{ marginTop: "-8px" }}>₹{total}</h3>
            </div>
            <div className={styles.reward}>
              <img
                className={styles.rewardImg}
                src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/3Success.svg"
                alt=""
              />
              <Typography fontSize={13} marginTop={1.2} variatnt="subtitle1">
                Yay! You will earn {total} reward point
              </Typography>
            </div>
          </div>
          <Divider style={{ marginTop: "40px", width: "104%" }} />
          <div className={styles.finalCon}>
            <h2 style={{ marginTop: "-5px" }}>₹{total}</h2>
            <Button
              onClick={() => handleProceed()}
              style={{
                marginTop: "5px",
                borderRadius: "10px",
                background: "rgb(232,0,113)",
                height: "40px",
                width: "150px",
                display: "flex",
                justifyContent: "space-between",
              }}
              variant="contained"
            >
              Proceed <ArrowForwardIcon />
            </Button>
          </div>
          <div style={{ display: "flex", marginTop: "-20px" }}>
            <Typography fontSize={10} variatnt="subtitle1">
              Grand Total
            </Typography>
            <img
              style={{ marginLeft: "10px" }}
              src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/5TootltipInfo.svg"
              alt=""
            />
          </div>
        </Box>
      </Drawer>
    </>
  );
};
