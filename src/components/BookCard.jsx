import { HiShoppingCart, HiOutlineEye } from 'react-icons/hi'
import Stars from './ui/Stars'

export function BookCardSkeleton() {
  return (
    <div className="rounded-[20px] border p-4">
      <div className="skeleton h-[220px]" />
      <div className="space-y-3 mt-4">
        <div className="skeleton h-4 w-1/2" />
        <div className="skeleton h-4 w-3/4" />
      </div>
    </div>
  )
}

export default function BookCard({ book, onOpen }) {
  return (
    <article
      className="card cursor-pointer"
      onClick={() => onOpen(book)}
    >

      <div className="h-[220px] overflow-hidden">
        <img src={book.cover} className="w-full h-full object-cover" />
      </div>

      <div className="p-5">

        <h3>{book.title}</h3>
        <p>{book.titleEn}</p>

        <div className="flex gap-2">
          <Stars n={Math.round(book.rating)} />
          <span>({book.reviews})</span>
        </div>

        <p className="text-sm">{book.description}</p>

        <div className="flex gap-2 mt-4">

          <button
            onClick={(e) => { e.stopPropagation(); onOpen(book) }}
          >
            <HiShoppingCart /> Buy
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); onOpen(book) }}
          >
            <HiOutlineEye /> Preview
          </button>

        </div>

      </div>

    </article>
  )
}