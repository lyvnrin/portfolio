export default function Contact() {
  return (
    <section id="contact" style={{ padding: '2.5rem', borderTop: '0.5px solid #e0ddd8' }}>
      <p style={{ fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 'bolder', marginBottom: '1.25rem' }}>§ Contact</p>
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        {[
          { label: 'send me an email', href: 'mailto:youremail@gmail.com', target: '_self' },
          { label: 'view my cv', href: '/Lavanya Kamble CV.pdf', target: '_blank' },
          { label: 'linkedin', href: 'https://www.linkedin.com/in/lavanyakamble/', target: '_blank' },
          { label: 'github', href: 'https://github.com/lyvnrin', target: '_blank' },
          { label: 'notion', href: 'https://lavanya-k-portfolio.notion.site/Welcome-to-My-Portfolio-303e4dd70aaf80499338ee34e86937a6', target: '_blank' }
        ].map(l => (
          <a key={l.label} href={l.href}
            target={l.target} rel="noopener noreferrer"
            style={{ fontSize: '13px', color: '#888', borderBottom: '0.5px solid transparent', paddingBottom: '1px', transition: 'all .2s' }}
            onMouseEnter={e => { e.target.style.color = 'var(--accent)'; e.target.style.borderBottomColor = 'var(--accent)' }}
            onMouseLeave={e => { e.target.style.color = '#888'; e.target.style.borderBottomColor = 'transparent' }}>
            {l.label}
          </a>
        ))}
      </div>
      <p style={{ marginTop: '0.75rem', fontSize: '11px', color: '#aaa', fontStyle: 'italic' }}>
        clicking "send me an email" will open your default mail client. if nothing happens, allow email protocol handlers in your browser settings.
      </p>
    </section>
  )
}