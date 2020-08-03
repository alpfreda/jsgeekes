import React from 'react'
import PropTypes from 'prop-types'
import Header from '../containers/header'
import Foooter from '../components/footer'

const PageLayout = ({ children }) => {
  console.log('here is called')
  return (
    <>
      <Header />
      <main>{children}</main>
      <Foooter/>
    </>
  )
}

PageLayout.propTypes = {
  children: PropTypes.object.isRequired,
}

export default PageLayout
