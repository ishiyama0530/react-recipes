import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Footer from '../organisms/Footer'
import { createStyles, Theme, makeStyles } from '@material-ui/core'
import { useUserContext } from '../../hooks/context/usercontext'
import ApplicationBar from '../organisms/ApplicationBar'

type Prop = {
  children: React.ReactNode
  className?: string
  noappBar?: boolean
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      marginTop: theme.spacing(8)
    }
  })
)

const ContextApiTemplate: React.FC<Prop> = ({
  children,
  className = '',
  noappBar = false
}) => {
  const { authenticated, userName, setAuthenticated } = useUserContext()
  const classes = useStyles()
  return (
    <div className={className}>
      <React.Fragment>
        <CssBaseline />
        {!noappBar && (
          <ApplicationBar
            user={{ authenticated, userName }}
            handleLogout={() => setAuthenticated(false)}
          />
        )}
        <main className={noappBar ? '' : classes.main}>{children}</main>
        <Footer />
      </React.Fragment>
    </div>
  )
}

export default ContextApiTemplate
