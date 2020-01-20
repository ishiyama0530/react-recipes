import React from 'react'
// import { makeStyles, Theme } from '@material-ui/core'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'

type Props = { children?: never }

const EXCHANGE_RATES = gql`
  {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`

// const useStyles = makeStyles((theme: Theme) => ({}))

const GraphQL: React.FC<Props> = () => {
  // const classes = useStyles()
  const { loading, error, data } = useQuery(EXCHANGE_RATES)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return data.rates.map(({ currency, rate }: any) => (
    <div key={currency}>
      <p>
        {currency}: {rate}
      </p>
    </div>
  ))
}

export default GraphQL
