import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { site } from '../../data/content'
import { cn, scrollToId } from '../../lib/utils'

const links = [
  { label: 'About', id: 'about' },
  { label: 'Work', id: 'work' },
  { label: 'Contact', id: 'contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  const navigate = (id: string) => {
    scrollToId(id)
    setOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6"
    >
      <nav className="glass-strong mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 sm:px-6">
        <button
          type="button"
          onClick={() => scrollToId('hero')}
          className="text-sm font-bold tracking-tight text-white"
        >
          {site.name.split(' ')[0]}
          <span className="text-gradient">.</span>
        </button>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                onClick={() => navigate(link.id)}
                className="text-sm text-zinc-400 transition-colors hover:text-white"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="rounded-lg p-2 text-zinc-400 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <div
        className={cn(
          'glass-strong mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl md:hidden',
          open ? 'block' : 'hidden',
        )}
      >
        <ul className="flex flex-col gap-1 p-3">
          {links.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                onClick={() => navigate(link.id)}
                className="w-full rounded-xl px-4 py-3 text-left text-sm text-zinc-300 hover:bg-white/5"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </motion.header>
  )
}
