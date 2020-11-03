import React from 'react'
import Link from 'next/link'

const links = [
  { href: '/', label: 'Home' },
  { href: 'https://github.com/behr-davide', label: 'GitHub' },
  { href: 'https://reddit.com', label: 'Reddit' },
]

export default function Nav() {
  return (
    <div className="fixed w-full py-2 flex bg-white pl-10">
      <ul>
        {links.map(({ href, label }) => (
          <li key={`${href}${label}`} className="inline h-full mr-10 text-sm hover:no-underline">
            <Link href={href} className="p-2">
              <a className="full-width  no-underline text-sm font-semibold">
                {label}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}