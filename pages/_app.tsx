import { type AppType } from "next/app";
import Layout from "./layout";
import "@/styles/globals.css";

const App: AppType = ({ Component, pageProps }) => {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default App;