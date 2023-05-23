import Layout from "./layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: any) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}