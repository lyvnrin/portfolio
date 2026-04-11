import { useEffect, useRef, useState } from 'react'

const phrases = [
  'computer science student.',
  'full-stack developer.',
  'data analyst interest.',
  'pattern finder.',
  'chaos enjoyer.',
  'scrum master (retired).',
]

export default function Hero() {
  const canvasRef = useRef(null)
  const [displayed, setDisplayed] = useState('')

  useEffect(() => {
    let pi = 0, ci = 0, del = false
    let timeout

    function tick() {
      const w = phrases[pi]
      if (!del) {
        ci++
        setDisplayed(w.slice(0, ci))
        if (ci === w.length) { del = true; timeout = setTimeout(tick, 1800); return }
      } else {
        ci--
        setDisplayed(w.slice(0, ci))
        if (ci === 0) { del = false; pi = (pi + 1) % phrases.length }
      }
      timeout = setTimeout(tick, del ? 38 : 75)
    }
    tick()
    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    const cv = canvasRef.current
    const cx = cv.getContext('2d')
    let raf

    const resize = () => { cv.width = cv.offsetWidth; cv.height = cv.offsetHeight }
    resize()
    window.addEventListener('resize', resize)

    const pts = Array.from({ length: 50 }, () => ({
      x: Math.random() * cv.width, y: Math.random() * cv.height,
      vx: (Math.random() - .5) * .2, vy: (Math.random() - .5) * .2,
      r: Math.random() * 1.1 + .3
    }))

    function draw() {
      cx.clearRect(0, 0, cv.width, cv.height)
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 90) {
            cx.beginPath(); cx.moveTo(pts[i].x, pts[i].y); cx.lineTo(pts[j].x, pts[j].y)
            cx.strokeStyle = `rgba(80,80,80,${0.1 * (1 - d / 90)})`
            cx.lineWidth = .4; cx.stroke()
          }
        }
      }
      pts.forEach(p => {
        cx.beginPath(); cx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        cx.fillStyle = 'rgba(80,80,80,0.4)'; cx.fill()
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > cv.width) p.vx *= -1
        if (p.y < 0 || p.y > cv.height) p.vy *= -1
      })
      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [])

  return (
    <section style={{ position: 'relative', minHeight: '95vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '5rem 2.5rem 4rem', overflow: 'hidden' }}>
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.25, pointerEvents: 'none' }} />
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '600px' }}>
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2.4rem,7vw,4.5rem)', fontWeight: 400,
            letterSpacing: '-0.02em', lineHeight: 1, marginBottom: '1rem',
            display: 'inline-block', position: 'relative', cursor: 'default'
          }}>
          Lavanya Kamble.
        </h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.9rem', flexWrap: 'wrap' }}>
          <span style={{ border: '0.5px solid #ccc', padding: '2px 9px', borderRadius: '2rem', fontSize: '11px', color: '#888' }}>she / her</span>
          <span style={{ width: 3, height: 3, borderRadius: '50%', background: '#ccc' }} />
          <span style={{ fontStyle: 'italic', fontSize: '12px', color: '#888' }}>n.</span>
        </div>
        <div style={{ width: '2.5rem', height: '0.5px', background: '#ccc', marginBottom: '0.9rem' }} />
        <p style={{ fontSize: '13px', color: '#888', minHeight: '1.4rem', marginBottom: '1.2rem' }}>
          {displayed}
          <span style={{ display: 'inline-block', width: 1, height: '0.85em', background: '#888', marginLeft: 2, verticalAlign: 'middle', animation: 'blink 1s step-end infinite' }} />
          <style>{`@keyframes blink { 50% { opacity: 0 } }`}</style>
        </p>
        <p style={{ fontFamily: "'Palatino Linotype', Palatino, serif", fontStyle: 'italic', fontSize: '11.5px', color: '#aaa', lineHeight: 1.75, maxWidth: '480px' }}>
          <em style={{ fontStyle: 'normal', color: '#888' }}>Etymology:</em> origin uncertain; documented at the intersection of systems and data. Associated with structured thinking, clear communication, and a tendency to lead when the situation calls for it. Known to deliver under pressure. Chiefly collaborative.
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '1.5rem' }}>
          <div style={{ height: '0.5px', width: '2rem', background: '#ddd' }} />
          <span style={{ fontSize: '10px', letterSpacing: '0.12em', color: '#bbb', textTransform: 'uppercase' }}>
            London, England · Vol. I
          </span>
          <div style={{ height: '0.5px', width: '2rem', background: '#ddd' }} />
        </div>
      </div>
    </section>
  )
}
