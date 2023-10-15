import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";
// import Script from "next/script";

export default function FirstPost(){
    return (
        <Layout>
            <Head>
                <title>First Post Here!</title>
            </Head>
            {/* <Script
                    src="https://connect.facebook.net/en_US/sdk.js"
                    strategy="lazyOnload"
                    onLoad={() => {
                        console.log('script loaded correctly, window.fb is available')
                    }}
            /> */}
            <h1>First Post</h1>
            <h2>
                <Link href="/">Back to Home!</Link>
            </h2>
        </Layout>
    );
}