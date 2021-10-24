import {ReactNode} from "react";
import {HeroBackgroundVariant} from "./heroBackgroundVariant";
import {HeroActionProps} from "./heroActions";

export interface HeroProps {
    title: string | ReactNode;
    subText?: string | string[];
    background?: HeroBackgroundVariant;
    badgeText?: string;
    image?: {
        src: string;
        alt: string;
    };
    actions?: HeroActionProps[];
}
