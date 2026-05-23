import { motion } from 'framer-motion'
import { Linkedin, Mail, Phone } from 'lucide-react'
import { ContactForm } from '../contact/ContactForm'
import { contactSection, site } from '../../data/content'
import { linkedInLink, telLink } from '../../lib/contact'
import { GlassCard } from '../ui/GlassCard'
import { SectionHeading } from '../ui/SectionHeading'

const directChannels = [
  {
    label: 'Email',
    value: site.email,
    href: `mailto:${site.email}`,
    icon: Mail,
    glow: 'hover:border-violet-400/30',
    external: false,
    ariaLabel: `Copy path: email ${site.email}`,
    hint: site.email,
  },
  {
    label: 'Phone',
    value: site.phone,
    href: telLink(site.phone),
    icon: Phone,
    glow: 'hover:border-cyan-400/30',
    external: false,
    ariaLabel: `Call ${site.phone}`,
    hint: 'Tap to call',
  },
  {
    label: 'LinkedIn',
    value: contactSection.linkedinLabel,
    href: linkedInLink(site.linkedin),
    icon: Linkedin,
    glow: 'hover:border-emerald-400/30',
    external: true,
    ariaLabel: 'Open LinkedIn profile',
    hint: 'Opens in new tab',
  },
] as const

export function Contact() {
  return (
    <section id="contact" className="px-4 py-24 sm:px-6 md:py-32">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          label={contactSection.label}
          title={contactSection.title}
          description={contactSection.description}
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <GlassCard strong className="glow-violet p-6 sm:p-10">
            <ContactForm />

            <div className="mt-10 border-t border-white/10 pt-8">
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                {contactSection.directLinksTitle}
              </p>
              <div className="grid gap-3 sm:grid-cols-3">
                {directChannels.map((channel, i) => {
                  const Icon = channel.icon
                  return (
                    <motion.a
                      key={channel.label}
                      href={channel.href}
                      target={channel.external ? '_blank' : undefined}
                      rel={channel.external ? 'noopener noreferrer' : undefined}
                      aria-label={channel.ariaLabel}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className={`glass flex cursor-pointer flex-col items-center gap-2 rounded-xl p-4 text-center transition-all duration-300 ${channel.glow} hover:-translate-y-0.5`}
                    >
                      <Icon className="h-5 w-5 text-zinc-400" />
                      <span className="text-xs font-medium text-zinc-300">{channel.label}</span>
                      <span className="line-clamp-2 text-[10px] text-zinc-600">{channel.hint}</span>
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </GlassCard>
        </motion.div>

        <footer className="mt-16 border-t border-white/5 pt-8 text-center">
          <p className="text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} {site.name}. Crafted with React, Tailwind &amp;
            Framer Motion.
          </p>
          <p className="mt-2 flex items-center justify-center gap-2 text-xs text-zinc-600">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400/80" />
            {site.availability}
          </p>
        </footer>
      </div>
    </section>
  )
}
