import Link from 'next/link'

export const Title = () => {
  return (
    <div>
      <h1 className="md:text-5xl text-4xl font-bold mb-4 text-foreground">
        RainbowKit <br /> theme generator.
      </h1>
      <p className="text-base max-w-md text-muted-foreground">
        Easily create custom{' '}
        <Link
          href="https://www.rainbowkit.com/"
          target="_blank"
          className="underline hover:text-foreground duration-150 transition-all"
        >
          RainbowKit
        </Link>{' '}
        theme from a single color that you can copy and paste into your web3
        apps.
      </p>
    </div>
  )
}
