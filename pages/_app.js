import Head from "next/head";

import LandingLayout from "@/layouts/LandingLayout";

import "@/styles/globals.css";

import { AppWrapperContext } from "@/contexts/AppContext";

const layouts = {
  LandingLayout: LandingLayout,
};

export default function App({ Component, pageProps }) {
  const Layout = Component.layout
    ? layouts[Component.layout]
    : ({ children }) => {
        return <>{children}</>;
      };

  return (
    <>
      <AppWrapperContext>
        <Head>
          <title>
            {Component.title
              ? `${Component.title} • Elemental Bar`
              : "Elemental Bar"}
          </title>
          <meta name="description" content="Elemental Bar Web" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/assets/logo/favicon.ico" />
        </Head>

        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppWrapperContext>
    </>
  );
}
