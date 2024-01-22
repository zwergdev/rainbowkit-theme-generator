'use client'

import { Button } from '@/components/ui/button'
import { Dropdown } from '@/components/ui/icons'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { HexColorPicker } from 'react-colorful'
import { HexInput } from '@/components/home/hero/hex-input'
import { colord } from 'colord'
import { useState } from 'react'

const set = (key: string, value: string) =>
  document.documentElement.style.setProperty(`--${key}`, value)

export const WrongNetwork = () => {
  const [color, setColor] = useState('#FF4848')

  const onChangeColor = (c: string) => {
    setColor(c)
    const { h, s, l } = colord(c).toHsl()

    const isDark = colord(c).isDark()

    set('connect-error', `${h} ${s}% ${l}%`)
    set('connect-error-text', isDark ? '0, 0%, 100%' : '225, 0%, 0%')
  }

  return (
    <Popover>
      <PopoverTrigger asChild className="sm:order-3 order-1">
        <div className="flex items-center relative">
          <Button variant="error" size="error">
            Wrong Network <Dropdown />
          </Button>
          <span className="text-muted-foreground/75 text-xs ml-3 absolute top-3 -right-20">
            {'<-- click me'}
          </span>
        </div>
      </PopoverTrigger>
      <PopoverContent align="end" sideOffset={10} className="p-5">
        <HexColorPicker
          color={color}
          onChange={onChangeColor}
          className="mb-5"
        />
        <HexInput color={color} onChange={onChangeColor} isPopover />
      </PopoverContent>
    </Popover>
  )
}
