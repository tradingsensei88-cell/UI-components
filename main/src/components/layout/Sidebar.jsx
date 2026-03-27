import { NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import './Sidebar.css'

export default function Sidebar({ open, categories }) {
  const location = useLocation()
  return (
    <AnimatePresence>
      {open && (
        <motion.aside className="sidebar"
          initial={{ x: -260, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -260, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}>
          <div className="sidebar-header">
            <span className="sidebar-label">COMPONENTS</span>
            <span className="sidebar-count">{categories.length}</span>
          </div>
          <nav className="sidebar-nav" role="navigation" aria-label="Component categories">
            {categories.map((cat, i) => (
              <NavLink key={cat.id} to={`/category/${cat.id}`}
                className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
                <motion.div className="sidebar-link-inner"
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.03, duration: 0.3 }}>
                  <span className="sidebar-name">{cat.name}</span>
                  <span className="sidebar-badge">{cat.count}</span>
                </motion.div>
              </NavLink>
            ))}
          </nav>
          <div className="sidebar-footer">
            <div className="sidebar-footer-inner">
              <span className="footer-version">v2.0</span>
              <span className="sidebar-footer-text">NeonForge UI</span>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  )
}
