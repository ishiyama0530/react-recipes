import React from 'react'
import './error.css'
import { Link } from 'react-router-dom'

type Props = { children?: never }

const Error404: React.FC<Props> = () => {
  return (
    <div className="root">
      <div>
        <h1>404</h1>
      </div>
      <p>Not Found.</p>
      <Link to="/">TOP に戻る</Link>
    </div>
  )
}

export default Error404
