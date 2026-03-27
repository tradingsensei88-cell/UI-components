import { useState } from 'react'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import { generatePrompt, copyToClipboard } from '../../utils/PromptGenerator'
import './ComponentCard.css'

export default function ComponentCard({ name, variant, children, promptMeta, index = 0 }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    const prompt = generatePrompt(promptMeta)
    await copyToClipboard(prompt)
    setCopied(true)
    toast.success('Prompt copied!', { icon: '⚡' })
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.div className="comp-card"
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: index * 0.03, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -3, transition: { duration: 0.25 } }}>
      <div className="card-header">
        <div className="card-title-row">
          <span className="card-variant">#{String(variant).padStart(2, '0')}</span>
          <h3 className="card-name">{name}</h3>
        </div>
        <div className="card-actions">
          <motion.button className={`copy-btn ${copied ? 'copied' : ''}`}
            onClick={handleCopy}
            whileTap={{ scale: 0.92 }}
            title="Copy AI Prompt">
            {copied ? (
              <>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>
                <span>Copied!</span>
              </>
            ) : (
              <>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
                <span>Copy Prompt</span>
              </>
            )}
          </motion.button>
        </div>
      </div>
      <div className="card-preview">
        {children}
      </div>
      <div className="card-footer">
        <span className="card-tag interactive">Interactive</span>
        <span className="card-tag animated">Animated</span>
      </div>
    </motion.div>
  )
}
