import { Optioncard } from "./Optioncard";

export function Home(){
    return (
        <div className="px-20 font-sans">
            <div className="flex py-6 gap-4 flex-col">
                <span className="text-white font-semibold text-5xl">Hey,<span className="text-[#EDFF87]">Name!</span></span>
                <span className="text-white font-semibold text-5xl">How's your prep for the <span className="text-[#EDFF87]">March SAT</span></span>
            </div>

            <div className="flex flex-wrap gap-10">
                <Optioncard title={"Practice"} heading={"last practical linear etc etc 28/02/23"} description={"a description of above parameter goes here"}/>
                <Optioncard title={"Practice"} heading={"last practical linear etc etc 28/02/23"} description={"a description of above parameter goes here"}/>
                <Optioncard title={"Practice"} heading={"last practical linear etc etc 28/02/23"} description={"a description of above parameter goes here"}/>
                <Optioncard title={"Practice"} heading={"last practical linear etc etc 28/02/23"} description={"a description of above parameter goes here"}/>
            </div>
        </div>
    )
}