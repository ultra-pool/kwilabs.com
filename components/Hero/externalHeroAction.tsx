import React from "react";
import {HeroActionProps, HeroActionVariant, OutlineHeroActionClasses, SolidHeroActionClasses} from "./heroActions";

export function ExternalHeroAction(props: HeroActionProps) {
    return <a href={props.href}
              target="_blank"
              className={props.variant == HeroActionVariant.Solid ? SolidHeroActionClasses : OutlineHeroActionClasses}>
        {!!props.icon ? (<props.icon className={"inline-block"}/>) : ''}
        <span className="ml-2">{props.label}</span>
    </a>;
}
