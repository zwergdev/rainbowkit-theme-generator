'use client'

import { colord, random as crandom } from 'colord'
import { Dices, Minus, Plus, RotateCcw } from 'lucide-react'
import { HeroTitle } from './_shared/hero-title'

export const Manipulator = ({
  col,
  onChange,
}: { col: string; onChange: (c: string) => void }) => {
  const saturate = () => {
    onChange(colord(col).saturate(0.1).toHex())
  }

  const desaturate = () => {
    onChange(colord(col).desaturate(0.1).toHex())
  }

  const lighten = () => {
    onChange(colord(col).lighten(0.1).toHex())
  }

  const darken = () => {
    onChange(colord(col).darken(0.1).toHex())
  }

  const random = () => {
    onChange(crandom().toHex())
  }

  const reset = () => {
    onChange('#0B75FD')
  }

  return (
    <div className="w-full flex sm:gap-10 gap-3 sm:justify-start justify-between">
      <div className="flex flex-col gap-1 items-center justify-center">
        <HeroTitle className="mb-2">Saturation</HeroTitle>
        <div className="flex gap-3.5">
          <button
            type="button"
            className="hover:scale-110 transition-all duration-150"
            onClick={desaturate}
          >
            <Minus className="w-5 h-5 p-1 bg-accent rounded stroke-accent-foreground transition-all duration-150" />
          </button>
          <button
            type="button"
            className="hover:scale-110 transition-all duration-150"
            onClick={saturate}
          >
            <Plus className="w-5 h-5 p-1 bg-accent rounded stroke-accent-foreground transition-all duration-150" />
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-1 items-center justify-center">
        <HeroTitle className="mb-2">Lightness</HeroTitle>
        <div className="flex gap-3.5">
          <button
            type="button"
            className="hover:scale-110 transition-all duration-150"
            onClick={darken}
          >
            <Minus className="w-5 h-5 p-1 bg-accent rounded stroke-accent-foreground transition-all duration-150" />
          </button>
          <button
            type="button"
            className="hover:scale-110 transition-all duration-150"
            onClick={lighten}
          >
            <Plus className="w-5 h-5 p-1 bg-accent rounded stroke-accent-foreground transition-all duration-150" />
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-1 items-center justify-center">
        <HeroTitle className="mb-2">Random</HeroTitle>
        <button
          type="button"
          className="hover:scale-110 transition-all duration-150 flex items-center justify-center"
          onClick={random}
        >
          <Dices className="w-5 h-5 p-1 bg-accent rounded stroke-accent-foreground transition-all duration-150" />
        </button>
      </div>

      <div className="flex flex-col gap-1 items-center justify-center">
        <HeroTitle className="mb-2">Reset</HeroTitle>
        <button
          type="button"
          className="hover:scale-110 transition-all duration-150 flex items-center justify-center"
          onClick={reset}
        >
          <RotateCcw className="w-5 h-5 p-1 bg-accent rounded stroke-accent-foreground transition-all duration-150" />
        </button>
      </div>
    </div>
  )
}
