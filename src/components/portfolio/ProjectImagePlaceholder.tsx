import { ImageIcon } from 'lucide-react'

type ProjectImagePlaceholderProps = {
  label: string
  hint: string
  aspectClass?: string
}

export function ProjectImagePlaceholder({
  label,
  hint,
  aspectClass = 'aspect-[4/5]',
}: ProjectImagePlaceholderProps) {
  return (
    <div
      className={`flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-zinc-800/80 to-zinc-900/90 p-6 text-center ${aspectClass}`}
    >
      <div className="glass rounded-2xl p-4">
        <ImageIcon className="h-8 w-8 text-zinc-500" />
      </div>
      <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">{label}</p>
      <p className="max-w-[220px] text-xs text-zinc-600">{hint}</p>
    </div>
  )
}
