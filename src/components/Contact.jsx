export default function Contact() {
  return (
    <section id="contact" style={{ padding: '2.5rem', borderTop: '0.5px solid #e0ddd8' }}>
      <p style={{ fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '1.25rem' }}>Contact</p>
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        {[
          { label: 'linkedin', href: 'https://www.linkedin.com/in/lavanyakamble/' },
          { label: 'github', href: 'https://github.com/lyvnrin' },
        ].map(l => (
          <a key={l.label} href={l.href} style={{ fontSize: '13px', color: '#888', borderBottom: '0.5px solid transparent', paddingBottom: '1px', transition: 'all .2s' }}
            onMouseEnter={e => { e.target.style.color = '#1a1a1a'; e.target.style.borderBottomColor = '#888' }}
            onMouseLeave={e => { e.target.style.color = '#888'; e.target.style.borderBottomColor = 'transparent' }}>
            {l.label}
          </a>
        ))}
      </div>
    </section>
  )
}