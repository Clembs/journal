import { createTRPCRouter, publicProcedure } from "../trpc";

export const userRoutes = createTRPCRouter({
  me: publicProcedure.query(({ ctx }) => {
    if (!ctx.user) return null;

    return ctx.prisma.user.findFirst({
      where: { id: ctx.user.id },
    });
  }),
  activities: publicProcedure.query(({ ctx }) => {
    if (!ctx.user) return null;

    return ctx.prisma.activity.findMany({
      where: { userId: ctx.user.id },
    });
  }),
});
