import Image from 'next/image'
import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

type SectionProps = {
  id?: string
  className?: string
  children: ReactNode
  backgroundImageSrc?: string
  backgroundImageAlt?: string
  overlayClassName?: string
}

export default function Section({
  id,
  className,
  children,
  backgroundImageSrc,
  backgroundImageAlt = '',
  overlayClassName,
}: SectionProps) {
  return (
    <section id={id} className={cn('relative overflow-hidden', className)}>
      {backgroundImageSrc && (
        <div className="absolute inset-0">
          <Image
            src={backgroundImageSrc}
            alt={backgroundImageAlt}
            fill
            priority={false}
            className="object-cover"
          />
          <div
            className={cn(
              'absolute inset-0 bg-background-dark/75',
              overlayClassName
            )}
          />
        </div>
      )}

      <div className="relative">{children}</div>
    </section>
  )
}
