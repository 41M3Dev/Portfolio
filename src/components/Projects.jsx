import { motion } from 'framer-motion'

const projects = [
    {
        id: 1,
        title: 'Projet à venir',
        description: 'Ce projet sera bientôt disponible.',
        tags: ['React', 'Node.js', 'MySQL'],
        link: null,
    },
    {
        id: 2,
        title: 'Projet à venir',
        description: 'Ce projet sera bientôt disponible.',
        tags: ['Laravel', 'Vue.js', 'PostgreSQL'],
        link: null,
    },
]

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-6">
            <div className="max-w-6xl mx-auto">

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="font-display font-bold text-4xl md:text-5xl text-brand-text mb-16"
                >
                    Projets
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15, duration: 0.5 }}
                            className="relative rounded-2xl overflow-hidden group cursor-pointer h-72"
                        >
                            {/* Image / fond placeholder */}
                            <div className="absolute inset-0 bg-gradient-to-br from-violet/10 to-lime/10 flex items-center justify-center">
                <span className="font-display font-bold text-2xl text-brand-muted/20">
                  Coming soon
                </span>
                            </div>

                            {/* Overlay au hover */}
                            <div className="absolute inset-0 bg-violet/90 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">

                                <h3 className="font-display font-bold text-xl text-white mb-2">
                                    {project.title}
                                </h3>

                                <p className="font-body text-white/70 text-sm mb-4">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs px-3 py-1 rounded-full border border-white/30 text-white/80"
                                        >
                      {tag}
                    </span>
                                    ))}
                                </div>

                                <button
                                    disabled={!project.link}
                                    className="w-fit flex items-center gap-2 text-lime text-sm font-body font-medium"
                                >
                                    Bientôt disponible
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </button>

                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    )
}