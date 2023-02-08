import { useUser } from "@supabase/auth-helpers-react";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const journalRoutes = createTRPCRouter({
  getAllLogs: publicProcedure.query(({ ctx }) => {
    const user = useUser();

    if (!user) return [];

    return ctx.prisma.journalLog.findMany({
      where: { id: user.id },
    }) ?? [];
  }),
});
