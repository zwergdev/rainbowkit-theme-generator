import { cn } from '@/lib/utils'
import { Plus } from 'lucide-react'

export const CloseButton = ({ className }: { className?: string }) => {
  return (
    <button
      type="button"
      className={cn(
        'bg-close-background border border-close-border rounded-full h-7 w-7 flex items-center justify-center hover:scale-110 duration-150 transition-all',
        className,
      )}
    >
      <Plus className="rotate-45 stroke-close" size={18} strokeWidth={2.5} />
    </button>
  )
}
