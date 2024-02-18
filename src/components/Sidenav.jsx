import React, { useState } from 'react';
import { Leaderboard } from './Leaderboard';
import { ProgressCard } from './ProgressCard';

export function Sidenav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='relative'>
            {/* Open button */}
            {!isOpen && (
                <div onClick={toggleMenu} className='cursor-pointer md:hidden absolute top-8 left-8 z-20'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="yellow" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                    </svg>
                </div>
            )}

            {/* Sidenav */}
            <div className={`sm:absolute md:relative top-0 left-0 z-10 px-4 border-r-2 border-slate-800 shadow-2xl bg-gradient-to-b from-[#354940] to-[#2D2D2D] font-sans w-[360px] h-full transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
              
                <div className="flex p-4 items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-5 h-5 bg-white rounded-full"></div>
                        <h1 className="text-xl text-white">Chat<b>SAT</b></h1>
                    </div>
                    {/* Close button */}
                    <div onClick={toggleMenu} className="cursor-pointer md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="yellow" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>

                {/* Other sidebar content */}
                <div>
                    <button className="bg-[#475852] border-2 text-white shadow-2xl border-opacity-15 border-white w-full text-start px-4 py-2 rounded-xl mb-2 md:mb-4">New Thread</button>
                </div>
                <ProgressCard done={"4"} total={"7"} xp={0} />
                <Leaderboard />
                <div className='flex p-4 items-center gap-3'>
                    <div className="w-10 h-10 bg-white rounded-full"></div>
                    <h1 className='text-white text-xl'>Name</h1>
                </div>
                <div className='flex px-4 gap-1 '>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                    </svg>
                    <h1 className='text-white text-sm'>Sign out</h1>
                </div>
            </div>
        </div>
    )
}
