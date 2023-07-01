import Head from 'next/head';
import { type AppType } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Layout from "./layout";
import { ReduxProvider } from "~/redux/provider";

const App: AppType = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/favicon.png" />
                <title key="title">Project Management</title>
            </Head>
            <ClerkProvider {...pageProps}>
                <ReduxProvider>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </ReduxProvider>
            </ClerkProvider>
        </>
    );
}

export default App;