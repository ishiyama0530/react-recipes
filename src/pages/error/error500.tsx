import React from 'react'
import './error.css'
import { Link } from 'react-router-dom'

type Props = { children?: never }

const Error500: React.FC<Props> = () => {
  return (
    <div className="root">
      <div>
        <h1>500</h1>
      </div>
      <p>Internal server error.</p>
      <Link to="/">TOP に戻る</Link>
    </div>
  )
}

export default Error500
