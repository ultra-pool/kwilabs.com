import React from "react";

export function HeroBadge(props: { text?: string }) {
    if (!props.text) {
        return <></>;
    }

    return (
        <span className="rounded-full bg-red-600 text-white px-3 py-1 text-base font-light">
            {props.text}
        </span>
    );
}
