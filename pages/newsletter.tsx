import {Layout} from "../components/layout";
import Section from "../components/section";

export default function Newsletter() {
    return (
        <Layout
            head={{
                title: 'Subscribe for Updates - kwilabs'
            }}
            hero={{
                title: 'Get Updates'
            }}>

            <Section>
                <iframe
                    className='w-full newsletter-frame'
                    src="https://cdn.forms-content.sg-form.com/fe6a8439-3482-11ec-8a28-a6726f3cf46e"/>
            </Section>

        </Layout>
    )
}
