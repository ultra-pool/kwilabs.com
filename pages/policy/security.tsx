import React from "react";
import {Layout} from "../../components/layout";
import Section from "../../components/section";
import {CTA} from "../../components/cta";

export default function Security() {
    return (
        <Layout
            head={{
                title: 'Security Policy - kwilabs'
            }}
            hero={{
                title: 'Security Policy',
                subText: [
                    'Sike 1',
                    'Sike 2'
                ]
            }}>

            <Section>
                Ne alakasi var?
            </Section>

            <CTA/>
        </Layout>
    );
}
