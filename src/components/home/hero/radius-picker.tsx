'use client'

import { cn } from '@/lib/utils'
import { memo, useState } from 'react'

const set = (key: string, value: string) => {
  return document.documentElement.style.setProperty(key, value)
}

export const RadiusPicker = memo(() => {
  const [radius, setRadius] = useState(1)

  const onClick = (value: number) => {
    const rad = value * 24

    setRadius(value)
    set('--modal-radius', `${rad}px`)
    set('--connect-radius', `${rad / 2}px`)
    set('--menu-button-', `${rad / 2}px`)
    set('--menu-action-button-radius', `${rad}px`)
  }

  return (
    <div>
      <h6 className="text-xs font-medium mb-1.5">Radius</h6>
      <div className="flex gap-2">
        {[0, 0.3, 0.5, 0.75, 1].map((r) => (
          <RadiusButton
            key={r}
            value={r}
            onClick={() => onClick(r)}
            selected={radius === r}
          />
        ))}
      </div>
    </div>
  )
})

const RadiusButton = ({
  value,
  onClick,
  selected,
}: { value: number; onClick: () => void; selected?: boolean }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'rounded-full w-14 py-0.5 border-accent border flex items-center justify-center h-7 text-foreground hover:scale-[1.025] duration-150 transition-all font-medium text-xs',
        selected ? 'bg-accent' : 'bg-transparent',
      )}
    >
      {value}
    </button>
  )
}
