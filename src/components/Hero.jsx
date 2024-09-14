import { motion } from 'framer-motion'

function Hero() {
    return (
        <motion.section
            className='flex flex-col gap-[10px]'
            initial={{ opacity: 0, filter: "blur(7px)" }}
            animate={{ opacity: 1, filter: "blur(0)" }}
            transition={{ duration: 0.2 }}
        >
            <h1 className="text-6xl text-[#08090A] font-bold">
                Hi there, I'm Ivan 👋
            </h1>
            <p className="text-[#08090A]">
                I'm a Software Developer focused on growing as a full-stack developer, 
                with expertise in JavaScript and C#. I work with frameworks such as React, 
                .NET, and Express.js.
            </p>
        </motion.section>
    )
}

export default Hero