import { motion } from 'framer-motion'
import type { SocialContentItem } from '../../data/content'
import { GlassCard } from '../ui/GlassCard'
import { ProjectImagePlaceholder } from './ProjectImagePlaceholder'

type SocialContentCardProps = {
  item: SocialContentItem
  index: number
}

export function SocialContentCard({ item, index }: SocialContentCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.08, duration: 0.45 }}
    >
      <GlassCard
        hover
        className="group overflow-hidden transition-[box-shadow,border-color] duration-300 hover:border-cyan-400/25 hover:shadow-[0_24px_60px_-24px_rgba(34,211,238,0.35)]"
      >
        <div className="flex flex-col md:flex-row">
          <div className="relative w-full shrink-0 overflow-hidden bg-zinc-900/50 md:w-[42%] lg:w-[38%]">
            <div className="aspect-[4/5] md:aspect-auto md:h-full md:min-h-[320px]">
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              ) : (
                <ProjectImagePlaceholder
                  label="Social mock-up"
                  hint={`Add: /public/projects/${item.id}.jpg`}
                />
              )}
            </div>
          </div>

          <div className="flex flex-1 flex-col justify-between border-t border-white/5 p-5 sm:p-6 md:border-l md:border-t-0">
            <div>
              <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-violet-400/80">
                Social Media
              </p>
              <h4 className="text-lg font-semibold text-white sm:text-xl">{item.title}</h4>

              <div className="mt-4 rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
                  Social Media Caption
                </p>
                <p className="text-sm leading-relaxed text-zinc-400">{item.caption}</p>
              </div>
            </div>

            <span className="glass mt-5 inline-flex w-fit items-center rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-300 shadow-[0_0_20px_-8px_rgba(52,211,153,0.5)]">
              {item.engagement}
            </span>
          </div>
        </div>
      </GlassCard>
    </motion.article>
  )
}
