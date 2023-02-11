import { type NextPage } from "next";
import Head from "next/head";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { api } from "../utils/api";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { useEffect } from "react";
import { JournalLog } from "../lib/components/JournalLog";
import { NavBar } from "../lib/components/NavBar";

const Home: NextPage = () => {
  const user = useUser();
  const supabaseClient = useSupabaseClient();

  if (!user) {
    return (
      <Auth
        view="magic_link"
        magicLink
        redirectTo="http://localhost:3000/"
        appearance={{ theme: ThemeSupa }}
        supabaseClient={supabaseClient}
      />
    );
  }

  const allLogs = api.journal.getAllLogs.useQuery();
  const userInfo = api.user.me.useQuery();

  return (
    <>
      <Head>
        <title>{new Date().toISOString()} - Journal</title>
      </Head>

      <NavBar />

      <main className="m-4 flex min-h-screen flex-col bg-white text-black">
        {/* {JSON.stringify(userInfo, null, 2)} */}

        {allLogs?.data?.map((log) => (
          <JournalLog log={log}></JournalLog>
        ))}
      </main>
    </>
  );
};

export default Home;
