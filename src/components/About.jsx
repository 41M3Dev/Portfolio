import { motion } from 'framer-motion'

export default function About() {
    return (
        <section id="about" className="py-24 px-6">
            <div className="max-w-6xl mx-auto">

                {/* Contenu principal : texte gauche, photo droite */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

                    {/* Titre + texte gauche */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col justify-start"
                    >
                        <h2 className="font-display font-bold text-4xl md:text-5xl text-brand-text mb-8">
                            À propos
                        </h2>
                        <p className="font-body text-brand-muted text-lg leading-relaxed">
                            Développeur web basé à Rouen, je me suis orienté vers
                            l'informatique dès le lycée avec un Bac STI2D, avant de
                            poursuivre en BTS Systèmes Numériques puis en Licence
                            Informatique. Aujourd'hui en formation Développement Web et
                            Mobile chez Need For School, je me spécialise dans la conception
                            d'applications full stack modernes. Curieux et autodidacte,
                            j'apprends en continu et je cherche à mettre mes compétences au
                            service d'une entreprise dans le cadre d'une alternance Bac+3
                            CDA dès septembre 2026.
                        </p>
                    </motion.div>

                    {/* Photo droite */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex justify-center md:justify-end"
                    >
                        <div className="relative w-full max-w-sm">
                            <div className="absolute inset-0 rounded-2xl border-2 border-violet/40 translate-x-3 translate-y-3" />
                            <img
                                src="/aime.adjassa.jpg"
                                alt="Aimé Adjassa"
                                className="relative w-full h-auto object-cover rounded-2xl border-2 border-brand-border"
                            />
                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    )
}