'use client'

import { cn } from '@/lib/utils'
import { useCallback, useState } from 'react'
import { CustomMode } from './custom-mode'
import { colord } from 'colord'

type ModeVariant = {
  value: string
  selected?: boolean
  onSelect?: (value: Pick<ModeVariant, 'theme' | 'value'>) => void
  bg: string
  border: string
  theme: {
    'connect-background': string
    'connect-text': string
    'connect-inner-background': string
    'connect-shadow': string
    modal: string
    'modal-border': string
    'modal-text': string
    'modal-text-secondary': string
    'modal-shadow': string
    menu: string
    border: string
    'close-fill': string
    'close-background': string
    'close-border': string
    'profile-foreground': string
    'profile-action': string
    'profile-hover': string
  }
}

const MODES: ModeVariant[] = [
  {
    value: 'light',
    bg: 'bg-white',
    border: 'border-black',
    theme: {
      'connect-background': '0, 0%, 100%',
      'connect-text': '213, 11%, 16%',
      'connect-inner-background': '0, 0%, 95%',
      'connect-shadow': '0px 8px 32px rgba(0, 0, 0, 0.32)',
      modal: '0, 0%, 100%',
      'modal-border': '0, 0%, 100%',
      'modal-text': '213, 11%, 16%',
      'modal-text-secondary': '200, 1%, 55%',
      'modal-shadow': '0px 8px 32px rgba(0, 0, 0, 0.32)',
      menu: '180, 3%, 92%',
      border: '180, 0%, 94%',
      'close-fill': '180, 3%, 39%',
      'close-background': '0, 0%, 94%',
      'close-border': '0, 0%, 91%',
      'profile-foreground': '0, 0%, 96%',
      'profile-action': '0, 0%, 100%',
      'profile-hover': '0, 0%, 98%',
    },
  },
  {
    value: 'midnight',
    bg: 'bg-black',
    border: 'border-white',
    theme: {
      'connect-background': '0, 0%, 0%', //
      'connect-text': '0, 0%, 100%',
      'connect-inner-background': '0, 0%, 9%', //
      'connect-shadow': '0px 4px 12px rgba(0, 0, 0, 0.1)', //
      modal: '0, 0%, 0%', //
      'modal-border': '0, 0%, 8%',
      'modal-text': '0, 0%, 100%', //
      'modal-text-secondary': '0, 0%, 60%', //
      'modal-shadow': '0px 8px 32px rgba(0, 0, 0, 0.32)', // stale
      menu: '227, 0%, 8%', //
      border: '0, 0%, 8%', //
      'close-fill': '0, 0%, 73%', //
      'close-background': '0, 0%, 8%', //
      'close-border': '0, 0%, 11%', //
      'profile-foreground': '0, 0%, 6%', //
      'profile-action': '0, 0%, 15%', //
      'profile-hover': '0, 0%, 25%', //
    },
  },
  {
    value: 'dark',
    bg: 'bg-[#1A1B1E]',
    border: 'border-white',
    theme: {
      'connect-background': '228, 9%, 11%', //
      'connect-text': '0, 0%, 100%', //
      'connect-inner-background': '225, 4%, 21%', //
      'connect-shadow': '0px 8px 32px rgba(0, 0, 0, 0.32)',
      modal: '228, 9%, 11%', //
      'modal-border': '228, 5%, 18%', //
      'modal-text': '0, 0%, 100%', //
      'modal-text-secondary': '0, 0%, 60%', //
      'modal-shadow': '0px 8px 32px rgba(0, 0, 0, 0.32)',
      menu: '229, 9%, 20%',
      border: '228, 5%, 18%', //
      'close-fill': '226, 11%, 64%', //
      'close-background': '228, 5%, 18%', //
      'close-border': '228, 5%, 21%', //
      'profile-foreground': '220, 8%, 15%', //
      'profile-action': '218, 9%, 23%', //
      'profile-hover': '230, 7%, 31%', //
    },
  },
]

export const Mode = () => {
  const [selected, setSelected] = useState('light')
  const [color, setColor] = useState('#ffffff')

  const select = useCallback(
    ({ value, theme }: Pick<ModeVariant, 'theme' | 'value'>) => {
      setSelected(value)

      setColor(colord(`hsl(${theme['connect-background']})`).toHex())
      for (const [key, value] of Object.entries(theme)) {
        document.documentElement.style.setProperty(`--${key}`, value)
      }
    },
    [],
  )

  return (
    <div className="flex items-start justify-between flex-col w-full">
      <h6 className="text-xs font-medium mb-2">Mode</h6>
      <div className="flex items-center justify-between w-full">
        {MODES.map((mode) => (
          <Circle
            key={mode.value}
            {...mode}
            selected={selected === mode.value}
            onSelect={select}
          />
        ))}
        <CustomMode
          onSelect={() => setSelected('custom')}
          selected={selected === 'custom'}
          defaultColor={color}
        />
      </div>
    </div>
  )
}

const Circle = ({
  bg,
  border,
  selected,
  onSelect,
  theme,
  value,
}: ModeVariant) => {
  return (
    <button
      type="button"
      onClick={() => onSelect?.({ theme, value })}
      className={cn(
        'w-10 h-10 rounded-full transition-all duration-150 border hover:scale-110',
        bg,
        border,
        selected ? 'ring ring-white ring-offset-1' : '',
      )}
    />
  )
}
