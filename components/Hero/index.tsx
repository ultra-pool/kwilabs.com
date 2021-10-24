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

    if (!props.image) {
        return (
            <section className={`w-full bg-gradient-to-b ${backgroundClasses}`}>
                <div className="flex flex-col container mx-auto py-16 items-baseline space-y-8">
                    {textBundle}
                </div>
            </section>
        )
    }

    return (
        <section className={`w-full bg-gradient-to-b ${backgroundClasses}`}>
            <div className="flex container mx-auto py-16 items-center">
                <div className="flex flex-col items-baseline space-y-8 w-6/12">
                    {textBundle}
                </div>
                <div className="w-6/12 flex items-center">
                    <img src={props.image.src} alt={props.image.alt}/>
                </div>
            </div>
        </section>
    );
}
