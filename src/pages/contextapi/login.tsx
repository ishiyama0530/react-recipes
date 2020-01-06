import ApplicationSnackbar from '../../components/organisms/ApplicationSnackbar'
import ContextApiTemplate from '../../components/templates/ContextApiTemplate'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import React, { useState } from 'react'
import { parse } from 'query-string'
import { useHistory } from 'react-router-dom'
import { useUserContext } from '../../hooks/context/usercontext'
import {
  Button,
  Theme,
  createStyles,
  Container,
  TextField,
  Avatar,
  Typography,
  makeStyles
} from '@material-ui/core'

type Props = {
  children?: never
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: { backgroundColor: theme.palette.background.paper },
    paper: {
      paddingTop: theme.spacing(12),
      paddingBottom: theme.spacing(12),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    avatar: {
      margin: theme.spacing(4),
      backgroundColor: theme.palette.secondary.main
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1)
    },
    submit: {
      margin: theme.spacing(5, 0, 2)
    }
  })
)

const Login: React.FC<Props> = () => {
  const { setAuthenticated } = useUserContext()
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [snackbarMessage, setSnackbarMessage] = useState('')

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value)
  }
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value)
  }
  const handleLogin = (e: React.MouseEvent | React.FormEvent) => {
    e.preventDefault()
    if (!email) {
      setSnackbarMessage('email is empty.')
      return
    }
    if (!password) {
      setSnackbarMessage('password is empty.')
      return
    }
    setAuthenticated(true)

    const qs = parse(history.location.search)
    const redirectUrl = (qs.redirectUrl as string) ?? '/'
    history.push(redirectUrl)
  }
  const handleSnackbarClose = (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return
    }
    setSnackbarMessage('')
  }

  const classes = useStyles()
  return (
    <React.Fragment>
      <ContextApiTemplate className={classes.root} noappBar>
        <Container maxWidth="xs">
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in to This Application
            </Typography>
            <form className={classes.form} noValidate onSubmit={handleLogin}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={handleEmailChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handlePasswordChange}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={handleLogin}
              >
                Sign in
              </Button>
            </form>
          </div>
        </Container>
      </ContextApiTemplate>
      <ApplicationSnackbar
        handleClose={handleSnackbarClose}
        message={snackbarMessage}
      />
    </React.Fragment>
  )
}

export default Login
