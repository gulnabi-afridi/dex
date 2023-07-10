import React, { useState } from "react";
import "@/styles/globals.css";
import "@/styles/drawer.css";
import "@/styles/faq.css";
import type { AppProps } from "next/app";
import Layout from "@/layout/Layout";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <ThemeProvider defaultTheme="dark-theme">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </React.Fragment>
  );
}
