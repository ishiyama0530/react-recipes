import React from 'react'
import {
  makeStyles,
  Theme,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button
} from '@material-ui/core'
import { Link } from 'react-router-dom'

type Props = {
  pictureKeywrod: string
  title: string
  description: string
  source: string
  to: string
  children?: never
}

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia: {
    paddingTop: '56.25%' // 16:9
  },
  cardContent: {
    flexGrow: 1
  }
}))

const CardLink: React.FC<Props> = ({
  pictureKeywrod,
  title,
  description,
  source,
  to
}) => {
  const classes = useStyles()
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        image={`https://source.unsplash.com/featured/?${pictureKeywrod}`}
        title={title}
      />
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          <a href={source} target="_blank" rel="noopener noreferrer">
            SOURCE CODE
          </a>
        </Button>
        <Button size="small" color="primary">
          <Link to={to}>ENTER</Link>
        </Button>
      </CardActions>
    </Card>
  )
}

export default CardLink
