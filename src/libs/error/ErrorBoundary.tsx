import React from 'react'
import env from '../env'

type Props = {
  children: React.ReactNode
  component: React.ReactNode
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

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      if (!env.develop) {
        return this.props.component
      }
    }

    return this.props.children
  }
}

export default ErrorBoundary
