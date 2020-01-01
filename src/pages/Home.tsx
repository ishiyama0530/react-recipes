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
  const classes = useStyles()
  return (
    <HomeTemplate>
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
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
                <Button variant="contained" color="primary">
                  Main call to action
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="primary">
                  Secondary action
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
                source="#"
                to="/reduxuser"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <CardLink
                title="Context API User Profile"
                description="Use Context API with React Hooks."
                pictureKeywrod="bird"
                source="#"
                to="/contextapi"
              />
            </Grid>
          </Grid>
        </Container>
      </div>
    </HomeTemplate>
  )
}

export default Home
