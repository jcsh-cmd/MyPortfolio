import { motion } from 'framer-motion'
import { Linkedin, Mail, Phone } from 'lucide-react'
import { contactSection, site } from '../../data/content'
import { linkedInLink, mailtoLink, telLink } from '../../lib/contact'
import { GlassCard } from '../ui/GlassCard'
import { GlowButton } from '../ui/GlowButton'
import { SectionHeading } from '../ui/SectionHeading'

const emailHref = mailtoLink(site.email, {
  subject: contactSection.emailSubject,
  body: contactSection.emailBody,
})

const channels = [
  {
    label: 'Email',
    value: site.email,
    href: emailHref,
    icon: Mail,
    glow: 'hover:border-violet-400/30',
    external: false,
    ariaLabel: `Send email to ${site.email}`,
  },
  {
    label: 'Phone',
    value: site.phone,
    href: telLink(site.phone),
    icon: Phone,
    glow: 'hover:border-cyan-400/30',
    external: false,
    ariaLabel: `Call ${site.phone}`,
  },
  {
    label: 'LinkedIn',
    value: contactSection.linkedinLabel,
    href: linkedInLink(site.linkedin),
    icon: Linkedin,
    glow: 'hover:border-emerald-400/30',
    external: true,
    ariaLabel: 'Open LinkedIn profile in a new tab',
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
            <div className="space-y-4">
              {channels.map((channel, i) => {
                const Icon = channel.icon
                return (
                  <motion.div
                    key={channel.label}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <a
                      href={channel.href}
                      target={channel.external ? '_blank' : undefined}
                      rel={channel.external ? 'noopener noreferrer' : undefined}
                      aria-label={channel.ariaLabel}
                      className={`glass group flex cursor-pointer items-center gap-4 rounded-xl p-4 transition-all duration-300 ${channel.glow} hover:-translate-y-0.5 active:scale-[0.99]`}
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white/5">
                        <Icon className="h-5 w-5 text-zinc-300 transition-colors group-hover:text-white" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-xs font-medium uppercase tracking-wider text-zinc-500">
                          {channel.label}
                        </span>
                        <span className="block truncate text-sm font-medium text-zinc-200 group-hover:text-white">
                          {channel.value}
                        </span>
                        <span className="mt-0.5 block text-[11px] text-zinc-600 group-hover:text-zinc-500">
                          {channel.label === 'Email' && 'Tap to open your email app'}
                          {channel.label === 'Phone' && 'Tap to call on mobile'}
                          {channel.label === 'LinkedIn' && 'Tap to view profile'}
                        </span>
                      </span>
                    </a>
                  </motion.div>
                )
              })}
            </div>

            <div className="mt-8 flex justify-center">
              <GlowButton href={emailHref} className="cursor-pointer">
                {contactSection.cta}
              </GlowButton>
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
