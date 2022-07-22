import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useDispatch, useSelector } from "react-redux";
import { FilterProducts, SortProducts } from "../../actions/products";

const Accordian = () => {
    const [value, setValue] = React.useState('discount');
    const [filter, setFilter] = React.useState("");
    const dispatch = useDispatch();
  const handleChange = (event) => {
    setValue(event.target.value);
     dispatch(SortProducts(event.target.value));
  };

  const filterChange = (e) => {
    setFilter(e.target.value);
    dispatch(FilterProducts(e.target.value));
  }
  return (
    <div>
      <Accordion style={{ width: "15vw" }}>
        <AccordionSummary
          aria-controls="panel1-content"
          id="panel1-header"
          expandIcon={<ExpandMoreIcon style={{color:"rgb(232,0,113)"}} />}
        >
          <Typography style={{fontWeight:"bold"}}>Sort By: {value}</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <FormControl>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="Discount" control={<Radio style={{color:"rgb(232,0,113)"}} />} label="Discount" />
        <FormControlLabel value="Price: High To Low" control={<Radio style={{color:"rgb(232,0,113)"}} />} label="Price: High To Low" />
        <FormControlLabel value="Price: Low To High" control={<Radio style={{color:"rgb(232,0,113)"}}/>} label="Price: Low To High" />
        <FormControlLabel value="Rating" control={<Radio style={{color:"rgb(232,0,113)"}}/>} label="Rating" />
      </RadioGroup>
    </FormControl>
        </AccordionDetails>
      </Accordion>

      <Accordion style={{ width: "15vw", marginTop:"30px" }}>
        <AccordionSummary
          aria-controls="panel1-content"
          id="panel1-header"
          expandIcon={<ExpandMoreIcon style={{color:"rgb(232,0,113)"}} />}
        >
          <Typography style={{fontWeight:"bold"}}>Category</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <FormControl>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={filter}
        onChange={filterChange}
      >
        <FormControlLabel value="FEATURED"  label="Featured" control={<Radio style={{color:"rgb(232,0,113)"}} />} />
        <FormControlLabel value="BESTSELLER" control={<Radio style={{color:"rgb(232,0,113)"}} />} label="Bestseller" />
      </RadioGroup>
    </FormControl>
        </AccordionDetails>
      </Accordion>

      {/* DUMMY DATA  */}
      <Accordion style={{ width: "15vw" }}>
        <AccordionSummary
          aria-controls='panel1-content'
          id='panel1-header'
          expandIcon={<ExpandMoreIcon style={{color:"rgb(232,0,113)"}}  />}>
          <Typography style={{fontWeight:"bold"}}>Brand</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ width: "15vw" }}>
        <AccordionSummary
          aria-controls='panel1-content'
          id='panel1-header'
          expandIcon={<ExpandMoreIcon style={{color:"rgb(232,0,113)"}}  />}>
          <Typography style={{fontWeight:"bold"}}>Price</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ width: "15vw" }}>
        <AccordionSummary
          aria-controls='panel1-content'
          id='panel1-header'
          expandIcon={<ExpandMoreIcon style={{color:"rgb(232,0,113)"}}  />}>
          <Typography style={{fontWeight:"bold"}}>discount</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ width: "15vw" }}>
        <AccordionSummary
          aria-controls='panel1-content'
          id='panel1-header'
          expandIcon={<ExpandMoreIcon style={{color:"rgb(232,0,113)"}}  />}>
          <Typography style={{fontWeight:"bold"}}>Customer Rating</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ width: "15vw" }}>
        <AccordionSummary
          aria-controls='panel1-content'
          id='panel1-header'
          expandIcon={<ExpandMoreIcon style={{color:"rgb(232,0,113)"}}  />}>
          <Typography style={{fontWeight:"bold"}}>Customer Review</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ width: "15vw" }}>
        <AccordionSummary
          aria-controls='panel1-content'
          id='panel1-header'
          expandIcon={<ExpandMoreIcon style={{color:"rgb(232,0,113)"}}  />}>
          <Typography style={{fontWeight:"bold"}}>Prefernce</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ width: "15vw" }}>
        <AccordionSummary
          aria-controls='panel1-content'
          id='panel1-header'
          expandIcon={<ExpandMoreIcon style={{color:"rgb(232,0,113)"}}  />}>
          <Typography style={{fontWeight:"bold"}}>Colour</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ width: "15vw" }}>
        <AccordionSummary
          aria-controls='panel1-content'
          id='panel1-header'
          expandIcon={<ExpandMoreIcon style={{color:"rgb(232,0,113)"}}  />}>
          <Typography style={{fontWeight:"bold"}}>Concern</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ width: "15vw" }}>
        <AccordionSummary
          aria-controls='panel1-content'
          id='panel1-header'
          expandIcon={<ExpandMoreIcon style={{color:"rgb(232,0,113)"}}  />}>
          <Typography style={{fontWeight:"bold"}}>Type</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ width: "15vw" }}>
        <AccordionSummary
          aria-controls='panel1-content'
          id='panel1-header'
          expandIcon={<ExpandMoreIcon style={{color:"rgb(232,0,113)"}}  />}>
          <Typography style={{fontWeight:"bold"}}>Gender</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ width: "15vw" }}>
        <AccordionSummary
          aria-controls='panel1-content'
          id='panel1-header'
          expandIcon={<ExpandMoreIcon style={{color:"rgb(232,0,113)"}}  />}>
          <Typography style={{fontWeight:"bold"}}>Finish</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ width: "15vw" }}>
        <AccordionSummary
          aria-controls='panel1-content'
          id='panel1-header'
          expandIcon={<ExpandMoreIcon style={{color:"rgb(232,0,113)"}}  />}>
          <Typography style={{fontWeight:"bold"}}>Skin type</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Accordian;
