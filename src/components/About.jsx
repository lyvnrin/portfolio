const skills = [
  { name: 'Python'},
  { name: 'React'},
  { name: 'Git'},
  { name: 'FastAPI'},
  { name: 'Java'},
  { name: 'JavaScript'},
  { name: 'HTML/CSS' },
  { name: 'Figma'},
  { name: 'MS Excel'},
]

export default function About() {
  return (
    <section id="about" style={{ padding: '2.5rem', borderTop: '0.5px solid #e0ddd8' }}>
      <p style={{ fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '1.25rem', fontWeight:'bolder' }}>About</p>
      <div
        className="card-hover"
        style={{ border: '0.5px solid #e0ddd8', borderRadius: '4px', padding: '1.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}
      >
        <p style={{ fontSize: '13px', lineHeight: 1.85, color: '#666' }}>
          Undergraduate CS student at Royal Holloway, University London. I build full-stack systems, analyse data, and find patterns in chaotic things. Currently looking for Summer 2026 internships in fintech and data.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', alignContent: 'flex-start' }}>
          {skills.map(s => (
            <span key={s.name} title={s.note} style={{ fontSize: '11px', padding: '3px 11px', border: '0.5px solid #ddd', borderRadius: '2rem', color: '#666', cursor: 'default' }}>
              {s.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}