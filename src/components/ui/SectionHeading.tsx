import { motion } from 'framer-motion'

type SectionHeadingProps = {
  label: string
  title: string
  description?: string
}

export function SectionHeading({ label, title, description }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="mb-12 text-center md:mb-16"
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-violet-400/90">
        {label}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-base text-zinc-400 sm:text-lg">{description}</p>
      )}
    </motion.div>
  )
}
