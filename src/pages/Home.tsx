import React from 'react'
import HomeTemplate from '../components/templates/HomeTemplate'
import {
  Container,
  makeStyles,
  Theme,
  Typography,
  Grid,
  Button
} from '@material-ui/core'
import CardLink from '../components/molecules/CardLink'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme: Theme) => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  }
}))

const Home: React.FC = () => {
  const history = useHistory()
  const handleErrorBoundaryTestClick = () => {
    history.push('/errorstub')
  }
  const handleGlobalHandleErrorTestClick = () => {
    throw new Error('from handleGlobalHandleErrorTestClick.')
  }
  const classes = useStyles()
  return (
    <HomeTemplate>
      <div className={classes.heroContent}>
        <Container maxWidth="md">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            React recipes
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            Here is a summary of implementation patterns for React. I hope
            someday I can develop a service using these recipes.
          </Typography>
          <div className={classes.heroButtons}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleErrorBoundaryTestClick}
                >
                  ErrorBoundary Test
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={handleGlobalHandleErrorTestClick}
                >
                  Global Handle Error Test
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <CardLink
                title="Redux User Profile"
                description="Use Redux with React.PureComponent."
                pictureKeywrod="animal"
                source="https://github.com/ishiyama0530/react-recipes/tree/master/src/pages/redux"
                to="/reduxuser"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <CardLink
                title="Context API User Profile"
                description="Use Context API with React Hooks."
                pictureKeywrod="bird"
                source="https://github.com/ishiyama0530/react-recipes/tree/master/src/pages/contextapi"
                to="/contextapiuser"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <CardLink
                title="XMLHttpRequest sample"
                description="Use axios."
                pictureKeywrod="fish"
                source="https://github.com/ishiyama0530/react-recipes/tree/master/src/pages/xmlhttprequest"
                to="/xmlhttprequest"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <CardLink
                title="GraphQL sample"
                description="Use Apollo Client."
                pictureKeywrod="plant"
                source="https://github.com/ishiyama0530/react-recipes/tree/master/src/pages/graphql"
                to="/graphql"
              />
            </Grid>
          </Grid>
        </Container>
      </div>
    </HomeTemplate>
  )
}

export default Home
