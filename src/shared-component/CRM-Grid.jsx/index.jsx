import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Avatar } from '@mui/material';
// import { Avatar } from 'primereact/avatar';

const CRMGrid = (props) => {
  const [hoveredRowIndex, setHoveredRowIndex] = useState(null);

  return (
    <TableContainer
      component={Paper}
      style={{
        borderTopLeftRadius: '64px',
        borderTopRightRadius: '64px',
        marginTop: '15px',
        marginLeft: '10px',
        marginRight: '10px',
        boxShadow: 'none'
      }}
    >
      <Table stickyHeader aria-label="sticky table" sx={{}}>
        <TableHead style={{ height: '20vh' }}>
          <TableRow>
            {props.gridHeader.length > 0 &&
              props.gridHeader.map((headerObj) => (
                <TableCell key={headerObj.field} style={{ backgroundColor: '#DADADA' }}>{headerObj.headerName}</TableCell>
              ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.gridData.map((row, index) => (
            <TableRow
              key={index}
              onMouseEnter={() => setHoveredRowIndex(index)}
              onMouseLeave={() => setHoveredRowIndex(null)}
              style={{ backgroundColor: index === hoveredRowIndex ? '#F08613' : 'white', height: '5vh' }}
            >
              {Object.entries(row).map(([key, cell], cellIndex) => (
                <TableCell className= {key === 'img' ? "profilePicCell" : ""}
                  key={cellIndex}
                  style={{
                    paddingTop: '8px',
                    paddingBottom: '8px',
                    borderBottom: '6px solid rgba(224, 224, 224, 1)',
                  }}
                >
                  {key === 'img' ? (
                      <Avatar src={cell} shape="circle" size="large" />
                  ) : (
                    cell
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CRMGrid;
