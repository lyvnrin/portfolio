import { useEffect, useRef } from 'react'

export default function Cursor() {
  const hRef = useRef(null)
  const vRef = useRef(null)
  const pos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const move = e => { pos.current = { x: e.clientX, y: e.clientY } }
    window.addEventListener('mousemove', move)

    let raf
    function animate() {
      if (hRef.current) hRef.current.style.transform = `translate(${pos.current.x - 5}px, ${pos.current.y - 0.5}px)`
      if (vRef.current) vRef.current.style.transform = `translate(${pos.current.x - 0.5}px, ${pos.current.y - 5}px)`
      raf = requestAnimationFrame(animate)
    }
    animate()

    return () => { window.removeEventListener('mousemove', move); cancelAnimationFrame(raf) }
  }, [])

  const line = { position: 'fixed', top: 0, left: 0, background: '#1a1a1a', pointerEvents: 'none', zIndex: 9999 }

  return (
    <>
      <div ref={hRef} style={{ ...line, width: 10, height: 1 }} />
      <div ref={vRef} style={{ ...line, width: 1, height: 10 }} />
    </>
  )
}