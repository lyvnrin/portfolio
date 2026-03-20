import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'
import Cursor from './components/Cursor'

const page = { maxWidth: '900px', margin: '0 auto', padding: '0 3rem' }

export default function App() {
  return (
    <>
      <style>{`* { cursor: none !important; }`}</style>
      <Cursor />
      <div style={page}>
        <Nav />
        <Hero />
        <About />
        <Work />
        <Contact />
        <footer style={{ padding: '1.25rem 0', borderTop: '0.5px solid #e0ddd8', fontSize: '11px', color: '#aaa' }}>
          built by lavanya · 2026
        </footer>
      </div>
    </>
  )
}