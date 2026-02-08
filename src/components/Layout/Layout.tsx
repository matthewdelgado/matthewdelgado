import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-dark-bg min-h-screen relative overflow-hidden">
      {/* Subtle gradient orbs in background - optimized to prevent graininess */}
      <div className="fixed top-0 left-1/4 w-[32rem] h-[32rem] bg-terminal-green/[0.03] rounded-full blur-[100px] pointer-events-none will-change-transform"></div>
      <div className="fixed bottom-0 right-1/4 w-[32rem] h-[32rem] bg-terminal-green-light/[0.03] rounded-full blur-[100px] pointer-events-none will-change-transform"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24">
        {children}
      </div>
    </div>
  )
}

export default Layout
