import { useState } from 'react'
import emailjs from '@emailjs/browser'

const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export default function Contact() {
  const [values, setValues] = useState({ from_name: '', from_email: '', message: '' })
  const [status, setStatus] = useState('idle')

  const set = (k, v) => setValues(prev => ({ ...prev, [k]: v }))
  const allFilled = values.from_name && values.from_email && values.message

  const handleSend = async () => {
    if (!allFilled || status === 'sending') return
    setStatus('sending')
    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, values, EMAILJS_PUBLIC_KEY)
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" style={s.section}>
      <p style={s.sectionTag}>§ Contact</p>

      {status === 'success' ? (
        <div style={s.successEntry}>
          <div style={s.headwordRow}>
            <span style={s.headword}>{values.from_name}</span>
            <span style={s.phonetic}>/ˈkær.ə.spɒn.dənt/</span>
            <span style={s.pos}>n.</span>
          </div>
          <p style={s.successDef}>
            catalogued. a reply will follow in due course.
          </p>
        </div>
      ) : (
        <div style={s.form}>

          {/* name */}
          <div style={s.row}>
            <label style={s.headword} htmlFor="from_name">name</label>
            <span style={s.pos}>n.</span>
            <input
              id="from_name"
              type="text"
              value={values.from_name}
              onChange={e => set('from_name', e.target.value)}
              placeholder="your name"
              style={s.input}
            />
          </div>

          {/* email */}
          <div style={s.row}>
            <label style={s.headword} htmlFor="from_email">email</label>
            <span style={s.pos}>n.</span>
            <input
              id="from_email"
              type="email"
              value={values.from_email}
              onChange={e => set('from_email', e.target.value)}
              placeholder="your address"
              style={s.input}
            />
          </div>

          {/* message */}
          <div style={s.row}>
            <label style={s.headword} htmlFor="message">send me a message!</label>
          </div>
          <div style={s.textareaRow}>
            <textarea
              id="message"
              value={values.message}
              onChange={e => set('message', e.target.value)}
              placeholder="write something worth cataloguing…"
              rows={5}
              style={s.textarea}
            />
          </div>

          {/* submit */}
          <div style={s.submitRow}>
            <button
              onClick={handleSend}
              disabled={!allFilled || status === 'sending'}
              style={{
                ...s.btn,
                opacity: allFilled ? 1 : 0.4,
                cursor: allFilled ? 'pointer' : 'default',
              }}
            >
              {status === 'sending' ? 'cataloguing…' : 'send to catalogue!'}
            </button>
            {status === 'error' && (
              <span style={s.errorNote}>something went wrong — try emailing directly.</span>
            )}
          </div>

        </div>
      )}

      {/* footer links ALWAYS visible */}
      <div style={s.footerLinks}>
        {[
          { label: 'view cv',   href: '/Lavanya Kamble CV.pdf', target: '_blank' },
          { label: 'linkedin',  href: 'https://www.linkedin.com/in/lavanyakamble/', target: '_blank' },
          { label: 'github',    href: 'https://github.com/lyvnrin', target: '_blank' },
          { label: 'notion',    href: 'https://lavanya-k-portfolio.notion.site/Welcome-to-My-Portfolio-303e4dd70aaf80499338ee34e86937a6', target: '_blank' },
        ].map(l => <FooterLink key={l.label} {...l} />)}
      </div>
    </section>
  )
}

function FooterLink({ label, href, target }) {
  const [hover, setHover] = useState(false)
  return (
    <a
      href={href} target={target} rel="noopener noreferrer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        fontSize: '11px',
        letterSpacing: '0.08em',
        color: hover ? 'var(--accent)' : '#aaa',
        textDecoration: 'none',
        borderBottom: `0.5px solid ${hover ? 'var(--accent)' : 'transparent'}`,
        paddingBottom: '1px',
        transition: 'all .2s',
      }}
    >
      {label}
    </a>
  )
}

const s = {
  section: {
    padding: '2.5rem',
    borderTop: '0.5px solid #e0ddd8',
    fontFamily: 'Georgia, "Times New Roman", serif',
  },
  sectionTag: {
    fontSize: '10px',
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: 'var(--accent)',
    fontFamily: 'var(--font-sans, sans-serif)',
    fontWeight: 'bolder',
    marginBottom: '1.5rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '520px',
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    borderBottom: '0.5px solid #e0ddd8',
    padding: '0.65rem 0',
  },
  headword: {
    fontSize: '15px',
    fontWeight: 'bold',
    color: 'var(--color-text, #1a1a18)',
    fontFamily: 'Georgia, serif',
    whiteSpace: 'nowrap',
    flexShrink: 0,
    cursor: 'default',
  },
  pos: {
    fontSize: '12px',
    color: 'var(--accent, #b5a99a)',
    fontStyle: 'italic',
    flexShrink: 0,
    marginRight: '0.25rem',
  },
  input: {
    flex: 1,
    fontSize: '13px',
    fontFamily: 'Georgia, serif',
    color: 'var(--color-text, #1a1a18)',
    background: 'transparent',
    border: 'none',
    outline: 'none',
    padding: '0',
    minWidth: 0,
  },
  textareaRow: {
    borderBottom: '0.5px solid #e0ddd8',
    padding: '0.5rem 0 0.75rem',
  },
  textarea: {
    width: '100%',
    fontSize: '13px',
    fontFamily: 'Georgia, serif',
    color: 'var(--color-text, #1a1a18)',
    background: 'transparent',
    border: 'none',
    outline: 'none',
    resize: 'none',
    lineHeight: 1.7,
    padding: '0',
  },
  submitRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    paddingTop: '1.25rem',
    flexWrap: 'wrap',
  },
  btn: {
    fontSize: '12px',
    fontFamily: 'Georgia, serif',
    fontStyle: 'italic',
    color: 'var(--color-text, #1a1a18)',
    background: 'transparent',
    border: '0.5px solid #c0bdb8',
    padding: '0.45rem 1.1rem',
    borderRadius: '2px',
    transition: 'all 0.2s',
  },
  errorNote: {
    fontSize: '11px',
    color: '#c77',
    fontStyle: 'italic',
  },
  successEntry: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem',
    padding: '1rem 0',
  },
  headwordRow: {
    display: 'flex',
    alignItems: 'baseline',
    gap: '0.5rem',
  },
  phonetic: {
    fontSize: '13px',
    color: '#aaa',
    fontStyle: 'italic',
  },
  successDef: {
    fontSize: '13px',
    color: '#888',
    fontStyle: 'italic',
    lineHeight: 1.6,
  },
  footerLinks: {
    display: 'flex',
    gap: '1.5rem',
    flexWrap: 'wrap',
    marginTop: '2rem',
    paddingTop: '1rem',
    borderTop: '0.5px solid #e0ddd8',
  },
}