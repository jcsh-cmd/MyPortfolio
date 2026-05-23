import { motion } from 'framer-motion'
import { Code2, Layers, Users } from 'lucide-react'
import { about, skills } from '../../data/content'
import { GlassCard } from '../ui/GlassCard'
import { SectionHeading } from '../ui/SectionHeading'

const categories = [
  {
    key: 'design' as const,
    label: 'Design',
    icon: Layers,
    accent: 'from-violet-500/20 to-violet-500/5',
    border: 'group-hover:border-violet-400/30',
  },
  {
    key: 'technical' as const,
    label: 'Technical & Tools',
    icon: Code2,
    accent: 'from-cyan-500/20 to-cyan-500/5',
    border: 'group-hover:border-cyan-400/30',
  },
  {
    key: 'soft' as const,
    label: 'Soft Skills',
    icon: Users,
    accent: 'from-emerald-500/20 to-emerald-500/5',
    border: 'group-hover:border-emerald-400/30',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
}

export function About() {
  return (
    <section id="about" className="px-4 py-24 sm:px-6 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label={about.label}
          title={about.title}
          description={about.description}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-strong mb-14 rounded-2xl p-6 sm:p-8 md:p-10"
        >
          {about.paragraphs.map((paragraph, i) => (
            <p
              key={i}
              className={`text-base leading-relaxed sm:text-lg ${
                i === 0 ? 'text-zinc-300' : 'mt-4 text-zinc-400'
              }`}
            >
              {paragraph}
            </p>
          ))}
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {categories.map((cat, i) => {
            const Icon = cat.icon
            return (
              <motion.div
                key={cat.key}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <GlassCard hover className={`group h-full p-6 ${cat.border}`}>
                  <div
                    className={`mb-5 inline-flex rounded-xl bg-gradient-to-br p-3 ${cat.accent}`}
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="mb-4 text-lg font-semibold text-white">{cat.label}</h3>
                  <motion.ul
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="flex flex-wrap gap-2"
                  >
                    {skills[cat.key].map((skill) => (
                      <motion.li key={skill} variants={item}>
                        <span className="glass inline-block rounded-lg px-3 py-1.5 text-xs font-medium text-zinc-300">
                          {skill}
                        </span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </GlassCard>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
