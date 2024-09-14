import { Icons } from "../components/icons"
export const DATA = {
    education: [
        {
            company: "UACJ",
            title: "Bachelor's Degree of Computer Science",
            logoUrl: "./UACJ.svg",
            start: "Jul 2022",
            end: "Jan 2023",
        },
    ],
    skills: ["React", "Express.js", "Js", "Typescript", ".NET", "Oracle", "SQL Server", "Docker", "Docker Compose"],
    work: [
        {
            company: "UACJ",
            location: "Remote",
            title: "Scholarship Holder",
            logoUrl: "./UACJ.svg",
            start: "Jul 2022",
            end: "Jan 2023",
            description:
                `Worked as an intern at my university, providing support to professors and students.
                    Responsible for the creation and management of courses,
                    Tracked and managed daily tasks,
                    Assisted professors and students with various academic and administrative needs.`,
        },
        {
            company: "Bosch",
            location: "Presential",
            title: "Developer Intern",
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
                supporting better decision-making. Collaborated with 
                teams and developed technical documentation.`,
        },
        {
            company: "Grupo Palco",
            location: "Presential",
            title: "Jr Programmer",
            logoUrl: "./Palco.png",
            start: "May 2024",
            end: "May 2024",
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
            title: "RAM trainee",
            logoUrl: "./BRP.svg",
            start: "May 2024",
            end: "Jul 2024",
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
            title: "Express.Js Wiki",
            href: "#",
            dates: "Aug 2024 - Sept 2024",
            active: true,
            description:
                `A web-based encyclopedia for Express.js, featuring searchable documentation, user contributions, and a public API, aimed at providing a 
                comprehensive resource for learning and referencing the framework.`,
            technologies: [
                "React",
                "Express.js",
                "Typescript",
                "MySql",
                "Svgl",
                "NodeJs",
                "Lucid Icon",
                "Framer Motion"
            ],
            links: [
                {
                    type: "Website",
                    href: "#",
                    icon: <Icons.globe className="size-3"></Icons.globe>
                },
                {
                    type: "Source",
                    href: "https://github.com/IvanG2002/node-wiki/",
                    icon: <Icons.github className="size-3"></Icons.github>
                },
            ],
            image: "./wikiNode.webp",
        },
        {
            title: "TinyRoute",
            href: "#",
            dates: "Sept 2024 - Oct 2024",
            active: true,
            description:
                `The Link Cut Application enhances efficiency by automating the management of large volumes of linked data. It reduces processing time and human error, and features real-time monitoring, predictive analysis, 
                and data visualization to streamline workflows and improve decision-making.`,
            technologies: [
                "React",
                "framer motion",
                "TailwindCSS",
                "Shadcn",
                "Lucid Frame",
                "Express.js",
                "Typescript",
                "SQL",
                "Turso"
            ],
            links: [
                {
                    type: "Website",
                    href: "#",
                    icon: <Icons.globe className="size-3"></Icons.globe>
                },
                {
                    type: "Source",
                    href: "https://github.com/IvanG2002/TinyRoute",
                    icon: <Icons.github className="size-3"></Icons.github>
                },
            ],
            image: "./tinyRoute.webp",
        },
    ]
}