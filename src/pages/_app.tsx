import { type AppType } from "next/app";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import {
  SessionContextProvider,
  Session,
  useUser,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
import { useState } from "react";
import { api } from "../utils/api";
import "../styles/globals.css";
import { NavBar } from "../lib/components/NavBar";
import Head from "next/head";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";

const MyApp: AppType<{
  initialSession: Session;
}> = ({ Component, pageProps }) => {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <Head>
        <title>Journal</title>
      </Head>

      <NavBar />
      <Component {...pageProps} />
    </SessionContextProvider>
  );
};

export default api.withTRPC(MyApp);
