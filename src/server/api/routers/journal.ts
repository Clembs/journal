import { createTRPCRouter, publicProcedure } from "../trpc";
import { z } from "zod";
import { Mood } from "@prisma/client";

export const journalRoutes = createTRPCRouter({
  createLog: publicProcedure
    .input(
      z.object({
        mood: z.nativeEnum(Mood),
        activityId: z.string(),
      })
    )
    .query(({ ctx, input }) => {
      if (!ctx.user) return null;

      return ctx.prisma.journalLog.create({
        data: {
          ...input,
          userId: ctx.user.id,
        },
      });
    }),
  getAllLogs: publicProcedure.query(({ ctx }) => {
    if (!ctx.user) return [];

    return (
      ctx.prisma.journalLog.findMany({
        where: { id: ctx.user.id },
      }) ?? []
    );
  }),
});
