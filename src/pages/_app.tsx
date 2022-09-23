import '../styles/globals.css'
import type {AppProps} from 'next/app'
import Head from "next/head";
import {ThemeProvider} from "@mui/material";

function MyApp({Component, pageProps}: AppProps) {
    return (<>
        <Head>
            <title>My page</title>
            <meta name="viewport" content="initial-scale=1, width=device-width"/>
        </Head>
        {/*<Provider store={store}>*/}
        {/*    <ThemeProvider theme={theme}>*/}
                <Component {...pageProps} />
            {/*</ThemeProvider>*/}
        {/*</Provider>*/}
       </>)
}

export default MyApp
