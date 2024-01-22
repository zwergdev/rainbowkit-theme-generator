import Link from 'next/link'
import { Separator } from '../ui/separator'

const NAVIGATION = [
  { name: 'RainbowKit', href: 'https://www.rainbowkit.com/' },
  { name: 'Contact', href: 'https://twitter.com/zwergdev' },
]

export const Header = () => {
  return (
    <header className="pt-3 w-full fixed z-50 top-0 bg-background/90 backdrop-blur-sm">
      <div className="container flex justify-between items-center">
        <h1 className="text-lg font-extrabold text-foreground">
          <Link href="/">RainbowKit Theme Generator</Link>
        </h1>
        <div className="flex items-center justify-center gap-10">
          <nav>
            <ul className="flex gap-4 [&>li]:duration-150 transition-colors">
              {NAVIGATION.map(({ name, href }, i) => (
                <li
                  key={i}
                  className="bg-accent rounded-menuActionButton flex items-center justify-center h-7 text-accent-foreground hover:scale-[1.025] duration-150 transition-all font-bold text-sm"
                >
                  <Link href={href} className="px-3 py-1">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          {/* <ConnectButton /> */}
        </div>
      </div>
      <Separator className="mt-3 opacity-25 bg-accent" />
    </header>
  )
}
