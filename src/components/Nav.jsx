function scrollTo(id) {
  if (id === 'top') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    history.replaceState(null, '', '/')
    return
  }
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  history.replaceState(null, '', '/')
}

export default function Nav() {
  return (
    <nav style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '1rem 2.5rem', borderBottom: '0.5px solid #e0ddd8',
      position: 'sticky', top: 0, background: '#fafaf9', zIndex: 10
    }}>
      <span
        onClick={() => scrollTo('top')}
        style={{ fontSize: '11px', letterSpacing: '0.20em', fontWeight: 500, textTransform: 'uppercase', cursor: 'pointer' }}>
        PORTFOLIO
      </span>
      <div style={{ display: 'flex', gap: '2rem', letterSpacing: '0.12em' }}>
        {[['about', 'about'], ['projects', 'projects'], ['contact', 'contact']].map(([label, id]) => (
          <a key={label} onClick={() => scrollTo(id)}
            style={{ fontSize: '12px', color: '#888', cursor: 'pointer' }}>
            {label}
          </a>
        ))}
      </div>
    </nav>
  )
}