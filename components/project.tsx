import { ProjectCard } from "./card-project"
import { Icons } from "./icons"
import BlurFade from "./ui/blur-fade"

const DATA = [
    {
        title: "Chat Collect",
        href: "https://chatcollect.com",
        dates: "Jan 2024 - Feb 2024",
        active: true,
        description:
            "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
        technologies: [
            "Next.js",
            "Typescript",
            "PostgreSQL",
            "Prisma",
            "TailwindCSS",
            "Stripe",
            "Shadcn UI",
            "Magic UI",
        ],
        links: [
            {
                type: "Website",
                href: "https://chatcollect.com",
                icon: <Icons.globe className="size-3" />,
            },
        ],
        image: "",
        video:
            "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
        title: "Magic UI",
        href: "https://magicui.design",
        dates: "June 2023 - Present",
        active: true,
        description:
            "Designed, developed and sold animated UI components for developers.",
        technologies: [
            "Next.js",
            "Typescript",
            "PostgreSQL",
            "Prisma",
            "TailwindCSS",
            "Stripe",
            "Shadcn UI",
            "Magic UI",
        ],
        links: [
            {
                type: "Website",
                href: "https://magicui.design",
                icon: <Icons.globe className="size-3" />,
            },
            {
                type: "Source",
                href: "https://github.com/magicuidesign/magicui",
                icon: <Icons.github className="size-3" />,
            },
        ],
        image: "",
        video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
        title: "llm.report",
        href: "https://llm.report",
        dates: "April 2023 - September 2023",
        active: true,
        description:
            "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
        technologies: [
            "Next.js",
            "Typescript",
            "PostgreSQL",
            "Prisma",
            "TailwindCSS",
            "Shadcn UI",
            "Magic UI",
            "Stripe",
            "Cloudflare Workers",
        ],
        links: [
            {
                type: "Website",
                href: "https://llm.report",
                icon: <Icons.globe className="size-3" />,
            },
            {
                type: "Source",
                href: "https://github.com/dillionverma/llm.report",
                icon: <Icons.github className="size-3" />,
            },
        ],
        image: "",
        video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
        title: "Automatic Chat",
        href: "https://automatic.chat",
        dates: "April 2023 - March 2024",
        active: true,
        description:
            "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
        technologies: [
            "Next.js",
            "Typescript",
            "PostgreSQL",
            "Prisma",
            "TailwindCSS",
            "Shadcn UI",
            "Magic UI",
            "Stripe",
            "Cloudflare Workers",
        ],
        links: [
            {
                type: "Website",
                href: "https://automatic.chat",
                icon: <Icons.globe className="size-3" />,
            },
        ],
        image: "",
        video:
            "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
]

const BLUR_FADE_DELAY = 0.04;

export default function Projects() {
    return (
        <>
            {DATA.map((project, id) => (
                <BlurFade
                    key={project.title}
                    delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                >
                    <ProjectCard
                        href={project.href}
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        dates={project.dates}
                        tags={project.technologies}
                        image={project.image}
                        video={project.video}
                        links={project.links}
                    />
                </BlurFade>
            ))}
        </>
    )
}