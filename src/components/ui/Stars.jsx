/**
 * Star rating display.
 * Usage: <Stars n={4} />
 */
export default function Stars({ n = 5 }) {
  const full  = Math.round(n)
  const empty = 5 - full
  return (
    <span className="stars text-sm">
      {'★'.repeat(full)}
      <span className="opacity-30">{'★'.repeat(empty)}</span>
    </span>
  )
}
