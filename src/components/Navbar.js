import React from 'react'

const Navbar = (props) => {
  return (
    <div>
      <nav>
        <h3>{props.navHeader}</h3>
        <ul>
          <li>
            <a href="https://github.com/ahmadammarm" target='blank'>{props.navText}</a>
          </li>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
          <a href="/about">About</a>
          </li>
          <li>
          <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
