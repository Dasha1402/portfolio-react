import { motion } from 'framer-motion'; // <-- Добавили импорт анимации
import { Code, ExternalLink } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { projectsData } from '../data/projects';
import { BrowserMockup } from './BrowserMockup';
import styles from './Projects.module.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function Projects() {
    return (
        <section className={styles.projects} id="projects">
            <div className={styles.container}>

                {/* Анимируем заголовок */}
                <motion.h2
                    className="section-title"
                    style={{ textAlign: 'center', marginBottom: '60px' }}
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Мои проекты
                </motion.h2>

                <div className={styles.grid}>
                    {projectsData.map((project, index) => (

                        /* Анимируем сами карточки: они будут появляться по очереди (delay) */
                        <motion.div
                            key={project.id}
                            className={styles.card}
                            initial={{ opacity: 0, y: 50 }} // Начальное состояние (прозрачные и чуть ниже)
                            whileInView={{ opacity: 1, y: 0 }} // Появление при прокрутке
                            viewport={{ once: true, amount: 0.2 }} // Срабатывает один раз, когда видно 20% карточки
                            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }} // Задержка для каждой следующей
                        >

                            <div className={styles.imageWrapper}>
                                <BrowserMockup>
                                    <Swiper
                                        modules={[Navigation, Pagination]}
                                        spaceBetween={0}
                                        slidesPerView={1}
                                        navigation
                                        pagination={{ clickable: true }}
                                        style={{ width: '100%' }}
                                    >
                                        {project.images.map((img, i) => (
                                            <SwiperSlide key={i}>
                                                <img
                                                    src={img}
                                                    alt={`${project.title} - скриншот ${i + 1}`}
                                                    style={{ width: '100%', display: 'block' }}
                                                />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </BrowserMockup>
                            </div>

                            <div className={styles.content}>
                                <h3 className={styles.title}>{project.title}</h3>
                                <p className={styles.description}>{project.description}</p>

                                <div className={styles.techList}>
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className={styles.techTag}>{tech}</span>
                                    ))}
                                </div>

                                <div className={styles.links}>
                                    <a href={project.github} target="_blank" rel="noreferrer" className={styles.link}>
                                        <Code size={20} /> GitHub
                                    </a>
                                    <a href={project.live} target="_blank" rel="noreferrer" className={styles.link}>
                                        <ExternalLink size={20} /> Живой сайт
                                    </a>
                                </div>
                            </div>

                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}