import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dot = useRef(null)
  const trailer = useRef(null)
  const pos = useRef({ x: 0, y: 0 })
  const trail = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const move = e => { pos.current = { x: e.clientX, y: e.clientY } }
    window.addEventListener('mousemove', move)

    let raf
    function animate() {
      trail.current.x += (pos.current.x - trail.current.x) * 0.12
      trail.current.y += (pos.current.y - trail.current.y) * 0.12

      if (dot.current) {
        dot.current.style.transform = `translate(${pos.current.x - 4}px, ${pos.current.y - 4}px)`
      }
      if (trailer.current) {
        trailer.current.style.transform = `translate(${trail.current.x - 16}px, ${trail.current.y - 16}px)`
      }
      raf = requestAnimationFrame(animate)
    }
    animate()

    return () => { window.removeEventListener('mousemove', move); cancelAnimationFrame(raf) }
  }, [])

  return (
    <>
      <div ref={dot} style={{
        position: 'fixed', top: 0, left: 0, width: 8, height: 8,
        borderRadius: '50%', background: '#1a1a1a',
        pointerEvents: 'none', zIndex: 9999, transition: 'opacity .2s'
      }} />
      <div ref={trailer} style={{
        position: 'fixed', top: 0, left: 0, width: 32, height: 32,
        borderRadius: '50%', border: '0.5px solid #aaa',
        pointerEvents: 'none', zIndex: 9998
      }} />
    </>
  )
}