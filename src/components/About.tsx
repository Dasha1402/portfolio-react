import { motion } from 'framer-motion';
import styles from './About.module.css';

export function About() {
    const skills = [
        "HTML5", "CSS3", "JavaScript", "TypeScript",
        "React", "Git", "Vite", "Адаптивная верстка",
        "CSS Modules", "REST API", "Figma"
    ];

    return (
        <section className={styles.about} id="about">
            <div className={styles.container}>

                {/* Левая часть: Текст */}
                <motion.div
                    className={styles.textContent}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>Обо <span>мне</span></h2>
                    <p>
                        Я начинающий Frontend-разработчик. Мой путь в IT начался с желания создавать удобные
                        и красивые интерфейсы, которые решают реальные задачи пользователей.
                    </p>
                    <p>
                        За время обучения я реализовала несколько полноценных проектов: от сайта котокафе
                        с интерактивными элементами до сложного многостраничного сайта для Event-агентства
                        с умным калькулятором.
                    </p>
                    <p>
                        Постоянно развиваюсь, изучаю современные технологии и готова применять свои знания
                        на реальных коммерческих проектах.
                    </p>
                </motion.div>

                {/* Правая часть: Навыки */}
                <motion.div
                    className={styles.skillsContainer}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h3>Мои <span style={{ color: 'var(--accent-color)' }}>навыки</span></h3>
                    <div className={styles.skillsGrid}>
                        {skills.map((skill, index) => (
                            <span key={index} className={styles.skillTag}>
                                {skill}
                            </span>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}