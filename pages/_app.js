import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>GraphQL & Next.js Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
