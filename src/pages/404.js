import * as React from 'react'
import { Link } from 'gatsby'
import { Button } from '@material-ui/core'

// styles
const pageStyles = {
  color: '#232129',
  padding: '96px',
  fontFamily: '-apple-system, Roboto, sans-serif, serif'
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320
}

const paragraphStyles = {
  marginBottom: 48
}

// markup
const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <title>Not found</title>
      <h1 style={headingStyles}>Page not found</h1>
      <p style={paragraphStyles}>
        Looks like you've taken a wrong turn
        <span role='img' aria-label='Pensive emoji'>
          😔
        </span>{' '}
        <Link to='/'>
          <Button variant='contained' color='secondary'>
            See some Pokemon
          </Button>
        </Link>
      </p>
    </main>
  )
}

export default NotFoundPage
