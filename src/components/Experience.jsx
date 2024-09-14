import { motion } from 'framer-motion'
import { DATA } from '../data/resume.jsx'
import ResumeCard from './ResumeCard.jsx'

function Experience() {

    return (
        <motion.section className='flex flex-col gap-[10px] my-[30px] mx-0'
            initial={{
                opacity: 0,
                filter: "blur(7px)"
            }} animate={{
                opacity: "100%",
                filter: "blur(0)"
            }} transition={{
                duration: 1.1
            }}>
            <h3 className="text-2xl font-bold text-[#08090A]">Work Experience</h3>
            {
                DATA.work.map((work) => (
                    <ResumeCard
                        key={work.company}
                        company={work.company}
                        title={work.title}
                        logo={work.logoUrl}
                        description={work.description}
                        startDate={work.start}
                        endDate={work.end}
                    />
                ))
            }
        </motion.section>
    )
}

export default Experience