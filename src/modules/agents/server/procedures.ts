import { db } from "@/db";
import { agents } from "@/db/schema";
import { createTRPCRouter, baseProcedure } from "@/trpc/init";
// import { TRPCError } from "@trpc/server";

export const agentsRouter = createTRPCRouter({
  getAgents: baseProcedure.query(async ({ ctx }) => {
    const data = await db
    .select()
    .from(agents);
  //   throw new TRPCError({
  //     code: "INTERNAL_SERVER_ERROR",});
  //   return data;
  }),   
})