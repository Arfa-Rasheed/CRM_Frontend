// // import * as React from 'react';
// import React, { forwardRef, useRef, useImperativeHandle, useState } from "react";
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Snackbar from '@mui/material/Snackbar';
// import MuiAlert from '@mui/material/Alert';
// import { Stack } from "@mui/material";

// const CustomSnackbar = forwardRef((props, ref) => {
//     const snackbar_Ref = useRef(null)
//     const [state, setState] = useState({
//         open: false,
//         severity: "error",
//         summary: "",
//         detail: "",
//         icon: "i-notify",
//         vertical: 'top',
//         horizontal: 'center',
//     });
//     const { vertical, horizontal, open } = state;

//       const handleClick = (newState) => () => {
//         setState({ ...newState, open: true });
//       };

//     const handleClose = () => {
//         setState({ ...state, open: false });
//     };

//     useImperativeHandle(ref, () => ({
//         showMessage(severity = "error", summary = "", detail = " ", icon = "i-notify") {
//             //   snackbar_Ref.current.show({severity: severity,summary: summary,detail: detail,icon: icon,life: 3000,});
//             setState({
//                 ...state,
//                 open: true,
//                 severity: severity,
//                 summary: summary,
//                 detail: detail,
//                 icon: icon
//             });
//         },
//         showTemplateMessage(content) {
//             snackbar_Ref.current.show(content);
//         }
//     }));

//     setTimeout(() => {
//         handleClose();
//     }, 3000);

//     function Alert(props) {
//         return <MuiAlert elevation={6} variant="filled" {...props} />;
//     }

//     return (
//         // <Box sx={{ width: 500 }}>
//         //     {/* {buttons} */}
//         //     <Snackbar
//         //         anchorOrigin={{ vertical, horizontal }}
//         //         open={open}
//         //         onClose={handleClose}
//         //         key={vertical + horizontal}
//         //         autoHideDuration={3000}
//         //     >
//         //         <Alert severity={state.severity} >
//         //             {state.summary}
//         //         </Alert>
//         //     </Snackbar>
//         // </Box>
//         <Stack>
//             <Button variant="outlined" onClick={handleClick}>
//                 Open success snackbar
//             </Button>
//             <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
//                 <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
//                     This is a success message!
//                 </Alert>
//             </Snackbar>
//         </Stack>
//     );
// })
// export default CustomSnackbar


import React, { forwardRef, useRef, useImperativeHandle } from "react";
import { Toast } from "primereact/toast";


const CRM_Toast = forwardRef((props, ref) => {
  const toastTopCenter = useRef(null);
  
  useImperativeHandle(ref, () => ({
    showMessage(severity = "error", summary = "", detail = "", icon = "i-notify") 
    {
      toastTopCenter.current.show({severity: severity,summary: summary,detail: detail,icon: icon,life: 3000,});
    },
    showTemplateMessage(content){
      toastTopCenter.current.show(content);
    }
  }));

  const onHide = () => {
    if(props?.onHide){
      props?.onHide();
    }
  }

  return (
    <div className="card flex justify-content-center">
      <Toast icon={props.icon} ref={toastTopCenter} position="top-center" onHide={onHide} />
    </div>
  );
});

export default CRM_Toast;

