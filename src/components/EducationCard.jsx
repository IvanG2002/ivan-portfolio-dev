
function EducationCard({ company, title, logo, startDate, endDate }) {
    return (
        <article className='flex gap-[25px] text-[#08090A]'>
            <img className='h-[40px] w-[40px] bg-[#FAFAFA] rounded-full border border-[#E5E7EB]'
                src={logo} alt={`${logo} logo`} />
            <div className='flex flex-col gap-[7px]'>
                <header className='flex justify-between'>
                    <aside className='text-[12px]'>
                        <div className='flexm items-center justify-between'>
                            <h4 className='font-bold'>{company}</h4>
                            <div className='text-[12px] text-[#737373]'>
                                <span>{startDate} - {endDate}</span>
                            </div>
                        </div>
                        <p className='text-[12px]'>{title}</p>
                    </aside>
                </header>
            </div>
        </article>
    )
}

export default EducationCard