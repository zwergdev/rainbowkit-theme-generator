'use client'

import { colord, extend } from 'colord'
import { useState } from 'react'
import { HexColorPicker } from 'react-colorful'
import { RadiusPicker } from '@/components/home/hero/radius-picker'
import { HexInput } from './hex-input'
import { Manipulator } from './manipulator'
import { CopyCode } from './copy-code'
import { Mode } from '@/components/home/hero/mode'
import a11yPlugin from 'colord/plugins/a11y'

extend([a11yPlugin])

const set = (key: string, value: string) =>
  document.documentElement.style.setProperty(`--${key}`, value)

export const ColorPicker = () => {
  const [color, setColor] = useState('#0B75FD')

  const onChange = (c: string) => {
    const { h, s, l } = colord(c).toHsl()

    document.documentElement.style.setProperty('--accent', `${h} ${s}% ${l}%`)
    setColor(c)

    set(
      'accent-foreground',
      colord(c).isReadable('#ffffff') ? '0, 0%, 100%' : '225, 0%, 0%',
    )
  }

  return (
    <div className="w-[625px] h-[300px] flex gap-7 items-end pl-14">
      <div className="flex flex-col items-start justify-center">
        <h6 className="text-xs font-medium mb-1.5">Pick accent color</h6>
        <HexColorPicker color={color} onChange={onChange} className="mb-7" />
        <HexInput color={color} onChange={onChange} />
      </div>
      <div className="flex flex-col items-start justify-center w-full gap-7">
        <Manipulator col={color} onChange={onChange} />
        <RadiusPicker />
        <div className="flex items-end justify-between w-full gap-7">
          <CopyCode />
          <Mode />
        </div>
      </div>
    </div>
  )
}
