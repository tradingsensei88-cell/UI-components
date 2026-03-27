import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Ballpit from '../components/common/Ballpit'
import ComponentCard from '../components/common/ComponentCard'
import { getAllComponents } from '../components/showcase/registry'
import './HomePage.css'

const CATEGORY_ICONS = {
  toggles: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="5" width="22" height="14" rx="7" ry="7"/><circle cx="16" cy="12" r="3"/>
    </svg>
  ),
  sliders: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>
  ),
  progress: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>
  ),
  buttons: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="8" width="18" height="8" rx="3"/><line x1="9" y1="12" x2="15" y2="12"/></svg>
  ),
  cards: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
  ),
  inputs: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg>
  ),
  dropdowns: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 9l6 6 6-6"/></svg>
  ),
  modals: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21"/></svg>
  ),
  tabs: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 3h18v18H3zM3 9h18M9 21V9"/></svg>
  ),
  navigation: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>
  ),
  clocks: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
  ),
  loaders: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
  ),
}

export default function HomePage({ categories, search }) {
  const allComponents = getAllComponents()
  
  const filteredCategories = search 
    ? categories.filter(c => c.name.toLowerCase().includes(search.toLowerCase()))
    : categories

  const filteredComponents = search
    ? allComponents.filter(c => c.name.toLowerCase().includes(search.toLowerCase()))
    : []

  const isSearching = search && search.length > 0

  return (
    <div className="home-page">
      {!isSearching && (
        <section className="hero" style={{ position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.35 }}>
            <Ballpit
              count={100}
              gravity={0.01}
              friction={0.9975}
              wallBounce={0.95}
              followCursor={true}
              colors={[0x0b1a12, 0xb4ff00, 0x07110c]}
            />
          </div>
          <motion.div className="hero-content"
            style={{ position: 'relative', zIndex: 1 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <motion.div className="hero-badge"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}>
              <span className="badge-dot" />
              260+ INTERACTIVE VARIANTS
            </motion.div>
            <h1 className="hero-title">
              <span className="hero-line">NEON</span>
              <span className="hero-line accent">FORGE</span>
              <span className="hero-line dim">UI</span>
            </h1>
            <p className="hero-desc">
              A futuristic UI component library with cyberpunk aesthetics.
              Every component is fully interactive with copy-paste AI prompts.
            </p>
            <div className="hero-actions">
              <Link to="/category/toggles" className="hero-btn primary">
                <span>Explore Components</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hero-btn ghost">
                <span>View Source</span>
              </a>
            </div>
            <div className="hero-stats">
              {[
                { num: '12', label: 'Categories' },
                { num: '260+', label: 'Variants' },
                { num: '100%', label: 'Interactive' },
              ].map((s, i) => (
                <motion.div key={i} className="stat-block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.15, duration: 0.5 }}>
                  <span className="stat-num">{s.num}</span>
                  <span className="stat-label">{s.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <div className="hero-glow" />
        </section>
      )}

      {isSearching && (
        <section className="search-results-section" style={{ padding: '80px 40px 40px' }}>
          <div className="section-header">
            <h2 className="section-title">Search Results</h2>
            <p className="section-desc">Found {filteredComponents.length} components matching "{search}"</p>
          </div>
          
          {filteredComponents.length > 0 ? (
            <div className="variants-grid" style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '24px',
              marginTop: '40px'
            }}>
              {filteredComponents.map((comp, i) => (
                <ComponentCard 
                  key={`${comp.categoryId}-${comp.variant}`} 
                  name={comp.name} 
                  variant={comp.variant}
                  promptMeta={comp.promptMeta} 
                  index={i}
                >
                  {comp.render()}
                </ComponentCard>
              ))}
            </div>
          ) : (
            <div className="no-results" style={{ textAlign: 'center', padding: '100px 0', color: 'var(--text-muted)' }}>
              <h3>No components found</h3>
              <p>Try searching for something else like "Neon", "Glass", or "Digital"</p>
            </div>
          )}
        </section>
      )}

      {(!isSearching || filteredCategories.length > 0) && (
        <section className="categories-section">
          <div className="section-header">
            <h2 className="section-title">{isSearching ? 'Matching Categories' : 'Component Categories'}</h2>
            <p className="section-desc">Explore every category with unique design variants</p>
          </div>
          <div className="categories-grid">
            {filteredCategories.map((cat, i) => (
              <motion.div key={cat.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.04, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
                <Link to={`/category/${cat.id}`} className="cat-card">
                  <div className="cat-card-shine" />
                  <div className="cat-icon-wrap">
                    {CATEGORY_ICONS[cat.id] || <span>◇</span>}
                  </div>
                  <div className="cat-info">
                    <h3 className="cat-name">{cat.name}</h3>
                    <span className="cat-count">{cat.count} variants</span>
                  </div>
                  <svg className="cat-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
