import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className="pb-3 w-full">
      <div className="container flex justify-between items-center text-xs text-modal-text-secondary font-normal leading-tight sm:px-8 px-4">
        <p>
          by{' '}
          <Link
            href="https://twitter.com/zwergdev"
            target="_blank"
            className="underline hover:text-foreground duration-150 transition-all"
            rel="noreferrer"
          >
            zwerg
          </Link>
        </p>
        <Link
          href="/"
          className="hover:text-foreground duration-150 transition-all"
        >
          © 2024 RainbowKit Theme Generator
        </Link>
      </div>
    </footer>
  )
}
