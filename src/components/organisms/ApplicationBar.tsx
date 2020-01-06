import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { Menu, MenuItem } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

type Props = {
  user: {
    authenticated: boolean
    userName: string
  }
  children?: never
  handleLogout: () => void
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginLeft: theme.spacing(1)
    },
    title: {
      flexGrow: 1
    },
    link: {
      textDecoration: 'none',
      color: '#FFFFFF'
    }
  })
)

const ApplicationBar: React.FC<Props> = ({ user, handleLogout }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleLogoutWrap = () => {
    handleMenuClose()
    handleLogout()
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const classes = useStyles()
  return (
    <React.Fragment>
      <AppBar position="absolute" className={classes.root}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link className={classes.link} to="/">
              REACT RECIPES
            </Link>
          </Typography>
          {user.authenticated && (
            <React.Fragment>
              <Typography variant="h6">{user.userName}</Typography>
              <IconButton
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={handleMenuOpen}
              >
                <MenuIcon />
              </IconButton>
            </React.Fragment>
          )}
        </Toolbar>
      </AppBar>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleLogoutWrap}>Logout</MenuItem>
      </Menu>
    </React.Fragment>
  )
}

export default ApplicationBar
