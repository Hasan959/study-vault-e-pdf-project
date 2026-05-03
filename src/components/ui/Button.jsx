import { forwardRef } from 'react'

/**
 * Reusable Button component.
 * variant: 'primary' | 'ghost' | 'wa' (WhatsApp green)
 * size:    'md' | 'sm' | 'lg'
 */
const BASE =
  'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 cursor-pointer border-0 outline-none select-none'

const VARIANTS = {
  primary:
    'bg-gradient-to-br from-navy-500 to-violet-500 text-white shadow-glow hover:shadow-glow-lg hover:-translate-y-0.5 active:translate-y-0',
  ghost:
    'glass text-[var(--text)] hover:bg-navy-500/10 hover:border-navy-500/40 hover:-translate-y-0.5 active:translate-y-0',
  wa: 'bg-gradient-to-br from-green-400 to-green-500 text-white shadow-wa hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0',
}

const SIZES = {
  sm: 'text-[13px] px-4 py-2',
  md: 'text-[15px] px-6 py-3',
  lg: 'text-[16px] px-8 py-4',
}

const Button = forwardRef(function Button(
  { variant = 'primary', size = 'md', className = '', children, ...props },
  ref
) {
  return (
    <button
      ref={ref}
      className={`${BASE} ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
})

export default Button
