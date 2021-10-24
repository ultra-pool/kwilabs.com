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
    let classList = ["flex flex-col"];
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

    return (
        <section className={classList.join(' ')}>
            {(!!props.text || !!props.title) ? (
                <div>
                    {!!props.title ? (
                        <h2 className="text-4xl font-medium">{props.title}</h2>
                    ) : ''}

                    {!!props.text ? (
                        <h2 className="mt-4">{props.text}</h2>
                    ) : ''}
                </div>
            ) : ''}

            {props.children}
        </section>
    )
}
