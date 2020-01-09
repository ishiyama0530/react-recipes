import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
  makeStyles,
  Theme,
  createStyles,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography
} from '@material-ui/core'

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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper
    },
    inline: {
      display: 'inline'
    }
  })
)

const XMLHttpRequest: React.FC<Props> = () => {
  const classes = useStyles()
  const [articles, setArticles] = useState<Article[]>([])

  useEffect(() => {
    fetchNews()
  }, [])

  async function fetchNews() {
    const res = await axios.get<Response>(
      'https://newsapi.org/v2/top-headlines?country=jp&apiKey=f3162fdbcda94506afd7e7228b8376f9'
    )

    setArticles(res.data.articles)
  }

  return (
    <React.Fragment>
      <ul>
        {articles.map((x, idx) => {
          return <li key={idx}>{JSON.stringify(x)}</li>
        })}
      </ul>
    </React.Fragment>
  )
  //   return (
  //     <List className={classes.root}>
  //       {articles.map((article, idx) => {
  //         return (
  //           <ListItem alignItems="flex-start" key={idx}>
  //             <ListItemAvatar>
  //               <Avatar alt={article.title} src={article.urlToImage} />
  //             </ListItemAvatar>
  //             <ListItemText
  //               primary={article.title}
  //               secondary={
  //                 <React.Fragment>
  //                   <Typography
  //                     component="span"
  //                     variant="body2"
  //                     className={classes.inline}
  //                     color="textPrimary"
  //                   >
  //                     Ali Connors
  //                   </Typography>
  //                   {article.description}
  //                 </React.Fragment>
  //               }
  //             />
  //           </ListItem>
  //         )
  //       })}
  //     </List>
  //   )
}

export default XMLHttpRequest
