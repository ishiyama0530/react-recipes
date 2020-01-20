import React from 'react'
// import { makeStyles, Theme } from '@material-ui/core'
import { gql } from 'apollo-boost'
import applloclient from '../../libs/apollo/applloclient'

type Props = { children?: never }

// const useStyles = makeStyles((theme: Theme) => ({}))

const GraphQL: React.FC<Props> = () => {
  // const classes = useStyles()

  applloclient
    .query({
      query: gql`
        {
          rates(currency: "USD") {
            currency
          }
        }
      `
    })
    .then((result: any) => console.log(result))

  return <div>graphql</div>
}

export default GraphQL
