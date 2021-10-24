import React from "react";

export function HeroTitle(props: { title: string | React.ReactNode }) {
    return <h1 className="text-5xl font-medium leading-tight">
        {props.title}
    </h1>;
}
