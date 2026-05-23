import { motion, type HTMLMotionProps } from 'framer-motion'
import { cn } from '../../lib/utils'

type GlassCardProps = HTMLMotionProps<'div'> & {
  strong?: boolean
  hover?: boolean
}

export function GlassCard({
  className,
  strong = false,
  hover = false,
  children,
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        'rounded-2xl',
        strong ? 'glass-strong' : 'glass',
        hover &&
          'transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:shadow-[0_20px_50px_-20px_rgba(167,139,250,0.35)]',
        className,
      )}
      {...props}
    >
      {children}
    </motion.div>
  )
}
