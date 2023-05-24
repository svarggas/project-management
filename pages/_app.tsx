import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Layout from "./layout";

export default function App({ Component, pageProps }: any) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}