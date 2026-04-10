import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

type LogoProps = {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  withLink?: boolean
}

const sizeClasses: Record<NonNullable<LogoProps['size']>, { img: string; wrapper: string }> = {
  sm: { img: 'h-[75px] w-auto', wrapper: 'h-[75px] px-4' },
  md: { img: 'h-[90px] w-auto', wrapper: 'h-[90px] px-4.5' },
  lg: { img: 'h-[105px] w-auto', wrapper: 'h-[105px] px-5' },
}

export default function Logo({ className, size = 'md', withLink = true }: LogoProps) {
  const content = (
    <span
      className={cn(
        'inline-flex items-center justify-center rounded-2xl bg-transparent drop-shadow-[0_18px_40px_rgba(0,0,0,0.55)]',
        sizeClasses[size].wrapper,
        className
      )}
    >
      <Image
        src="/Logomarca -Transparente-zoom.png"
        alt="RGOMES Engenharia"
        width={414}
        height={166}
        className={cn('select-none', sizeClasses[size].img)}
        priority
      />
    </span>
  )

  if (!withLink) return content

  return (
    <Link href="/" className="inline-flex items-center">
      {content}
    </Link>
  )
}
