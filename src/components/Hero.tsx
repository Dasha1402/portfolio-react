import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import styles from './Hero.module.css';

export function Hero() {
    return (
        <section className={styles.hero} id="home">

            {/* Светящиеся элементы на фоне */}
            <div className={styles.glowTop}></div>
            <div className={styles.glowBottom}></div>

            <div className={styles.container}>

                {/* Левая часть: Текст */}
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className={styles.greeting}>Привет, я Дарья 👋 </span>
                    <h1 className={styles.title}>
                        Frontend <br />
                        <span>Разработчик</span>
                    </h1>
                    <p className={styles.description}>
                        Создаю современные и удобные интерфейсы на React и TypeScript.
                        Люблю чистый код, плавные анимации и решать сложные задачи.
                    </p>

                    <div className={styles.buttons}>
                        <a href="#projects" className={styles.btnPrimary}>
                            Смотреть проекты <ArrowRight size={20} />
                        </a>
                        <a href="#" className={styles.btnSecondary}>
                            Скачать резюме <Download size={20} />
                        </a>
                    </div>
                </motion.div>

                {/* Правая часть: Фото */}
                <motion.div
                    className={styles.imageWrapper}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    <img src="/img/my-photo.webp" alt="Дарья" />
                </motion.div>

            </div>
        </section>
    );
}