'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Terminal } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Me' },
  { href: '/blog', label: 'Blog Posts' },
  { href: '/contact', label: 'Contact' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  React.useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className={cn(
            'w-full max-w-3xl rounded-full border transition-all duration-300',
            isScrolled
              ? 'glass-strong shadow-lg shadow-primary/5 border-border/50'
              : 'bg-background/60 backdrop-blur-md border-border/30'
          )}
        >
          <nav className="px-3 sm:px-5">
            <div className="flex h-12 items-center justify-between">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2 group">
                {/* <motion.div
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center justify-center w-7 h-7 rounded-full bg-primary text-primary-foreground"
                >
                  <Terminal className="w-3.5 h-3.5" />
                </motion.div> */}
                <span className="font-display text-sm font-bold tracking-tight">
                  A.E.G.I.S.
                </span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-0.5">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'relative px-3 py-1.5 text-sm font-medium transition-colors rounded-full',
                      pathname === item.href
                        ? 'text-foreground'
                        : 'text-muted-foreground hover:text-foreground'
                    )}
                  >
                    {item.label}
                    {pathname === item.href && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute inset-0 bg-secondary rounded-full -z-10"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </Link>
                ))}
              </div>

              {/* Right side */}
              <div className="flex items-center gap-1">
                <ThemeToggle />
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden h-8 w-8 rounded-full"
                  onClick={() => setIsOpen(!isOpen)}
                  aria-label={isOpen ? 'Close menu' : 'Open menu'}
                >
                  {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                </Button>
              </div>
            </div>
          </nav>
        </motion.header>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-40 md:hidden glass-strong border border-border/50 rounded-2xl overflow-hidden"
          >
            <nav className="flex flex-col p-3 gap-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      'block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors',
                      pathname === item.href
                        ? 'bg-secondary text-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                    )}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
