import { useState } from 'react'

const EMPTY = { name: '', email: '', phone: '', message: '' }

function validate(v) {
  const e = {}
  if (!v.name.trim()) e.name = 'Please enter your name'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = 'Enter a valid email address'
  if (!/^[+\d][\d\s-]{8,14}$/.test(v.phone.trim())) e.phone = 'Enter a valid phone number'
  return e
}

export default function LeadForm() {
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const set = (k) => (ev) => setValues((s) => ({ ...s, [k]: ev.target.value }))

  const submit = (ev) => {
    ev.preventDefault()
    const e = validate(values)
    setErrors(e)
    if (Object.keys(e).length) return
    // TODO: wire to the clinic's enquiry endpoint / CRM.
    setSent(true)
    setValues(EMPTY)
  }

  if (sent) {
    return (
      <div className="form form--done" role="status">
        <div className="form__tick" aria-hidden="true">✓</div>
        <p className="form__title">Thank you!</p>
        <p className="form__lead">Our Madurai team will reach out shortly to schedule your consultation.</p>
        <button type="button" className="btn btn--dark" onClick={() => setSent(false)}>
          Send another enquiry
        </button>
      </div>
    )
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
      <button type="submit" className="btn btn--dark btn--block">Request a Call Back</button>
    </form>
  )
}
