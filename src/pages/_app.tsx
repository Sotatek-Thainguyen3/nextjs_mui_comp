import '../../styles/globals.css'
import type {AppProps} from 'next/app'
import Head from "next/head";
import {ThemeProvider} from "@mui/material";
import {theme} from "src/utils/theme";
import {wrapper} from "src/state/store";
import {Provider} from "react-redux";
import {BaseLayout} from "../component/common/BaseLayout";

function MyApp({Component, pageProps}: AppProps) {
    const {store, props} = wrapper.useWrappedStore(pageProps);
    return (<>
        <Head>
            <title>My page</title>
            <meta name="viewport" content="initial-scale=1, width=device-width"/>
        </Head>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <BaseLayout>
                    <Component {...pageProps} />
                </BaseLayout>
            </ThemeProvider>
        </Provider>
    </>)
}

export default MyApp;
