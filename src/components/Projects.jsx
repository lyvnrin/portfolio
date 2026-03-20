const projects = [
  {
    cat: 'Fintech · 2025', title: 'Valora', stack: 'React · Python',
    desc: 'AI-powered financial chatbot delivering economic insights on demand. Includes dynamic charts of stock and revenue data across industries, filtered via dropdown. Contributed frontend.',
    href: null
  }, 
  {
    cat: 'Full-stack · 2026', title: 'Oaxaca', stack: 'React · FastAPI · SQLite',
    desc: 'Restaurant management system with live order tracking, kitchen + waiter dashboards, and COGS analytics across a 5-sprint Scrum cycle. In Progress',
    href: null
  },
  {
    cat: 'Data · 2026', title: 'Lav-oogle', stack: 'Python · NumPy',
    desc: 'Mini search engine built on PageRank with graph-based link analysis implemented by NumPy matrix operations. Inspired by recent algorithms coursework. In Progress',
    href: 'https://lav-oogle.vercel.app/'
  },
]

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '2.5rem', borderTop: '0.5px solid #e0ddd8' }}>
      <p style={{ fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '1.25rem', fontWeight: 'bolder' }}>Projects</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0,1fr))', gap: '1rem' }}>
        {projects.map(p => {
          const card = (
            <div className="card-hover" style={{ border: '0.5px solid #e0ddd8', padding: '1.25rem', height: '100%' }}>
              <p style={{ fontSize: '10px', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#bbb', marginBottom: '0.5rem' }}>{p.cat}</p>
              <h3 style={{ fontFamily: "'Palatino Linotype', Palatino, serif", fontSize: '1.05rem', fontWeight: 400, marginBottom: '0.35rem' }}>{p.title}</h3>
              <p style={{ fontSize: '10px', color: '#bbb', marginTop: '0.5rem' }}>{p.stack}</p>
              <p style={{ fontSize: '11.5px', color: '#888', lineHeight: 1.65, marginTop: '0.65rem' }}>{p.desc}</p>
            </div>
          )
          return p.href
            ? <a key={p.title} href={p.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>{card}</a>
            : <div key={p.title}>{card}</div>
        })}
      </div>
    </section>
  )
}