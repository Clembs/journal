import { type NextPage } from "next";
import { api } from "../utils/api";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";

const Home: NextPage = () => {
  const soup = useSupabaseClient();
  const user = useUser();

  if (!user) {
    return (
      <Auth
        view="magic_link"
        magicLink
        redirectTo="http://localhost:3000/"
        appearance={{ theme: ThemeSupa }}
        supabaseClient={soup}
      />
    );
  }

  const allLogs = api.journal.getAllLogs.useQuery();

  return (
    <>
      <main className="flex min-h-screen flex-col bg-white text-black">
        {/* {JSON.stringify(userInfo, null, 2)} */}

        {/* {allLogs?.data?.map((log) => (
          <JournalLog log={log}></JournalLog>
        ))} */}
      </main>
    </>
  );
};

export default Home;
