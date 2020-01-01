import ApplicationSnackbar from '../../../components/organisms/ApplicationSnackbar'
import React, { PureComponent } from 'react'
import ReduxTemplate from '../../../components/templates/ReduxTemplate'
import { AppState } from '../../../ducks/store'
import { Dispatch } from 'redux'
import { userActions, LoginPayload } from '../../../ducks/user'
import { connect } from 'react-redux'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import {
  Button,
  Theme,
  StyleRules,
  createStyles,
  WithStyles,
  withStyles,
  Container,
  TextField,
  Avatar,
  Typography
} from '@material-ui/core'
import { RouteComponentProps } from 'react-router-dom'
import { parse } from 'query-string'

type Props = {
  children?: never
  login: (v: LoginPayload) => void
} & WithStyles<typeof styles> &
  RouteComponentProps

type State = typeof initialState

const initialState = {
  email: '',
  password: '',
  snackbarMessage: ''
}

const styles = (theme: Theme): StyleRules =>
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

class Login extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = initialState

    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.handleSnackbarClose = this.handleSnackbarClose.bind(this)
  }

  handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ email: e.currentTarget.value })
  }

  handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ password: e.currentTarget.value })
  }

  handleLogin(event: React.MouseEvent | React.FormEvent) {
    event.preventDefault()
    if (!this.state.email) {
      this.setState({ snackbarMessage: 'email is empty.' })
      return
    }
    if (!this.state.password) {
      this.setState({ snackbarMessage: 'password is empty.' })
      return
    }
    this.props.login(this.state)

    const qs = parse(this.props.location.search)
    const redirectUrl = (qs.redirectUrl as string) ?? '/'
    this.props.history.push(redirectUrl)
  }

  handleSnackbarClose(
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string
  ) {
    if (reason === 'clickaway') {
      return
    }
    this.setState({ snackbarMessage: '' })
  }

  render() {
    const { classes } = this.props
    const { snackbarMessage } = this.state
    return (
      <React.Fragment>
        <ReduxTemplate className={classes.root} noappBar>
          <Container maxWidth="xs">
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in to This Application
              </Typography>
              <form
                className={classes.form}
                noValidate
                onSubmit={this.handleLogin}
              >
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
                  onChange={this.handleEmailChange}
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
                  onChange={this.handlePasswordChange}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={this.handleLogin}
                >
                  Sign in
                </Button>
              </form>
            </div>
          </Container>
        </ReduxTemplate>
        <ApplicationSnackbar
          handleClose={this.handleSnackbarClose}
          message={snackbarMessage}
        />
      </React.Fragment>
    )
  }
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    login: (v: LoginPayload) => dispatch(userActions.login(v))
  }
}

function mapStateToProps(appState: AppState) {
  return { ...appState.user }
}

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(Login)
)
