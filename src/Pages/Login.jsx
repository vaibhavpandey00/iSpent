import React, { useState, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";

const SocialLoginButton = () => (
    <Fragment>
        <button className="bg-red-500 text-white py-3 px-6 rounded w-full flex items-center justify-center mt-4">
            <FontAwesomeIcon icon={faGoogle} className=" mr-2 text-white" />
            <span className="text-center">Continue with Google</span>
        </button>
        <button className="bg-blue-600 text-white py-3 px-6 rounded w-full flex items-center justify-center mt-4">
            <FontAwesomeIcon icon={faFacebook} className=" mr-2 text-white" />
            <span className="text-center">Continue with Facebook</span>
        </button>
    </Fragment>
);

const SignInForm = () => {
    const [validated, setValidated] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <>
            <div className=" bg-white dark:bg-slate-800">
                <div className="p-4">
                    <h2 className="text-3xl leading-none font-bold">
                        {isLogin ? 'Log In' : 'Sign Up'}
                    </h2>
                </div>
            </div>
            <form noValidate validated={validated} onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block mt-3 mb-2 font-normal" htmlFor="email">
                        Email Address
                    </label>
                    <input
                        type="text"
                        className="w-full bg-blue-50 dark:bg-slate-700 min-h-[48px] leading-10 px-4 p-2 rounded-lg outline-none border border-transparent focus:border-blue-600"
                        id="email"
                        placeholder="Enter Email Address"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 font-normal" htmlFor="password">
                        Password
                    </label>
                    <input
                        type="password"
                        className="w-full bg-blue-50 dark:bg-slate-700 min-h-[48px] leading-10 px-4 p-2 rounded-lg outline-none border border-transparent focus:border-blue-600 mb-3"
                        id="password"
                        placeholder="Enter Password"
                    />
                    {!isLogin && (
                        <>
                            <label className="block mb-2 font-normal" htmlFor="email">
                                Confirm Password
                            </label>
                            <input
                                type="text"
                                className="w-full bg-blue-50 dark:bg-slate-700 min-h-[48px] leading-10 px-4 p-2 rounded-lg outline-none border border-transparent focus:border-blue-600"
                                id="pass2"
                                placeholder="Confirm Password"
                            />
                        </>
                    )}
                </div>
                <div className="mb-4">
                    {isLogin && (
                        <>
                            <input type="checkbox" className="mr-2" id="remember-me" />
                            <label className="font-normal" htmlFor="remember-me">
                                Remember me
                            </label>
                        </>
                    )}

                </div>
                <button className="bg-indigo-900 text-white py-3 px-6 rounded w-full">
                    {isLogin ? 'Log In' : 'Sign Up'}
                </button>
                <button className="hover:text-blue-600 font-medium py-2 px-4 rounded-lg w-full mt-4">
                    Forget your password?
                </button>
                <div className="relative">
                    <hr className="my-8 border-t border-gray-300" />
                    <span className="px-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-slate-800">
                        Or
                    </span>
                </div>
                <SocialLoginButton />
                <div className="text-center flex flex-col mt-8">
                    <div className="opacity-50" >
                        {isLogin ? 'Don\'t have an account?' : 'Already have an account?'}
                    </div>

                    <button
                        className="hover:text-blue-600 font-medium text-decoration-none"
                        onClick={() => setIsLogin(!isLogin)}
                    >
                        {isLogin ? 'Sign Up' : 'Log In'}
                    </button>
                </div>
            </form>
        </>

    );
};

const SignIn1 = () => {
    return (
        <section className="ezy__signin1 light h-screen py-14 md:py-24 bg-white dark:bg-[#0b1727] text-indigo-900 dark:text-white overflow-hidden">
            <div className="container mx-auto px-4 flex items-center justify-center">
                <div className="w-full max-w-lg bg-white dark:bg-slate-800 rounded-2xl shadow-xl">
                    <div className="p-8 lg:p-10">
                        <SignInForm />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignIn1;
