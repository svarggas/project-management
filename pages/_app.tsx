import { type AppType } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Layout from "./layout";
import { ReduxProvider } from "~/redux/provider";

const App: AppType = ({ Component, pageProps }) => {
    return (
        <ClerkProvider {...pageProps}>
            <ReduxProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ReduxProvider>
        </ClerkProvider>
    );
}

export default App;