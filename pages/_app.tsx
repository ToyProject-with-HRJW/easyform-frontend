import { Global } from "@emotion/react";
import { AppProps } from "next/app";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import { globalStyles } from "../src/commons/styles/globalStyles";
import Layout from "../src/components/commons/layout";
import "../public/static/fonts/style.css";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string;

  return (
    <>
      <Head>
        <script
          src="https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js"
          defer
          type="text/javascript"
        ></script>
      </Head>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <Global styles={globalStyles} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </RecoilRoot>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
