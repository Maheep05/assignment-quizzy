import { LeaderName } from "./LeaderName";

export function Leaderboard() {
    return (
        <div>
            <div className="flex font-sans shadow-2xl rounded-xl bg-[#4A5451] bg-opacity-60 w-80 flex-col">
                <h1 className="bg-[#475852]  border-2 text-white border-opacity-15  border-white w-80 text-start px-4 py-2 rounded-xl">Leaderboard</h1>
                <div className='flex flex-col justify-center items-center py-2'>
                    <LeaderName id={"01"} xp={"100"} name={"name"} />
                    <LeaderName id={"01"} xp={"100"} name={"name"} />
                    <LeaderName id={"01"} xp={"100"} name={"name"} />
                    <LeaderName id={"01"} xp={"100"} name={"name"} />
                    <LeaderName id={"01"} xp={"100"} name={"name"} />
                </div>

            </div>
        </div>
    )
}