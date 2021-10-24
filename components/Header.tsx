import Link from "next/link";
import React from "react";
import {FaGithub} from "react-icons/fa";

const headerLinkClassList = "transition-all box-content px-4 py-4 hover:bg-gray-100 rounded-sm";

export default function Header() {
    return (
        <header className="border-b border-gray-200">
            <div className="flex md:px-8 py-4 items-center md:space-x-8 md:container md:mx-auto">
                <Link href="/">
                    <a className='flex-grow md:flex-grow-0'>
                        <img className="h-16" src="/kwilabs-logo-dark.svg" alt="Dark Kwilabs Logo"/>
                    </a>
                </Link>
                <div className="md:flex md:flex-grow space-x-2 hidden">
                    <Link href="/">
                        <a className={headerLinkClassList}>Home</a>
                    </Link>
                    <a href="https://medium.com/@kwilabs" target="_blank" className={headerLinkClassList}>
                        Blog
                    </a>
                    {/*<Link href="/">*/}
                    {/*    <a className={headerLinkClassList}>Contact</a>*/}
                    {/*</Link>*/}
                </div>
                <a href="https://github.com/kwilabs"
                   target='_blank'
                   className="hidden md:flex items-center space-x-2 hover:bg-gray-100 rounded-sm px-4 py-4">
                    <FaGithub/> <span className="font-medium">GitHub</span>
                </a>
                <Link href="/newsletter">
                    <a className="transition-all bg-red-600 hover:bg-red-500 text-white rounded-full px-4 py-2 md:px-8 md:py-4 mr-2 md:mr-0">
                        Get Updates
                    </a>
                </Link>
            </div>
        </header>
    );
}
