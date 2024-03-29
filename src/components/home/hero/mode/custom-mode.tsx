'use client'

import { cn } from '@/lib/utils'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { HexColorPicker } from 'react-colorful'
import { useState } from 'react'
import { colord, extend } from 'colord'
import { HexInput } from '../hex-input'
import mixPlugin from 'colord/plugins/mix'

extend([mixPlugin])

type CustomModeProps = {
  selected?: boolean
  defaultColor: string
  onSelect: () => void
}

const set = (key: string, value: string) =>
  document.documentElement.style.setProperty(`--${key}`, value)

export const CustomMode = ({
  selected,
  onSelect,
  defaultColor,
}: CustomModeProps) => {
  const [color, setColor] = useState(defaultColor)

  const onChangeColor = (c: string) => {
    setColor(c)
    const { h, s, l } = colord(c).toHsl()

    const [_, tone2, tone3, , , , , tone7] = colord(c)
      .tones(10)
      .map((c) => c.toHsl())

    set('connect-background', `${h} ${s}% ${l}%`)
    set('modal', `${h} ${s}% ${l}%`)
    set('profile-foreground', `${h} ${s}% ${l}%`)
    set('menu', `${tone2.h} ${tone2.s}% ${tone2.l}%`)
    set('connect-inner-background', `${tone2.h} ${tone2.s}% ${tone2.l}%`)
    set('profile-action', `${tone2.h} ${tone2.s}% ${tone2.l}%`)
    set('profile-hover', `${tone3.h} ${tone3.s}% ${tone3.l}%`)

    const isDark = colord(c).isDark()

    set('modal-text', isDark ? '0, 0%, 100%' : '225, 0%, 0%')
    set('connect-text', isDark ? '0, 0%, 100%' : '225, 0%, 0%')
    set('border', isDark ? '228, 5%, 18%' : '180, 0%, 94%')
    set('modal-border', isDark ? '228, 5%, 18%' : '180, 0%, 94%')
    set('close-border', isDark ? '228, 5%, 18%' : '180, 0%, 94%')
    set('close-background', `${tone3.h} ${tone3.s}% ${tone3.l}%`)
    set('close-fill', `${tone7.h} ${tone7.s}% ${tone7.l}%`)
    set(
      'download-top-card-background',
      isDark
        ? 'linear-gradient(126deg, rgba(120, 120, 120, 0.1) 9.49%, rgba(0, 0, 0, 0) 71.04%), #050505'
        : 'linear-gradient(126deg, rgba(171, 171, 171, 0.2) 9.49%, rgba(255, 255, 255, 0) 71.04%), #FFFFFF',
    )
    set(
      'download-bottom-card-background',
      isDark
        ? 'linear-gradient(126deg, rgba(0, 0, 0, 0) 9.49%, rgba(120, 120, 120, 0.1) 71.04%), #050505'
        : 'linear-gradient(126deg, rgba(255, 255, 255, 0) 9.49%, rgba(171, 171, 171, 0.04) 71.04%), #FFFFFF',
    )
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          onClick={onSelect}
          className={cn(
            'w-10 h-10 rounded-full transition-all duration-150 border hover:scale-110',
            selected ? 'ring ring-white ring-offset-1' : '',
          )}
          style={{
            backgroundColor: '#7fd82b',
            backgroundImage:
              'linear-gradient(319deg, #7fd82b 0%, #ef4063 40%, #e557c6 100%)',
          }}
        />
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
