import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  ogImage?: string
  url?: string
}

function SEO({
  title = 'Matthew Delgado - Software Engineer & Product Builder',
  description = 'Software engineer building products people use. Creator of BeaconBot, PromoTap, and ScalarTek. Specializing in full-stack development, real-time systems, and AI-powered solutions.',
  keywords = [
    'Software Engineer',
    'Product Builder',
    'Full Stack Developer',
    'React',
    'TypeScript',
    'Python',
    'C++',
    'BeaconBot',
    'PromoTap',
    'ScalarTek',
  ],
  ogImage = 'https://matthewdelgado.pages.dev/og-image.png',
  url = 'https://matthewdelgado.pages.dev',
}: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      <meta name="author" content="Matthew Delgado" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

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
