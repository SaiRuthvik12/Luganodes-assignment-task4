import React from 'react'
import Alert from '@mui/material/Alert';

const ErrorMsg = (props) => {
  return <Alert severity="error">{props.msg}</Alert>;
}

export default ErrorMsg