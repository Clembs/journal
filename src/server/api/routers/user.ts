import { createTRPCRouter, publicProcedure } from "../trpc";
import { z } from "zod";
import { Mood } from "@prisma/client";

export const userRoutes = createTRPCRouter({
  me: publicProcedure.query(({ ctx }) => {
    if (!ctx.user) return null;

    return ctx.prisma.user.findFirst({
      where: { id: ctx.user.id },
    });
  }),
});
