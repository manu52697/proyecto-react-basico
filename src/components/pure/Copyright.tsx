import React from 'react';


// Material UI Component
import { Typography, Link } from '@mui/material';


export const Copyright: React.FunctionComponent = () => {
  return (
    <Typography variant='body2' color='GrayText' align='center'>
        { 'Copyright (C) ' }
        <Link color={"inherit"} href='https://github.com/manu52697' target='_blank'>
        manu52697 
        </Link>
        { ' ' + new Date().getFullYear()}
    </Typography>
  )
}

