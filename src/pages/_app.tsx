import '../../styles/globals.css'
import type {AppProps} from 'next/app'
import Head from "next/head";
import {ThemeProvider} from "@mui/material";
import {theme} from "../utils/theme";
import store from "../state/store";
import {Provider} from "react-redux";
import {Header} from "../component/common/header";
import {Main} from "../component/common/main";

function MyApp({Component, pageProps}: AppProps) {
    return (<>
        <Head>
            <title>My page</title>
            <meta name="viewport" content="initial-scale=1, width=device-width"/>
        </Head>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Header/>
                <Main>
                    <Component {...pageProps} />
                </Main>
            </ThemeProvider>
        </Provider>
    </>)
}

export default MyApp
