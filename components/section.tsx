import React, {ReactNode} from "react";

export type SectionProps = {
    title?: string;
    text?: string | string[];
    withContainer?: boolean;
    children: ReactNode;
    className?: string;
    verticalSpacing?: boolean;
    reducedSpace?: boolean;
}

export default function Section(props: SectionProps) {
    let classList = ["flex flex-col px-4 2xl:px-0"];
    if (props.withContainer || props.withContainer === undefined) {
        classList.push("container mx-auto");
    }

    if (!!props.className) {
        classList.push(props.className);
    }

    if (props.verticalSpacing || props.verticalSpacing === undefined) {
        classList.push('space-y-12');
    }

    classList.push(props.reducedSpace ? 'py-8' : 'py-32');

    const textBundle = (
        <div>
            {!!props.title ? (
                <h2 className="text-center md:text-left text-2xl md:text-3xl lg:text-4xl font-semibold md:font-medium">{props.title}</h2>
            ) : ''}

            {!!props.text ? (
                <h2 className="text-center md:text-left mt-4">{props.text}</h2>
            ) : ''}
        </div>
    )

    return (
        <section className={classList.join(' ')}>
            {(!!props.text || !!props.title) ? textBundle : ''}
            {props.children}
        </section>
    )
}
