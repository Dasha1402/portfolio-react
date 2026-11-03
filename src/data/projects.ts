export interface Project {
    id: number;
    title: string;
    description: string;
    tech: string[];
    github: string;
    live: string;
    images: string[];
}

export const projectsData: Project[] = [
    {
        id: 1,
        title: "The Cat's Cup",
        description: "Сайт котокафе с интерактивными карточками котов, выезжающими облачками при наведении и строгой валидацией форм.",
        tech: ["React", "TypeScript", "CSS Modules", "Framer Motion"],
        github: "https://github.com/Dasha1402/kotokafe-react",
        live: "https://dasha1402.github.io/kotokafe-react/",
        images: [
            "/img/kotokafe.png",
            "/img/kotokafe_2.png",
            "/img/kotokafe_3.png"
        ]
    },
    {
        id: 2,
        title: "Event Agency",
        description: "Многостраничный сайт ивент-агентства с умным калькулятором стоимости, слайдерами и кастомным лайтбоксом.",
        tech: ["React", "TypeScript", "React Router", "Swiper"],
        github: "https://github.com/Dasha1402/event-react",
        live: "https://dasha1402.github.io/event-react/",
        images: [
            "/img/Event.png",
            "/img/Event_2.png",
            "/img/Event_3.png"
        ]
    }
];