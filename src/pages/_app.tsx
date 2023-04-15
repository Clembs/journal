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
      <div className={`flex min-h-screen flex-col`}>
        <main className={`flex h-full flex-1 flex-col`}>
          <Component {...pageProps} />
        </main>
        <NavBar />
      </div>
    </SessionContextProvider>
  );
};

export default api.withTRPC(MyApp);
