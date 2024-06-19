import React, { useState } from 'react'
import Sidebar from '../../../components/Sidebar'
import { Link, useNavigate } from 'react-router-dom';
import Logo from "../../../assets/logos.jpeg";

export const FormAddPermission = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [errorUsername, setErrorUsername] = useState("");
    const [errorPassword, setErrorPassword] = useState("");



    return (
        <Sidebar>
            <section className="bg-gray-50 flex w-full dark:bg-gray-900">
                <div className="flex flex-col items-center mt-20 px-6 w-[500px] mx-auto md:h-screen lg:py-0">

                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 sm:p-8">
                            <h1 className="text-[30px] text-center mt-5 mb-10 font-bold  text-gray-900 dark:text-white">
                                ເພີ່ມແອັດມິນ
                            </h1>
                            <form className=""
                            //   onSubmit={handleSubmit}
                            >
                                <div>
                                    <label className="block mb-1 text-lg font-medium text-gray-900 dark:text-white">Username</label>
                                    <input type="text" name="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg 
                block w-full p-2.5 dark:bg-gray-700 mb-[2px] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </div>
                                {errorUsername !== "" ? (
                                    <div className="flex text-red-700 text-sm"> {errorUsername} </div>
                                ) : (
                                    ""
                                )}

                                <div className=" mt-2">
                                    <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" name="password" placeholder="••••••••"
                                        className="bg-gray-50 border mb-[2px] border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

                                        onChange={(e) => setPassword(e.target.value)}
                                        value={password} />
                                </div>
                                {errorPassword !== "" ? (
                                    <div className="flex text-red-700 text-sm"> {errorPassword} </div>
                                ) : (
                                    ""
                                )}

                                <div className=" mt-2">
                                    <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <select className="bg-gray-50 border mb-[2px] border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 cursor-pointer dark:focus:border-blue-500">
                                        <option value="">- ເລືອກສິດການເຂົ້າເຖິງ -</option>
                                        <option value="user">User</option>
                                        <option value="admin">Admin</option>
                                    </select>
                                </div>

                                <button type="submit" className="w-full mt-5 mb-3 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                    {loading ? "ກຳລັງລ໋ອກອິນ" : "ລ໋ອກອິນ"}
                                </button>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </Sidebar>
    )
}
