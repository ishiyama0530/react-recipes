import ContextApiTemplate from '../../components/templates/ContextApiTemplate'
import React, { useState } from 'react'
import UserForm from '../../components/organisms/UserForm'
import { Theme, makeStyles, createStyles } from '@material-ui/core'
import { useUserContext } from '../../hooks/context/usercontext'
import ApplicationSnackbar from '../../components/organisms/ApplicationSnackbar'

type Props = {
  children?: never
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: { backgroundColor: theme.palette.background.paper }
  })
)

const User: React.FC<Props> = () => {
  const context = useUserContext()
  const [readonly, setReadonly] = useState(true)
  const [name, setName] = useState(context.userName)
  const [snackbarMessage, setSnackbarMessage] = useState('')

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value)
  }
  const handleEdit = (e: React.MouseEvent | React.FormEvent) => {
    e.preventDefault()
    setReadonly(false)
  }
  const handleSave = (e: React.MouseEvent | React.FormEvent) => {
    e.preventDefault()
    if (!name) {
      setSnackbarMessage('name is empty.')
      return
    }
    context.setUserName(name)
    setReadonly(true)
    setSnackbarMessage('name changed.')
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
      <ContextApiTemplate className={classes.root}>
        <UserForm
          name={name}
          readonly={readonly}
          handleEdit={handleEdit}
          handleNameChange={handleNameChange}
          handleSave={handleSave}
        />
      </ContextApiTemplate>
      <ApplicationSnackbar
        handleClose={handleSnackbarClose}
        message={snackbarMessage}
      />
    </React.Fragment>
  )
}

export default User
