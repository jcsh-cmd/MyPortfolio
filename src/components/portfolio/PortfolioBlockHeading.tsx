import { motion } from 'framer-motion'

type PortfolioBlockHeadingProps = {
  title: string
  subtitle: string
}

export function PortfolioBlockHeading({ title, subtitle }: PortfolioBlockHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45 }}
      className="mb-8 md:mb-10"
    >
      <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">{title}</h3>
      <p className="mt-2 text-sm font-medium text-violet-300/90 sm:text-base">{subtitle}</p>
      <div className="mt-6 h-px w-full max-w-xs bg-gradient-to-r from-violet-500/40 via-cyan-500/30 to-transparent" />
    </motion.div>
  )
}
