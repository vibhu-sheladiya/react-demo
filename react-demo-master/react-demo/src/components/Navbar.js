import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-custom" data-bs-theme={`${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">React-Project</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
            {/* props just next line*/}
          <Link className="nav-link" aria-current="page" to="/">Home</Link> 
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'/about'}>about</Link>
        </li>
        
      </ul>
      <form className="d-flex mx-2" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className  ="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
</div>
    </div>
  </div>
</nav>
  )
}

// types of props like propsTypes
Navbar.propTypes = {
    about: PropTypes.string,
  home: PropTypes.string.isRequired,
}
//default values for the props if not passed in parent component
Navbar.defaultProps = {
  home: 'Home',
  about: 'About'
}
