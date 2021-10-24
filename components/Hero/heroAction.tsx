import Link from "next/link";
import React from "react";
import {HeroActionProps, HeroActionVariant, OutlineHeroActionClasses, SolidHeroActionClasses} from "./heroActions";

export function HeroAction(props: HeroActionProps) {
    return (
        <Link href={props.href}>
            <a className={props.variant == HeroActionVariant.Solid ? SolidHeroActionClasses : OutlineHeroActionClasses}>
                {!!props.icon ? (<props.icon className={"inline-block"}/>) : ''}
                {props.label}
            </a>
        </Link>
    );
}
