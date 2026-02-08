import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  ogImage?: string
  url?: string
}

function SEO({
  title = 'Matthew Delgado - Software Engineer',
  description = 'Software Engineer specializing in full-stack development, real-time systems, and AI-powered solutions. Building mission-critical systems across defense, AI, and web development.',
  keywords = [
    'Software Engineer',
    'Full Stack Developer',
    'React',
    'TypeScript',
    'Python',
    'C++',
    'Real-time Systems',
    'AI Development',
    'Melbourne FL',
  ],
  ogImage = 'https://matthewdelgado.pages.dev/og-image.png',
  url = 'https://matthewdelgado.pages.dev',
}: SEOProps) {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {/* Additional Meta Tags */}
      <meta name="author" content="Matthew Delgado" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Matthew Delgado',
          jobTitle: 'Software Engineer',
          url: url,
          sameAs: [
            'https://www.linkedin.com/in/mattdelg/',
            'https://github.com/matthewdelgado',
          ],
          knowsAbout: keywords,
        })}
      </script>
    </Helmet>
  )
}

export default SEO
