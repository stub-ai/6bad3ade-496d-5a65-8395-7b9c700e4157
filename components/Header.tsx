import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex justify-between items-center p-6 bg-blue-500 text-white">
      <h1 className="text-2xl">uValue</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><Link href="/"><a>Home</a></Link></li>
          <li><Link href="/models/dcf"><a>DCF Model</a></Link></li>
          <li><Link href="/models/apv"><a>APV Model</a></Link></li>
          <li><Link href="/models/dividend"><a>Dividend Model</a></Link></li>
        </ul>
      </nav>
    </header>
  )
}