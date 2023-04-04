import { Global } from "@emotion/react";
import { AppProps } from "next/app";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import { globalStyles } from "../src/commons/styles/globalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

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
          <Component {...pageProps} />
        </RecoilRoot>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
