// ═══════════════════════════════════════════════════════════
// NEONFORGE UI — Component Registry (Part 1: Toggles-Progress)
// Interactive component factories for all 260 variants
// ═══════════════════════════════════════════════════════════
import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './showcase.css'

// ─── TOGGLE FACTORY ───
function Toggle({ variant, size = 'md', label }) {
  const [on, setOn] = useState(false)
  const isOrb = variant === 21
  const isGlass = variant === 22
  
  // Custom sizes for orb toggle
  if (isOrb) size = 'xl' // Orb toggles need specific dimensions

  if (isGlass) {
    return (
      <div className={`glass-theme-toggle ${on ? 'light' : 'dark'}`} 
        style={{ justifyContent: on ? 'flex-start' : 'flex-end' }}
        onClick={() => setOn(!on)} role="switch" aria-checked={on} tabIndex={0} 
        onKeyDown={e => (e.key === ' ' || e.key === 'Enter') && setOn(!on)}>
        <div className="glass-track">
          <span className="glass-text text-dark">Dark</span>
          <span className="glass-text text-light">Light</span>
        </div>
        <motion.div className="glass-thumb-container" layout
          style={{
            marginLeft: on ? -15 : 0,
            marginRight: on ? 0 : -15
          }}
          transition={{ type: 'spring', stiffness: 500, damping: 35 }}>
          <div className="glass-lens"></div>
          <div className="glass-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              {on 
                ? <><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></>
                : <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              }
            </svg>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <div className={`toggle-base toggle-${size} toggle-v${variant} ${on ? 'on' : ''}`}
        onClick={() => setOn(!on)} role="switch" aria-checked={on} tabIndex={0}
        onKeyDown={e => (e.key === ' ' || e.key === 'Enter') && setOn(!on)}>
        <div className="toggle-track">
          {isOrb && (
            <>
              <svg className="orb-icon orb-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
              <svg className="orb-icon orb-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            </>
          )}
        </div>
        <motion.div className="toggle-thumb"
          layout transition={{ type: 'spring', stiffness: 500, damping: 30 }}>
          {isOrb && (
            <svg className="orb-thumb-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              {on 
                ? <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                : <><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></>
              }
            </svg>
          )}
        </motion.div>
      </div>
      {label && <span style={{ fontSize: 13, color: on ? '#B4FF00' : '#4A6B4A' }}>{label}</span>}
    </div>
  )
}

// ─── SLIDER FACTORY ───
function Slider({ variant, label = 'Value', min = 0, max = 100, step = 1 }) {
  const [val, setVal] = useState(50)
  const [valHigh, setValHigh] = useState(80) // For dual-range v25

  if (variant === 21) {
    return (
      <div className="slider-wrap slider-v21-wrap">
        <input type="range" className="nf-slider slider-v21" 
          min={min} max={max} value={val} onChange={e => setVal(Number(e.target.value))} />
        <div className="slider-v21-labels">
          <span className={val < 33 ? 'active' : ''}>Minimum</span>
          <span className={val >= 33 && val < 66 ? 'active' : ''}>Recommended</span>
          <span className={val >= 66 ? 'active' : ''}>Great</span>
        </div>
      </div>
    )
  }

  if (variant === 22) {
    const adjust = (d) => setVal(v => Math.max(min, Math.min(max, v + d)))
    return (
      <div className="slider-wrap slider-v22-wrap">
        <div className="stepped-controls">
          <button onClick={() => adjust(-10)}>◀</button>
          <div className="stepped-track">
            {[...Array(5)].map((_, i) => (
              <div key={i} className={`step-dot ${val >= (i + 1) * 20 ? 'filled' : ''}`} />
            ))}
            <input type="range" className="nf-slider slider-v22" 
              min={min} max={max} step={20} value={val} onChange={e => setVal(Number(e.target.value))} />
          </div>
          <button onClick={() => adjust(10)}>▶</button>
        </div>
      </div>
    )
  }

  if (variant === 25) {
    return (
      <div className="slider-wrap slider-v25-wrap">
        <div className="dual-range-container">
          <div className="dual-tooltip" style={{ left: `${val}%` }}>{val}</div>
          <div className="dual-tooltip" style={{ left: `${valHigh}%` }}>{valHigh}</div>
          <div className="dual-track-bg" />
          <div className="dual-track-fill" style={{ left: `${val}%`, width: `${valHigh - val}%` }} />
          <input type="range" className="nf-slider dual-range low" 
            min={min} max={max} value={val} onChange={e => setVal(Math.min(valHigh - 5, Number(e.target.value)))} />
          <input type="range" className="nf-slider dual-range high" 
            min={min} max={max} value={valHigh} onChange={e => setValHigh(Math.max(val + 5, Number(e.target.value)))} />
        </div>
      </div>
    )
  }

  if (variant === 26) {
    return (
      <div className="slider-wrap slider-v26-wrap">
        <div className="waveform-container">
          {[...Array(40)].map((_, i) => {
            const height = 10 + Math.sin(i * 0.5) * 15 + Math.random() * 5
            const isActive = (i / 40) * 100 <= val
            return (
              <div key={i} className={`waveform-bar ${isActive ? 'active' : ''}`} 
                style={{ height: `${height}px` }} />
            )
          })}
          <input type="range" className="nf-slider slider-v26" 
            min={min} max={max} value={val} onChange={e => setVal(Number(e.target.value))} />
        </div>
      </div>
    )
  }

  return (
    <div className="slider-wrap">
      <div className="slider-label">
        <span className="slider-label-text">{label}</span>
        <span className="slider-value">{val}</span>
      </div>
      <input type="range" className={`nf-slider slider-v${variant}`}
        min={min} max={max} step={step} value={val}
        onChange={e => setVal(Number(e.target.value))} />
    </div>
  )
}

