import { useState } from 'react'

const projects = [
  {
    cat: 'Fintech · 2025', title: 'Valora', stack: 'React · Python',
    desc: 'AI-powered financial chatbot delivering economic insights on demand. Includes dynamic charts of stock and revenue data across industries, filtered via dropdown. Contributed frontend.',
    href: 'https://github.com/lyvnrin/Valora'
  },
  {
    cat: 'Full-stack · 2026', title: 'Oaxaca', stack: 'React · FastAPI · SQLite',
    desc: 'Restaurant management system with live order tracking; kitchen, manager, waiter dashboards; and COGS analytics across a 5-sprint Scrum cycle.',
    href: 'https://github.com/lyvnrin/oaxaca'
  },
  {
    cat: 'Algorithms · 2026', title: 'Sort It Out.', stack: 'React · JavaScript',
    desc: 'Interactive visualiser for Bubble, Merge, Quicksort & Insertion Sort - animated bar chart, speed control, and a tabbed revision sheet.',
    href: 'https://github.com/lyvnrin/sorting-visualiser'
  },
  {
    cat: 'Data · 2026', title: 'Lav-oogle', stack: 'Python · NumPy',
    desc: 'Mini search engine built on PageRank with graph-based link analysis implemented by NumPy matrix operations. Inspired by recent algorithms coursework. In Progress',
    href: 'https://lav-oogle.vercel.app/'
  },
  {
    cat: 'Data · 2025', title: 'Shark Attack', stack: 'Python · Recharts · Leaflet',
    desc: 'Statistical analysis of the Global Shark Attack File debunking the depth-danger myth. Python exports JSON to a React dashboard.',
    href: null
  },
]

const VISIBLE = 3

export default function Projects() {
  const [start, setStart] = useState(0)

  const prev = () => setStart(s => Math.max(0, s - 1))
  const next = () => setStart(s => Math.min(projects.length - VISIBLE, s + 1))

  const visible = projects.slice(start, start + VISIBLE)

  const ArrowBtn = ({ onClick, disabled, children }) => (
    <button
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={e => { if (!disabled) e.target.style.color = 'var(--accent)' }}
      onMouseLeave={e => e.target.style.color = disabled ? '#ddd' : '#aaa'}
      style={{
        background: 'none', border: 'none', cursor: disabled ? 'default' : 'pointer',
        fontSize: '1.1rem', color: disabled ? '#ddd' : '#aaa',
        transition: 'color .2s', padding: '0 4px', lineHeight: 1
      }}>
      {children}
    </button>
  )

  return (
    <section id="projects" style={{ padding: '2.5rem', borderTop: '0.5px solid #e0ddd8' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
        <div className="section-rule">
          <p style={{ fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 'bolder', whiteSpace: 'nowrap' }}>§ Projects</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '10px', color: '#bbb', letterSpacing: '0.05em' }}>
            {start + 1}–{Math.min(start + VISIBLE, projects.length)} / {projects.length}
          </span>
          <ArrowBtn onClick={prev} disabled={start === 0}>←</ArrowBtn>
          <ArrowBtn onClick={next} disabled={start + VISIBLE >= projects.length}>→</ArrowBtn>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0,1fr))', gap: '1rem', transition: 'all .3s' }}>
        {visible.map(p => {
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