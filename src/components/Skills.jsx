import { motion } from 'framer-motion'
import { DATA } from '../data/resume'
import Badge from './ui/Badge'

function Skills() {
    return (
        <motion.section initial={{
            opacity: 0,
            filter: "blur(7px)"
        }} animate={{
            opacity: "100%",
            filter: "blur(0)"
        }} transition={{
            duration: 2
        }} className='flex gap-[10px] flex-col my-[30px] mx-0'>
            <h3 className="text-2xl font-bold text-[#08090A]">Skills</h3>
            <div className='flex flex-wrap gap-[4px]'>
                {DATA.skills.map((skill) => (
                    <Badge key={skill} skill={skill} />
                ))}
            </div>
        </motion.section>
    )
}

export default Skills