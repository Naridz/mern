import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <div className="navbar bg-base-300 mb-5">
          <div className="flex-1">
          <Link to='/' className="btn btn-ghost text-xl">Home</Link>
        </div>

  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li>
        <details>
          <summary>
            Themes
          </summary>
          <ul className="p-2 bg-base-100 rounded-t-none">
          <li><input type="radio" name="theme-buttons" className="btn theme-controller join-item" aria-label="Light" value="light"/></li>
          <li><input type="radio" name="theme-buttons" className="btn theme-controller join-item" aria-label="Dark" value="dracula"/></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>
    </>
  )
}

export default Navbar