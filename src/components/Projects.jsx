import { motion } from 'framer-motion'

const projects = [
    {
        id: 1,
        title: 'Mini ERP',
        description: "Application de gestion d'entreprise complète : employés, congés, salaires, finances, stocks, fournisseurs et commandes. Authentification avec rôles (superadmin, admin, RH, finance, manager...).",
        tags: ['Laravel', 'PHP', 'MySQL', 'Docker'],
        link: 'https://erp.adjassaweb.fr',
        image: '/project/erp.png',
    },
    {
        id: 2,
        title: 'Carte',
        description: "Application web de recherche et de découverte de restaurants sur une carte interactive. Localisation en temps réel, filtres de recherche et affichage des établissements à proximité.",
        tags: ['React', 'JavaScript', 'Vite'],
        link: 'https://carte.adjassaweb.fr',
        image: '/project/carte.png',
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
                            {/* Image */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="absolute inset-0 w-full h-full object-cover"
                            />

                            {/* Overlay sombre permanent */}
                            <div className="absolute inset-0 bg-black/20" />

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


                                <a href={project.link}
                                target="_blank"
                                rel="noreferrer"
                                className="w-fit flex items-center gap-2 text-lime text-sm font-body font-medium"
                                >
                                Voir le projet
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>

                        </div>
                        </motion.div>
                        ))}
                </div>

            </div>
        </section>
    )
}