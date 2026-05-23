import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'

type GlowButtonProps = {
  children: React.ReactNode
  variant?: 'primary' | 'ghost'
  onClick?: () => void
  href?: string
  className?: string
}

export function GlowButton({
  children,
  variant = 'primary',
  onClick,
  href,
  className,
}: GlowButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300'

  const styles =
    variant === 'primary'
      ? 'glass-strong glow-violet border-violet-400/20 text-white hover:border-violet-400/40 hover:shadow-[0_0_30px_-5px_rgba(167,139,250,0.5)]'
      : 'glass border-white/10 text-zinc-300 hover:border-white/20 hover:text-white'

  const classes = cn(base, styles, className)

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  )
}
