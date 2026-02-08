/**
 * Simple email obfuscation to prevent scraping
 * Decodes email at runtime rather than storing in plain text
 */
export function decodeEmail(encoded: string): string {
  // Base64 decode
  try {
    return atob(encoded)
  } catch {
    return ''
  }
}

/**
 * Encode email for obfuscation
 * Use this during build/development to encode your email
 */
export function encodeEmail(email: string): string {
  return btoa(email)
}

/**
 * Get obfuscated mailto link
 */
export function getMailtoLink(encoded: string): string {
  const email = decodeEmail(encoded)
  return email ? `mailto:${email}` : '#'
}
