import React from "react";

export function HeroSubText(props: { subText: string | string[] }) {
    if (!props.subText) {
        return <></>;
    }

    if (Array.isArray(props.subText)) {
        return (
            <>
                {props.subText.map(text => (
                    <p className="text-lg text-center md:text-left">
                        {text}
                    </p>
                ))}
            </>
        );
    }

    return (
        <p className="text-lg text-center md:text-left">
            {props.subText}
        </p>
    );
}
