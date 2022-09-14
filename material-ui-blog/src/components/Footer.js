import { Container, Link, Typography } from '@mui/material'
import React from 'react'

const Footer = ({ description, title }) => {
  return (
    <footer>
    <Container maxWidth="lg">
      <Typography variant="h6" align="center" gutterBottom>
        {title}
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
      >
        {description}
      </Typography>
      <Typography variant="body2" color="textSecondary" align="center">
        Copyright ©{" "}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{" "}
        {new Date().getFullYear()}.
      </Typography>
    </Container>
  </footer>
  )
}

export default Footer