import ApplicationSnackbar from '../../../components/organisms/ApplicationSnackbar'
import React, { PureComponent } from 'react'
import ReduxTemplate from '../../../components/templates/ReduxTemplate'
import { AppState } from '../../../ducks/store'
import { Dispatch } from 'redux'
import { userActions, UserState } from '../../../ducks/user'
import { connect } from 'react-redux'
import {
  Theme,
  StyleRules,
  createStyles,
  WithStyles,
  withStyles,
  TextField,
  Container,
  Typography,
  Button
} from '@material-ui/core'
import { RouteComponentProps } from 'react-router-dom'

type Props = {
  children?: never
  updateName: (v: string) => void
} & WithStyles<typeof styles> &
  UserState &
  RouteComponentProps

type State = typeof initialState

const initialState = {
  name: '',
  readonly: true,
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
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(12)
    },
    button: {
      margin: theme.spacing(5, 0, 2)
    }
  })

class User extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props)
    const localInitialState = initialState
    localInitialState.name = props.name
    this.state = localInitialState

    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.handleSave = this.handleSave.bind(this)
    this.handleSnackbarClose = this.handleSnackbarClose.bind(this)
  }

  handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ name: e.currentTarget.value })
  }

  handleEdit(event: React.MouseEvent | React.FormEvent) {
    event.preventDefault()
    this.setState({ readonly: false })
  }

  handleSave(event: React.MouseEvent | React.FormEvent) {
    event.preventDefault()
    if (!this.state.name) {
      this.setState({ snackbarMessage: 'email is empty.' })
      return
    }
    this.props.updateName(this.state.name)
    this.setState({ readonly: true })
    this.setState({ snackbarMessage: 'namechanged.' })
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
    const { snackbarMessage, name, readonly } = this.state
    return (
      <React.Fragment>
        <ReduxTemplate className={classes.root}>
          <Container maxWidth="xs">
            <div className={classes.paper}>
              <Typography component="h1" variant="h5">
                Your Profile
              </Typography>
              <form
                className={classes.form}
                noValidate
                onSubmit={this.handleSave}
              >
                <TextField
                  label="Name"
                  fullWidth
                  value={name}
                  onChange={this.handleNameChange}
                  disabled={readonly}
                />
                {readonly ? (
                  <Button
                    className={classes.button}
                    color="inherit"
                    fullWidth
                    onClick={this.handleEdit}
                    type="button"
                    variant="contained"
                  >
                    Edit
                  </Button>
                ) : (
                  <Button
                    className={classes.button}
                    color="primary"
                    fullWidth
                    onClick={this.handleSave}
                    type="submit"
                    variant="contained"
                  >
                    Save
                  </Button>
                )}
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
    updateName: (v: string) => dispatch(userActions.updateName(v))
  }
}

function mapStateToProps(appState: AppState) {
  return { ...appState.user }
}

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(User)
)
