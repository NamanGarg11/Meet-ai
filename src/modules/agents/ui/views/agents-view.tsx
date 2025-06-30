"use client";

import { LoadingState } from "@/components/loading-state";
import { ErrorState } from "@/components/errorState";
import { useTRPC } from "@/trpc/client";
import { useQuery, useSuspenseQueries, useSuspenseQuery } from "@tanstack/react-query";
const AgentView = () => {
  const trpc = useTRPC();
  const {data, isLoading, isError} = useSuspenseQuery(trpc.agents.getAgents.queryOptions());
 if( isLoading) {
    return <LoadingState 
    title="Loading Agents..."
    description="Please wait while we fetch the agents."
    />

  }

  if (isError) {
    return <ErrorState
      title="Error Loading Agents"
      description="There was an error loading the agents. Please try again later."
    />
  }

  return (
    <div>

      {JSON.stringify(data, null, 2)}
      <h1>Agents</h1>
    </div>
  )
}

export default AgentView;