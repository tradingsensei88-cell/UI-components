import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import ComponentCard from '../components/common/ComponentCard'
import { getComponents } from '../components/showcase/registry'
import './CategoryPage.css'

export default function CategoryPage({ categories, search }) {
  const { categoryId } = useParams()
  const cat = categories.find(c => c.id === categoryId)
  const components = getComponents(categoryId)

  const filtered = search
    ? components.filter(c => c.name.toLowerCase().includes(search.toLowerCase()))
    : components

  if (!cat) return <div className="not-found">Category not found</div>

  return (
    <div className="category-page">
      <motion.div className="cat-page-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        <div>
          <h1 className="cat-page-title">{cat.name}</h1>
          <p className="cat-page-desc">{filtered.length} interactive variants with AI prompts</p>
        </div>
      </motion.div>
      <div className="variants-grid">
        {filtered.map((comp, i) => (
          <ComponentCard key={comp.variant} name={comp.name} variant={comp.variant}
            promptMeta={comp.promptMeta} index={i}>
            {comp.render()}
          </ComponentCard>
        ))}
      </div>
    </div>
  )
}
