import React from 'react'
import './error.css'

type Props = { children?: never }

const Error404: React.FC<Props> = () => {
  return (
    <div className="root">
      <div>
        <h1>404</h1>
      </div>
      <p>Not Found.</p>
    </div>
  )
}

export default Error404
