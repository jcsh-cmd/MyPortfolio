import { motion } from 'framer-motion'
import type { GraphicDesignItem } from '../../data/content'
import { GlassCard } from '../ui/GlassCard'
import { ProjectImagePlaceholder } from './ProjectImagePlaceholder'

type GraphicDesignCardProps = {
  item: GraphicDesignItem
  index: number
}

export function GraphicDesignCard({ item, index }: GraphicDesignCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.08, duration: 0.45 }}
      className="h-full"
    >
      <GlassCard
        hover
        className="group flex h-full flex-col overflow-hidden transition-[box-shadow,border-color] duration-300 hover:border-violet-400/30 hover:shadow-[0_24px_60px_-24px_rgba(167,139,250,0.35)]"
      >
        <div className="relative aspect-[3/4] overflow-hidden sm:aspect-[4/5]">
          {item.image ? (
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          ) : (
            <ProjectImagePlaceholder
              label="Ethereal 061125"
              hint={`Add: /public/projects/Ethereal 061125.png`}
              aspectClass="aspect-[3/4] sm:aspect-[4/5]"
            />
          )}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-obsidian/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>

        <div className="border-t border-white/5 px-4 py-4 sm:px-5 sm:py-5">
          <h4 className="text-center text-sm font-semibold tracking-tight text-white sm:text-base">
            {item.title}
          </h4>
        </div>
      </GlassCard>
    </motion.article>
  )
}
