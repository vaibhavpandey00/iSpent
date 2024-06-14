import React, { useState } from 'react'
import { CgProfile } from "react-icons/cg";
import SpensingData from '../assets/data.js';

const Home = () => {

    const [balance,setBalance] = useState(0);

    const moneyAdded = () => {

        setBalance(balance + 100);
    }

    const moneyDebited = () => {
        setBalance(balance - 100);
    }

    return (
        <section className="h-screen py-14 bg-white dark:bg-[#0b1727] text-indigo-900 dark:text-white overflow-hidden">
            <div className="container mx-auto px-4 flex items-center justify-center">
                <div className="w-full max-w-lg bg-white dark:bg-slate-800 rounded-2xl shadow-xl">
                    <div className="Flex flex-col p-7">
                        <div className="header flex h-[5rem] justify-between items-center p-4 font-semibold bg-slate-600 rounded-md" >
                            <div className="" >iSpent</div>
                            <div>Username</div>
                            <div className="text-xl" ><CgProfile /></div>
                        </div>

                        <div className="main h-[43rem] w-full flex flex-col mt-4 bg-slate-600 rounded-md p-5 overflow-x-auto">

                            <div className="w-full h-[15rem] flex flex-col flex-shrink-0 border-b-2 " >
                                <div className="flex flex-col justify-center items-center h-3/4">
                                    <p className="opacity-80" >Balance</p>
                                    <div className="text-2xl font-bold" >Rs. {balance}</div>
                                </div>
                                <div className="flex justify-between p-7">
                                    <div className="" onClick={moneyAdded}>Add</div>
                                    <div className="" onClick={moneyDebited}>Debited</div>
                                </div>
                            </div>

                            {/* Dummy data */}
                            {
                                SpensingData.map((items, index) => {
                                    return (
                                        <div key={index} className="flex justify-between items-center p-3" >
                                            <div>{items.category}</div>
                                            <div>{items.title}</div>
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