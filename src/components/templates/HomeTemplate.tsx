import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Footer from '../organisms/Footer'

type Prop = {
  children: React.ReactNode
  className?: string
}

const HomeTemplate: React.FC<Prop> = ({ children, className = '' }) => {
  return (
    <div className={className}>
      <CssBaseline />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default HomeTemplate
