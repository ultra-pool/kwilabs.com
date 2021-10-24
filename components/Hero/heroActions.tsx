import {ExternalHeroAction} from "./externalHeroAction";
import React from "react";
import {HeroAction} from "./heroAction";
import {IconType} from "react-icons";

export enum HeroActionVariant {
    Solid,
    Outline
}

export const SolidHeroActionClasses = 'transition-all bg-red-600 hover:bg-red-500 text-white rounded-full px-8 py-4 flex items-center';
export const OutlineHeroActionClasses = 'flex items-center transition-all border-red-600 border-2 text-red-600 hover:bg-red-500 hover:border-red-500 hover:text-white rounded-full px-8 py-4';

export type HeroActionProps = {
    href: string;
    label: string;
    external?: boolean;
    icon?: IconType;
    variant?: HeroActionVariant;
};

export function HeroActions(props: { actions: HeroActionProps[] }) {
    if (!props.actions) {
        return <></>;
    }

    return <div className="flex space-x-4">
        {props.actions.map((action, index) => {
            if (action.external) {
                return <ExternalHeroAction key={`hero-action-${index}`} {...action}/>;
            }

            return <HeroAction key={`hero-action-${index}`} {...action}/>
        })}
    </div>;
}
