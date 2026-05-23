import { motion } from 'framer-motion'
import { ArrowDown, Sparkles } from 'lucide-react'
import { hero, site } from '../../data/content'
import { scrollToId } from '../../lib/utils'
import { GlowButton } from '../ui/GlowButton'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-4 pb-20 pt-32 sm:px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-4xl text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15 }}
          className="glass mb-8 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-zinc-300"
        >
          <Sparkles className="h-3.5 w-3.5 text-violet-400" />
          {site.tagline}
        </motion.div>

        <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          {hero.headline.map((line, i) => (
            <span key={line}>
              {i > 0 && <br />}
              <span className={i === hero.gradientWordIndex ? 'text-gradient' : 'text-white'}>
                {line}
              </span>
            </span>
          ))}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg md:mt-8">
          {hero.subheadline}
        </p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <GlowButton onClick={() => scrollToId('work')}>{hero.ctaWork}</GlowButton>
          <GlowButton variant="ghost" onClick={() => scrollToId('contact')}>
            {hero.ctaConnect}
          </GlowButton>
        </motion.div>
      </motion.div>

      <motion.button
        type="button"
        onClick={() => scrollToId('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-500 transition-colors hover:text-zinc-300"
        aria-label="Scroll to about section"
      >
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ArrowDown size={24} />
        </motion.div>
      </motion.button>
    </section>
  )
}
