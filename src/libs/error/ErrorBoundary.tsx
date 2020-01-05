import React from 'react'
import env from '../env'
import { Redirect } from 'react-router-dom'

type Props = { children: React.ReactNode }
type State = typeof initialState

const initialState = {
  hasError: false
}

class ErrorBoundary extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      if (!env.develop) {
        return <Redirect to="/error" />
      }
    }

    return this.props.children
  }
}

export default ErrorBoundary
