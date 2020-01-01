import React from 'react'
import { Typography, makeStyles, Theme } from '@material-ui/core'
import { GitHub } from '@material-ui/icons'
import IconLink from '../molecules/IconLink'

type Props = { children?: never }

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}))

const Footer: React.FC<Props> = () => {
  const classes = useStyles()
  return (
    <footer className={classes.root}>
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
      >
        The source code of this site is published in the following repositories.
      </Typography>
      <Typography align="center">
        <IconLink
          icon={<GitHub fontSize="small" color="action" />}
          href="http://github.com/ishiyama0530"
        >
          @ishiyama
        </IconLink>
      </Typography>
    </footer>
  )
}

export default Footer
