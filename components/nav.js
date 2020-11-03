import Link from 'next/link'

const links = [
  { href: 'https://google', label: 'Home' },
  { href: 'https://github.com/behr-davide', label: 'GitHub' },
  { href: 'https://reddit.com', label: 'Reddit' },
]

export default function Nav() {
  return (
    <div className="border-gray-100 border-b-2">
      <nav className="underline py-2">
        <div className="flex">
          <ul>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`} className="rounded-md inline mr-2 p-2">
                <Link href={href}>
                  <a>
                    {label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  )
}