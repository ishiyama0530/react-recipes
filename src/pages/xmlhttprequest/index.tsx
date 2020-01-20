import React, { useEffect, useState } from 'react'
import {
  makeStyles,
  Theme,
  Typography,
  Container,
  Grid
} from '@material-ui/core'
import HomeTemplate from '../../components/templates/HomeTemplate'
import NewsCardLink from '../../components/molecules/NewsCardLink'
import noimage from '../../assets/images/noimage.png'
import tophedline, { Article } from '../../repositories/newapi/tophedline'

type Props = { children?: never }

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

const XMLHttpRequest: React.FC<Props> = () => {
  const classes = useStyles()
  const [articles, setArticles] = useState<Article[]>([])
  const filteredArticles = articles.filter(x => x.title && x.description)

  useEffect(() => {
    fetch()
  }, [])

  async function fetch() {
    const res = await tophedline.get('jp', 100)
    if (res.ok) {
      setArticles(res.data.articles)
    }
  }

  return (
    <HomeTemplate>
      <div className={classes.heroContent}>
        <Container maxWidth="lg">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Use axios to get from News API.
          </Typography>
          <Typography
            component="p"
            variant="body1"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            powered by{' '}
            <a
              href="https://newsapi.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              NewsAPI.org
            </a>
          </Typography>
        </Container>
      </div>
      <Container className={classes.cardGrid} maxWidth="lg">
        <Grid container spacing={4}>
          {filteredArticles.map((x, idx) => {
            return (
              <Grid item xs={12} sm={6} md={3} key={idx}>
                <NewsCardLink
                  description={x.description}
                  imgeUrl={x.urlToImage ?? noimage}
                  href={x.url}
                />
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </HomeTemplate>
  )
}

export default XMLHttpRequest
