import React from "react";
import Section from "./section";
import {FaDiscord, FaGithub, FaTwitter} from "react-icons/fa";
import Link from "next/link";

export function CTA() {
    return (
        <Section withContainer={false} className="shadow-inner bg-gradient-to-tr text-white from-red-600 to-red-500">
            <div className="container mx-auto flex flex-col items-center space-y-8">
                <h2 className="text-3xl font-semibold">Stay up-to-date with latest news and announcements</h2>

                <Link href='/newsletter'>
                    <a
                        className="block transition-all hover:shadow-xl bg-white text-red-600 font-medium text-xl rounded-full py-3 px-4">
                        Subscribe for Updates
                    </a>
                </Link>
            </div>
        </Section>
    );
}

export type ThinCTAProps = {
    title: string;
    buttonLabel: string;
};

export function ThinCTA(props: ThinCTAProps) {
    return (
        <div className="w-full bg-gradient-to-tr text-white from-red-600 to-red-500">
            <div className="flex w-8/12 mx-auto p-8 items-center">
                <span className="flex-grow text-lg">{props.title}</span>
                <Link href='/newsletter'>
                    <a
                        className="block transition-all hover:shadow-xl bg-white text-red-600 text-lg rounded-full py-3 px-4">
                        {props.buttonLabel}
                    </a>
                </Link>
            </div>
        </div>
    );
}

export function CommunityCTA() {
    return (
        <Section className="bg-f9gray" withContainer={false}>
            <div className="container mx-auto flex flex-col space-y-12">
                <h2 className="text-4xl font-medium">Join the Community</h2>

                <div className="w-8/12 mx-auto">
                    <div className="grid grid-cols-3">
                        <a href="https://twitter.com/kwilabs" target="_blank"
                           className="group transition-all flex flex-col rounded-md p-8 justify-center items-center space-y-4">
                            <FaTwitter size={64} className="group-hover:text-twitter transition-colors"/>

                            <p className="font-medium text-xl">
                                <span>twitter.com/</span><span className="text-red-600">kwilabs</span>
                            </p>
                        </a>

                        <a href="https://github.com/kwilabs" target="_blank"
                           className="group transition-all flex flex-col rounded-md p-8 justify-center items-center space-y-4">
                            <FaGithub size={64} className="group-hover:text-github transition-colors"/>

                            <p className="font-medium text-xl">
                                <span>github.com/</span><span className="text-red-600">kwilabs</span>
                            </p>
                        </a>

                        <a href="https://discord.gg/8vgqd5UQVc" target="_blank"
                           className="group transition-all flex flex-col rounded-md p-8 justify-center items-center  space-y-4">
                            <FaDiscord size={64} className="group-hover:text-discord transition-colors"/>

                            <p className="font-medium text-xl">
                                <span>discord.com/</span><span className="text-red-600">kwilabs</span>
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </Section>
    );
}
