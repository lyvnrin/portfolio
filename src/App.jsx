import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Cursor from './components/Cursor'

const page = { maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem' }

export default function App() {
  return (
    <>
      <style>{`* { cursor: none !important; }`}</style>
      <Cursor />
      <div style={page}>
        <Nav />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <footer style={{ padding: '1.25rem 0', borderTop: '0.5px solid #e0ddd8', fontSize: '11px', color: '#aaa', display: 'flex', justifyContent: 'space-between' }}>
          <span>built by lavanya · deployed on vercel · 2026</span>
          <span style={{ letterSpacing: '0.08em' }}>Vol. I · Issue 01</span>
        </footer>
      </div>
    </>
  )
}