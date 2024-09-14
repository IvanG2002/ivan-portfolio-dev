import { ChevronDown, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'

function ResumeCard({ company, title, startDate, endDate, description, logo }) {
    const [isOpen, setIsOpen] = useState(false)
    const variants = {
        open: { height: 'auto', opacity: 1 },
        closed: { height: 0, opacity: 0 },
    }
    return (
        <article onClick={() => setIsOpen(!isOpen)} key={company} className='flex gap-[25px] text-sm text-[#08090A] cursor-pointer'>
            <img
                className='h-[40px] w-[40px] bg-[#FAFAFA] rounded-full border border-[#E5E7EB]'
                src={logo}
                alt={`${company} logo`}
                title={`${company} logo`}
            />
            <div className='flex flex-col gap-[7px]'>
                <header className='flex justify-between'>
                    <div className='text-[12px]'>
                        <h4 className='font-bold flex items-center'>
                            <span className='mr-[5px]'>{company}</span>
                            {isOpen ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
                        </h4>
                        <h5>{title}</h5>
                    </div>
                    <div className='text-[12px] text-[#737373]'>
                        <span>{startDate}</span> - <span>{endDate}</span>
                    </div>
                </header>
                <motion.p
                    initial="closed"
                    animate={isOpen ? "open" : "closed"}
                    variants={variants}
                    transition={{ duration: 0.3 }}
                    className='text-[12px] overflow-hidden'
                >
                    {description}
                </motion.p>
            </div>
        </article>
    )
}

export default ResumeCard