import { type AppType } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Layout from "./layout";

const App: AppType = ({ Component, pageProps }) => {
    return (
        <ClerkProvider {...pageProps}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ClerkProvider>
    );
}

export default App;