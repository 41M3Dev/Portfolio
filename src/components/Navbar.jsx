import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
    { label: 'Accueil', href: '#hero' },
    { label: 'À propos', href: '#about' },
    { label: 'Compétences', href: '#skills' },
    { label: 'Projets', href: '#projects' },
    { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const closeMenu = () => setMenuOpen(false)

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? 'bg-brand-bg/90 backdrop-blur-md border-b border-brand-border'
                    : 'bg-transparent'
            }`}
        >
            <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

                {/* Logo */}
                <a href="#hero" className="font-display font-bold text-xl group">
          <span className="text-brand-text group-hover:text-lime transition-colors duration-300">
            A
          </span>
                    <span className="text-lime group-hover:text-brand-text transition-colors duration-300">
            A
          </span>
                </a>

                {/* Liens desktop */}
                <ul className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <li key={link.href}>
                            <a href={link.href}
                                className="font-body text-sm text-brand-muted hover:text-lime transition-colors duration-300 relative group"
                                >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-lime group-hover:w-full transition-all duration-300" />
                            </a>
                        </li>
                        ))}
                </ul>

                {/* Hamburger */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden flex flex-col gap-1.5 p-2 group"
                    aria-label="Menu"
                >
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </button>
            </nav>

            {/* Menu mobile */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden bg-brand-bg/95 backdrop-blur-md border-b border-brand-border"
                    >
                        <ul className="flex flex-col px-6 py-4 gap-4">
                            {links.map((link) => (
                                <li key={link.href}>

                                    <a href={link.href}
                                    onClick={closeMenu}
                                    className="block font-body text-brand-muted hover:text-lime transition-colors duration-300 py-1"
                                    >
                                    {link.label}
                                </a>
                                </li>
                                ))}
                        </ul>
                    </motion.div>
                )}
</AnimatePresence>
</header>
)
}