import { useState, useEffect } from 'react'
import { BOOKS, CATEGORIES } from '../data/books'
import BookCard, { BookCardSkeleton } from '../components/BookCard'
import BookModal from '../components/BookModal'
import SectionChip from '../components/ui/SectionChip'

export default function Books() {
  const [category, setCategory] = useState('All')
  const [loading, setLoading] = useState(true)
  const [modal, setModal] = useState(null)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1400)
    return () => clearTimeout(t)
  }, [])

  function handleFilter(cat) {
    if (cat === category) return
    setCategory(cat)
    setLoading(true)
    setTimeout(() => setLoading(false), 700)
  }

  const filtered =
    category === 'All'
      ? BOOKS
      : BOOKS.filter(b => b.category === category)

  return (
    <section id="books" className="py-24" style={{ background: 'var(--bg)' }}>
      
      <div className="max-w-[1160px] mx-auto px-6">

        <div className="text-center mb-14">
          <SectionChip>Published Works</SectionChip>

          <h2 className="text-[clamp(26px,4vw,50px)] font-bold">
            Books by <span className="gradient-text italic">Dr. Sohan</span>
          </h2>

          <p className="max-w-[520px] mx-auto">
            Clinical knowledge + everyday life
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-10">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => handleFilter(cat)}
                className="px-4 py-2 rounded-full border"
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <BookCardSkeleton key={i} />
              ))
            : filtered.map(book => (
                <BookCard key={book.id} book={book} onOpen={setModal} />
              ))}
        </div>

        {!loading && filtered.length === 0 && (
          <div className="text-center py-20">
            No books found
          </div>
        )}

      </div>

      {modal && (
        <BookModal book={modal} onClose={() => setModal(null)} />
      )}

    </section>
  )
}