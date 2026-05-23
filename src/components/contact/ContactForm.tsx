import { motion } from 'framer-motion'
import { Loader2, Send } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { contactSection } from '../../data/content'
import { submitWeb3Form } from './submitWeb3Form'
import { cn } from '../../lib/utils'

const inputClass =
  'glass w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-zinc-500 transition-colors focus:border-violet-400/40 focus:outline-none focus:ring-1 focus:ring-violet-400/20'

type Status = 'idle' | 'sending' | 'success' | 'error'

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setErrorMessage('')

    const form = event.currentTarget
    const formData = new FormData(form)
    const name = String(formData.get('name') ?? '').trim()
    const email = String(formData.get('email') ?? '').trim()
    const message = String(formData.get('message') ?? '').trim()

    if (!name || !email || !message) {
      setStatus('error')
      setErrorMessage('Please fill in all fields.')
      return
    }

    setStatus('sending')

    try {
      await submitWeb3Form(form)
      setStatus('success')
      form.reset()
    } catch (err) {
      setStatus('error')
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        style={{ display: 'none' }}
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-1.5 block text-xs font-medium text-zinc-400">
            Your name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Juan Dela Cruz"
            className={inputClass}
            disabled={status === 'sending'}
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-1.5 block text-xs font-medium text-zinc-400">
            Your email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@email.com"
            className={inputClass}
            disabled={status === 'sending'}
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-1.5 block text-xs font-medium text-zinc-400">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          placeholder="Tell me about your project, role, or pubmat request..."
          className={cn(inputClass, 'resize-y min-h-[120px]')}
          disabled={status === 'sending'}
        />
      </div>

      {status === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-xl border border-emerald-400/20 bg-emerald-500/10 px-4 py-3 text-sm font-medium text-emerald-300"
          role="status"
        >
          {contactSection.formSuccessMessage}
        </motion.div>
      )}

      {status === 'error' && errorMessage && (
        <p
          className="rounded-xl border border-red-400/20 bg-red-500/10 px-4 py-3 text-sm text-red-300"
          role="alert"
        >
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="glass-strong glow-violet flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-violet-400/20 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:border-violet-400/40 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === 'sending' ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            {contactSection.cta}
          </>
        )}
      </button>
    </form>
  )
}
