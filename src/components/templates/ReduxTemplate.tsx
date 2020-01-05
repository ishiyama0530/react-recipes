import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Footer from '../organisms/Footer'
import ApplicationBar from '../organisms/ApplicationBar'
import { AppState } from '../../ducks/store'
import { connect } from 'react-redux'
import { UserState, userActions } from '../../ducks/user'
import { Dispatch } from 'redux'
import {
  StyleRules,
  createStyles,
  Theme,
  withStyles,
  WithStyles
} from '@material-ui/core'

type Prop = {
  children: React.ReactNode
  className?: string
  noappBar?: boolean
  logout: () => void
} & WithStyles<typeof styles> &
  UserState

const styles = (theme: Theme): StyleRules =>
  createStyles({
    main: {
      marginTop: theme.spacing(8)
    }
  })

class ReduxTemplate extends React.PureComponent<Prop> {
  constructor(props: Prop) {
    super(props)
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogout() {
    this.props.logout()
  }

  render() {
    const { classes } = this.props
    const {
      children,
      className = '',
      authenticated,
      name,
      noappBar = false
    } = this.props
    return (
      <div className={className}>
        <React.Fragment>
          <CssBaseline />
          {!noappBar && (
            <ApplicationBar
              user={{ authenticated, name }}
              handleLogout={this.handleLogout}
            />
          )}
          <main className={noappBar ? '' : classes.main}>{children}</main>
          <Footer />
        </React.Fragment>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    logout: () => dispatch(userActions.logout())
  }
}

function mapStateToProps(appState: AppState) {
  return { ...appState.user }
}

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(ReduxTemplate)
)
