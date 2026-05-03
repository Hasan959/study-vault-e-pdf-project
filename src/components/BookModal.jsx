import { useEffect, useState } from 'react'
import { HiX, HiOutlineEye, HiOutlineDocumentText } from 'react-icons/hi'
import { HiShoppingCart, HiArrowTopRightOnSquare } from 'react-icons/hi2'
import Stars from './ui/Stars'
import Button from './ui/Button'

export default function BookModal({ book, onClose }) {
  const [showPdf, setShowPdf] = useState(false)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKey = e => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      
      <div className="w-full max-w-[860px] max-h-[90vh] overflow-y-auto rounded-3xl animate-slide-up"
        style={{ background: 'var(--bg2)', border: '1px solid var(--border)' }}
      >

        {/* Cover */}
        <div className="relative h-56 overflow-hidden rounded-t-3xl">
          <img src={book.cover} alt={book.title} className="w-full h-full object-cover" />

          <button onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 text-white"
          >
            <HiX />
          </button>

          <div className="absolute bottom-6 left-7 text-white">
            <span className="chip">{book.category}</span>
            <h2>{book.title}</h2>
            <p>{book.titleEn}</p>
          </div>
        </div>

        {/* Body */}
        <div className="px-8 pb-8 pt-6">

          <div className="flex gap-5 mb-6">
            <Stars n={Math.round(book.rating)} />
            <span>{book.rating}</span>
            <span>{book.pages} pages</span>
            <span className="price-tag">{book.price}</span>
          </div>

          <p className="text-[var(--text2)]">{book.fullDesc}</p>

          <div className="mt-6">
            <button onClick={() => setShowPdf(v => !v)}>
              <HiOutlineEye /> {showPdf ? 'Hide' : 'Preview'}
            </button>

            {showPdf && (
              <div className="mt-4 h-[300px] border rounded-xl flex items-center justify-center">
                <HiOutlineDocumentText />
              </div>
            )}
          </div>

          <div className="flex gap-3 mt-6">
            <Button>
              <HiShoppingCart /> Buy Now
            </Button>

            <a href={book.previewUrl} target="_blank">
              <Button variant="ghost">
                <HiArrowTopRightOnSquare /> Open PDF
              </Button>
            </a>
          </div>

        </div>

      </div>
    </div>
  )
}