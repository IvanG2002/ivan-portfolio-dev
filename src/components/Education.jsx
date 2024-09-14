import { motion } from 'framer-motion'
import { DATA } from '../data/resume.jsx'
import EducationCard from './EducationCard'

function Education() {
    return (
        <motion.section
            initial={{
                opacity: 0,
                filter: "blur(7px)"
            }} animate={{
                opacity: "100%",
                filter: "blur(0)"
            }} transition={{
                duration: 1.6
            }}
            className='flex gap-[10px] flex-col my-[30px] mx-0'>
            <h3 className="text-2xl font-bold text-[#08090A]">Education</h3>
            {
                DATA.education.map((education) => (
                    <EducationCard
                        key={education.company}
                        logo={education.logoUrl}
                        company={education.company}
                        title={education.title}
                        startDate={education.start}
                        endDate={education.end}
                    />
                ))
            }

        </motion.section>
    )
}

export default Education