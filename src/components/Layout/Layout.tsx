import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-dark-bg min-h-screen relative overflow-hidden">
      {/* Skip to content — accessibility */}
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-accent-cyan focus:text-dark-bg focus:rounded-lg focus:text-sm focus:font-semibold"
      >
        Skip to content
      </a>

      {/* Mesh gradient orbs */}
      <div className="fixed top-[-20%] left-[-10%] w-[40rem] h-[40rem] bg-accent-blue/[0.04] rounded-full blur-[120px] pointer-events-none will-change-transform" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[40rem] h-[40rem] bg-accent-cyan/[0.03] rounded-full blur-[120px] pointer-events-none will-change-transform" />
      <div className="fixed top-[40%] right-[20%] w-[30rem] h-[30rem] bg-accent-violet/[0.02] rounded-full blur-[120px] pointer-events-none will-change-transform" />

      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        {children}
      </main>
    </div>
  )
}

export default Layout
