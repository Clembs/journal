import { type NextPage } from "next";
import { api } from "../utils/api";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { CreateSheet } from "../lib/components/CreateSheet";

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

  return (
    <>
      <div className="flex-1">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
        voluptate eum fugit in eligendi ipsa distinctio unde, nemo deleniti
        ipsum. Enim, blanditiis culpa impedit sit possimus dolorem maiores harum
        debitis?
        {/* {JSON.stringify(userInfo, null, 2)} */}
        {/* {allLogs?.data?.map((log) => (
          <JournalLog log={log}></JournalLog>
        ))} */}
      </div>
      <CreateSheet user={user} />
    </>
  );
};

export default Home;
