import medal from '../assets/medal.png';

export function LeaderName({ id, name, xp }) {
    return (
        <div className='py-2'>
            <div className="bg-[#475852] border-2 text-white border-opacity-15  border-white w-72 text-start px-1 py-2 rounded-xl">
                <div className='flex justify-between items-center '>
                    <div className='flex items-center gap-1'>
                        <span className='text-[#EDFF87]'>{id}.</span>
                        <img src={medal} alt="" className='h-5 w-5' />
                        <span class="w-4 h-4 bg-white rounded-full"></span>
                        <span>{name}</span>

                    </div>
                    <div className='flex items-center gap-1'>
                        <h1 className='text-white'>{xp}/223</h1>
                        <h1 className='text-[#EDFF87]'>XP</h1>
                    </div>
                </div>


            </div>


        </div>
    )
}