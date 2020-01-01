import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

type Props = {
  message: string
  handleClose: (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string
  ) => void
  children?: never
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    close: {
      padding: theme.spacing(0.5)
    }
  })
)

const ApplicationSnackbar: React.FC<Props> = ({ message, handleClose }) => {
  const classes = useStyles()
  const open = !!message
  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        ContentProps={{
          'aria-describedby': 'message-id'
        }}
        message={<span id="message-id">{message}</span>}
        action={[
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            className={classes.close}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        ]}
      />
    </div>
  )
}

export default ApplicationSnackbar
