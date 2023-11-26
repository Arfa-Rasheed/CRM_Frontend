import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './style.scss'
import { Box, Stack, Tab, Tabs } from '@mui/material';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const CRMGrid = (props) => {
  const classes = useStyles();
  const [hoveredRowIndex, setHoveredRowIndex] = useState(null);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <TableContainer component={Paper} style={{ borderTopLeftRadius: '64px', borderTopRightRadius: '64px', marginTop: '15px', backgroundColor: '#DADADA', marginLeft: '10px', marginRight: '10px',boxShadow:'none' }}>
      <Table className={classes.table} stickyHeader aria-label="sticky table" sx={{ border: '2px solid red' }}>
        <TableHead style={{ height: '20vh' }}>
          <TableRow >
            {props.gridHeader.length > 0 &&
              props.gridHeader.map((headerObj) => (
                <TableCell key={headerObj.field} style={{ backgroundColor: '#DADADA' }}>{headerObj.headerName}</TableCell>
              ))}
          </TableRow>
        </TableHead>
        <TableBody >
          {props.gridData.map((row, index) => (
            <TableRow key={index}
              onMouseEnter={() => setHoveredRowIndex(index)}
              onMouseLeave={() => setHoveredRowIndex(null)}
              style={{ backgroundColor: index == hoveredRowIndex ? '#F08613' : 'white', height: '5vh' }}
            >
              {Object.values(row).map((cell, index) => (
                <TableCell key={index} style={{
                  paddingTop: '8px',
                  paddingBottom: '8px',
                  borderBottom: "6px solid rgba(224, 224, 224, 1)"
                }}>{cell}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer >
  );
};

export default CRMGrid;
