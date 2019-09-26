import React from 'react'
import Link from 'next/link'
import { connect } from 'react-redux'

const links = [
  { href: '/', label: 'Home' },
  { href: '/login', label: 'Login'},
  { href: '/datasets/271bbfe3-e901-438b-8ecd-930b54c6ba33', label: 'Dataset Example' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <nav>
    <ul>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <Link href={href}><a>{label}</a></Link>
        </li>
      ))}
    </ul>
  </nav>
)

export default Nav
