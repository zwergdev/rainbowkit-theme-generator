'use client'

import { cn } from '@/lib/utils'
import { memo, useState } from 'react'
import { HeroTitle } from '../_shared/hero-title'
import { Input } from '@/components/ui/input'

const set = (key: string, value: string) => {
  return document.documentElement.style.setProperty(key, value)
}

export const RadiusPicker = memo(() => {
  const [radius, setRadius] = useState(1)
  const [customValue, setCustomValue] = useState<undefined | number>(undefined)

  const onClick = (value: number) => {
    const rad = value * 24

    setRadius(value)
    set('--modal-radius', `${rad}px`)
    set('--connect-radius', `${rad / 2}px`)
    set('--menu-button-radius', `${rad / 2}px`)
    set('--menu-action-button-radius', `${rad}px`)
  }

  return (
    <div className='w-full'>
      <HeroTitle popoverText="The radius is equivalent to 16 pixels. E.g 0.5 = 8px.">
        Radius
      </HeroTitle>
      <div className="flex gap-2 items-center sm:justify-between justify-between w-full">
        {[0, 0.25, 0.5, 0.75, 1].map((r) => (
          <RadiusButton
            key={r}
            value={r}
            onClick={() => {
              onClick(r)
              setCustomValue(undefined)
            }}
            selected={!customValue && radius === r}
          />
        ))}
        <Input
          className={cn(
            'w-12 h-7 text-xs border-accent hover:scale-[1.025] text-center hover:border-accent',
            customValue && 'bg-accent',
          )}
          type="number"
          placeholder="1.25"
          value={customValue ?? undefined}
          onChange={(e) => {
            if (!e.target.value) return setCustomValue(undefined)

            onClick(Number(e.target.value))
            setCustomValue(Number(e.target.value))
          }}
        />
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
        'rounded-full w-12 py-0.5 border-accent border flex items-center justify-center h-7 text-foreground hover:scale-[1.025] duration-150 transition-all font-medium text-xs',
        selected ? 'bg-accent' : 'bg-transparent',
      )}
    >
      {value}
    </button>
  )
}
