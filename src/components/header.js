import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Menu from './menu'

const Header = ({ siteTitle }) => (
  <header>
    <div className="brand">
      <Link to="/">{siteTitle}</Link>
    </div>
    <Menu />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
