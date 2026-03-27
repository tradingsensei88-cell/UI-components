import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import './Navbar.css'

export default function Navbar({ search, setSearch, toggleSidebar }) {
  const [scrolled, setScrolled] = useState(false)
  const inputRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handler = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        inputRef.current?.focus()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  return (
    <motion.nav className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
      <div className="nav-left">
        <button className="menu-btn" onClick={toggleSidebar} aria-label="Toggle sidebar">
          <span /><span /><span />
        </button>
        <a href="/" className="nav-logo">
          <span className="logo-icon">◇</span>
          <span className="logo-text">NEON<span className="logo-accent">FORGE</span></span>
          <span className="logo-tag">UI</span>
        </a>
      </div>
      <div className="nav-center">
        <div className="search-box">
          <svg className="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <input ref={inputRef} type="text" placeholder="Search components..." value={search}
            onChange={e => setSearch(e.target.value)} className="search-input" />
          <kbd className="search-kbd">⌘K</kbd>
        </div>
      </div>
      <div className="nav-right">
        <span className="variant-count">
          <span className="variant-dot" />
          260+ variants
        </span>
        <a href="https://github.com" target="_blank" rel="noreferrer" className="nav-link" aria-label="GitHub">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
        </a>
      </div>
    </motion.nav>
  )
}
