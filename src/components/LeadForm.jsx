import { useState } from 'react'
import { CONTACT } from '../data'

const EMPTY = { name: '', email: '', phone: '', message: '' }
// Set VITE_FORM_ENDPOINT (in .env) to the PHP URL to send enquiries; when empty the form only redirects.
const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT
const SOURCE = 'Minus Madurai Landing' // saved in the "source" column of the sheet

function validate(v) {
  const e = {}
  if (!v.name.trim()) e.name = 'Please enter your name'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = 'Enter a valid email address'
  if (!/^[+\d][\d\s-]{8,14}$/.test(v.phone.trim())) e.phone = 'Enter a valid phone number'
  return e
}

export default function LeadForm({ onSubmitted }) {
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [sending, setSending] = useState(false)
  const [failed, setFailed] = useState(false)

  const set = (k) => (ev) => setValues((s) => ({ ...s, [k]: ev.target.value }))

  const submit = async (ev) => {
    ev.preventDefault()
    const e = validate(values)
    setErrors(e)
    setFailed(false)
    if (Object.keys(e).length) return

    if (ENDPOINT) {
      setSending(true)
      try {
        const res = await fetch(ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: values.name.trim(),
            email: values.email.trim(),
            phone: values.phone.trim(),
            message: values.message.trim(),
            source: SOURCE,
          }),
        })
        const out = await res.json()
        if (!out.success) throw new Error(out.message)
      } catch {
        setSending(false)
        setFailed(true)
        return
      }
      setSending(false)
    }

    setValues(EMPTY)
    onSubmitted()
  }

  const field = (id, label, type, extra = {}) => (
    <div className={`field${errors[id] ? ' field--err' : ''}`}>
      <label htmlFor={`lead-${id}`}>{label}</label>
      <input
        id={`lead-${id}`}
        type={type}
        value={values[id]}
        onChange={set(id)}
        aria-invalid={!!errors[id]}
        aria-describedby={errors[id] ? `lead-${id}-err` : undefined}
        {...extra}
      />
      {errors[id] && <span id={`lead-${id}-err`} className="field__err">{errors[id]}</span>}
    </div>
  )

  return (
    <form className="form" onSubmit={submit} noValidate>
      <p className="form__title">Book your free consultation</p>
      <p className="form__lead">Tell us your concern — we diagnose first, then recommend.</p>
      {field('name', 'Name', 'text', { autoComplete: 'name', placeholder: 'Your full name' })}
      {field('email', 'Email', 'email', { autoComplete: 'email', placeholder: 'you@example.com' })}
      {field('phone', 'Phone number', 'tel', { autoComplete: 'tel', inputMode: 'tel', placeholder: '+91 98765 43210' })}
      <div className="field">
        <label htmlFor="lead-message">Message</label>
        <textarea
          id="lead-message"
          rows="3"
          value={values.message}
          onChange={set('message')}
          placeholder="What would you like help with?"
        />
      </div>
      {failed && (
        <p className="form__error" role="alert">
          Sorry, we could not send your enquiry. Please try again or call <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>.
        </p>
      )}
      <button type="submit" className="btn btn--dark btn--block" disabled={sending}>
        {sending ? 'Sending…' : 'Request a Call Back'}
      </button>
    </form>
  )
}
