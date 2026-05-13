import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

const infos = [
    {
        label: 'Email',
        value: 'contact@adjassaweb.fr',
        href: 'mailto:contact@adjassaweb.fr',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
            </svg>
        ),
    },
    {
        label: 'LinkedIn',
        value: 'linkedin.com/in/aimeadj',
        href: 'https://www.linkedin.com/in/aimeadj',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
            </svg>
        ),
    },
    {
        label: 'GitHub',
        value: 'github.com/aimeadj',
        href: 'https://github.com/aimeadj',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
        ),
    },
]

export default function Contact() {
    const formRef = useRef()
    const [status, setStatus] = useState('idle')

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('loading')

        try {
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            setStatus('success')
            formRef.current.reset()
        } catch (err) {
            setStatus('error')
        }
    }

    return (
        <section id="contact" className="py-24 px-6">
            <div className="max-w-6xl mx-auto">

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="font-display font-bold text-4xl md:text-5xl text-brand-text mb-16"
                >
                    Contact
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* Infos gauche */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col gap-8"
                    >
                        <div>
                            <h3 className="font-display font-bold text-2xl text-brand-text mb-4">
                                Travaillons ensemble
                            </h3>
                            <p className="font-body text-brand-muted leading-relaxed">
                                Je suis disponible en alternance à partir de septembre 2026.
                                N'hésitez pas à me contacter pour discuter de vos projets ou
                                d'une opportunité d'alternance.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4">
                            {infos.map((info) => (
                                <a
                                    key={info.label}
                                    href={info.href}
                                    target={info.label !== 'Email' ? '_blank' : undefined}
                                    rel="noreferrer"
                                    className="flex items-center gap-4 text-brand-muted hover:text-violet transition-colors duration-300 group"
                                >
                                    <div className="w-10 h-10 rounded-xl border border-brand-border flex items-center justify-center group-hover:border-violet/40 transition-colors duration-300">
                                        {info.icon}
                                    </div>
                                    <div>
                                        <p className="text-xs text-brand-muted/60 mb-0.5">{info.label}</p>
                                        <p className="text-sm text-brand-text">{info.value}</p>
                                    </div>
                                </a>
                            ))}
        </div>
</motion.div>

{/* Formulaire droite */}
    <motion.form
        ref={formRef}
        onSubmit={handleSubmit}
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-4"
    >
        <div>
            <label className="text-xs text-brand-muted/60 uppercase tracking-widest mb-2 block">
                Nom
            </label>
            <input
                type="text"
                name="from_name"
                required
                placeholder="Votre nom"
                className="w-full px-4 py-3 rounded-xl border border-brand-border bg-brand-card text-brand-text placeholder:text-brand-muted/40 focus:outline-none focus:border-violet/40 transition-colors duration-300 font-body text-sm"
            />
        </div>

        <div>
            <label className="text-xs text-brand-muted/60 uppercase tracking-widest mb-2 block">
                Email
            </label>
            <input
                type="email"
                name="from_email"
                required
                placeholder="votre@email.com"
                className="w-full px-4 py-3 rounded-xl border border-brand-border bg-brand-card text-brand-text placeholder:text-brand-muted/40 focus:outline-none focus:border-violet/40 transition-colors duration-300 font-body text-sm"
            />
        </div>

        <div>
            <label className="text-xs text-brand-muted/60 uppercase tracking-widest mb-2 block">
                Message
            </label>
            <textarea
                name="message"
                required
                rows={5}
                placeholder="Votre message..."
                className="w-full px-4 py-3 rounded-xl border border-brand-border bg-brand-card text-brand-text placeholder:text-brand-muted/40 focus:outline-none focus:border-violet/40 transition-colors duration-300 font-body text-sm resize-none"
            />
        </div>

        <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full py-3 rounded-xl bg-violet hover:bg-violet-dark text-brand-text font-body font-medium transition-colors duration-300 disabled:opacity-50"
        >
            {status === 'loading' ? 'Envoi en cours...' : 'Envoyer le message'}
        </button>

        {status === 'success' && (
            <p className="text-sm text-center text-green-500">
                Message envoyé avec succès !
            </p>
        )}
        {status === 'error' && (
            <p className="text-sm text-center text-red-500">
                Une erreur est survenue. Réessayez.
            </p>
        )}
    </motion.form>

</div>
</div>
</section>
)
}