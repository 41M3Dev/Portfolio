export default function Footer() {
    return (
        <footer className="py-12 px-6 border-t border-brand-border">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

                {/* Logo */}
                <a href="#hero" className="font-display font-bold text-xl">
                    <span className="text-brand-text">A</span>
                    <span className="text-lime">A</span>
                </a>

                {/* Phrase */}
                <p className="font-body text-sm text-brand-muted text-center">
                    Conçu et développé par Aimé Adjassa — 2026
                </p>

                {/* Liens sociaux */}
                <div className="flex items-center gap-4">
                    <a
                        href="https://www.linkedin.com/in/aimeadj"
                        target="_blank"
                        rel="noreferrer"
                        className="text-brand-muted hover:text-violet transition-colors duration-300"
                        aria-label="LinkedIn"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                        </svg>
                    </a>
                    <a
                        href="https://github.com/aimeadj"
                        target="_blank"
                        rel="noreferrer"
                        className="text-brand-muted hover:text-violet transition-colors duration-300"
                        aria-label="GitHub"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                        </svg>
                    </a>
                </div>

</div>
</footer>
)
}