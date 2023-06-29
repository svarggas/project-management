import Head from 'next/head';
import { type AppType } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Layout from "./layout";

const App: AppType = ({ Component, pageProps }) => {
    return (
        <ClerkProvider {...pageProps}>
            <Head>
                <link rel="shortcut icon" href="/favicon.png" />
                <title key="title">Project Management</title>
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ClerkProvider>
    );
}

export default App;