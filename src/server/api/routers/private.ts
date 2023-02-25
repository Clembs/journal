import { z } from "zod";
import { createTRPCRouter, privateProcedure } from "../trpc";

export const privateRoutes = createTRPCRouter({
  users: privateProcedure
    .input(
      z.object({
        id: z.string(),
        username: z.string().max(25).min(3),
        avatarHash: z.string().optional(),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.user.create({
        data: {
          id: input.id,
          username: input.username,
        },
      });
    }),
});
