import React from 'react'
import {
  makeStyles,
  Theme,
  Card,
  CardMedia,
  CardContent,
  Typography
} from '@material-ui/core'

type Props = {
  description: string
  imgeUrl: string
  href: string
  children?: never
}

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '400px'
  },
  cardMedia: {
    paddingTop: '56.25%' // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.text.primary
  }
}))

const NewsCardLink: React.FC<Props> = ({ imgeUrl, description, href }) => {
  const classes = useStyles()
  let body
  if (description.length <= 100) {
    body = description
  } else {
    body = description.substring(0, 99) + '…'
  }

  return (
    <Card className={classes.card}>
      <a
        href={href}
        className={classes.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <CardMedia className={classes.cardMedia} image={imgeUrl} />
        <CardContent className={classes.cardContent}>
          <Typography variant="body2" component="span">
            {body}
          </Typography>
        </CardContent>
      </a>
    </Card>
  )
}

export default NewsCardLink
