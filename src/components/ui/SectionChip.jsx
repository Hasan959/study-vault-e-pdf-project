/**
 * Small labelling pill shown above section headings.
 * Usage: <SectionChip>Published Works</SectionChip>
 */
export default function SectionChip({ children }) {
  return (
    <span className="chip">
      <span className="opacity-60">●</span>
      {children}
    </span>
  )
}
