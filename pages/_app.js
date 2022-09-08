import "../styles/globals.css"
import { MoralisProvider } from "react-moralis"
import { NotificationProvider } from "web3uikit"
import Header from "../components/Header"
function MyApp({ Component, pageProps }) {
    const APP_ID = process.env.NEXT_PUBLIC_MORALIS_APP_ID
    const MORALIS_SERVER = process.env.NEXT_PUBLIC_MORALIS_SERVER
    return (
        //The intializeOnMount is to hoo up to a server and have other funtions, but it is not needed
        <MoralisProvider
            appId={APP_ID}
            serverUrl={MORALIS_SERVER}
        >
            <NotificationProvider>
                <Header />
                <Component {...pageProps} />
            </NotificationProvider>
        </MoralisProvider>
    )
}

export default MyApp
