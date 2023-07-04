import React from 'react'

const Header = () => {
  return (
    <div>
        <nav className="navbar navbar-light bg-light">
        <h2><a className="navbar-brand">Restaurents</a></h2>
        <button className="btn btn-primary">
            Orders<span className="badge bg-success m-1"> 0</span>
        </button>
        </nav>
    </div>
  )
}

export default Header