
function Badge({ skill }) {
    return (
        <article
            className='bg-[#171717] 
        text-[#FAFAFA]
        py-[2px] px-[10px] 
        text-[12px] 
        rounded-[6px] 
        flex justify-center 
        items-center font-bold
        leading-[16px]'>
            <p>{skill}</p>
        </article>
    )
}

export default Badge