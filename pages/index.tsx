import React from 'react';
import {FaBolt, FaDatabase, FaGithub, FaImages, FaKey, FaPlus, FaUserLock} from 'react-icons/fa';
import {HeroBackgroundVariant} from "../components/Hero/heroBackgroundVariant";
import {HeroActionVariant} from "../components/Hero/heroActions";
import Section from "../components/section";
import {CommunityCTA, CTA, ThinCTA} from "../components/cta";
import {Layout} from "../components/layout";
import {IconType} from "react-icons";
import Link from 'next/link';

type ModuleListItem = {
    icon: IconType;
    title: string;
    description: string;
};

export default function Home() {
    const modules: ModuleListItem[] = [
        {
            icon: FaUserLock,
            title: 'Authentication',
            description: 'Take advantage of pre-built authentication mechanisms.'
        },
        {
            icon: FaBolt,
            title: 'Authorization',
            description: 'Centralized access control for any kwilabs module.'
        },
        {
            icon: FaDatabase,
            title: 'Document Store',
            description: 'Store, query and search your documents. All with i18n support.'
        },
        {
            icon: FaKey,
            title: 'Key-Value Store',
            description: 'Whether it\'s cache or page constants, we cover it.'
        },
        {
            icon: FaImages,
            title: 'Digital Asset Management',
            description: 'Manage your media library and apply transformations on the fly.'
        },
    ];

    return (
        <Layout
            head={{
                title: 'kwilabs - Modular Backend Service for Web and Mobile Developers'
            }}
            hero={{
                title: (
                    <>
                        <span className="font-bold">Modular Backend Service</span> for Web and Mobile <span
                        className="font-bold">Developers</span>
                    </>
                ),
                subText: 'Keep your time to your product.',
                badgeText: 'Launching beta soon!',
                background: HeroBackgroundVariant.Home,
                image: {
                    src: '/hero-bg.png',
                    alt: 'kwilabs connecting with modules'
                },
                actions: [
                    {
                        variant: HeroActionVariant.Solid,
                        href: '/newsletter',
                        label: 'Get Updates'
                    },
                    {
                        variant: HeroActionVariant.Outline,
                        href: 'https://github.com/kwilabs/kwilabs',
                        icon: FaGithub,
                        external: true,
                        label: 'GitHub'
                    }
                ]
            }}>
            <Section title='3 steps for an end-to-end backend service for your app'
                     text='Get a full backend service for all your needs in 3 simple steps.'>

                <div
                    className="flex flex-col md:flex-row md:justify-evenly md:space-x-6 space-y-6 md:space-y-0">
                    <div className="border rounded-md p-4 md:flex md:flex-col md:items-baseline">
                        <span className="font-medium rounded-full bg-red-600 text-white px-3">Step #1</span>
                        <h3 className="mt-3 text-2xl font-medium">
                            Deploy
                        </h3>
                        <p className="mt-3 md:flex md:flex-1 md:place-items-end">
                            Use our pre-built templates to deploy kwilabs with Docker, Kubernetes, or on bare-metal with
                            Ansible.
                        </p>
                    </div>

                    <div className="border rounded-md p-4 md:flex md:flex-col md:items-baseline">
                        <span className="font-medium rounded-full bg-red-600 text-white px-3">Step #2</span>
                        <h3 className="mt-3 text-2xl font-medium">
                            Configure
                        </h3>
                        <p className="mt-3 md:flex md:flex-1 md:place-items-end">
                            Configure kwilabs through a simple first-time configuration wizard with
                            sensible defaults.
                        </p>
                    </div>

                    <div className="border rounded-md p-4 md:flex md:flex-col md:items-baseline">
                        <span className="font-medium rounded-full bg-red-600 text-white px-3">Step #3</span>
                        <h3 className="mt-3 text-2xl font-medium">
                            Kickstart Your Product
                        </h3>
                        <p className="mt-3 md:flex md:flex-1 md:place-items-end">
                            Start using kwilabs through well-defined and well-documented API and bring your product into
                            life.
                        </p>
                    </div>
                </div>
            </Section>

            <ThinCTA
                title='Be first to hear when managed instances are available'
                buttonLabel='Subscribe for Updates'/>

            <Section
                title='Strong, Secure and Flexible'
                text='Add, remove and scale any service you need at anytime.'>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">

                    {modules.map((module, index) => (
                        <div key={`feature-card-${index}`} className="p-4 space-y-4 text-center md:text-left h-full">
                            <div className="inline-block bg-red-200 text-red-600 p-2 rounded-md">
                                <module.icon size={32}/>
                            </div>
                            <h3 className="text-2xl font-semibold">{module.title}</h3>
                            <p>{module.description}</p>
                        </div>
                    ))}

                    <div className="rounded-md  p-4 space-y-4">
                        <div className="inline-block bg-red-200 text-red-600 p-2 rounded-md">
                            <FaPlus size={32}/>
                        </div>
                        <h3 className="text-2xl font-semibold">More to come</h3>
                        <p>Subscribe to newsletter and be first to hear when we release a new module.</p>
                        <Link href='/newsletter'>
                            <a
                                className="block transition-all border-red-600 border-2 bg-red-600 hover:bg-red-500 text-white rounded-full px-4 py-2 text-center">
                                Get Updates
                            </a>
                        </Link>
                    </div>

                    {Array.from(Array(4 - (modules.length + 1) % 4).keys()).map((_, index) => (
                        <div key={`feature-card-placeholder-${index}`} className="rounded-md p-4 space-y-4 hidden lg:block">
                            <div className="bg-gray-100 rounded-md p-1 inline-block w-12 h-12">&nbsp;</div>
                            <div className="bg-gray-100 rounded-md p-1 text-2xl">&nbsp;</div>
                            <div className="bg-gray-100 rounded-md">&nbsp;<br/>&nbsp;</div>
                        </div>
                    ))}

                </div>
            </Section>

            <Section withContainer={false}>
                <div className="flex flex-col md:flex-row md:container md:mx-auto">
                    <div className="flex-grow flex flex-col justify-center">
                        <h2 className="text-2xl md:text-4xl text-center md:text-left font-semibold">It's fun to drop the
                            redundancy.</h2>
                        <p className="mt-8 text-lg md:text-xl font-light">Have your time for yourself, and your mental
                            health. Use
                            kwilabs' low effort backend service.</p>
                        <p className="mt-2 text-lg md:text-xl font-light">
                            Checkout how we develop <a className="font-bold"
                                                       target='_blank'
                                                       href="https://kwidoo.app">kwidoo.app</a> with kwilabs on <a
                            className="font-bold"
                            target='_blank'
                            href="https://github.com/kwilabs/kwidoo">GitHub</a>.
                        </p>
                    </div>
                    <img src='/hamster.jpg' alt='Cute Hamster' className="mt-8 md:mt-0 md:w-4/12"/>
                </div>
            </Section>

            <CommunityCTA/>
            <CTA/>
        </Layout>
    )
}
