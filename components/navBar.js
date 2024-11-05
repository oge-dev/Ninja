import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <nav>
        <div className='logo'>
        <h1>Ninjas</h1>
        </div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/ninjasList">Ninja Listing</Link>
    </nav>
  )
}

export default NavBar