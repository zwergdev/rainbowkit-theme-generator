import { HexColorInput } from 'react-colorful'
import { HeroTitle } from './_shared/hero-title'

export const HexInput = ({
  color,
  onChange,
  isPopover = false,
}: { color: string; onChange: (c: string) => void; isPopover?: boolean }) => {
  return (
    <div>
      {!isPopover && <HeroTitle>Or enter a HEX value</HeroTitle>}
      <HexColorInput
        color={color}
        onChange={onChange}
        prefixed
        className="flex h-10 w-[200px] rounded-xl border border-accent hover:border-accent duration-150 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent focus-visible:ring-1 focus-visible:ring-accent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
      />
    </div>
  )
}
