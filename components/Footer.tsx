import Link from "next/link";
import React from "react";
import {FaDiscord, FaGithub, FaMedium, FaTwitter} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="border-t">
            <div className="md:container md:mx-auto flex md:flex-row flex-col md:p-8 py-8 items-center space-y-4">
                <div className="flex flex-col mb-2 md:mb-0">
                    <Link href="/">
                        <a className='flex items-center justify-center'>
                            <img className="h-16" src="/kwilabs-logo-dark.svg" alt="Dark Kwilabs Logo"/>
                        </a>
                    </Link>
                    <span className="text-sm text-gray-800">Copyright &copy; {new Date().getFullYear()} kwilabs</span>
                </div>

                <div className="md:flex-grow flex md:flex-col text-sm text-gray-800 md:space-y-4">
                    <div
                        className="flex flex-col md:flex-row items-center justify-center md:space-x-8 space-y-2 md:space-y-0">
                        <a href="https://medium.com/@kwilabs" target="_blank">Blog</a>
                        {/*<a href="#!">Support</a>*/}
                        {/*<a href="#!">Contact</a>*/}
                        <Link href={'/branding'}>
                            <a>Logos & Assets</a>
                        </Link>
                    </div>
                    {/*<div className="flex justify-center space-x-8">*/}
                    {/*    <a href="#!">Terms & Conditions</a>*/}
                    {/*    <a href="#!">Privacy Policy</a>*/}
                    {/*    <a href="#!">Cookie Policy</a>*/}
                    {/*</div>*/}
                </div>

                <div className="flex space-x-2">
                    <a href="https://twitter.com/kwilabs"
                       className="transition-all rounded-md bg-gray-900 hover:bg-twitter text-white p-2">
                        <FaTwitter/>
                    </a>
                    <a href="https://github.com/kwilabs"
                       className="transition-all rounded-md bg-gray-900 hover:bg-github text-white p-2">
                        <FaGithub/>
                    </a>
                    <a href="https://discord.gg/8vgqd5UQVc"
                       className="transition-all rounded-md bg-gray-900 hover:bg-discord text-white p-2">
                        <FaDiscord/>
                    </a>
                    <a href="https://medium.com/@kwilabs"
                       className="transition-all rounded-md bg-gray-900 hover:bg-gray-600 text-white p-2">
                        <FaMedium/>
                    </a>
                </div>
            </div>
        </footer>
    );
}
