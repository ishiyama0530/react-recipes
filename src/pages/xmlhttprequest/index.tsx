import React, { useEffect, useState } from 'react'
import axios from 'axios'
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

type Props = { children?: never }

type Response = {
  status: string
  totalResults: number
  articles: Article[]
}

type Article = {
  source: Source
  author: string
  title: string
  description: string
  url: string
  urlToImage: string
  publishedAt: Date
  content: null
}

type Source = {
  id: null
  name: string
}

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

  useEffect(() => {
    fetchNews()
  }, [])

  async function fetchNews() {
    const res = await axios.get<Response>(
      'https://newsapi.org/v2/top-headlines?country=jp&pageSize=100&apiKey=f3162fdbcda94506afd7e7228b8376f9'
    )

    setArticles(res.data.articles)
  }

  const filteredArticles = articles.filter(x => x.title && x.description)
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
                  eyecatch={x.urlToImage ?? noimage}
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
