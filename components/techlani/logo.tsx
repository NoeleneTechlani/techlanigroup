import type { SVGProps } from 'react'

export function TechlaniMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M16 2L28 8.5V23.5L16 30L4 23.5V8.5L16 2Z"
        className="stroke-primary"
        strokeWidth="1.8"
      />
      <path
        d="M16 9L22 12.5V19.5L16 23L10 19.5V12.5L16 9Z"
        className="fill-primary/20 stroke-primary"
        strokeWidth="1.4"
      />
      <circle cx="16" cy="16" r="2" className="fill-primary" />
    </svg>
  )
}
