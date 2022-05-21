import Head from "next/head";
import '../styles/globals.scss';
function MinmaxApp({Component, pageProps}){
    return(
        <>
            <Head>
                <title>index</title>
            </Head>
            <Component {...pageProps} />
        </>
    )
}
export default MinmaxApp
