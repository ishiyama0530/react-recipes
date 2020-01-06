import React from 'react'
import {
  makeStyles,
  Theme,
  createStyles,
  TextField,
  Button,
  Typography,
  Container
} from '@material-ui/core'

type Props = {
  name: string
  readonly: boolean
  handleNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleEdit: (e: React.MouseEvent | React.FormEvent) => void
  handleSave: (e: React.MouseEvent | React.FormEvent) => void
  children?: never
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
)

const UserForm: React.FC<Props> = ({
  name,
  readonly,
  handleNameChange,
  handleEdit,
  handleSave
}) => {
  const classes = useStyles()
  return (
    <Container maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Your Profile
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSave}>
          <TextField
            label="Name"
            fullWidth
            value={name}
            onChange={handleNameChange}
            disabled={readonly}
          />
          {readonly ? (
            <Button
              className={classes.button}
              color="inherit"
              fullWidth
              onClick={handleEdit}
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
              onClick={handleSave}
              type="submit"
              variant="contained"
            >
              Save
            </Button>
          )}
        </form>
      </div>
    </Container>
  )
}

export default UserForm
