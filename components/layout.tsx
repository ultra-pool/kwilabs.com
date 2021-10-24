import Head from 'next/head';
import React, {ReactNode} from "react";
import Header from "./Header";
import {HeroProps} from "./Hero/heroProps";
import Hero from "./Hero";
import Footer from "./Footer";

export type LayoutProps = {
    head: {
        title: string;
        children?: ReactNode;
    };
    hero: HeroProps;
    children: ReactNode;
};

export function Layout(props: LayoutProps) {
    return (
        <>
            <Head>
                <title>{props.head.title}</title>
                <link rel="icon" href="/favicon.ico"/>
                <link rel='stylesheet'
                      href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'/>
                {props.head.children}
            </Head>

            <Header/>
            <Hero {...props.hero}/>

            <main>
                {props.children}
            </main>

            <Footer/>
        </>
    )
}
