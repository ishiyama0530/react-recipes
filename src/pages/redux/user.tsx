import ApplicationSnackbar from '../../components/organisms/ApplicationSnackbar'
import React, { PureComponent } from 'react'
import ReduxTemplate from '../../components/templates/ReduxTemplate'
import { AppState } from '../../ducks/store'
import { Dispatch } from 'redux'
import { userActions, UserState } from '../../ducks/user'
import { connect } from 'react-redux'
import {
  Theme,
  StyleRules,
  createStyles,
  WithStyles,
  withStyles
} from '@material-ui/core'
import { RouteComponentProps } from 'react-router-dom'
import UserForm from '../../components/organisms/UserForm'

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
    root: { backgroundColor: theme.palette.background.paper }
  })

class User extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props)
    const localInitialState = initialState
    localInitialState.name = props.userName
    this.state = localInitialState

    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.handleSave = this.handleSave.bind(this)
    this.handleSnackbarClose = this.handleSnackbarClose.bind(this)
  }

  handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ name: e.currentTarget.value })
  }

  handleEdit(e: React.MouseEvent | React.FormEvent) {
    e.preventDefault()
    this.setState({ readonly: false })
  }

  handleSave(e: React.MouseEvent | React.FormEvent) {
    e.preventDefault()
    if (!this.state.name) {
      this.setState({ snackbarMessage: 'name is empty.' })
      return
    }
    this.props.updateName(this.state.name)
    this.setState({ readonly: true })
    this.setState({ snackbarMessage: 'name changed.' })
  }

  handleSnackbarClose(
    e: React.SyntheticEvent | React.MouseEvent,
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
          <UserForm
            name={name}
            readonly={readonly}
            handleEdit={this.handleEdit}
            handleNameChange={this.handleNameChange}
            handleSave={this.handleSave}
          />
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
    updateName: (v: string) => dispatch(userActions.updateUserName(v))
  }
}

function mapStateToProps(appState: AppState) {
  return { ...appState.user }
}

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(User)
)
