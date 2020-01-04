import React from 'react'
import './error.css'

type Props = { children?: never }

const Error500: React.FC<Props> = () => {
  return (
    <div className="root">
      <div>
        <h1>500</h1>
      </div>
      <p>Internal server error.</p>
    </div>
  )
}

export default Error500
