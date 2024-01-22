import { cn } from '@/lib/utils'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import { Info } from 'lucide-react'

export const HeroTitle = ({
  children,
  className,
  popoverText,
}: { children: React.ReactNode; className?: string; popoverText?: string }) => {
  return (
    <div
      className={cn(
        'flex items-center text-left w-full gap-2 justify-start mb-1.5',
        className,
      )}
    >
      <h6 className="text-xs font-medium">{children}</h6>
      {popoverText && (
        <HoverCard openDelay={200}>
          <HoverCardTrigger asChild>
            <Info className="w-3 h-3 text-white/50 cursor-pointer" />
          </HoverCardTrigger>
          <HoverCardContent>{popoverText}</HoverCardContent>
        </HoverCard>
      )}
    </div>
  )
}
