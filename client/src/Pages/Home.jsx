import React, { useState, useEffect } from 'react'
import { CgProfile } from "react-icons/cg";
import SpensingData from '../assets/data.js';

const Home = () => {

    const [balance, setBalance] = useState(0);
    const [forum, setForum] = useState(false);

    const fetchData = () => {
        const TotalAmount = SpensingData.reduce((total, item) => total + item.amount, 0);
        setBalance(TotalAmount);
    }

    useEffect(() => {
        fetchData();
    }, [])


    const moneyAdded = () => {

        setBalance(balance + 100);
    }

    return (
        <section className="h-screen py-14 bg-white dark:bg-[#0b1727] text-indigo-900 dark:text-white overflow-hidden">
            <div className="container mx-auto px-4 flex items-center justify-center">
                <div className="w-full max-w-lg bg-white dark:bg-slate-800 rounded-2xl shadow-xl">
                    <div className="Flex flex-col p-2 lg:p-7">
                        <div className="header flex h-[5rem] justify-between items-center p-4 font-semibold bg-slate-600 rounded-md" >
                            <div className="" >iSpent</div>
                            <div>Username</div>
                            <div className="text-xl" ><CgProfile /></div>
                        </div>

                        <div className="main h-[43rem] w-full flex flex-col relative mt-4 bg-slate-600 rounded-md p-5 overflow-x-auto">

                            <div className="w-full h-[10rem] flex flex-col flex-shrink-0 border-b-2 " >
                                <div className="flex flex-col justify-center items-center h-5/6">
                                    <p className="opacity-80" >Total Spending</p>
                                    <div className="text-2xl font-bold" >Rs. {balance}</div>
                                </div>
                                <div className="flex justify-end p-2">
                                    <div className="lg:cursor-pointer border px-4 py-2 rounded-xl" onClick={() => setForum(!forum)} >Add</div>
                                </div>
                            </div>

                            {
                                forum && (
                                    <div className="w-full h-full absolute top-0 left-0" >

                                    </div>
                                )
                            }

                            {/* Dummy data */}
                            {
                                SpensingData.map((items, index) => {
                                    return (
                                        <div key={index} className="flex justify-between items-center bg-white text-black font-semibold h-20 flex-shrink-0 px-4 mt-3 rounded-lg" >
                                            <div>{items.category}</div>
                                            <div>Date</div>
                                            <div>{items.amount}</div>
                                        </div>
                                    )
                                })
                            }


                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home