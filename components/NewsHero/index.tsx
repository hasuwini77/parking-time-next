const NewsHero = () => {
    return (
        <div className="w-full h-[50vh] relative bg-cover bg-[50%_50%] bg-[url('/images/newsHero.png')] flex justify-start items-start overflow-hidden">
            <div className="w-full md:w-2/5 h-full bg-[rgba(0,0,0,0.2)] backdrop-blur-[2px] md:backdrop-blur-[10px] p-5 md:p-7 flex flex-col justify-center items-start text-white">
                <span className="list-disc text-xl list-inside pl-0 ml-0">
                    <span className="text-red text-[27px]">&bull;</span> News</span>
                <span className="text-5xl font-[530] leading-tight pt-3">
                We are Tranforming <br/>
                Parking Experiences
                </span>
            </div>
        </div>
    )
}

export default NewsHero