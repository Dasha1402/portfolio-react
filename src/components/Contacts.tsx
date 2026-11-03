import { motion } from 'framer-motion';
import { Mail, Send, GitBranch, Phone, MessageCircle } from 'lucide-react';
import styles from './Contacts.module.css';

export function Contacts() {
    return (
        <section className={styles.contacts} id="contacts">
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={styles.title}>Давайте <span>работать</span> вместе</h2>
                    <p className={styles.description}>
                        Я открыта к интересным проектам, стажировкам и предложениям о работе.
                        Если вам нужен целеустремленный разработчик, который любит свое дело — напишите мне!
                    </p>

                    <div className={styles.socials}>

                        {/* Телефон (замени на свой реальный номер) */}
                        <a href="tel:+79620135080" className={styles.socialBtn}>
                            <Phone size={20} /> +7 (962) 013-50-80
                        </a>

                        {/* Почта (замени на свою) */}
                        <a href="mailto:daralapina.lapina@yandex.ru" className={styles.socialBtn}>
                            <Mail size={20} /> Написать на почту
                        </a>

                        {/* MAX (замени ссылку на свой профиль) */}
                        <a href="https://max.ru/u/f9LHodD0cOJRq2v_UlJDOQjng5E3U7fcuvsJcUm7YKlmIIn01B4L02HpC6U" target="_blank" rel="noreferrer" className={styles.socialBtn}>
                            <MessageCircle size={20} /> MAX
                        </a>

                        {/* Telegram (замени на свой) */}
                        <a href="https://t.me/dariyadsss" target="_blank" rel="noreferrer" className={styles.socialBtn}>
                            <Send size={20} /> Telegram
                        </a>

                        {/* GitHub */}
                        <a href="https://github.com/Dasha1402" target="_blank" rel="noreferrer" className={styles.socialBtn}>
                            <GitBranch size={20} /> GitHub
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}