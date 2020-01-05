import React from 'react'
import env from '../env'

type Props = {
  children: React.ReactNode
  errorUrl: string
}
type State = typeof initialState

const initialState = {
  hasError: false
}

class ErrorBoundary extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  componentDidCatch() {
    if (!env.develop) {
      window.location.href = this.props.errorUrl
    }
  }

  render() {
    return this.props.children
  }
}

export default ErrorBoundary
