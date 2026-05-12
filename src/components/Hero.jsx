import { motion } from 'framer-motion'

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.15,
            duration: 0.6,
            ease: 'easeOut',
        },
    }),
}

export default function Hero() {
    return (
        <section
            id="hero"
            className="min-h-screen flex flex-col items-center justify-center text-center px-6"
        >
            {/* Tag disponibilité */}
            <motion.span
                custom={0}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="inline-block mb-6 px-4 py-1.5 rounded-full border border-lime/40 text-lime text-sm font-body"
            >
                Disponible en alternance — Septembre 2026
            </motion.span>

            {/* Titre principal */}
            <motion.h1
                custom={1}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="font-display font-extrabold text-5xl md:text-7xl text-white leading-tight mb-6"
            >
                Vous cherchez un <br />développeur web ?
            </motion.h1>

            {/* Phrase d'accroche */}
            <motion.p
                custom={2}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="font-body text-white/60 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
            >
                Passionné par le code depuis plusieurs années, je conçois et développe
                des applications web modernes de A à Z. À l'aise aussi bien sur le
                frontend que le backend, j'aime créer des projets qui allient
                performance technique et expérience utilisateur soignée.
            </motion.p>

            {/* Boutons */}
            <motion.div
                custom={3}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="flex flex-col sm:flex-row gap-4 mb-16"
            >

                <a href="#projects"
                className="px-8 py-3 bg-violet hover:bg-violet-light text-white font-body font-medium rounded-lg transition-colors duration-300"
                >
                Voir mes projets
            </a>

            <a href="#contact"
            className="px-8 py-3 border border-white/20 hover:border-lime hover:text-lime text-white/70 font-body font-medium rounded-lg transition-colors duration-300"
            >
            Me contacter
        </a>
</motion.div>

    {/* Flèche scroll */}
    <motion.a
        href="#about"
        custom={4}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        animate={{
            y: [0, 8, 0],
        }}
        transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
        }}
        className="text-white/30 hover:text-lime transition-colors duration-300"
        aria-label="Scroll vers le bas"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
    </motion.a>
</section>
)
}