import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body
        className="bg-grey min-h-screen"
        style={{ backgroundImage: "url(/assets/pattern/pattern-1.svg)" }}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
