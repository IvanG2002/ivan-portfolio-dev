import { Icons } from "../components/icons"
export const DATA = {
    education: [
        {
            company: "UACJ",
            title: "Bachelor's Degree of Computer Science",
            logoUrl: "./UACJ.svg",
            start: "2020",
            end: "2025",
        },
    ],
    skills: ["React", "Angular", "Express.js", "Js", "Typescript", ".NET", "Oracle", "SQL Server", "Docker", "Docker Compose", "Power Bi"],
    work: [
        {
            company: "UACJ",
            location: "Remote",
            title: "Scholarship Holder",
            logoUrl: "./UACJ.svg",
            start: "Jul 2022",
            end: "Jan 2023",
            description:
                `Worked as an intern at my university, providing support to professors, students and courses web app.
                    Responsible for the creation and management of courses,
                    Tracked and managed daily tasks,
                    Assisted professors and students with various academic and administrative needs.`,
        },
        {
            company: "Bosch",
            location: "Presential",
            title: "Software Developer Internship",
            logoUrl: "./bosch.svg",
            start: "Jun 2023",
            end: "May 2024",
            description:
                `Developed and led key .NET applications, 
                including Tool Control and Scrap Report, 
                which improved efficiency and reduced scrap. 
                Implemented CRUD functionalities to 
                enhance data management and contributed 
                to data visualizations using Oracle and Power BI, 
                supporting better decision making.`,
        },
        {
            company: "Grupo Palco",
            location: "Presential",
            title: "Software Engineer",
            logoUrl: "./Palco.png",
            start: "Jun 2024",
            end: "Jul 2024",
            description:
                `Developed and maintained software applications using HTML, CSS,
                    JavaScript, ASP.NET, and Windows Forms.
                    Collaborated with the team to implement new features,
                    fix bugs, and conduct code reviews. Actively participated in daily stand-up meetings.
                    Departed due to a workforce reduction.`,
        },
        {
            company: "BRP",
            location: "Presential",
            title: "Software Developer Internship",
            logoUrl: "./BRP.svg",
            start: "Aug 2024",
            end: "Oct 2024",
            description:
                `Developed SCADA systems using Ignition,
                    focusing on Perspective and Vision modules.
                    Utilized Python for scripting and designed web interfaces with pure CSS.
                    Created data visualizations and dashboards to display SQL Server data,
                    enhancing monitoring and control capabilities.`,
        }
    ],
    projects: [
        {
            title: "🌍 Express.Js Wiki",
            href: "#",
            dates: "Aug 2024 - Sept 2024",
            active: true,
            description:
                `A web-based encyclopedia for Express.js, featuring searchable documentation, user contributions, and a public API, aimed at providing a 
                comprehensive resource for learning and referencing the framework.`,
            technologies: [
                "Next.js",
                "Javascript",
                "Svgl",
                "lucide-react",
                "tailwindcss"
            ],
            links: [
                {
                    type: "Website",
                    href: "https://node-wiki-nextjs.vercel.app/",
                    icon: <Icons.globe className="size-3"></Icons.globe>
                },
                {
                    type: "Source",
                    href: "https://github.com/IvanG2002/nodejs-wiki-nextjs",
                    icon: <Icons.github className="size-3"></Icons.github>
                },
            ],
            image: "./nodejs-wiki.webp",
        },
        {
            title: "🔗 TinyRoute",
            href: "#",
            dates: "Sept 2024 - Oct 2024",
            active: true,
            description:
                `The Link Cut Application enhances efficiency by automating the management of large volumes of linked data. It reduces processing time and human error, and features real-time monitoring, predictive analysis, 
                and data visualization to streamline workflows and improve decision-making.`,
            technologies: [
                "Next.js",
                "Typescript",
                "framer motion",
                "TailwindCSS",
                "shadcn/ui",
                "lucide-react",
                "Prisma",
                "Supabase",
            ],
            links: [
                {
                    type: "Website",
                    href: "https://tiny-route-app.vercel.app/",
                    icon: <Icons.globe className="size-3"></Icons.globe>
                },
                {
                    type: "Source",
                    href: "https://github.com/IvanG2002/tiny-route-nextjs",
                    icon: <Icons.github className="size-3"></Icons.github>
                },
            ],
            image: "./tinyRoute.webp",
        },
        {
            title: "🤖 Stock.ai",
            href: "#",
            dates: "Nov 2024 - Dec 2024",
            active: true,
            description:
                `Stock.ai is a cutting-edge text-to-image generator 
                powered by the serverless Stable Diffusion 3.5 Large model 
                via the Hugging Face API. It enables users to transform text 
                prompts into stunning visuals effortlessly,
                perfect for creators seeking fast, high-quality 
                results without the need for complex infrastructure.`,
            technologies: [
                "Next.js",
                "Typescript",
                "lucide-react",
                "shadcn/ui",
                "Hugging Face"
            ],
            links: [
                {
                    type: "Website",
                    href: "https://stockai-beta.vercel.app/",
                    icon: <Icons.globe className="size-3"></Icons.globe>
                },
                {
                    type: "Source",
                    href: "https://github.com/IvanG2002/stock.ai",
                    icon: <Icons.github className="size-3"></Icons.github>
                },
            ],
            image: "./stockAi.webp",
        },
        {
            title: "💼 Job Seeker",
            href: "#",
            dates: "Oct 2024 - Nov 2024",
            active: true,
            description:
                `Stay organized and efficient in your job search with 
                an all-in-one tool to track applications, 
                Focus on landing your next opportunity.`,
            technologies: [
                "Next.js",
                "Typescript",
                "tRPC",
                "Prisma",
                "Tailwind CSS",
                "Framer motion",
                "shadcn/ui",
                "lucide-react",
                "Supabase",
                "PostgreSQL",
                "NextAuth.js"
            ],
            links: [
                {
                    type: "Website",
                    href: "#",
                    icon: <Icons.globe className="size-3"></Icons.globe>
                },
                {
                    type: "Source",
                    href: "https://github.com/IvanG2002/job-seeker",
                    icon: <Icons.github className="size-3"></Icons.github>
                },
            ],
            image: "./JobSeeker.webp",
        },
        {
            title: "🍿 Watchy",
            href: "#",
            dates: "Oct 2024 - Nov 2024",
            active: true,
            description:
                `A scalable movie organization app hosted on AWS, 
                allowing users to manage and categorize their movie 
                collections effortlessly. With AWS services like EC2, S3, and RDS, 
                it ensures high performance, security, and seamless scaling as your collection grows. 
                Ideal for movie enthusiasts and collectors.`,
            technologies: [
                "React",
                "Typescript",
                "S3 Aws",
                "Cloud Front Aws",
                "Aws lambdas",
                "Express.js",
                "lucide-react",
                "Api gateway Aws",
                "Supabase",
                "PostgreSQL",
                "Aws Cognito",
                "Framer motion"
            ],
            links: [
                {
                    type: "Website",
                    href: "#",
                    icon: <Icons.globe className="size-3"></Icons.globe>
                },
                {
                    type: "Source",
                    href: "#",
                    icon: <Icons.github className="size-3"></Icons.github>
                },
            ],
            image: "./watchy.webp",
        },
    ]
}