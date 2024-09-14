
function ProjectCard({ title, dates, description, technologies, image, links }) {
    return (
        <article className='card rounded-[8px] border bottom-[#E5E7EB] flex flex-col'>
            <img loading='lazy' className='rounded-tl-[8px] rounded-tr-[8px] rounded-bl-none rounded-br-none' src={image} alt={title} />
            <section className='max-w-[300px] mx-auto flex flex-col p-2'>
                <h1 className='text-[14px] font-bold'>{title}</h1>
                <h3 className='text-[12px] font-bold'>{dates}</h3>
                <p className='text-[9px]'>{description}</p>
                <div className='flex flex-wrap gap-[3px] mb-2 mt-2'>
                    {
                        technologies.map((technology, index) => (
                            <article key={index} className="bg-[#F5F5F5] text-[#171717]
                            px-[10px] text-[10px] rounded-[6px] flex justify-center items-center font-bold">
                                <p>{technology}</p>
                            </article>
                        ))
                    }
                </div>
                <div className='flex flex-wrap gap-[3px] mt-auto'>
                    {links && links.length > 0 && links?.map((link, index) => (
                        <article key={index} className="text-[#F5F5F5] bg-[#171717]
                            px-[3px] py-[2px] text-[10px] rounded-[4px] flex gap-2 items-center font-bold">
                            <div>{link.icon}</div><a href={link.href} target="_blank"><span>{link.type}</span></a>
                        </article>
                    ))
                    }
                </div>
            </section>
        </article>
    )
}

export default ProjectCard