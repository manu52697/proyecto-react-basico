import Button from '@mui/material/Button';
import React from 'react';
import { Copyright } from '../../components/pure/Copyright';
import { useNavigate } from 'react-router-dom';

export const DashBoardPage : React.FunctionComponent = () => {

  const navigate = useNavigate();

  // TODO add a proper login/logout mechanism
  const logout = () => navigate('/login');

  return (

    <div>
        <Button variant="contained">Hello world!</Button>
        <hr>
        </hr>
        <Copyright></Copyright>
    </div>
  )
}
