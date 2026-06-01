import { Router } from 'next/router'
import React from 'react'

const page = () => {
  return (
    <Router>
      <route path="/" element={<h1>Home Page this </h1>} />
    </Router>
  )
}

export default page
