import { User, useUser } from "@supabase/auth-helpers-react";
import { useState } from "react";
import { api } from "../../utils/api";
import { Activity } from "@prisma/client";

export function ActivityButton({ activity }: { activity: Activity }) {
  return (
    <div className={"flex flex-col items-center"}>
      <span className={`block h-10 w-10 rounded-full bg-red-500`} />
      <span className="">{activity.label}</span>
    </div>
  );
}

export function CreateSheet({ user }: { user: User }) {
  const [isExpanded, setExpanded] = useState(false);
  const activities = api.user.activities.useQuery();

  return (
    <>
      <div
        className={`fixed top-0 left-0 h-full w-full bg-black bg-opacity-50 ${
          isExpanded ? "" : "hidden"
        }`}
      />
      <div
        className={`z-10 flex w-full flex-col items-center gap-4 rounded-t-xl p-2 px-5 shadow-[0_-5px_10px_0px_rgba(0,0,0,0.1)]`}
      >
        <span className="block h-1 w-12 rounded-full bg-gray-400"></span>
        <div className="w-full">
          <h1 className="text-2xl font-semibold">Add Activity</h1>
          <p className="text-gray-500">
            {new Date().getHours()}:00 - {new Date().getHours() + 1}:00
          </p>
        </div>

        <div className={"flex w-full justify-between"}>
          {activities.data?.map((activity) => (
            <>
              <ActivityButton activity={activity} />
              <ActivityButton activity={activity} />
              <ActivityButton activity={activity} />
              <ActivityButton activity={activity} />
              <ActivityButton
                activity={{
                  label: "More",
                  color: 0,
                  id: "",
                  userId: activity.id,
                }}
              />
            </>
          ))}
        </div>
      </div>
    </>
  );
}
