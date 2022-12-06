import type { LoaderFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { ProjectSummary, ProjectId } from "@domain/project";
import { getProjectSummary } from "@infrastructure/db/project";
import { Error404 } from "@app/components/error-404";
import { Error500 } from "@app/components/error-500";
import { ProjectView } from "@app/ui/main/project";

type LoaderData = {
  projectSummary: ProjectSummary;
};

export const loader: LoaderFunction = async ({ request, params }) => {
  const url = new URL(request.url);
  const projectId = params.projectId as ProjectId;

  invariant(params.projectId, `params.projectId is required`);

  const projectSummary = await getProjectSummary(projectId);

  if (!projectSummary) {
    throw new Response("Not Found", {
      status: 404,
    });
  }

  if (url.pathname === `/projects/${projectId}`) {
    return redirect(`/projects/${projectId}/board`);
  }

  return json<LoaderData>({ projectSummary: projectSummary });
};

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  const errorMessage = "The Project page failed. Navigate to the projects page";

  return (
    <div className="flex h-full items-center justify-center">
      <Error500 message={errorMessage} href="/projects" />
    </div>
  );
}

export function CatchBoundary() {
  const errorMessage = "Project not found. Navigate to the projects page";
  return (
    <div className="flex h-full items-center justify-center">
      <Error404 message={errorMessage} href="/projects" />
    </div>
  );
}

export default function ProjectRoute() {
  const { projectSummary } = useLoaderData() as LoaderData;
  const { name, description } = projectSummary;
  return <ProjectView name={name} description={description} />;
}