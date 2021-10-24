import {Layout} from "../components/layout";

export default function Newsletter() {
    return (
        <Layout
            head={{
                title: 'Subscribe for Updates - kwilabs'
            }}
            hero={{
                title: 'Get Updates'
            }}>

            <div className='py-16'>
                <iframe
                    className='w-full newsletter-frame'
                    src="https://cdn.forms-content.sg-form.com/fe6a8439-3482-11ec-8a28-a6726f3cf46e"/>
            </div>

        </Layout>
    )
}
