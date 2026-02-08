import { useState, useEffect } from 'react'

interface ObfuscatedEmailLinkProps {
  email: string
  children: React.ReactNode
  className?: string
}

/**
 * Obfuscated email link component
 * Prevents email from appearing in plain text in HTML source
 */
function ObfuscatedEmailLink({ email, children, className }: ObfuscatedEmailLinkProps) {
  const [href, setHref] = useState<string>('#')

  useEffect(() => {
    // Decode email on client side only, not in SSR/build
    // This prevents the email from appearing in the static HTML
    setHref(`mailto:${email}`)
  }, [email])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href === '#') {
      e.preventDefault()
      // Fallback: construct mailto on click
      window.location.href = `mailto:${email}`
    }
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className={className}
      // Prevent search engines from following
      rel="nofollow noopener noreferrer"
    >
      {children}
    </a>
  )
}

export default ObfuscatedEmailLink
