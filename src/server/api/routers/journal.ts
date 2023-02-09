import { useUser } from "@supabase/auth-helpers-react";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { z } from "zod";

export const journalRoutes = createTRPCRouter({
  getUser: publicProcedure
    .input(z.string().nullable())
    .query(({ ctx, input }) => {
      if (!input) return {};

      return (
        ctx.prisma.user.findFirst({
          where: { id: input },
        }) ?? {}
      );
    }),
  getAllLogs: publicProcedure
    .input(z.string().nullable())
    .query(({ ctx, input }) => {
      if (!input) return [];

      return (
        ctx.prisma.journalLog.findMany({
          where: { id: input },
        }) ?? []
      );
    }),
});