// ─── BUTTON FACTORY ───
function Button({ variant, text = 'Click Me', icon }) {
  const [clicked, setClicked] = useState(false)
  
  // Custom states for Typewriter (v29)
  const [typeText, setTypeText] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const words = ['NEON FORGE', 'CYBERPUNK', 'INTERFACE', 'NEXT GEN', 'MODERN UI']

  useEffect(() => {
    if (variant === 29) {
      const currentWord = words[wordIdx]
      const speed = isDeleting ? 60 : 100
      const delay = !isDeleting && typeText === currentWord ? 1200 : speed

      const timeout = setTimeout(() => {
        if (!isDeleting && typeText === currentWord) {
          setIsDeleting(true)
        } else if (isDeleting && typeText === '') {
          setIsDeleting(false)
          setWordIdx((prev) => (prev + 1) % words.length)
        } else {
          setTypeText(prev => isDeleting ? prev.slice(0, -1) : currentWord.slice(0, prev.length + 1))
        }
      }, delay)
      return () => clearTimeout(timeout)
    }
  }, [typeText, isDeleting, wordIdx, variant])

  // Custom states for 3D Loader (v30)
  const [loadStatus, setLoadStatus] = useState('idle') // idle, loading, done
  const handleLoadClick = () => {
    if (loadStatus !== 'idle') return
    setLoadStatus('loading')
    setTimeout(() => {
      setLoadStatus('done')
      setTimeout(() => setLoadStatus('idle'), 2000)
    }, 2200)
  }

  if (variant === 27) {
    return (
      <button className={`nf-btn btn-v${variant} liquid-pill`}>
        <span className="btn-label">{text}</span>
      </button>
    )
  }

  if (variant === 28) {
    return (
      <button className={`nf-btn btn-v${variant} luxury-gold`}>
        {text}
      </button>
    )
  }

  if (variant === 29) {
    return (
      <button className={`nf-btn btn-v${variant} typewriter-btn`}>
        {typeText}<span className="cursor">|</span>
      </button>
    )
  }

  if (variant === 30) {
    return (
      <div className="btn-3d-wrap">
        <button 
          className={`nf-btn btn-v${variant} press-3d ${loadStatus}`}
          onClick={handleLoadClick}
        >
          <span className="btn-3d-content">
            {loadStatus === 'idle' && text}
            {loadStatus === 'loading' && (
              <>
                <div className="spinner-mini" />
                <span className="loading-text">Saving...</span>
              </>
            )}
            {loadStatus === 'done' && "Saved ✓"}
          </span>
          {loadStatus === 'loading' && <div className="btn-progress-bar" />}
        </button>
      </div>
    )
  }

  return (
    <motion.button className={`nf-btn btn-v${variant}`}
      whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
      onClick={() => { setClicked(true); setTimeout(() => setClicked(false), 300) }}>
      {icon && <span>{icon}</span>}
      {text}
    </motion.button>
  )
}

// ─── PROGRESS BAR FACTORY (Linear) ───
function ProgressBar({ variant, value: initVal = 65, label = 'Progress', animated = true }) {
  const [value, setValue] = useState(0)
  useEffect(() => { const t = setTimeout(() => setValue(initVal), 200); return () => clearTimeout(t) }, [initVal])
  const handleClick = () => setValue(Math.min(100, value + 10 > 100 ? 0 : value + 10))
  return (
    <div className={`progress-wrap prog-v${variant}`} onClick={handleClick} style={{ cursor: 'pointer' }}>
      <div className="progress-label">
        <span>{label}</span>
        <span className="progress-pct">{value}%</span>
      </div>
      <div className="progress-bar-track">
        <div className="progress-bar-fill" style={{ width: `${value}%` }} />
      </div>
    </div>
  )
}

// ─── CIRCULAR PROGRESS ───
function CircularProgress({ variant, value: initVal = 70, size = 72, strokeWidth = 4 }) {
  const [value, setValue] = useState(0)
  useEffect(() => { const t = setTimeout(() => setValue(initVal), 300); return () => clearTimeout(t) }, [initVal])
  const r = (size - strokeWidth) / 2
  const circ = 2 * Math.PI * r
  const offset = circ - (value / 100) * circ
  const handleClick = () => setValue(Math.min(100, value + 10 > 100 ? 0 : value + 10))
  return (
    <div className={`circular-progress prog-v${variant}`} onClick={handleClick} style={{ cursor: 'pointer' }}>
      <svg width={size} height={size}>
        <defs><linearGradient id="grad1" x1="0%" y1="0%" x2="100%"><stop offset="0%" stopColor="#8BC700"/><stop offset="100%" stopColor="#B4FF00"/></linearGradient></defs>
        <circle className="track" cx={size/2} cy={size/2} r={r} strokeWidth={strokeWidth} />
        <circle className="fill" cx={size/2} cy={size/2} r={r} strokeWidth={strokeWidth}
          stroke="var(--acid-lime)" strokeLinecap="round"
          strokeDasharray={circ} strokeDashoffset={offset} />
      </svg>
      <span className="circular-value">{value}%</span>
    </div>
  )
}

