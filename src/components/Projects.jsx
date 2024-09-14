import { motion } from 'framer-motion'
import { DATA } from '../data/resume'
import ProjectCard from './ProjectCard'

function Projects() {
    return (
        <motion.section
            initial={{
                opacity: 0,
                filter: "blur(7px)"
            }} animate={{
                opacity: "100%",
                filter: "blur(0)"
            }} transition={{
                duration: 2.5
            }} >
            <div className='my-[30px] mx-0 flex items-center justify-center flex-col'>
                <h1 className='bg-[#171717] text-[#FAFAFA] py-[2px] px-[10px] text-[16px] 
                leading-[24px] rounded-[10px] flex justify-center items-center font-bold'>My Projects</h1>
                <h3 className='text-[32px] text-center font-bold'>Check out my latest work.</h3>
                <p className='text-center text-sm'>I've worked on a variety of projects,
                    from simple websites to complex web applications.
                    Here are a few of my favorites.</p>
            </div>
            <div className='grid lg:grid-cols-2 gap-[10px] mb-[10px] sm:grid-cols-1'>
                {
                    DATA.projects.map((project) => (
                        <ProjectCard
                            key={project.title}
                            dates={project.dates}
                            description={project.description}
                            image={project.image}
                            technologies={project.technologies}
                            links={project.links}
                            title={project.title}
                        />
                    ))
                }
            </div>
        </motion.section>
    )
}

export default Projects