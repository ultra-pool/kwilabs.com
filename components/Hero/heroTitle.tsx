import React from "react";

export function HeroTitle(props: { title: string | React.ReactNode }) {
    return <h1 className="text-3xl lg:text-5xl text-center md:text-left font-medium leading-tight">
        {props.title}
    </h1>;
}
