import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import medal from '../assets/medal.png'

export function ProgressCard({done,total,xp}) {


    return (
        <div className='flex font-sans my-4 gap-10 px-4 py-4 bg-[#475852] border-2 border-opacity-15 border-white w-80 shadow-2xl  rounded-xl'>

            <div className="h-20 w-20">
                <CircularProgressbar
                    value={done / total * 100} // Calculate the percentage of completion (4 out of 7)
                    text={`${done}/${total}`} // Display the text "4/7"
                    styles={{
                        root: {},
                        path: {
                            stroke: `rgba(237, 254, 134, ${(done / total) * 100})`, // Set the stroke color based on completion percentage
                            strokeLinecap: 'round',
                            transition: 'stroke-dashoffset 0.5s ease 0s',
                        },
                        trail: {
                            stroke: '#394440',
                            strokeLinecap: 'round',
                            transform: 'rotate(0.25turn)',
                            transformOrigin: 'center center',
                        },
                        text: {
                            fill: '#EDFF87',
                            fontSize: '30px',
                        },
                        background: {
                            fill: '#394440',
                        },
                    }}
                />
            </div>

            <div className='flex flex-col gap-2 py-1'>
                <div className='flex gap-2'>
                    <img src={medal} alt="" className='text-[#EDFF87] h-10 w-10' />
                    <h1 className='text-white'>{xp}/223</h1>
                    <h1 className='text-[#EDFF87]'>XP</h1>
                </div>

                <div className='text-end'>
                <button className="bg-[#73847e] border-2 text-[#EDFF87] bg-opacity-75 border-opacity-15  border-white text-start px-3 py-1 rounded-xl text-sm">Take a Quiz</button>
                </div>
            </div>


        </div>
    )
}