import React from 'react'
import { motion } from 'framer-motion'

function Contact() {
    return (
        <motion.footer
            initial={{
                opacity: 0,
                filter: "blur(7px)"
            }} animate={{
                opacity: "100%",
                filter: "blur(0)"
            }} transition={{
                duration: 3
            }} >
            <section className='flex items-center justify-center flex-col gap-[10px] my-[30px] mx-0'>
                <h3 className='bg-[#171717] text-[#FAFAFA] py-[2px] px-[10px] text-[16px]
                leading-[24px] flex justify-center items-center font-bold rounded-[10px]'>Contact</h3>
                <h1 className='text-center font-bold'>Get In Touch</h1>
                <p className='text-center text-[12px] mb-[24px] max-w-96'>
                    Feel free to reach out at <a href="mailto:lomeli.gerardo@outlook.com" className='text-[#3B82F6]'>lomeli.gerardo@outlook.com</a>{" "} 
                    with your questions, and I'll respond as soon as I can. 
                </p>
            </section>
        </motion.footer>
    )
}

export default Contact