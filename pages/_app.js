import Head from "next/head";

import { useEffect } from "react";

import LandingLayout from "@/layouts/LandingLayout";

import "@/styles/globals.css";

import { AppWrapperContext } from "@/contexts/AppContext";

import { useRouter } from "next/router";

const layouts = {
  LandingLayout: LandingLayout,
};

export default function App({ Component, pageProps }) {
  const router = useRouter();
  
  const Layout = Component.layout
    ? layouts[Component.layout]
    : ({ children }) => {
        return <>{children}</>;
      };

  const backgroundImgURL = (path) => {
    if (path == "/") {
      return "/assets/pattern/pattern-1.svg";
    } else if (path == "/story") {
      return "/assets/pattern/pattern-2.svg";
    } else if (path == "/events") {
      return "/assets/pattern/pattern-3.svg";
    } else {
      return "/assets/pattern/pattern-1.svg";
    }
  };

  useEffect(() => {
    document.body.style.backgroundImage = `url(${backgroundImgURL(
      router.pathname
    )})`;
  }, [router.pathname]);

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
