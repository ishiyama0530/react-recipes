import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles, createStyles, Typography, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textDecoration: 'none'
    },
    text: {
      '&:hover': {
        color: theme.palette.primary.main
      }
    },
    icon: {
      position: 'relative',
      left: 5,
      top: 3,
      '&:hover': {
        color: theme.palette.primary.main
      }
    }
  })
)

type Props = {
  to?: string
  href?: string
  icon: import('react').ReactNode
  children: import('react').ReactNode
}

const IconLink: React.FC<Props> = ({ to, href, icon, children }) => {
  const classes = useStyles()
  if (to) {
    return (
      <Link className={classes.root} to={to}>
        <Typography
          className={classes.text}
          variant="body2"
          component="span"
          color="textPrimary"
        >
          {children}
        </Typography>
        <span className={classes.icon}>{icon}</span>
      </Link>
    )
  } else {
    return (
      <a
        className={classes.root}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Typography
          className={classes.text}
          variant="body2"
          component="span"
          color="textPrimary"
        >
          {children}
        </Typography>
        <span className={classes.icon}>{icon}</span>
      </a>
    )
  }
}

export default IconLink
