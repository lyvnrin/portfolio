const skills = [
  { name: 'MS Excel',    category: 'Data' },
  { name: 'NumPy',    category: 'Data' },
  { name: 'PostgreSQL',         category: 'Data' },
  { name: 'FastAPI',     category: 'Deployment' },
  { name: 'Flask',     category: 'Deployment' },
  { name: 'HTML/CSS',    category: 'Deployment' },
  { name: 'Vercel',    category: 'Deployment' },
  { name: 'Figma',       category: 'Design' },
  { name: 'Lovable',     category: 'Design' },
  { name: 'Java',        category: 'Scripting' },
  { name: 'JavaScript',  category: 'Scripting' },
  { name: 'Python',      category: 'Scripting' },
  { name: 'Git',         category: 'Tools' },
  { name: 'Linux/WSL',       category: 'Tools' },
  { name: 'React',       category: 'Tools' },
]

const categoryStyles = {
  Data:       { background: '#cce0ff', color: '#002766', border: '0.5px solid #5599ee' },
  Deployment: { background: '#ffd6d6', color: '#7a0000', border: '0.5px solid #ee5555' },
  Design:     { background: '#b8d4f8', color: '#001a52', border: '0.5px solid #3377dd' },
  Scripting:  { background: '#ffbfbf', color: '#660000', border: '0.5px solid #dd3333' },
  Tools:      { background: '#94baee', color: '#00113d', border: '0.5px solid #1a55bb' },
}

const categories = ['Data', 'Deployment', 'Design', 'Scripting', 'Tools']

export default function About() {
  return (
    <section id="about" style={{ padding: '2.5rem', borderTop: '0.5px solid #e0ddd8' }}>
      <p style={{ fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 'bolder', marginBottom: '1.25rem' }}>§ About</p>
      <div
        className="card-hover about-grid"
        style={{ border: '0.5px solid #e0ddd8', padding: '1.5rem', display: 'grid', gridTemplateColumns: '1fr 0.5px 1fr', gap: '1.5rem', alignItems: 'start' }}
      >
        <p className="drop-cap" style={{ fontSize: '12px', lineHeight: 1.85, color: '#666' }}>
          Undergraduate Computer Science student at Royal Holloway, University of London. I build full-stack systems, analyse data, and find patterns in complexity. Always up for a new challenge and quick to pick up whatever language or tool the problem demands. Currently seeking Summer 2026 internships in fintech and data.
        </p>
        <div style={{ background: '#e0ddd8', width: '0.5px', height: '100%' }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '2px' }}>
            {categories.map(cat => (
              <span key={cat} style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '10px', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#888' }}>
                <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: categoryStyles[cat].border.replace('0.5px solid ', ''), display: 'inline-block' }} />
                {cat}
              </span>
            ))}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', alignContent: 'flex-start' }}>
            {skills.map(s => (
              <span key={s.name} style={{ fontSize: '11px', padding: '3px 11px', borderRadius: '2rem', cursor: 'default', ...categoryStyles[s.category] }}>
                {s.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}