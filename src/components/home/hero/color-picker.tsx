'use client'

import { colord, extend } from 'colord'
import { useState } from 'react'
import { HexColorPicker } from 'react-colorful'
import { RadiusPicker } from './radius/radius-picker'
import { HexInput } from './hex-input'
import { Manipulator } from './manipulator'
import { CopyCode } from './copy-code'
import { Mode } from './mode/mode'
import a11yPlugin from 'colord/plugins/a11y'
import { HeroTitle } from './_shared/hero-title'

extend([a11yPlugin])

const set = (key: string, value: string) =>
  document.documentElement.style.setProperty(`--${key}`, value)

export const ColorPicker = () => {
  const [color, setColor] = useState('#0B75FD')

  const onChange = (c: string) => {
    const { h, s, l } = colord(c).toHsl()

    document.documentElement.style.setProperty('--accent', `${h} ${s}% ${l}%`)
    setColor(c)

    set('accent-foreground', colord(c).isDark() ? '0, 0%, 100%' : '225, 0%, 0%')
  }

  return (
    <div className="max-w-[625px] w-full sm:flex-row flex-col flex gap-7 sm:items-end items-center justify-center md:pl-14 pl-0">
      <div className="flex flex-col items-start justify-center">
        <HeroTitle>Pick accent color</HeroTitle>
        <HexColorPicker color={color} onChange={onChange} className="mb-7" />
        <HexInput color={color} onChange={onChange} />
      </div>
      <div className="flex flex-col items-start justify-center w-full gap-7">
        <Manipulator col={color} onChange={onChange} />
        <RadiusPicker />
        <div className="flex items-end justify-between w-full sm:gap-7 gap-3 ">
          <CopyCode />
          <Mode />
        </div>
      </div>
    </div>
  )
}
