// src/pages/_app.tsx
import { httpBatchLink } from "@trpc/client/links/httpBatchLink";
import { loggerLink } from "@trpc/client/links/loggerLink";
import { withTRPC } from "@trpc/next";
import { SessionProvider } from "next-auth/react";
import superjson from "superjson";
import type { AppType } from "next/dist/shared/lib/utils";
import type { AppRouter } from "../server/router";
import { themeChange } from 'theme-change'
import { useEffect } from 'react';
import type { Session } from "next-auth";
import dynamic from 'next/dynamic'
import "../styles/globals.css";

const Header = dynamic(
  () => import('../components/Header'),
  { ssr: false }
)

//wagmi.
import { WagmiConfig, createClient, configureChains, chain } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public';
import { infuraProvider } from 'wagmi/providers/infura'
//rainbow kit UI framework.
import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import Footer from "../components/Footer";

const { chains, provider, webSocketProvider } = configureChains(
  [chain.mainnet, chain.rinkeby, chain.polygon],
  [infuraProvider({ apiKey: process.env.INFURA_API_KEY }), publicProvider()]
)

const { connectors } = getDefaultWallets({
  appName: 'Greengo',
  chains
});


const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
})

const MyApp: AppType = ({
  Component,
  pageProps: { session, ...pageProps },
}: { Component: any, pageProps: any }) => {

  useEffect(() => {
    themeChange(false)
  }, [])

  return (
    <SessionProvider session={session}>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
          <div className="bg-base-100">
            <Header />
            <Component {...pageProps} />
            <Footer />
          </div>
        </RainbowKitProvider>
      </WagmiConfig>
    </SessionProvider>
  );
};

const getBaseUrl = () => {
  if (typeof window !== "undefined") return ""; // browser should use relative url
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url
  return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
};

export default withTRPC<AppRouter>({
  config({ ctx }) {
    /**
     * If you want to use SSR, you need to use the server's full URL
     * @link https://trpc.io/docs/ssr
     */
    const url = `${getBaseUrl()}/api/trpc`;

    return {
      links: [
        loggerLink({
          enabled: (opts) =>
            process.env.NODE_ENV === "development" ||
            (opts.direction === "down" && opts.result instanceof Error),
        }),
        httpBatchLink({ url }),
      ],
      url,
      transformer: superjson,
      /**
       * @link https://react-query.tanstack.com/reference/QueryClient
       */
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },

      // To use SSR properly you need to forward the client's headers to the server
      // headers: () => {
      //   if (ctx?.req) {
      //     const headers = ctx?.req?.headers;
      //     delete headers?.connection;
      //     return {
      //       ...headers,
      //       "x-ssr": "1",
      //     };
      //   }
      //   return {};
      // }
    };
  },
  /**
   * @link https://trpc.io/docs/ssr
   */
  ssr: false,
})(MyApp);
