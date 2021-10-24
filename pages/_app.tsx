import 'tailwindcss/tailwind.css';
import '../assets/newsletter.css';
import {ToastContextProvider} from "../components/toast/context";

function MyApp({Component, pageProps}) {
    return (
        <ToastContextProvider>
            <Component {...pageProps} />
        </ToastContextProvider>
    )
}

export default MyApp
