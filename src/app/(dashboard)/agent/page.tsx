import { ErrorState } from "@/components/errorState";
import { LoadingState } from "@/components/loading-state";
import AgentView from "@/modules/agents/ui/views/agents-view"
import { getQueryClient, trpc } from "@/trpc/server"
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
// import ErrorBoundary from "next/dist/client/components/error-boundary";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";

const page = async() => {
 const queryclient = getQueryClient();
  void queryclient.prefetchQuery(trpc.agents.getAgents.queryOptions());

  return (
    <HydrationBoundary state={dehydrate(queryclient)}>
     <Suspense fallback={<LoadingState title="Loading Agents..." description="Please wait while we fetch the agents." />}>
       <ErrorBoundary fallback={<ErrorState title="Error Loading Agents" description="There was an error loading the agents. Please try again later." />}>
         <AgentView />
       </ErrorBoundary>
     </Suspense>
    </HydrationBoundary>
  )
}

export default page