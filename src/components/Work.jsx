const projects = [
  {
    cat: 'Full-stack · 2025', title: 'Oaxaca', stack: 'React · FastAPI · SQLite',
    desc: 'Restaurant management system with live order tracking, kitchen + waiter dashboards, and COGS analytics across a 4-sprint Scrum cycle.'
  },
  {
    cat: 'Data · 2025', title: 'Shark Attack Myths', stack: 'Python · Recharts · Leaflet',
    desc: 'Statistical analysis of the Global Shark Attack File debunking the depth-danger myth. Python exports JSON to a React dashboard.'
  },
  {
    cat: 'Generative · 2025', title: 'Mathematical Art', stack: 'Python · NumPy · Matplotlib',
    desc: 'Mandelbrot sets, diffusion simulations, and parametric curves rendered as visual art. Maths as aesthetic output.'
  },
]

export default function Work() {
  return (
    <section id="projects" style={{ padding: '2.5rem', borderTop: '0.5px solid #e0ddd8' }}>
      <p style={{ fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '1.25rem' }}>Work</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0,1fr))', gap: '1rem' }}>
        {projects.map(p => (
          <div key={p.title} className="card-hover" style={{ border: '0.5px solid #e0ddd8', borderRadius: '4px', padding: '1.25rem' }}>
            <p style={{ fontSize: '10px', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#bbb', marginBottom: '0.5rem' }}>{p.cat}</p>
            <h3 style={{ fontFamily: "'Palatino Linotype', Palatino, serif", fontSize: '1.05rem', fontWeight: 400, marginBottom: '0.35rem' }}>{p.title}</h3>
            <p style={{ fontSize: '10px', color: '#bbb', marginTop: '0.5rem' }}>{p.stack}</p>
            <p style={{ fontSize: '11.5px', color: '#888', lineHeight: 1.65, marginTop: '0.65rem' }}>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}