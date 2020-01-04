import React from 'react'

type Props = { children?: never }

const ErrorStub: React.FC<Props> = () => {
  throw new Error('from error stub.')
}

export default ErrorStub
