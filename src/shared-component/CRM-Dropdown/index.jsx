import React, { useState } from 'react'
import { Dropdown } from '@mui/base/Dropdown';
import { Menu } from '@mui/base/Menu';
import { Button, MenuItem, Popover, Typography } from '@mui/material';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import './style.scss'

const CRMDropdown = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  const handleClick = () => {
    setAnchorEl(true)
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOptionChange = (selectedOption) => {
    console.log("selectedOption child", selectedOption);
    setAnchorEl(null);
    if (props.onOptionChange) {
      props.onOptionChange(selectedOption);
    }
  };
  return (
    <div>
      <Button
        aria-controls="dropdown-menu"
        aria-haspopup="true"
        onClick={handleClick}
        endIcon={<ArrowDropDownIcon />}
        sx={{
          backgroundColor: props.title === "Previous Months" ? "white" : props.title === 'Previous Years' ? "white" : "#ED7D31",
          color: props.title === "Previous Months" ? "black" : props.title === 'Previous Years' ? "black" : "white",
          height: "39px",
          width: "300px",
          fontSize: "12px",
          padding: "3px",
          borderTopLeftRadius: "0",
          borderBottomLeftRadius: "0",
          border:props.title === 'Previous Years' ? "2px solid #EDEDED" : "",
          "@media screen and (max-width:899px)": {
            width: "168px",
            // border: "2px solid red",
          },
          "&:hover": {
            backgroundColor: props.title === "Previous Months" ? "white" :props.title === 'Previous Years' ? "white" : '#F08613',
          },
        }}
      >
        {props.title}
      </Button>
      <Popover
        id={`dropdown-menu-${props.title === 'Previous Months' ? 'previous-months' : props.title === 'Previous Years' ? 'previous-year' : ''}`}
        // id="dropdown-menu"
        // id={props.title === 'Previuos Months' ? "previous-months" : props.title === 'Previuos Year' ? "previuos-year" : "dropdown-menu"}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}

      >
        {props.options.map((items) => {
          return (
            <MenuItem className='menu-item' key={items} onClick={() => handleOptionChange(items)}>
              <Typography className={`menu-item-text-${props.title === 'Previous Months' ? 'previous-months' : props.title === 'Previuos Year' ? 'previuos-year' : ""}`} sx={{ fontSize: '14px' }}>{items}</Typography>
            </MenuItem>
          );
        })}
      </Popover>
    </div>
  )
}

export default CRMDropdown




// import * as React from 'react';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
// import { Box, Button } from '@mui/material';
// import '../components/Dashboard/style.scss'

// export default function CRMDropdown(props) {
//   const handleOptionChange = (event, selectedOption) => {
//     if (props.onOptionChange) {
//       props.onOptionChange(selectedOption);
//     }
//   };


//   return (
//     <Autocomplete
//       // className='CRM_dropdown'
//       disablePortal
//       id="combo-box-demo"
//       options={props.options}
//       sx={{ width: 300}}
//       onChange={handleOptionChange}
//       renderInput={(params) =><TextField
//         {...params}
//       value={params?.inputProps?.value || 'Default Text'}
//       placeholder='Sales Matrix'
//         sx={{
//           height: '35px',
//           '& input': {
//             height: '100%', // Ensures that the input takes the full height of the TextField
//             textAlign:'center',
//             '&::placeholder': {
//               color: 'white', // Change the color of the placeholder text
//               textAlign:'center',
//               marginBottom:'10px'
//             },
//           },
//         }}
//       />}
//     />
//   );
// }

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top






























