import { motion } from "framer-motion"

function About() {
    return (
        <motion.section className="my-[30px] mx-0 flex gap-[5px] flex-col"
            initial={{
                opacity: 0,
                filter: "blur(7px)"
            }} animate={{
                opacity: "100%",
                filter: "blur(0)"
            }} transition={{
                duration: 0.5
            }}
        >
            <h3 className="text-2xl font-bold text-[#08090A]">About</h3>
            <p className="text-[#737373] text-sm">
                I'm a motivated<strong className="text-[#111827]">{" "}<u>Full Stack Developer</u>{" "}</strong>
                with 2+ years specializing in development with the .NET, React.js, Express.js. I deliver high-quality solutions,
                known for my strong work ethic, adaptability, and diverse skills. I excel in both independent
                and team environments, <strong className="text-[#111827]"><u>developing and maintaining complex systems</u></strong> while optimizing workflows
                and enhancing user experiences.
            </p>
        </motion.section>
    )
}

export default About