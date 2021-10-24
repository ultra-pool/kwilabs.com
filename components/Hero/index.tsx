import React from "react";
import {HeroBackgroundVariant} from "./heroBackgroundVariant";
import {HeroProps} from "./heroProps";
import {HeroBadge} from "./heroBadge";
import {HeroSubText} from "./heroSubText";
import {HeroTitle} from "./heroTitle";
import {HeroActions} from "./heroActions";

export default function Hero(props?: HeroProps) {
    const backgroundClasses = props.background == HeroBackgroundVariant.Home ? "to-white from-gray-50" : 'to-gray-100 from-gray-50';

    const textBundle = (
        <>
            <HeroBadge text={props.badgeText}/>
            <HeroTitle title={props.title}/>
            <HeroSubText subText={props.subText}/>
            <HeroActions actions={props.actions}/>
        </>
    );

    return (
        <section className={`w-full bg-gradient-to-b ${backgroundClasses}`}>
            <div className="flex container mx-auto py-32 lg:py-16 items-center px-4 2xl:px-0">
                <div className="flex flex-col items-center md:items-baseline space-y-8 flex-1">
                    {textBundle}
                </div>
                {!!props.image ? (
                    <div className="hidden flex-1 md:flex items-center">
                        <img src={props.image.src} alt={props.image.alt}/>
                    </div>
                ) : ''}
            </div>
        </section>
    );
}
