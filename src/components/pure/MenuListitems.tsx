// @ts-nocheck

import type React from 'react'

import { List, ListItem, ListItemIcon, ListItemText, ListItemButton } from '@mui/material'

// Icons
import HomeIcon from '@mui/icons-material/Home'
import SettingsIcon from '@mui/icons-material/Settings'
import AssignmentIcon from '@mui/icons-material/Assignment'
import { useNavigate } from 'react-router-dom'

const getIcon = (icon) => {
  switch (icon) {
    case 'HOME':
      return <HomeIcon/>
    case 'TASKS':
      return <AssignmentIcon/>
    case 'SETTINGS':
      return <SettingsIcon/>
    default:
      return <HomeIcon/>
  }
}

export const MenuListitems: React.FunctionComponent = ({ list }) => {
  const navigate = useNavigate()

  return (
    <List>
        {list.map(
          ({ text, path, icon }, index) => {
            return (
                    <ListItemButton key={index} onClick={() => { navigate(path) }}>
                        <ListItemIcon>{getIcon(icon)}</ListItemIcon>
                        <ListItemText primary={text}></ListItemText>
                    </ListItemButton>
            )
          }
        )}
    </List>
  )
}
