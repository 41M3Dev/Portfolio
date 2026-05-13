import { motion } from 'framer-motion'

const categories = [
    {
        title: 'Frontend',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Vue.js', 'Tailwind CSS', 'Bootstrap'],
    },
    {
        title: 'Backend',
        skills: ['PHP', 'Laravel', 'Python', 'Django', 'Node.js', 'Express'],
    },
    {
        title: 'Base de données',
        skills: ['MySQL', 'PostgreSQL', 'SQL'],
    },
    {
        title: 'Outils & Autres',
        skills: ['Git', 'GitHub', 'Docker', 'Linux', 'API REST', 'WordPress', 'React Native'],
    },
]

export default function Skills() {
    return (
        <section id="skills" className="py-24 px-6">
            <div className="max-w-6xl mx-auto">

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="font-display font-bold text-4xl md:text-5xl text-brand-text mb-16"
                >
                    Compétences
                </motion.h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {categories.map((cat, i) => (
                        <motion.div
                            key={cat.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            whileHover={{ y: -6, borderColor: 'rgba(163, 230, 53, 0.3)' }}
                            className="bg-brand-card border border-brand-border rounded-2xl p-8 transition-colors duration-300"
                        >
                            <p className="text-xs font-medium text-brand-muted/60 uppercase tracking-widest mb-6">
                                {cat.title}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {cat.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="text-sm px-4 py-1.5 rounded-full border border-brand-border text-brand-muted bg-brand-text/5 hover:border-lime/40 hover:text-lime transition-colors duration-300"
                                    >
                    {skill}
                  </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    )
}