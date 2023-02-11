import { api } from "../../utils/api";

export function NavBar(props: any) {
  const user = api.user.me.useQuery();
  const initials = user.data?.username
    ?.split(" ")
    ?.map((a) => a?.[0])
    ?.join("");

  return (
    <div className="sticky top-0 left-0 m-4 flex items-center justify-between rounded-full bg-slate-200 p-2">
      <div className="h-8 w-8">=</div>

      <div className="text-lg">Journal</div>

      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-xl text-white ">
        {user.data?.avatarHash ? (
          <img
            src={`https://vkgfqtaafmheozpwdfbb.supabase.co/storage/v1/object/public/avatars/${user.data.avatarHash}.png`}
            alt={`${user.data.username}'s avatar`}
          />
        ) : (
          initials
        )}
      </div>
    </div>
  );
}
