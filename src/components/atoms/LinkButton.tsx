import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
  to: string
  children: import('react').ReactNode
}

const LinkButton: React.FC<Props> = props => {
  const { to, children } = props
  return <Link to={to}>{children}</Link>
}

// LinkButton.propTypes = {
//   to: PropTypes.string.isRequired,
//   children: PropTypes.node.isRequired
// }

export default LinkButton
