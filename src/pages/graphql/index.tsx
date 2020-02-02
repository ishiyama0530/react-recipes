import React from 'react'
import {
  makeStyles,
  Theme,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Container,
  Typography
} from '@material-ui/core'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import Paper from '@material-ui/core/Paper'
import HomeTemplate from '../../components/templates/HomeTemplate'

type Props = { children?: never }

const EXCHANGE_RATES = gql`
  {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`

const useStyles = makeStyles((theme: Theme) => ({
  sub: {
    margin: theme.spacing(4)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  tableContainer: {
    padding: theme.spacing(4)
  }
}))

const GraphQL: React.FC<Props> = () => {
  const classes = useStyles()
  const { loading, error, data } = useQuery(EXCHANGE_RATES)

  if (loading) return <p className={classes.sub}>Loading...</p>
  if (error) return <p className={classes.sub}>Error: {error}</p>

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
            Use Apollo to get from free API.
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
              href="https://48p1r2roz4.sse.codesandbox.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Playground
            </a>
          </Typography>
        </Container>
      </div>
      <Container maxWidth="xs" className={classes.tableContainer}>
        <TableContainer component={Paper}>
          <Table size="small" aria-label="a currency table">
            <TableHead>
              <TableRow>
                <TableCell align="center">CURRENCY</TableCell>
                <TableCell align="right">RATE</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.rates.map(({ currency, rate }: any) => (
                <TableRow key={currency} hover>
                  <TableCell component="th" scope="row" align="center">
                    {currency}
                  </TableCell>
                  <TableCell align="right">{rate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </HomeTemplate>
  )
}

export default GraphQL
