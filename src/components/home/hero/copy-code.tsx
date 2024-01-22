'use client'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Check, Copy } from 'lucide-react'
import { useEffect, useState } from 'react'
import { generateCopy } from './generate-copy'

export const CopyCode = () => {
  const [isCopied, setIsCopied] = useState(false)
  const [theme, setTheme] = useState('')

  useEffect(() => {
    setTheme(generateCopy())
  }, [])

  const handleCopyClick = async () => {
    navigator.clipboard
      .writeText(theme)
      .then(() => {
        setIsCopied(true)
        setTimeout(() => {
          setIsCopied(false)
        }, 1500)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Copy Code</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md border-accent">
        <DialogHeader>
          <DialogTitle>Theme</DialogTitle>
          <DialogDescription>
            Paste the following code into your{' '}
            <span className="">{'<RainbowKitProvider />'}</span> component.
          </DialogDescription>
        </DialogHeader>
        <pre className="flex items-center justify-center relative">
          <button
            type="button"
            disabled={theme === undefined || isCopied}
            className="absolute z-10 right-2.5 top-2.5 py-1 px-2 rounded-full bg-background flex items-center justify-center h-7 text-accent-foreground hover:scale-[1.1] duration-150 transition-all font-bold text-sm"
            onClick={handleCopyClick}
          >
            {isCopied ? (
              <Check size={14} strokeWidth={3} />
            ) : (
              <Copy size={14} strokeWidth={3} />
            )}
          </button>
          <code className="relative rounded border border-muted-foreground/25 bg-background px-2 w-full py-1 font-mono text-sm font-medium overflow-scroll max-w-[400px] max-h-[500px]">
            {theme}
          </code>
        </pre>
      </DialogContent>
    </Dialog>
  )
}
