import { type NextPage } from "next";
import Head from "next/head";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { api } from "../utils/api";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { useEffect } from "react";

const Home: NextPage = () => {
  const allLogs = api.journal.getAllLogs.useQuery();
  const user = useUser();
  const supabaseClient = useSupabaseClient();

  useEffect(() => {}, [user]);

  if (!user) {
    return (
      <Auth
        redirectTo="http://localhost:3000/"
        appearance={{ theme: ThemeSupa }}
        supabaseClient={supabaseClient}
      />
    );
  }

  return (
    <>
      <Head>
        <title>Hi {user.id}</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-black/90 text-white">
        <div className="rounded-xl">notes for {user.id}:</div>

        {allLogs?.data?.map((log) => (
          <div className="">
            ID: {log.activityId}
            <br />
            Mood: {log.mood}
          </div>
        ))}
      </main>
    </>
  );
};

export default Home;
