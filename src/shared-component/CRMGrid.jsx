// // import React from 'react'

// // const CRMGrid = () => {
// //   return (
// //     <div>CRMGrid</div>
// //   )
// // }

// // export default CRMGrid

// import React, { useState, useEffect } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';

// const useStyles = makeStyles({
//   table: {
//     minWidth: 650,
//   },
// });

// const CRMGrid = (props) => {
//   const classes = useStyles();
// //   const [data, setData] = useState([]);


//   return (
//     <TableContainer component={Paper}>
//       <Table className={classes.table} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             {props.gridHeader.length > 0 &&
//               Object.keys(props.gridHeader[0]).map((header) => (
//                 <TableCell key={header}>{header}</TableCell>
//               ))}
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {props.gridData.map((row, index) => (
//             <TableRow key={index}>
//               {Object.values(row).map((cell, index) => (
//                 <TableCell key={index}>{cell}</TableCell>
//               ))}
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };

// export default CRMGrid;
