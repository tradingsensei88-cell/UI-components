import { useState, useCallback } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/layout/Navbar'
import Sidebar from './components/layout/Sidebar'
import HomePage from './pages/HomePage'
import CategoryPage from './pages/CategoryPage'
import './App.css'

const CATEGORIES = [
  { id: 'toggles', name: 'Toggles', count: 30 },
  { id: 'sliders', name: 'Sliders', count: 20 },
  { id: 'progress', name: 'Progress Bars', count: 20 },
  { id: 'buttons', name: 'Buttons', count: 30 },
  { id: 'cards', name: 'Cards', count: 32 },
  { id: 'inputs', name: 'Inputs', count: 20 },
  { id: 'dropdowns', name: 'Dropdowns', count: 20 },
  { id: 'modals', name: 'Modals', count: 20 },
  { id: 'tabs', name: 'Tabs', count: 20 },
  { id: 'navigation', name: 'Navigation', count: 25 },
  { id: 'clocks', name: 'Clocks', count: 30 },
  { id: 'loaders', name: 'Loaders', count: 20 },
]

export { CATEGORIES }

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [search, setSearch] = useState('')

  const toggleSidebar = useCallback(() => setSidebarOpen(p => !p), [])

  return (
    <div className="app-wrapper">
      <div className="bg-grid" />
      <div className="bg-radial" />
      <Navbar search={search} setSearch={setSearch} toggleSidebar={toggleSidebar} />
      <div className="app-layout">
        <Sidebar open={sidebarOpen} categories={CATEGORIES} />
        <main className={`main-content ${!sidebarOpen ? 'sidebar-closed' : ''}`}>
          <Routes>
            <Route path="/" element={<HomePage categories={CATEGORIES} search={search} />} />
            <Route path="/category/:categoryId" element={<CategoryPage categories={CATEGORIES} search={search} />} />
          </Routes>
        </main>
      </div>
      <Toaster position="bottom-right" toastOptions={{ className: 'toast-custom', duration: 2000 }} />
    </div>
  )
}
