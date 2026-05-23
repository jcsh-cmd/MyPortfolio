import { contactSection, site } from '../../data/content'

const ENDPOINT = 'https://api.web3forms.com/submit'

export async function submitWeb3Form(form: HTMLFormElement): Promise<void> {
  const key =
    (import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ?? '').trim() ||
    contactSection.web3formsAccessKey.trim()

  if (!key) throw new Error('Web3Forms key missing.')

  const formData = new FormData(form)
  formData.append('access_key', key)

  const name = String(formData.get('name') ?? '').trim()
  formData.append('subject', `${contactSection.emailSubject} — ${name}`)
  formData.append('from_name', site.name === 'PORTFOLIO' ? 'Joshua Ang Portfolio' : site.name)

  const res = await fetch(ENDPOINT, { method: 'POST', body: formData })
  const data = (await res.json()) as { success: boolean; message?: string }

  if (!data.success) throw new Error(data.message ?? 'Send failed')
}
