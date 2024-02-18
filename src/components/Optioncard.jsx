export function Optioncard({ title, description, heading }) {
    return (
        <div className="bg-[#404040] font-sans shadow-2xl border-2 bg-opacity-75 border-opacity-15 border-white rounded-xl h-72 w-96">
            <div className="flex p-2 flex-col justify-between">
                <h1 className="text-[#6A6C6B] text-md">{heading}</h1>



                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-40 h-40">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                </svg>

                <div className="flex flex-col gap-3">
                    <h1 className="text-white font-semibold text-4xl">{title}</h1>
                    <p className="text-gray-300 text-md">{description}</p>
                </div>
            </div>
        </div>
    )
}