// ─── INPUT FACTORY ───
function Input({ variant, placeholder = 'Type something...', type = 'text' }) {
  const [val, setVal] = useState('')
  return (
    <div className="nf-input-wrap">
      <input type={type} className={`nf-input input-v${variant}`}
        placeholder={placeholder} value={val} onChange={e => setVal(e.target.value)} />
    </div>
  )
}
// ─── PARTICLE WEB CANVAS ───
function ParticleWeb() {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d', { alpha: true })
    let animationFrameId
    let particles = []

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width; canvas.height = rect.height
    }
    window.addEventListener('resize', resize); resize()

    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * canvas.width, y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5, vy: (Math.random() - 0.5) * 0.5
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p, i) => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
        
        ctx.beginPath(); ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(0, 255, 135, 0.4)'; ctx.fill()

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p.x - p2.x; const dy = p.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 80) {
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(0, 255, 135, ${0.1 * (1 - dist / 80)})`
            ctx.stroke()
          }
        }
      })
      animationFrameId = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(animationFrameId); window.removeEventListener('resize', resize) }
  }, [])
  return <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }} />
}

// ─── CARD FACTORY ───
function Card({ variant, title = 'Feature', desc = 'Next-gen component with premium interactions.' }) {
  if (variant === 19) {
    return (
      <motion.div className={`nf-card card-v${variant} gradient-card`}
        whileHover={{ y: -8, scale: 1.01 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
        <div className="grad-card-header">
          <div className="grad-card-icon">👣</div>
          <span className="grad-card-label">Backpacking</span>
          <div className="grad-card-dropdown">Budget Travel ▾</div>
          <div className="grad-card-action">↗</div>
        </div>
        
        <div className="grad-card-main">
          <div className="grad-card-stat">
            29% <span className="stat-arrow">↗</span>
          </div>
          <div className="grad-card-desc">
            <strong>backpackers visit Southeast Asia</strong>
            <p>every year to explore its rich culture and beautiful landscapes.</p>
          </div>
        </div>

        <div className="grad-card-media">
          <div className="media-thumb thumb-1" />
          <div className="media-thumb thumb-2" />
        </div>
        
        <div className="grad-card-footer">
          <div className="segmented-progress">
            {[...Array(6)].map((_, i) => (
              <div key={i} className={`segment ${i === 0 ? 'active' : ''}`} />
            ))}
          </div>
        </div>
      </motion.div>
    )
  }

  if (variant === 20) {
    return (
      <motion.div className={`nf-card card-v${variant} dashboard-card`}
        whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
        <div className="dash-header">
          <div className="dash-title-wrap">
            <span className="dash-title">Statistics</span>
            <div className="dash-main-val">
              31,2K <span className="dash-trend">↗ 13,2%</span>
            </div>
            <span className="dash-subtext">Average activity</span>
          </div>
          <div className="dash-selector">
            <span>Day</span>
            <span className="active">Week</span>
            <span>Month</span>
          </div>
        </div>

        <div className="dash-chart-container">
          <svg viewBox="0 0 400 120" className="dash-chart-svg">
            <defs>
              <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(180, 255, 0, 0.2)" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
            <path d="M0,80 Q50,40 100,70 T200,50 T300,80 T400,60 L400,120 L0,120 Z" fill="url(#chartGrad)" />
            <path d="M0,80 Q50,40 100,70 T200,50 T300,80 T400,60" fill="none" stroke="var(--acid-lime)" strokeWidth="3" />
            <line x1="0" y1="55" x2="400" y2="55" stroke="rgba(255,255,255,0.1)" strokeDasharray="4 4" />
            <text x="370" y="50" fill="rgba(180,255,0,0.6)" fontSize="10">AVG</text>
          </svg>
        </div>

        <div className="dash-grid">
          {[
            { label: 'Engagements', val: '5,2K', trend: '+23,4%', icon: '🔥', color: '#ff4444' },
            { label: 'Impressions', val: '2.8K', trend: '-13,2%', icon: '👁️', color: '#00ff66' },
            { label: 'React', val: '1,1K', trend: '+1,2%', icon: '👍', color: '#3399ff' },
            { label: 'Click-through', val: '4,9K', trend: '+4,5%', icon: '🖱️', color: '#ff9900' }
          ].map((m, i) => (
            <div key={i} className="dash-metric-box">
              <div className="metric-top">
                <span className="metric-label">{m.label}</span>
                <div className="metric-icon" style={{ background: m.color + '22', color: m.color }}>{m.icon}</div>
              </div>
              <div className="metric-val">{m.val}</div>
              <div className={`metric-trend ${m.trend.startsWith('+') ? 'up' : 'down'}`}>{m.trend} vs prev week</div>
            </div>
          ))}
        </div>
      </motion.div>
    )
  }

  if (variant === 21) {
    return (
      <motion.div className={`nf-card card-v${variant} cyber-pulsar-card`}
        whileHover={{ scale: 1.02 }} transition={{ duration: 0.4 }}>
        <div className="ani-bg-bokeh" />
        <div className="card-shine-effect" />
        <div className="card-content-premium">
          <div className="premium-badge-box">PREMIUM</div>
          <h4 className="premium-title">{title}</h4>
          <p className="premium-desc">Next-gen component with premium interactions.</p>
          <div className="live-ani-footer">
            <span className="live-text">LIVE ANIMATION</span>
            <div className="live-underline" />
          </div>
        </div>
      </motion.div>
    )
  }

  if (variant === 22) {
    // Nova Core
    return (
      <motion.div className={`nf-card card-v${variant} nova-core-card`}
        whileHover={{ scale: 1.02 }} transition={{ duration: 0.4 }}>
        <div className="nova-bg-pulse" />
        <div className="nova-core-glow" />
        <div className="card-content-glass">
          <div className="premium-badge-box">PREMIUM</div>
          <h4 className="premium-title">{title}</h4>
          <p className="premium-desc">High-energy core with pulsing radial light fields.</p>
        </div>
      </motion.div>
    )
  }

  if (variant === 23) {
    // Prism Mirror
    return (
      <motion.div className={`nf-card card-v${variant} prism-mirror-card`}
        whileHover={{ scale: 1.02 }} transition={{ duration: 0.4 }}>
        <div className="prism-facets" />
        <div className="card-content-glass">
          <div className="premium-badge-box">PREMIUM</div>
          <h4 className="premium-title">{title}</h4>
          <p className="premium-desc">Refractive glass facets with shifting color prisms.</p>
        </div>
      </motion.div>
    )
  }

  if (variant === 24) {
    // Matrix Flow
    return (
      <motion.div className={`nf-card card-v${variant} matrix-flow-card`}
        whileHover={{ scale: 1.02 }} transition={{ duration: 0.4 }}>
        <div className="matrix-stream-container">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="matrix-column" style={{ animationDelay: `${i * 0.2}s` }} />
          ))}
        </div>
        <div className="card-content-glass">
          <div className="premium-badge-box">PREMIUM</div>
          <h4 className="premium-title">{title}</h4>
          <p className="premium-desc">Digital data streams in a continuous downward flow.</p>
        </div>
      </motion.div>
    )
  }  if (variant === 25) {
    // Caliber Loan
    return (
      <motion.div className={`nf-card card-v${variant} caliber-loan-card`}
        whileHover={{ y: -5 }} transition={{ duration: 0.4 }}>
        <div className="stardust-overlay" />
        <div className="triangles-container">
          <div className="tri t1" />
          <div className="tri t2" />
          <div className="tri t3" />
        </div>
        <div className="card-header-v25">
          <div className="close-btn-glass">✕</div>
          <div className="best-rate-badge">Best rate</div>
        </div>
        <div className="card-body-v25">
          <h4 className="loan-title">Caliber Home Loans</h4>
          <div className="loan-data-rows">
            <div className="loan-row">
              <span className="label">Loan term</span>
              <span className="value">30-Yr Fixed</span>
            </div>
            <div className="loan-row">
              <span className="label">Loan amount</span>
              <span className="value">$1,200,000.00</span>
            </div>
            <div className="loan-row highlight">
              <span className="label">Interest rate</span>
              <span className="value">5.875% <span className="apr">/ 5.903% APR</span></span>
            </div>
            <div className="loan-row highlight">
              <span className="label">Lender Points/Credits</span>
              <span className="value">$5,224.00</span>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }


  if (variant === 26) {
    // Cash Out Refi
    return (
      <motion.div className={`nf-card card-v${variant} cash-out-refi-card`}
        whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
        <div className="aurora-glow-bottom" />
        <div className="card-content-refi">
          <div className="frosted-icon-badge">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="12" y1="18" x2="12" y2="12" />
              <path d="M9 15h6" />
            </svg>
            <div className="dollar-mini">$</div>
          </div>
          <h2 className="refi-heading uppercase">CASH OUT REFINANCE</h2>
          <p className="refi-desc">
            Unlock your home's equity with a new mortgage that provides cash for your financial goals or renovations.
          </p>
          <div className="refi-action">
            View details <span className="arrow">↗</span>
          </div>
        </div>
      </motion.div>
    )
  }

  if (variant === 27) {
    // Neon Brutalist
    return (
      <motion.div className={`nf-card card-v${variant} neon-brutalist-card`}
        whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
        <div className="brutalist-corner top-left" />
        <div className="brutalist-corner bottom-right" />
        <div className="neon-scanner" />
        <div className="brutalist-content">
          <div className="protocol-tag">PROTOCOL 0X9</div>
          <h2 className="brutalist-heading">
            YIELD <span className="neon-text">MAXIMIZER</span>
          </h2>
          <div className="brutalist-stats">
            <div className="stat-block">
              <span className="stat-label">APY</span>
              <span className="stat-value">14.2%</span>
            </div>
            <div className="stat-block">
              <span className="stat-label">TVL</span>
              <span className="stat-value">$2.4M</span>
            </div>
            <div className="stat-block">
              <span className="stat-label">RISK</span>
              <span className="stat-value neon-text">LOW</span>
            </div>
          </div>
          <button className="brutalist-cta">DEPOSIT NOW</button>
        </div>
      </motion.div>
    )
  }

  if (variant === 28) {
    // Private Wealth
    return (
      <motion.div className={`nf-card card-v${variant} private-wealth-card`}
        whileHover={{ y: -6 }} transition={{ duration: 0.5 }}>
        <div className="gold-blob blob-tr" />
        <div className="gold-blob blob-bl" />
        <div className="wealth-content">
          <div className="wealth-header-row">
            <div className="star-badge">✦</div>
            <div className="tier-label">RESERVE MULTI-FAMILY</div>
          </div>
          <h2 className="wealth-heading">Private Wealth <br/>Management</h2>
          <div className="gold-divider" />
          <p className="wealth-desc">
            Bespoke financial strategies and exclusive advisory for ultra-high-net-worth individuals and family offices.
          </p>
          <div className="wealth-link">
            Explore access <span className="arrow">→</span>
          </div>
        </div>
      </motion.div>
    )
  }

  if (variant === 29) {
    // Aurora Multi-Chain Vault
    const [prog, setProg] = useState(0)
    useEffect(() => { const t = setTimeout(() => setProg(72), 500); return () => clearTimeout(t) }, [])
    return (
      <motion.div className={`nf-card card-v${variant} aurora-vault-card`}
        whileHover={{ y: -5 }} transition={{ duration: 0.4 }}>
        <div className="aurora-orbs">
          <div className="orb orb-1" />
          <div className="orb orb-2" />
          <div className="orb orb-3" />
        </div>
        <div className="vault-content">
          <div className="vault-header">
            <div className="vault-icon-pulse">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <motion.div className="price-badge" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}>
              +$1,240.20
            </motion.div>
          </div>
          <h3 className="vault-title">Multi-Chain Vault</h3>
          <div className="vault-stats-row">
            <div className="v-stat">
              <span className="v-label">Total Staked</span>
              <span className="v-val">12.58 ETH</span>
            </div>
            <div className="v-stat">
              <span className="v-label">Net APY</span>
              <span className="v-val highlight">18.4%</span>
            </div>
          </div>
          <div className="vault-progress-wrap">
            <div className="v-prog-label">Capacity <span>{prog}%</span></div>
            <div className="v-prog-track">
              <div className="v-prog-fill" style={{ width: `${prog}%` }} />
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  if (variant === 30) {
    // Nifty 50 Ticker
    const tickerItems = ['RELIANCE 2,450.40 ▲ 1.2%', 'HDFC BANK 1,520.10 ▼ 0.4%', 'INFY 1,420.00 ▲ 0.8%', 'TCS 3,210.50 ▲ 1.1%']
    return (
      <motion.div className={`nf-card card-v${variant} nifty-ticker-card`}>
        <div className="ticker-strip">
          <div className="ticker-track">
            {[...tickerItems, ...tickerItems].map((item, i) => (
              <span key={i} className="ticker-item">{item}</span>
            ))}
          </div>
        </div>
        <div className="ticker-body">
          <div className="ticker-status">
            <div className="status-dot dot-1" />
            <div className="status-dot dot-2" />
            <div className="status-dot dot-3" />
            <span className="live-label">LIVE MARKET OPEN</span>
          </div>
          <h2 className="ticker-main-title">Nifty 50 <br/>Index Elite</h2>
          <div className="ticker-stats-footer">
            <div className="t-col">
              <span className="t-label">High</span>
              <span className="t-val">18,240</span>
            </div>
            <div className="t-col">
              <span className="t-label">Low</span>
              <span className="t-val">17,980</span>
            </div>
            <div className="t-col">
              <span className="t-label">Volume</span>
              <span className="t-val">2.4M</span>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  if (variant === 31) {
    // Carbon Credit Particle Web
    return (
      <motion.div className={`nf-card card-v${variant} particle-web-card`} whileHover="hover">
        <ParticleWeb />
        <div className="wave-bg">
          <svg viewBox="0 0 400 100" preserveAspectRatio="none">
            <path className="wave w1" d="M0,80 Q100,20 200,80 T400,80 V100 H0 Z" />
            <path className="wave w2" d="M0,80 Q100,50 200,80 T400,80 V100 H0 Z" />
          </svg>
        </div>
        <div className="particle-content">
          <div className="carbon-badge">CARBON NEUTRAL</div>
          <h2 className="particle-title">Net-Zero <br/>Impact Fund</h2>
          <p className="particle-desc">Tokenizing carbon credits with real-time ecological verification.</p>
          <motion.button className="particle-btn" whileHover={{ boxShadow: '0 0 20px rgba(0,255,135,0.4)' }}>
            Invest Now
          </motion.button>
        </div>
        <motion.div className="radial-hover-overlay" variants={{ hover: { opacity: 0.15 } }} />
      </motion.div>
    )
  }

  if (variant === 32) {
    // Luxury Structured Debt
    const [expand, setExpand] = useState(false)
    useEffect(() => { setExpand(true) }, [])
    return (
      <motion.div className={`nf-card card-v${variant} luxury-debt-card`}>
        <div className="marble-veins">
          <svg width="100%" height="100%" viewBox="0 0 400 500">
            <path d="M0,100 Q100,120 150,50 T300,150 T400,20" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
            <path d="M50,500 Q150,450 200,480 T350,400" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          </svg>
        </div>
        <div className="shimmer-sweep" />
        <div className="luxury-corner tr" /><div className="luxury-corner bl" />
        <div className="luxury-debt-content">
          <div className="rotating-badge-wrap">
            <div className="badge-rotator">
              <div className="inner-badge-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
            </div>
            <span className="tier-label">CORE SECURED</span>
          </div>
          <h2 className="luxury-title">Structured <br/>Private Debt</h2>
          <motion.div className="gold-divider-expand" initial={{ scaleX: 0 }} animate={{ scaleX: expand ? 1 : 0 }} transition={{ duration: 1, ease: 'circOut' }} />
          <p className="luxury-desc">Access institutional-grade credit facilities with optimized risk-adjusted yields.</p>
          <div className="luxury-action">Portfolio Access →</div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div className={`nf-card card-v${variant}`}
      whileHover={{ y: -4 }} transition={{ duration: 0.25 }}>
      <div className="card-body">
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
    </motion.div>
  )
}

// ─── NOTIFICATION TOGGLE FACTORY ───
function NotifToggle({ variant, label = 'Notifications' }) {
  const [on, setOn] = useState(false)
  const colors = [
    { bg: 'rgba(180,255,0,0.08)', active: 'rgba(180,255,0,0.2)', dot: '#B4FF00' },
    { bg: '#111', active: '#1a2a1e', dot: '#B4FF00' },
    { bg: 'rgba(180,255,0,0.05)', active: 'rgba(180,255,0,0.15)', dot: '#66ff66' },
    { bg: '#0d0d0d', active: '#0d1a12', dot: '#B4FF00' },
    { bg: 'transparent', active: 'rgba(180,255,0,0.08)', dot: '#D4FF66' },
  ]
  const c = colors[(variant - 1) % colors.length]
  return (
    <motion.div className="notif-toggle" onClick={() => setOn(!on)}
      whileTap={{ scale: 0.97 }}>
      <div className="notif-bell" style={{
        background: on ? c.active : c.bg,
        border: `1px solid ${on ? 'rgba(180,255,0,0.3)' : 'rgba(180,255,0,0.08)'}`,
        boxShadow: on ? '0 0 15px rgba(180,255,0,0.2)' : 'none'
      }}>
        {on ? '🔔' : '🔕'}
      </div>
      <span className="notif-label" style={{ color: on ? '#B4FF00' : '#4A6B4A' }}>{label}</span>
      <div className="notif-dot" style={{
        background: on ? c.dot : '#222',
        boxShadow: on ? `0 0 8px ${c.dot}` : 'none'
      }} />
    </motion.div>
  )
}

// ─── DROPDOWN FACTORY ───
function Dropdown({ variant, options = ['Option 1', 'Option 2', 'Option 3'], placeholder = 'Select...' }) {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(null)
  return (
    <div className="nf-dropdown">
      <button className={`nf-dropdown-trigger ${open ? 'open' : ''}`}
        onClick={() => setOpen(!open)}>
        <span>{selected || placeholder}</span>
        <span className={`dropdown-arrow ${open ? 'open' : ''}`}>▼</span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div className="nf-dropdown-menu"
            initial={{ opacity: 0, y: -8, scaleY: 0.95 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -8, scaleY: 0.95 }}
            transition={{ duration: 0.2 }}>
            {options.map(opt => (
              <div key={opt} className={`nf-dropdown-item ${selected === opt ? 'selected' : ''}`}
                onClick={() => { setSelected(opt); setOpen(false) }}>{opt}</div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ─── TABS FACTORY ───
function Tabs({ variant, tabs = ['Tab 1', 'Tab 2', 'Tab 3'] }) {
  const [active, setActive] = useState(0)
  const styles = [
    { indicator: 'underline' }, { indicator: 'pill' }, { indicator: 'highlight' },
    { indicator: 'line-top' }, { indicator: 'glow' },
  ]
  const s = styles[(variant - 1) % styles.length]
  return (
    <div className="nf-tabs">
      <div className="nf-tab-list" style={{
        borderBottom: s.indicator === 'underline' ? '1px solid rgba(180,255,0,0.08)' : 'none',
        background: s.indicator === 'pill' ? 'rgba(180,255,0,0.03)' : 'transparent',
        borderRadius: s.indicator === 'pill' ? '8px' : '0',
        padding: s.indicator === 'pill' ? '4px' : '0'
      }}>
        {tabs.map((tab, i) => (
          <button key={i} className={`nf-tab ${active === i ? 'active' : ''}`}
            onClick={() => setActive(i)}
            style={{
              borderBottom: s.indicator === 'underline' && active === i ? '2px solid #B4FF00' : 'none',
              background: s.indicator === 'pill' && active === i ? 'rgba(180,255,0,0.15)' : 'transparent',
              borderRadius: s.indicator === 'pill' ? '6px' : '0',
              boxShadow: s.indicator === 'glow' && active === i ? '0 0 10px rgba(180,255,0,0.3)' : 'none'
            }}>
            {tab}
          </button>
        ))}
      </div>
      <motion.div className="nf-tab-content" key={active}
        initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}>
        Content for {tabs[active]}
      </motion.div>
    </div>
  )
}

// ─── MODAL FACTORY ───
function Modal({ variant, title = 'Modal', content = 'This is a modal dialog.' }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button className="modal-trigger" onClick={() => setOpen(true)}>Open Modal #{variant}</button>
      <AnimatePresence>
        {open && (
          <motion.div className="modal-overlay" onClick={() => setOpen(false)}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="modal-box" onClick={e => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}>
              <div className="modal-header">
                <span className="modal-title">{title}</span>
                <button className="modal-close" onClick={() => setOpen(false)}>✕</button>
              </div>
              <div className="modal-body">{content}</div>
              <div className="modal-footer">
                <button className="nf-btn btn-v2" onClick={() => setOpen(false)} style={{ padding: '8px 16px', fontSize: 13 }}>Cancel</button>
                <button className="nf-btn btn-v1" onClick={() => setOpen(false)} style={{ padding: '8px 16px', fontSize: 13 }}>Confirm</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

// ─── LOADER FACTORY ───
function Loader({ variant }) {
  if (variant <= 3) {
    return <div className="loader-container"><div className={`spinner spinner-v${variant}`} /></div>
  }
  if (variant <= 6) {
    return (
      <div className="loader-container">
        <div className="dots-loader">
          {[0,1,2].map(i => <motion.span key={i}
            animate={{ scale: [1, 1.4, 1], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.2, delay: i * 0.2, repeat: Infinity }}
            style={{ background: variant === 5 ? '#66ff66' : variant === 6 ? '#D4FF66' : '#B4FF00' }} />)}
        </div>
      </div>
    )
  }
  if (variant <= 9) {
    return (
      <div className="loader-container">
        <div className="bar-loader" style={{
          height: variant === 8 ? 6 : variant === 9 ? 2 : 4,
          background: `rgba(180,255,0,0.0${variant})`
        }} />
      </div>
    )
  }
  if (variant <= 12) {
    return (
      <div className="loader-container">
        <motion.div className="pulse-loader"
          animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{
            width: 20 + variant * 2, height: 20 + variant * 2,
            borderRadius: variant === 12 ? 4 : '50%'
          }} />
      </div>
    )
  }
  if (variant <= 15) {
    return <div className="loader-container"><div className="orbit-loader" /></div>
  }
  // 16-20: various animated loaders
  return (
    <div className="loader-container">
      <div style={{ display: 'flex', gap: 4 }}>
        {[0,1,2,3,4].map(i => (
          <motion.div key={i}
            animate={{ scaleY: [0.4, 1, 0.4] }}
            transition={{ duration: 0.8, delay: i * 0.1, repeat: Infinity }}
            style={{ width: 4, height: 24, background: '#B4FF00', borderRadius: 2, opacity: 0.5 + i * 0.1 }} />
        ))}
      </div>
    </div>
  )
}

// ─── CLOCK FACTORY ───
function Clock({ variant }) {
  const [time, setTime] = useState(new Date())
  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(t)
  }, [])

  // Digital variants (1-10)
  if (variant <= 10) {
    const h = time.getHours().toString().padStart(2, '0')
    const m = time.getMinutes().toString().padStart(2, '0')
    const s = time.getSeconds().toString().padStart(2, '0')
    const sizes = [28, 24, 32, 20, 28, 22, 36, 18, 24, 28]
    const styles = [
      { textShadow: '0 0 10px rgba(180,255,0,0.5)' },
      { letterSpacing: 4, fontWeight: 400 },
      { textShadow: '0 0 20px rgba(180,255,0,0.6), 0 0 40px rgba(180,255,0,0.3)' },
      { fontFamily: 'var(--font-display)' },
      { background: 'rgba(180,255,0,0.05)', padding: '8px 16px', borderRadius: 8, border: '1px solid rgba(180,255,0,0.1)' },
      { fontFamily: 'var(--font-display)', letterSpacing: 6 },
      { textShadow: 'var(--glow-neon)' },
      { color: '#8BC700' },
      { fontFamily: 'var(--font-display)', color: '#D4FF66' },
      { background: '#0a0a0a', padding: '10px 20px', borderRadius: 4, border: '1px solid #222' },
    ]
    return (
      <div className="digital-clock" style={{ fontSize: sizes[variant-1], ...styles[variant-1] }}>
        {h}<span style={{ opacity: time.getSeconds() % 2 === 0 ? 1 : 0.3 }}>:</span>{m}
        <span style={{ opacity: 0.5, fontSize: '0.6em' }}>:{s}</span>
      </div>
    )
  }
  // Analog variants (11-20)
  if (variant >= 11 && variant <= 20) {
    const sz = 80
    const hrs = time.getHours() % 12
    const mins = time.getMinutes()
    const secs = time.getSeconds()
    const hDeg = (hrs * 30) + (mins * 0.5)
    const mDeg = mins * 6
    const sDeg = secs * 6
    const borderStyles = [
      '2px solid rgba(180,255,0,0.2)',
      '1px solid rgba(180,255,0,0.4)',
      '3px solid rgba(180,255,0,0.15)',
      '1px dashed rgba(180,255,0,0.2)',
      '2px solid rgba(180,255,0,0.3)',
      '1px solid #222',
      '2px solid rgba(180,255,0,0.1)',
      'none',
      '1px solid rgba(180,255,0,0.15)',
      '2px solid var(--acid-lime)',
    ]
    return (
      <div className="analog-clock">
        <div className="clock-face" style={{ width: sz, height: sz, border: borderStyles[variant - 11] }}>
          <div className="clock-hand" style={{ width: 2, height: 20, background: '#B4FF00', transform: `rotate(${hDeg}deg)`, left: 'calc(50% - 1px)' }} />
          <div className="clock-hand" style={{ width: 1.5, height: 28, background: '#8BC700', transform: `rotate(${mDeg}deg)`, left: 'calc(50% - 0.75px)' }} />
          <div className="clock-hand" style={{ width: 1, height: 30, background: '#D4FF66', transform: `rotate(${sDeg}deg)`, left: 'calc(50% - 0.5px)', transition: 'none' }} />
          <div className="clock-center" style={{ width: 6, height: 6 }} />
        </div>
      </div>
    )
  }

  // ─── PREMIUM CLOCK VARIANTS (21-30) ───
  const h = time.getHours()
  const m = time.getMinutes()
  const s = time.getSeconds()
  const h12 = h % 12 || 12
  const hh = h.toString().padStart(2, '0')
  const mm = m.toString().padStart(2, '0')
  const ss = s.toString().padStart(2, '0')
  const ampm = h >= 12 ? 'PM' : 'AM'

  if (variant === 21) {
    // Flip Clock
    return (
      <div className="flip-clock">
        {[hh, mm, ss].map((val, i) => (
          <div key={i} className="flip-group">
            {i > 0 && <span className="flip-colon">:</span>}
            <div className="flip-card">
              <div className="flip-top">{val}</div>
              <div className="flip-bottom">{val}</div>
              <div className="flip-line" />
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (variant === 22) {
    // Binary Clock
    const toBin = (n) => n.toString(2).padStart(6, '0').split('')
    return (
      <div className="binary-clock">
        <div className="bin-label">BIN</div>
        {[{ v: h, l: 'H' }, { v: m, l: 'M' }, { v: s, l: 'S' }].map((item, i) => (
          <div key={i} className="bin-col">
            <span className="bin-val">{item.v.toString().padStart(2, '0')}</span>
            <div className="bin-dots">
              {toBin(item.v).map((b, j) => (
                <div key={j} className={`bin-dot ${b === '1' ? 'on' : ''}`} />
              ))}
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (variant === 23) {
    // Word Clock
    const hourWords = ['Twelve', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven']
    const mWord = m === 0 ? "O'Clock" : m < 10 ? `Oh ${m}` : m.toString()
    return (
      <div className="word-clock">
        <div className="word-hour">{hourWords[h12 % 12]}</div>
        <div className="word-min">{mWord}</div>
        <div className="word-period">{ampm}</div>
      </div>
    )
  }

  if (variant === 24) {
    // World Clock (3 zones)
    const zones = [
      { name: 'NYC', offset: -4 },
      { name: 'LON', offset: 1 },
      { name: 'TKY', offset: 9 },
    ]
    return (
      <div className="world-clock">
        {zones.map((z, i) => {
          const utc = time.getTime() + time.getTimezoneOffset() * 60000
          const zTime = new Date(utc + z.offset * 3600000)
          return (
            <div key={i} className="wc-zone">
              <span className="wc-city">{z.name}</span>
              <span className="wc-time">{zTime.getHours().toString().padStart(2, '0')}:{zTime.getMinutes().toString().padStart(2, '0')}</span>
            </div>
          )
        })}
      </div>
    )
  }

  if (variant === 25) {
    // Radial Arc Clock
    const hFrac = ((h % 12) + m / 60) / 12
    const mFrac = (m + s / 60) / 60
    const sFrac = s / 60
    return (
      <div className="radial-clock">
        <svg width="90" height="90" viewBox="0 0 90 90">
          <circle cx="45" cy="45" r="40" fill="none" stroke="rgba(180,255,0,0.06)" strokeWidth="3" />
          <circle cx="45" cy="45" r="34" fill="none" stroke="rgba(180,255,0,0.06)" strokeWidth="3" />
          <circle cx="45" cy="45" r="28" fill="none" stroke="rgba(180,255,0,0.06)" strokeWidth="3" />
          <circle cx="45" cy="45" r="40" fill="none" stroke="#B4FF00" strokeWidth="3"
            strokeDasharray={`${hFrac * 251.3} 251.3`} strokeLinecap="round"
            transform="rotate(-90 45 45)" style={{ filter: 'drop-shadow(0 0 3px rgba(180,255,0,0.5))' }} />
          <circle cx="45" cy="45" r="34" fill="none" stroke="#8BC700" strokeWidth="3"
            strokeDasharray={`${mFrac * 213.6} 213.6`} strokeLinecap="round"
            transform="rotate(-90 45 45)" />
          <circle cx="45" cy="45" r="28" fill="none" stroke="#D4FF66" strokeWidth="2"
            strokeDasharray={`${sFrac * 175.9} 175.9`} strokeLinecap="round"
            transform="rotate(-90 45 45)" />
          <text x="45" y="48" textAnchor="middle" fill="#B4FF00" fontSize="11" fontFamily="var(--font-mono)">{hh}:{mm}</text>
        </svg>
      </div>
    )
  }

  if (variant === 26) {
    // Matrix Rain Clock
    return (
      <div className="matrix-clock">
        <div className="matrix-rain-bg">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="rain-col" style={{ animationDelay: `${i * 0.3}s`, left: `${i * 13}%` }} />
          ))}
        </div>
        <div className="matrix-time">
          <span>{hh}</span><span className="mx-colon">:</span><span>{mm}</span><span className="mx-colon">:</span><span>{ss}</span>
        </div>
      </div>
    )
  }

  if (variant === 27) {
    // Nixie Tube Clock
    return (
      <div className="nixie-clock">
        {[...hh, ':', ...mm, ':', ...ss].map((char, i) => (
          <div key={i} className={`nixie-tube ${char === ':' ? 'nixie-sep' : ''}`}>
            <span className="nixie-char">{char}</span>
          </div>
        ))}
      </div>
    )
  }

  if (variant === 28) {
    // Ring Progress Clock
    const sAngle = (s / 60) * 360
    const mAngle = (m / 60) * 360
    const hAngle = ((h % 12) / 12) * 360
    return (
      <div className="ring-clock">
        <div className="ring-outer" style={{ background: `conic-gradient(#B4FF00 ${hAngle}deg, rgba(180,255,0,0.1) ${hAngle}deg)` }}>
          <div className="ring-mid" style={{ background: `conic-gradient(#8BC700 ${mAngle}deg, rgba(139,199,0,0.1) ${mAngle}deg)` }}>
            <div className="ring-inner" style={{ background: `conic-gradient(#D4FF66 ${sAngle}deg, rgba(212,255,102,0.1) ${sAngle}deg)` }}>
              <div className="ring-center">
                <span>{hh}:{mm}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (variant === 29) {
    // Split-Flap Display
    return (
      <div className="splitflap-clock">
        <div className="sf-label">DEPARTURE</div>
        <div className="sf-row">
          {[...hh].map((d, i) => (
            <div key={`h${i}`} className="sf-tile"><span>{d}</span></div>
          ))}
          <div className="sf-sep">:</div>
          {[...mm].map((d, i) => (
            <div key={`m${i}`} className="sf-tile"><span>{d}</span></div>
          ))}
          <div className="sf-sep">:</div>
          {[...ss].map((d, i) => (
            <div key={`s${i}`} className="sf-tile"><span>{d}</span></div>
          ))}
        </div>
      </div>
    )
  }

  if (variant === 30) {
    // Neon Marquee Clock
    return (
      <div className="marquee-clock">
        <div className="marquee-border" />
        <div className="marquee-time">
          {hh}:{mm}<span className="marquee-sec">:{ss}</span>
        </div>
        <div className="marquee-day">{time.toLocaleDateString('en-US', { weekday: 'long' }).toUpperCase()}</div>
      </div>
    )
  }

  return <div className="digital-clock">{hh}:{mm}:{ss}</div>
}

// ─── NAVIGATION FACTORY ───
function NavDemo({ variant }) {
  const [active, setActive] = useState(0)
  const items = ['Home', 'About', 'Work', 'Contact']

  // v21 — Glass Dock
  if (variant === 21) {
    return (
      <div className="nav-demo">
        <div className="glass-dock">
          {items.map((item, i) => (
            <button key={i} className={`dock-item ${active === i ? 'active' : ''}`}
              onClick={() => setActive(i)}>
              <div className="dock-icon">{['🏠', '👤', '💼', '✉️'][i]}</div>
              <span className="dock-label">{item}</span>
              {active === i && <div className="dock-indicator" />}
            </button>
          ))}
        </div>
      </div>
    )
  }

  // v22 — Vertical Sidebar Nav
  if (variant === 22) {
    return (
      <div className="nav-demo">
        <div className="vertical-nav">
          {items.map((item, i) => (
            <button key={i} className={`vnav-item ${active === i ? 'active' : ''}`}
              onClick={() => setActive(i)}>
              <div className="vnav-bar" />
              <span>{item}</span>
            </button>
          ))}
        </div>
      </div>
    )
  }

  // v23 — Command Palette Nav
  if (variant === 23) {
    return (
      <div className="nav-demo">
        <div className="cmd-nav">
          <div className="cmd-search">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
            <span>Navigate...</span>
            <kbd>⌘P</kbd>
          </div>
          <div className="cmd-items">
            {items.map((item, i) => (
              <button key={i} className={`cmd-item ${active === i ? 'active' : ''}`}
                onClick={() => setActive(i)}>
                <span className="cmd-hash">#</span>
                <span>{item}</span>
                {active === i && <span className="cmd-arrow">→</span>}
              </button>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // v24 — Breadcrumb Trail
  if (variant === 24) {
    return (
      <div className="nav-demo">
        <div className="breadcrumb-nav">
          {items.map((item, i) => (
            <span key={i} className="crumb-wrap">
              {i > 0 && <span className="crumb-sep">/</span>}
              <button className={`crumb-item ${active === i ? 'active' : ''} ${i < active ? 'past' : ''}`}
                onClick={() => setActive(i)}>
                {item}
              </button>
            </span>
          ))}
        </div>
      </div>
    )
  }

  // v25 — Floating Orbit
  if (variant === 25) {
    return (
      <div className="nav-demo">
        <div className="orbit-nav">
          <div className="orbit-center">{items[active][0]}</div>
          {items.map((item, i) => {
            const angle = (i * 90) - 45
            const rad = (angle * Math.PI) / 180
            const r = 48
            const x = Math.cos(rad) * r
            const y = Math.sin(rad) * r
            return (
              <button key={i} className={`orbit-dot ${active === i ? 'active' : ''}`}
                style={{ transform: `translate(${x}px, ${y}px)` }}
                onClick={() => setActive(i)}
                title={item}>
                <span className="orbit-letter">{item[0]}</span>
              </button>
            )
          })}
        </div>
      </div>
    )
  }

  // Default variants (1-20)
  const bgStyles = [
    '#0a0a0a', '#0d1a12', 'rgba(180,255,0,0.03)', '#080808', '#111',
    'transparent', '#0d0d0d', 'rgba(180,255,0,0.02)', '#0a0f0c', '#090909'
  ]
  return (
    <div className="nav-demo">
      <div className="mini-nav" style={{
        background: bgStyles[(variant - 1) % bgStyles.length],
        border: `1px solid rgba(180,255,0,${0.05 + (variant % 5) * 0.03})`,
        borderRadius: variant % 3 === 0 ? 0 : variant % 2 === 0 ? 20 : 8
      }}>
        {items.map((item, i) => (
          <button key={i} className={`mini-nav-item ${active === i ? 'active' : ''}`}
            onClick={() => setActive(i)}>{item}</button>
        ))}
      </div>
    </div>
  )
}

export default {
  Toggle, Slider, Button, ProgressBar, CircularProgress,
  Input, Card, NotifToggle, Dropdown, Tabs, Modal, Loader, Clock, NavDemo
}
