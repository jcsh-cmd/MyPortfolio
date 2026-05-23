/** Builds a mailto link that opens the user's email app with optional subject & body */
export function mailtoLink(
  email: string,
  options?: { subject?: string; body?: string },
): string {
  const params = new URLSearchParams()
  if (options?.subject) params.set('subject', options.subject)
  if (options?.body) params.set('body', options.body)
  const query = params.toString()
  return query ? `mailto:${email}?${query}` : `mailto:${email}`
}

/** Normalizes phone for tel: links (keeps leading +, strips spaces/dashes) */
export function telLink(phone: string): string {
  const cleaned = phone.replace(/[^\d+]/g, '')
  return `tel:${cleaned}`
}

/** Ensures LinkedIn URLs open correctly in the browser */
export function linkedInLink(url: string): string {
  const trimmed = url.trim()
  if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
    return trimmed
  }
  return `https://www.linkedin.com/in/${trimmed.replace(/^\/+/, '')}`
}
