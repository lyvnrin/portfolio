import { useState } from 'react'

function scrollTo(id, setOpen) {
  setOpen(false)
  if (id === 'top') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    history.replaceState(null, '', '/')
    return
  }
  setTimeout(() => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    history.replaceState(null, '', '/')
  }, 150)
}

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '1rem 2.5rem', borderBottom: '0.5px solid #e0ddd8',
        position: 'sticky', top: 0, background: '#fafaf9', zIndex: 10
      }}>
        <span
          onClick={() => scrollTo('top', setOpen)}
          onMouseEnter={e => e.target.style.color = 'var(--accent)'}
          onMouseLeave={e => e.target.style.color = '#1a1a1a'}
          style={{ fontSize: '11px', letterSpacing: '0.20em', fontWeight: 500, textTransform: 'uppercase', cursor: 'pointer' }}>
          PORTFOLIO
        </span>

        {/* desktop links */}
        <div className="nav-desktop" style={{ display: 'flex', gap: '2rem', letterSpacing: '0.12em' }}>
          {[['about', 'about'], ['projects', 'projects'], ['contact', 'contact']].map(([label, id]) => (
            <a key={label} onClick={() => scrollTo(id, setOpen)}
              onMouseEnter={e => e.target.style.color = 'var(--accent)'}
              onMouseLeave={e => e.target.style.color = '#888'}
              style={{ fontSize: '12px', color: '#888', cursor: 'pointer' }}>
              {label}
            </a>
          ))}
        </div>

        {/* hamburger button */}
        <button
          className="nav-hamburger"
          onClick={() => setOpen(!open)}
          style={{
            display: 'none', flexDirection: 'column', gap: '4px',
            background: 'none', border: 'none', cursor: 'pointer', padding: '4px'
          }}>
          <span style={{ display: 'block', width: 18, height: 1, background: open ? 'var(--accent)' : '#1a1a1a', transition: 'all .2s', transform: open ? 'translateY(5px) rotate(45deg)' : 'none' }} />
          <span style={{ display: 'block', width: 18, height: 1, background: '#1a1a1a', transition: 'all .2s', opacity: open ? 0 : 1 }} />
          <span style={{ display: 'block', width: 18, height: 1, background: open ? 'var(--accent)' : '#1a1a1a', transition: 'all .2s', transform: open ? 'translateY(-5px) rotate(-45deg)' : 'none' }} />
        </button>
      </nav>

      {/* mobile dropdown */}
      {open && (
        <div style={{
          position: 'sticky', top: '45px', zIndex: 9,
          background: '#fafaf9', borderBottom: '0.5px solid #e0ddd8',
          display: 'flex', flexDirection: 'column', padding: '1rem 2.5rem', gap: '1rem'
        }}>
          {[['about', 'about'], ['projects', 'projects'], ['contact', 'contact']].map(([label, id]) => (
            <a key={label} onClick={() => scrollTo(id, setOpen)}
              style={{ fontSize: '13px', color: '#888', cursor: 'pointer', letterSpacing: '0.08em' }}>
              {label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  )
}