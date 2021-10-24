import {Layout} from "../components/layout";
import {HeroBackgroundVariant} from "../components/Hero/heroBackgroundVariant";
import Section from "../components/section";
import {CTA} from "../components/cta";
import {FaClipboard} from "react-icons/fa";
import React from "react";

export default function Branding(): JSX.Element {
    const logos: string[] = [
        '/branding/kwilabs-light.svg',
        '/branding/kwilabs-neutral.svg',
        '/branding/kwilabs-dark.svg',
        '/branding/kwilabs-light-1.svg',
        '/branding/kwilabs-neutral-1.svg',
        '/branding/kwilabs-dark-1.svg',
    ];

    return (
        <Layout
            head={{
                title: 'Branding, Logos and Assets - kwilabs'
            }}
            hero={{
                title: 'Branding',
                subText: 'For media inquiries and more information, email us at hello@kwilabs.com',
                background: HeroBackgroundVariant.Page
            }}
        >
            <Section title={'Logos'} reducedSpace={true}>

                <div className='grid grid-cols-3 gap-8'>
                    {logos.map(logoSrc => (
                        <a href={logoSrc} target='_blank'>
                            <div className='bg-gray-300 rounded-md hover:shadow-md justify-center flex'>
                                <img src={logoSrc} alt={'kwilabs logo'} className='max-h-32'/>
                            </div>
                        </a>
                    ))}
                </div>

            </Section>

            <Section title={'Brand Colors'} reducedSpace={true}>

                <div className='flex justify-evenly h-64'>
                    <div className='flex flex-col items-center space-y-4 w-3/12'>
                        <div className='border rounded-md bg-kwilabs-red flex-grow w-full'>
                            &nbsp;
                        </div>

                        <div className='overflow-hidden rounded w-full flex bg-gray-100'>
                            <span className='p-2 flex-grow'>#E71D36</span>
                            <button
                                className='bg-gray-400 w-10 justify-center items-center flex p-2 text-gray-50 hover:bg-gray-300'>
                                <FaClipboard/>
                            </button>
                        </div>
                    </div>

                    <div className='flex flex-col items-center space-y-4 w-3/12'>
                        <div className='border rounded-md bg-kwilabs-gray flex-grow w-full'>
                            &nbsp;
                        </div>

                        <div className='overflow-hidden rounded w-full flex bg-gray-100'>
                            <span className='p-2 flex-grow'>#495057</span>
                            <button
                                className='bg-gray-400  w-10 justify-center items-center flex p-2 text-gray-50 hover:bg-gray-300'>
                                <FaClipboard/>
                            </button>
                        </div>
                    </div>

                    <div className='flex flex-col items-center space-y-4 w-3/12'>
                        <div className='border rounded-md bg-kwilabs-black flex-grow w-full'>
                            &nbsp;
                        </div>

                        <div className='overflow-hidden rounded w-full flex bg-gray-100'>
                            <span className='p-2 flex-grow'>#212529</span>
                            <button
                                className='bg-gray-400 w-10 justify-center items-center flex p-2 text-gray-50 hover:bg-gray-300'>
                                <FaClipboard/>
                            </button>
                        </div>
                    </div>
                </div>

            </Section>

            <Section title={'Built with kwilabs Badge'} reducedSpace={true}>
                &nbsp;
            </Section>

            <CTA/>
        </Layout>
    )
}
